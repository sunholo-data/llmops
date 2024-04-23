from langfuse import Langfuse
from langfuse.api import NotFoundError
from ..logging import log
import yaml

# Load the YAML file
def load_prompt_from_yaml(key, prefix="sunholo", file_path=None):
    # Initialize Langfuse client
    langfuse = Langfuse()

    try:
        if prefix is None:
            langfuse_template = key
        else:
            langfuse_template = f"{prefix}-{key}"
            
        langfuse_prompt = langfuse.get_prompt(langfuse_template, cache_ttl_seconds=300)

        return langfuse_prompt.get_langchain_prompt()
    
    except NotFoundError:
        if not file_path:
            log.error(f"Could not fine langfuse template {langfuse_template} and no file_path was provided")
            raise
        log.warning(f"Could not find langfuse template: {langfuse_template} - attempting to load from {file_path}")

    with open(file_path, 'r') as file:
        data = yaml.safe_load(file)
        return data[key]