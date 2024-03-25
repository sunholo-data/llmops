from ..utils import load_config_key
from ..logging import setup_logging
from ..database.alloydb import create_alloydb_table, create_alloydb_engine
from ..components import get_llm
from ..gcs.add_file import add_file_to_gcs, get_summary_file_name

import tempfile

from langchain_google_alloydb_pg import AlloyDBDocumentSaver
from langchain_core.output_parsers import StrOutputParser

log = setup_logging("chunker")

def send_doc_to_docstore(docs, vector_name):

    docstore_config = load_config_key("docstore", vector_name=vector_name, filename="config/llm_config.yaml")
    if docstore_config is None:
        log.info("No docstore config found for {vector_name}")
        
        return
     
    for docstore in docstore_config:
        if docstore.get('type') == 'alloydb':
            # upload to alloydb
            alloydb_config = load_config_key("alloydb_config", vector_name=vector_name, filename="config/llm_config.yaml")
            if alloydb_config:
                engine = create_alloydb_engine(alloydb_config, vector_name)
                table_name = create_alloydb_table(table_name=vector_name, engine=engine, type = "docstore", alloydb_config=alloydb_config)
                saver = AlloyDBDocumentSaver.create_sync(
                    engine=engine,
                    table_name=table_name,
                    metadata_columns=["source"]
                )
                saver.add_documents(docs)
                log.info(f"Saved docs to alloydb docstore: {table_name}")
            else:
                log.error("docstore.type==alloydb but no config.alloydb_config specified")
        #elif docstore.get('type') == 'cloudstorage':
        else:
            log.info("No docstore type found for {vector_name}: {docstore}")


def summarise_docs(docs, vector_name, summary_threshold_default=10000, model_limit_default=100000):
    chunker_config = load_config_key("chunker", vector_name=vector_name, filename="config/llm_config.yaml")
    summarise_chunking_config = chunker_config.get("summarise")
    if summarise_chunking_config:
        # if model not specified will use default config.llm
        model = summarise_chunking_config.get("model")
        summary_threshold = summarise_chunking_config.get("threshold") if summarise_chunking_config.get("threshold") else summary_threshold_default
        model_limit = summarise_chunking_config.get("model_limit") if summarise_chunking_config.get("model_limit") else model_limit_default
        
        summary_llm = get_llm(vector_name, model=model)
        for doc in docs:
            try:
                if len(doc.page_content) > summary_threshold:

                    context = doc.page_content[:model_limit]
                    metadata = doc.metadata
                    if len(doc.page_content) > model_limit:
                        log.warning(f"Page content was above model_limit for summary: [{len(doc.page_content)} / {model_limit}]: {metadata}")
                        #TODO: use map_reduce chain for summary instead
                        
                    log.info(f"Creating summary for {metadata} for doc [{len(context)}]")
                    
                    prompt = f"Summarise the context below.  Be careful not to add any speculation or any details that are not covered in the original:\n## Context:{context}\n## Your Summary:\n"

                    summary = summary_llm | prompt | StrOutputParser()
                    log.info(f"Created a summary for {metadata}: {len(context)} > {len(summary)}")
                    
                    # Create a temporary file for the summary
                    with tempfile.NamedTemporaryFile(mode='w+', delete=False) as temp_file:
                        temp_file.write(summary)
                        temp_file_path = temp_file.name  # Get the temporary file's path
                        bucket_filepath=get_summary_file_name(metadata["objectId"])
                        summary_loc = add_file_to_gcs(temp_file_path, vector_name=vector_name, metadata=metadata, bucket_filepath=bucket_filepath)
                        doc.metadata["summary_file"] = summary_loc
            except Exception as err:
                log.error(f"Failed to create a summary for {metadata}: {str(err)}")
        
        return docs

