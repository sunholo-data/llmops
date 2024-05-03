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
from ..logging import log
from ..utils import load_config_key
from ..auth import get_header
import requests
import aiohttp
from .langserve import prepare_request_data

from .route import route_endpoint

def prep_request_payload(user_input, chat_history, vector_name, stream, **kwargs):

    # Add chat_history/vector_name to kwargs so langserve can use them too
    kwargs['chat_history'] = chat_history

    agent = load_config_key("agent", vector_name=vector_name, filename="config/llm_config.yaml")
    agent_type = load_config_key("agent_type", vector_name=vector_name, filename="config/llm_config.yaml")

    # {'stream': '', 'invoke': ''}
    endpoints = route_endpoint(vector_name)

    qna_endpoint = endpoints["stream"] if stream else endpoints["invoke"]

    if agent == "langserve" or agent_type == "langserve":
        qna_data = prepare_request_data(user_input, endpoints["input_schema"], vector_name, **kwargs)
    else:
        # Base qna_data dictionary
        qna_data = {
            'user_input': user_input,
        }
        # Update qna_data with optional values from kwargs
        qna_data.update(kwargs)

    return qna_endpoint, qna_data

def send_to_qa(user_input, vector_name, chat_history, stream=False, **kwargs):

    qna_endpoint, qna_data = prep_request_payload(user_input, chat_history, vector_name, stream, **kwargs)
    header = get_header(vector_name)
    header = add_header_ids(header, **kwargs)

    log.info(f"Send_to_qa to {qna_endpoint} this data: {qna_data} with this header: {header}")
    try:
        qna_response = requests.post(qna_endpoint, json=qna_data, stream=stream, headers=header)
        qna_response.raise_for_status()

        if stream:
            # If streaming, return a generator that yields response content chunks
            def content_generator():
                for chunk in qna_response.iter_content(chunk_size=8192):
                    yield chunk
            return content_generator()
        else:
            # Otherwise, return the JSON response directly
            return qna_response.json()

    except requests.exceptions.HTTPError as err:
        log.error(f"HTTP error occurred: {err}")
        error_message = f"There was an error processing your request. Please try again later. {str(err)}"
        if stream:
            return iter([error_message])
        else:
            return {"answer": error_message}

    except Exception as err:
        log.error(f"Other error occurred: {str(err)}")
        error_message = f"Something went wrong. Please try again later. {str(err)}"
        if stream:
            return iter([error_message])
        else:
            return {"answer": error_message}

async def send_to_qa_async(user_input, vector_name, chat_history, stream=False, **kwargs):
    
    qna_endpoint, qna_data = prep_request_payload(user_input, chat_history, vector_name, stream, **kwargs)
    header = get_header(vector_name)
    header = add_header_ids(header, **kwargs)

    log.info(f"send_to_qa_async to {qna_endpoint} this data: {qna_data} with this header: {header}")

    try:
        async with aiohttp.ClientSession() as session:
            async with session.post(qna_endpoint, json=qna_data, headers=header) as resp:
                resp.raise_for_status()

                if stream:
                    # Stream the response
                    async for chunk in resp.content.iter_any():
                        yield chunk
                else:
                    # Return the complete response
                    qna_response = await resp.json()
                    log.info(f"Got back QA response: {qna_response}")
                    yield qna_response
    except aiohttp.ClientResponseError as e:
        log.error(f"HTTP error occurred: {e}")
        error_message = f"There was an error processing your request: {str(e)}"
        if stream:
            yield error_message.encode('utf-8')
        else:
            yield {"answer": error_message}
    except Exception as e:
        log.error(f"Other error occurred: {str(e)}")
        error_message = f"Something went wrong: {str(e)}"
        if stream:
            yield error_message.encode('utf-8')
        else:
            yield {"answer": error_message}


def add_header_ids(header, **kwargs):

    if not header:
        return None
    
    # Check if 'user_id' and 'session_id' are in kwargs and add them to the header
    if 'user_id' in kwargs:
        header['X-User-ID'] = kwargs['user_id']  # Custom header names, adjust as needed
    if 'session_id' in kwargs:
        header['X-Session-ID'] = kwargs['session_id']
    if 'message_source' in kwargs:
        header['X-Message-Source'] = kwargs['message_source']
    
    return header