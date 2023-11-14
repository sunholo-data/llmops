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
from threading import Thread, Event
from queue import Queue
import json
import time

from .content_buffer import ContentBuffer, BufferStreamingStdOutCallbackHandler

from ..qna.parsers import parse_output

import logging
logging.basicConfig(level=logging.DEBUG)

def start_streaming_chat(question, 
                         vector_name,
                         qna_func,
                         chat_history=[],
                         message_author=None,
                         wait_time=2,
                         timeout=120): # Timeout in seconds (2 minutes)

    # Immediately yield to indicate the process has started.
    yield "Thinking..."
    # Initialize the chat
    content_buffer = ContentBuffer()
    chat_callback_handler = BufferStreamingStdOutCallbackHandler(content_buffer=content_buffer, tokens=".!?\n")

    result_queue = Queue()
    exception_queue = Queue()  # Queue for exceptions
    stop_event = Event()

    def start_chat(stop_event, result_queue, exception_queue):
        # autogen_qna(user_input, vector_name, chat_history=None, message_author=None):
        try:
            final_result = qna_func(question, 
                                    vector_name, 
                                    chat_history, 
                                    message_author=message_author, 
                                    callback=chat_callback_handler)
            result_queue.put(final_result)
        except Exception as e:
            exception_queue.put(e)


    chat_thread = Thread(target=start_chat, args=(stop_event, result_queue, exception_queue))
    chat_thread.start()

    start = time.time()
    first_start = start
    while not chat_callback_handler.stream_finished.is_set() and not stop_event.is_set():

        time.sleep(wait_time) # Wait for x seconds
        logging.info(f"heartbeat - {round(time.time() - start, 2)} seconds")
        # Check for exceptions and raise if any
        while not exception_queue.empty():
            raise exception_queue.get()
        
        content_to_send = content_buffer.read()

        if content_to_send:
            logging.info(f"==\n{content_to_send}")
            yield content_to_send
            content_buffer.clear()
            start = time.time() # reset timeout
        else:
            if time.time() - first_start < wait_time:
                # If the initial wait period hasn't passed yet, keep sending "..."
                yield "..."
            else:
                logging.info("No content to send")

        elapsed_time = time.time() - start
        if elapsed_time > timeout: # If the elapsed time exceeds the timeout
            logging.warning(f"Content production has timed out after {timeout} secs")
            break
    else:
        logging.info(f"Stream has ended after {round(time.time() - first_start, 2)} seconds")
        logging.info(f"Sending final full message plus sources...")
        
    
    # if  you need it to stop it elsewhere use 
    # stop_event.set()
    content_to_send = content_buffer.read()
    if content_to_send:
        logging.info(f"==\n{content_to_send}")
        yield content_to_send
        content_buffer.clear()

    # Stop the stream thread
    chat_thread.join()

    # the json object with full response in 'answer' and the 'sources' array
    final_result = result_queue.get()

    # parses out source_documents if not present etc.
    yield parse_output(final_result)


def generate_proxy_stream(stream_to_f, user_input, vector_name, chat_history, message_author, generate_f_output):
    def generate():
        json_buffer = ""  # Initialize an empty string buffer for JSON content
        inside_json = False  # Flag to track whether we're currently buffering JSON content

        for streaming_content in stream_to_f(user_input, vector_name, chat_history, message_author, stream=True):
            if isinstance(streaming_content, str):
                
                content_str = streaming_content

                if streaming_content.startswith('###JSON_START###'):
                    # Never happens?
                    logging.warning('Streaming content was a string with ###JSON_START###')
                else:
                    logging.info(f'Streaming got a string we return directly: {streaming_content}')
                    # just output the string as is
                    yield streaming_content
            else:
                # If it's a bytes object, decode it before further processing
                content_str = streaming_content.decode('utf-8')

            logging.info('Content_str: %s', content_str)

            while '###JSON_START###' in content_str:
                if '###JSON_END###' in content_str:
                    # Handle complete JSON object in a single chunk
                    start_index = content_str.index('###JSON_START###') + len('###JSON_START###')
                    end_index = content_str.index('###JSON_END###')
                    json_buffer = content_str[start_index:end_index]

                    try:
                        json_content = json.loads(json_buffer)
                        discord_output = generate_f_output(json_content)
                        to_client = f'###JSON_START###{json.dumps(discord_output)}###JSON_END###'
                        logging.info(f"Streaming JSON to_client:\n{to_client}")
                        yield to_client.encode('utf-8')
                    except json.JSONDecodeError as e:
                        logging.error(f"JSON decode error: {e}")
                    
                    # Prepare for next JSON object, if any
                    content_str = content_str[end_index + len('###JSON_END###'):]
                    json_buffer = ""

                else:
                    # Start JSON buffering if END marker is not in the same chunk
                    start_index = content_str.index('###JSON_START###') + len('###JSON_START###')
                    json_buffer = content_str[start_index:]
                    inside_json = True
                    break  # Exit while loop; rest will be handled by the next chunk

            if '###JSON_END###' in content_str and inside_json:
                # Handle case where END marker is in the current chunk
                end_index = content_str.index('###JSON_END###')
                json_buffer += content_str[:end_index]
                try:
                    json_content = json.loads(json_buffer)
                    discord_output = generate_f_output(json_content)
                    to_client = f'###JSON_START###{json.dumps(discord_output)}###JSON_END###'
                    logging.info(f"Streaming JSON to_client:\n{to_client}")
                    yield to_client.encode('utf-8')
                except json.JSONDecodeError as e:
                    logging.error(f"JSON decode error: {e}")
                
                content_str = content_str[end_index + len('###JSON_END###'):]
                json_buffer = ""
                inside_json = False

            if not inside_json and content_str:
                # Yield non-JSON content as it is
                logging.info(f"Streaming to client: {content_str}")
                yield content_str.encode('utf-8')

    return generate


