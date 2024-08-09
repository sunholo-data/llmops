import os
try:
    import pg8000
    import sqlalchemy
    from sqlalchemy.exc import DatabaseError, ProgrammingError
    from langchain_google_alloydb_pg import AlloyDBEngine
except ImportError:
    AlloyDBEngine = None
    pass

from .database import get_vector_size
from ..custom_logging import log
from ..utils import ConfigManager

class AlloyDBClient:
    """
    A class to manage interactions with an AlloyDB instance.

    Example Usage:

    ```python
    client = AlloyDBClient(
        project_id="your-project-id",
        region="your-region",
        cluster_name="your-cluster-name",
        instance_name="your-instance-name",
        user="your-db-user",
        password="your-db-password"
    )

    # Create a database
    client.execute_sql("CREATE DATABASE my_database")

    # Execute other SQL statements
    client.execute_sql("CREATE TABLE my_table (id INT, name VARCHAR(50))")
    ```
    """

    def __init__(self, 
                 config:ConfigManager,
                 project_id: str=None, 
                 region: str=None, 
                 cluster_name:str=None, 
                 instance_name:str=None, 
                 user:str=None,
                 db="postgres"):
        """Initializes the AlloyDB client.
         - project_id (str): GCP project ID where the AlloyDB instance resides.
         - region (str): The region where the AlloyDB instance is located.
         - cluster_name (str): The name of the AlloyDB cluster.
         - instance_name (str): The name of the AlloyDB instance.
         - user (str): If user is None will use the default service email
         - db_name (str): The name of the database.
        """
        if config is None:
            if project_id is None or region is None or cluster_name is None or instance_name is None:
                raise ValueError("Must specify config or project_id, region, cluster_name, instance_name")
        if config:
            alloydb_config = config.vacConfig("alloydb_config")
            if not alloydb_config:
                raise ValueError("Must specify vac.alloydb_config")
            self.config = alloydb_config
            project_id = alloydb_config["project_id"]
            region = alloydb_config["region"]
            cluster_name = alloydb_config["cluster"]
            instance_name = alloydb_config["instance"]

        ALLOYDB_DB = os.environ.get("ALLOYDB_DB")
        if ALLOYDB_DB is None and alloydb_config.get("database") is None:
            log.warning("Could not locate ALLOYDB_DB environment variable or 'alloydb_config.database'")
        
        self.database = alloydb_config.get("database") or ALLOYDB_DB

        if user and not user.endswith(".iam"):
            raise ValueError("If you supply an IAM user it must end with .iam e.g. 'sa-cloudbuild@multivac-deploy.iam'")
        
        self.user = user
        self.engine = self._create_engine()

    def _create_engine(self):
        if not AlloyDBEngine:
                log.error("Can't create AlloyDBEngine - install via `pip install sunholo[gcp,database]`")
                raise ValueError("Can't import AlloyDBEngine")

        log.info("Inititaing AlloyDB Langchain engine for database: {self.database}")

        from google.cloud.alloydb.connector import IPTypes
        engine = AlloyDBEngine.from_instance(
            project_id=self.config["project_id"],
            region=self.config["region"],
            cluster=self.config["cluster"],
            instance=self.config["instance"],
            user=self.user,
            database=self.database,
            ip_type=self.config.get("ip_type") or IPTypes.PRIVATE
        )

        log.info(f"Created AlloyDB engine for {engine}")

        return engine

    def execute_sql(self, sql_statement):
        """Executes a given SQL statement with error handling.

         - sql_statement (str): The SQL statement to execute.
         - Returns: The result of the execution, if any.
        """
        sql_ = sqlalchemy.text(sql_statement)
        result = None
        with self.engine.connect() as conn:
            try:
                log.info(f"Executing SQL statement: {sql_}")
                result = conn.execute(sql_)
            except DatabaseError as e:
                if "already exists" in str(e):
                    log.warning(f"Error ignored: {str(e)}. Assuming object already exists.")
                else:
                    raise  
            finally:
                conn.close()

        return result
    
    async def execute_sql_async(self, sql_statement):
        """Executes a given SQL statement asynchronously with error handling."""
        sql_ = sqlalchemy.text(sql_statement)
        result = None
        async with self.engine.connect() as conn:
            try:
                log.info(f"Executing SQL statement asynchronously: {sql_}")
                result = await conn.execute(sql_)
            except DatabaseError as e:
                if "already exists" in str(e):
                    log.warning(f"Error ignored: {str(e)}. Assuming object already exists.")
                else:
                    raise
            finally:
                await conn.close()

        return result

    async def get_sources_from_docstore_async(self, sources, vector_name, search_type="OR", just_source_name=False):
        """Fetches sources from the docstore asynchronously."""
        if just_source_name:
            query = self._list_sources_from_docstore(sources, vector_name=vector_name, search_type=search_type)
        else:
            query = self._get_sources_from_docstore(sources, vector_name=vector_name, search_type=search_type)

        if not query:
            return []

        documents = await self.execute_sql_async(query)
        return documents

    def get_sources_from_docstore(self, sources, vector_name, search_type="OR", just_source_name=False):
        """Fetches sources from the docstore."""
        if just_source_name:
            query = self._list_sources_from_docstore(sources, vector_name=vector_name, search_type=search_type)
        else:
            query = self._get_sources_from_docstore(sources, vector_name=vector_name, search_type=search_type)

        if not query:
            return []

        documents = self.execute_sql(query)

        return documents

    def _get_sources_from_docstore(self, sources, vector_name, search_type="OR"):
        """Helper function to build the SQL query for fetching sources."""
        if not sources:
            log.warning("No sources found for alloydb fetch")
            return ""

        table_name = f"{vector_name}_docstore"

        conditions = self._and_or_ilike(sources, search_type=search_type)

        query = f"""
            SELECT * 
            FROM {table_name}
            WHERE {conditions}
            ORDER BY langchain_metadata->>'objectId' ASC
            LIMIT 500;
        """

        return query

    def _list_sources_from_docstore(self, sources, vector_name, search_type="OR"):
        """Helper function to build the SQL query for listing sources."""
        table_name = f"{vector_name}_docstore"

        if sources:
            conditions = self._and_or_ilike(sources, search_type=search_type)
            query = f"""
                SELECT DISTINCT langchain_metadata->>'objectId' AS objectId
                FROM {table_name}
                WHERE {conditions}
                ORDER BY langchain_metadata->>'objectId' ASC
                LIMIT 500;
            """
        else:
            query = f"""
                SELECT DISTINCT langchain_metadata->>'objectId' AS objectId
                FROM {table_name}
                ORDER BY langchain_metadata->>'objectId' ASC
                LIMIT 500;
            """

        return query

    @staticmethod
    def _and_or_ilike(sources, search_type="OR", operator="ILIKE"):
        unique_sources = set(sources)
        # Choose the delimiter based on the search_type argument
        delimiter = ' AND ' if search_type.upper() == "AND" else ' OR '

        # Build the conditional expressions based on the chosen delimiter
        conditions = delimiter.join(f"TRIM(source) {operator} '%{source}%'" for source in unique_sources)
        if not conditions:
            log.warning("Alloydb doc query found no like_patterns")
            return []
        
        return conditions

    def delete_sources_from_alloydb(self, sources, vector_name):
        """
        Deletes from both vectorstore and docstore
        """

        vector_length = get_vector_size(vector_name)

        conditions = self._and_or_ilike(sources, operator="=")

        if not conditions:
            log.warning("No conditions were specified, not deleting whole table!")
            return False

        query = f"""
            DELETE FROM {vector_name}_docstore
            WHERE {conditions};
            DELETE FROM {vector_name}_vectorstore_{vector_length}
            WHERE {conditions}
        """

        return self.execute_sql(query)

    def create_database(self, database_name):
        self.execute_sql(f'CREATE DATABASE "{database_name}"')

    def fetch_owners(self):
        owners = self.execute_sql('SELECT table_schema, table_name, privilege_type FROM information_schema.table_privileges')
        for row in owners:
            print(f"Schema: {row[0]}, Table: {row[1]}, Privilege: {row[2]}")
        return owners

    def create_schema(self, schema_name="public"):
        self.execute_sql(f'CREATE SCHEMA IF NOT EXISTS {schema_name};')

    def grant_schema_permissions(self, schema_name, users):
        for user in users:
            self.execute_sql(f'GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA {schema_name} TO "{user}";')
            self.execute_sql(f'GRANT USAGE, CREATE ON SCHEMA {schema_name} TO "{user}";')
            self.execute_sql(f'ALTER DEFAULT PRIVILEGES IN SCHEMA {schema_name} GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO "{user}";')
            self.execute_sql(f'GRANT USAGE ON SCHEMA information_schema TO "{user}";')
            self.execute_sql(f'GRANT SELECT ON information_schema.columns TO "{user}";')
    
    def grant_table_permissions(self, table_name, users):
        for user in users:
            self.execute_sql(f'GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE "{table_name}" TO "{user}";')
    
    def create_tables(self, vector_name, users):
        self.create_docstore_table(vector_name, users)
        self.create_vectorstore_table(vector_name, users)

    def create_docstore_table(self, vector_name: str, users):
        table_name = f"{vector_name}_vectorstore"
        sql = f'''
        CREATE TABLE IF NOT EXISTS "{table_name}" 
        (page_content TEXT, doc_id UUID, source TEXT, images_gsurls JSONB, chunk_metadata JSONB, langchain_metadata JSONB)
        '''
        self.execute_sql(sql)

        self.grant_table_permissions(table_name, users)

    def create_vectorstore_table(self, vector_name: str, users):
        from .database import get_vector_size
        vector_size = get_vector_size(vector_name)
        vectorstore_id = f"{vector_name}_{type}_{vector_size}"

        sql = f'''
        CREATE TABLE IF NOT EXISTS "{vectorstore_id}" (
        langchain_id UUID NOT NULL,
        content TEXT NOT NULL,
        embedding vector NOT NULL,
        source TEXT,
        langchain_metadata JSONB,
        docstore_doc_id UUID,
        eventTime TIMESTAMPTZ
        );
        '''
        self.execute_sql(sql)

        self.grant_table_permissions(vectorstore_id, users)