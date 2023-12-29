#   Copyright [2023] [Sunholo ApS]
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
from ..logging import setup_logging

logging = setup_logging()

from ..utils.config import load_config_key, load_config, get_module_filepath

def pick_llm(vector_name):
    logging.debug('Picking llm')
    
    llm_str = load_config_key("llm", vector_name, filename = "config/llm_config.yaml")
    
    if llm_str == 'openai':
        llm_chat = get_llm_chat(vector_name)
        llm = get_llm_chat(vector_name, model="gpt-3.5-turbo-16k") # TODO: fix it needs llm_chat and not llm
        embeddings = get_embeddings(vector_name)
        logging.debug("Chose OpenAI")
    elif llm_str == 'vertex':
        llm = get_llm_chat(vector_name) # TODO: fix it needs llm_chat and not llm
        llm_chat = get_llm_chat(vector_name)
        embeddings = get_embeddings(vector_name)
        logging.debug("Chose VertexAI text-bison")
    elif llm_str == 'codey':
        llm = get_llm(vector_name)
        llm_chat = get_llm_chat(vector_name)
        embeddings = get_embeddings(vector_name)
        logging.debug("Chose VertexAI code-bison")
    elif llm_str == 'model_garden':
        llm = get_llm(vector_name)
        llm_chat = llm
        embeddings = None
        logging.debug("Chose VertexAIModelGarden")

    else:
        raise NotImplementedError(f'No llm implemented for {llm_str}')   

    return llm, embeddings, llm_chat

def pick_streaming(vector_name):
    
    llm_str = load_config_key("llm", vector_name, filename = "config/llm_config.yaml")
    
    if llm_str == 'openai' or llm_str == 'gemini':
        return True
    
    return False
 

def get_llm(vector_name, model=None):
    llm_str = load_config_key("llm", vector_name, filename="config/llm_config.yaml")
    model_lookup_filepath = get_module_filepath("lookup/model_lookup.yaml")
    model_lookup, _ = load_config(model_lookup_filepath)

    logging.debug(f"Chose LLM: {llm_str}")
    # Configure LLMs based on llm_str
    if llm_str == 'openai':
        # Setup for OpenAI LLM
        from langchain.llms import OpenAI
        from langchain.chat_models import ChatOpenAI
        if not model:
            model = load_config_key("model", vector_name, filename="config/llm_config.yaml")
            if model is None:
                model = 'gpt-4-32k'
                logging.info(f"No 'model' value in config file - selecting default ChatOpenAI: {model}")
                return ChatOpenAI(model=model, temperature=0, max_tokens=6000)
                
        return OpenAI(model=model, temperature=0, max_tokens=6000)

    elif llm_str == 'vertex':
        # Setup for Vertex LLM
        from langchain.llms import VertexAI
        if not model:
            model = load_config_key("model", vector_name, filename="config/llm_config.yaml")
            if model is None:
                model = 'text-unicorn'
                logging.info(f"No 'model' value in config file - selecting default {model}")
            
        return VertexAI(model_name = model, temperature=0, max_output_tokens=1024)

    elif llm_str == 'codey':
        # Setup for Vertex LLM
        from langchain.llms import VertexAI
        if not model:
            model = load_config_key("model", vector_name, filename="config/llm_config.yaml")
            if model is None:
                model = 'code-bison'
                logging.info(f"No 'model' value in config file - selecting default {model}")
                       
        return VertexAI(model_name = model, temperature=0, max_output_tokens=1024)

    elif llm_str == 'model_garden':
        from ..patches.langchain.vertexai import VertexAIModelGarden
        model_garden_config = load_config_key("gcp_config", vector_name, filename = "config/llm_config.yaml")
        if model_garden_config is None:
            raise ValueError("llm='model_garden' requires a gcp_config entry in config yaml file")
        
        return VertexAIModelGarden(project=model_garden_config['project_id'], 
                                   endpoint_id=model_garden_config['endpoint_id'], 
                                   location=model_garden_config['location'], 
                                   allowed_model_args=["max_tokens"])

    if llm_str is None:
        raise NotImplementedError(f'No llm implemented for {llm_str}')

def get_llm_chat(vector_name, model=None):
    llm_str = load_config_key("llm", vector_name, filename="config/llm_config.yaml")
    if not model:
        model = load_config_key("model", vector_name, filename="config/llm_config.yaml")

    logging.debug(f"Chose LLM: {llm_str}")
    # Configure LLMs based on llm_str
    if llm_str == 'openai':
        # Setup for OpenAI LLM
        from langchain.chat_models import ChatOpenAI
        if model is None:
            model = 'gpt-4'
            logging.info(f"No 'model' value in config file - selecting default {model}")
            
        return ChatOpenAI(model=model, temperature=0, max_tokens=11000)

    elif llm_str == 'vertex':
        # Setup for Vertex LLM
        from langchain.chat_models import ChatVertexAI
        if model is None:
            model = 'chat-bison'
            logging.info(f"No 'model' value in config file - selecting default {model}")
            
        return ChatVertexAI(model_name = model, temperature=0, max_output_tokens=1024)

    elif llm_str == 'codey':
        # Setup for Vertex LLM
        from langchain.chat_models import ChatVertexAI
        if model is None:
            model = 'codechat-bison'
            logging.info(f"No 'model' value in config file - selecting default {model}")
            
        return ChatVertexAI(model_name = model, temperature=0, max_output_tokens=1024)
    
    elif llm_str == 'gemini':
        from langchain_google_genai import ChatGoogleGenerativeAI
        if model is None:
            model="gemini-pro"
        
        return ChatGoogleGenerativeAI(model_name = model, temperature=0)

    if llm_str is None:
        raise NotImplementedError(f'No llm implemented for {llm_str}')

def get_embeddings(vector_name):
    llm_str = load_config_key("llm", vector_name, filename="config/llm_config.yaml")

    # Configure embeddings based on llm_str
    if llm_str == 'openai':
        # Setup for OpenAI embeddings
        from langchain.embeddings import OpenAIEmbeddings
        return OpenAIEmbeddings()
    elif llm_str == 'vertex' or llm_str == 'codey':
        # Setup for Text-Bison embeddings
        from langchain.embeddings import VertexAIEmbeddings
        
        return VertexAIEmbeddings()
    elif llm_str == 'gemini':
        from langchain_google_genai import GoogleGenerativeAIEmbeddings

        return GoogleGenerativeAIEmbeddings(model="models/embedding-001") #TODO add embedding type


    if llm_str is None:
        raise NotImplementedError(f'No embeddings implemented for {llm_str}')
