from .discovery_engine_client import DiscoveryEngineClient
from ..utils.config import load_config_key

def create_new_discovery_engine(vector_name):
    global_config = load_config_key("gcp_config", "global", kind="vacConfig")
    gcp_config = load_config_key("gcp_config", vector_name=vector_name, kind="vacConfig")

    chunker_config = load_config_key("chunker", vector_name=vector_name, kind="vacConfig")

    chunk_size = 500
    if chunker_config:
        if "chunk_size" in chunker_config:
            chunk_size = chunker_config["chunk_size"]    

    project_id = gcp_config.get('project_id') or global_config.get('project_id')
    if not project_id:
        raise ValueError("Could not find project_id in gcp_config")
    
    #location = gcp_config.get('location')

    de = DiscoveryEngineClient(
                    data_store_id=vector_name, 
                    project_id=project_id,
                    # location needs to be 'eu' or 'us' which doesn't work with other configurations
                    #location=location
                    )

    new_store = de.create_data_store(chunk_size=chunk_size)

    return new_store