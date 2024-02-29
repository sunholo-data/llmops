#   Copyright [2024] [Holosun ApS]
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
import os
from ..logging import setup_logging

logging = setup_logging()


def pick_vectorstore(vs_str, vector_name, embeddings):
    logging.debug('Picking vectorstore')
        
    if vs_str == 'supabase':
        from supabase import Client, create_client
        from langchain.vectorstores import SupabaseVectorStore
        from ..database.database import setup_supabase

        logging.debug(f"Initiating Supabase store: {vector_name}")
        setup_supabase(vector_name)

        # init embedding and vector store
        supabase_url = os.getenv('SUPABASE_URL')
        supabase_key = os.getenv('SUPABASE_KEY')

        logging.debug(f"Supabase URL: {supabase_url} vector_name: {vector_name}")

        supabase: Client = create_client(supabase_url, supabase_key)

        vectorstore = SupabaseVectorStore(supabase, 
                                        embeddings,
                                        table_name=vector_name,
                                        query_name=f'match_documents_{vector_name}')

        logging.debug("Chose Supabase")
    elif vs_str == 'cloudsql':
        from langchain.vectorstores.pgvector import PGVector

        logging.debug("Inititaing CloudSQL pgvector")
        #setup_cloudsql(vector_name) 

        # https://python.langchain.com/docs/modules/data_connection/vectorstores/integrations/pgvector
        CONNECTION_STRING = os.environ.get("PGVECTOR_CONNECTION_STRING")
        # postgresql://brainuser:password@10.24.0.3:5432/brain

        from ..database.database import get_vector_size
        vector_size = get_vector_size(vector_name)

        os.environ["PGVECTOR_VECTOR_SIZE"] = str(vector_size)
        vectorstore = PGVector(connection_string=CONNECTION_STRING,
            embedding_function=embeddings,
            collection_name=vector_name,
            #pre_delete_collection=True # for testing purposes
            )

        logging.debug("Chose CloudSQL")
    elif vs_str == 'alloydb':  # exact same as CloudSQL for now
        from langchain.vectorstores.pgvector import PGVector

        logging.info("Inititaing AlloyDB pgvector")
        #setup_cloudsql(vector_name) 

        # https://python.langchain.com/docs/modules/data_connection/vectorstores/integrations/pgvector
        CONNECTION_STRING = os.environ.get("ALLOYDB_CONNECTION_STRING",None)
        if CONNECTION_STRING is None:
            logging.warning("Did not find ALLOYDB_CONNECTION_STRING fallback to PGVECTOR_CONNECTION_STRING")
            CONNECTION_STRING = os.environ.get("PGVECTOR_CONNECTION_STRING")
        # postgresql://brainuser:password@10.24.0.3:5432/brain

        from ..database.database import get_vector_size
        vector_size = get_vector_size(vector_name)

        os.environ["PGVECTOR_VECTOR_SIZE"] = str(vector_size)
        vectorstore = PGVector(connection_string=CONNECTION_STRING,
            embedding_function=embeddings,
            collection_name=vector_name,
            #pre_delete_collection=True # for testing purposes
            )

        logging.info("Chose AlloyDB")
    elif vs_str == "lancedb":
        from ..patches.langchain.lancedb import LanceDB
        import lancedb

        LANCEDB_BUCKET = os.environ.get("LANCEDB_BUCKET")
        if LANCEDB_BUCKET is None:
            logging.error(f"Could not locate LANCEDB_BUCKET environment variable for {vector_name}")
        logging.info(f"LANCEDB_BUCKET environment variable found for {vector_name} - {LANCEDB_BUCKET}")

        db = lancedb.connect(LANCEDB_BUCKET)

        logging.info(f"LanceDB Tables: {db.table_names()} using {LANCEDB_BUCKET}")
        logging.info(f"Opening LanceDB table: {vector_name} using {LANCEDB_BUCKET}")
    
        try:
            table = db.open_table(vector_name)
        except FileNotFoundError as err:
            logging.info(f"{err} - Could not open table for {vector_name} - creating new table")
            init = f"Creating new table for {vector_name}"
            table = db.create_table(
                        vector_name,
                        data=[
                            {
                                "vector": embeddings.embed_query(init),
                                "text": init,
                                "id": "1",
                            }
                        ],
                        mode="overwrite",
                    )

        logging.info(f"Inititaing LanceDB object for {vector_name} using {LANCEDB_BUCKET}")
        vectorstore = LanceDB(
            connection=table,
            embedding=embeddings,
        )
        logging.info(f"Chose LanceDB for {vector_name} using {LANCEDB_BUCKET}")

    else:
        raise NotImplementedError(f'No llm implemented for {vs_str}')   

    return vectorstore