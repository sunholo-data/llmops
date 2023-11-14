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
from flask import request, jsonify, Response

import logging
import json
import traceback

from ...agents import extract_chat_history, handle_special_commands
from ...qna.parsers import parse_output
from ...streaming import start_streaming_chat
from ...archive import archive_qa

def register_qna_routes(app, stream_interpreter, qna_interpreter):
    @app.route('/qna/streaming/<vector_name>', methods=['POST'])
    def stream_qa(vector_name):
        data = request.get_json()
        logging.info(f"qna/streaming/{vector_name} got data: {data}")

        user_input = data['user_input'].strip()  # Extract user input from the payload

        chat_history = data.get('chat_history', None)

        message_author = data.get('message_author', None)

        paired_messages = extract_chat_history(chat_history)

        command_response = handle_special_commands(user_input, vector_name, paired_messages)
        if command_response is not None:
            return jsonify(command_response)

        logging.info(f'Stream QNA got: {user_input}')
        logging.info(f'Stream QNA got chat_history: {paired_messages}')

        def generate_response_content():
            for chunk in start_streaming_chat(user_input,
                                            vector_name,
                                            chat_history=paired_messages,
                                            message_author=message_author,
                                            qna_func=stream_interpreter,
                                            wait_time=7,
                                            timeout=120):
                if isinstance(chunk, dict) and 'answer' in chunk:
                    # When we encounter the dictionary, we yield it as a JSON string
                    # and stop the generator.
                    archive_qa(chunk, vector_name)
                    yield f"###JSON_START###{json.dumps(chunk)}###JSON_END###"
                    return
                else:
                    # Otherwise, we yield the plain text chunks as they come in.
                    yield chunk

        # Here, the generator function will handle streaming the content to the client.
        response = Response(generate_response_content(), content_type='text/plain; charset=utf-8')
        response.headers['Transfer-Encoding'] = 'chunked'    

        return response

    @app.route('/qna/<vector_name>', methods=['POST'])
    def process_qna(vector_name):
        # The body of the route handler goes here
        # Use `qna_interpreter` where the original code used `interpreter_qna`
        data = request.get_json()
        logging.info(f"qna/{vector_name} got data: {data}")

        user_input = data['user_input'].strip()

        message_author = data.get('message_author', None)

        paired_messages = extract_chat_history(data['chat_history'])

        command_response = handle_special_commands(user_input, vector_name, paired_messages)
        if command_response is not None:
            return jsonify(command_response)
        
        logging.info(f'QNA got: {user_input} - author: {message_author}')
        logging.info(f'QNA got chat_history: {paired_messages}')

        try:
            bot_output = qna_interpreter(user_input, vector_name, chat_history=paired_messages, message_author=message_author)
            # {"answer": "The answer", "source_documents": [{"page_content": "The page content", "metadata": "The metadata"}]}
            bot_output = parse_output(bot_output)
            archive_qa(bot_output, vector_name)
        except Exception as err: 
            bot_output = {'answer': f'QNA_ERROR: An error occurred while processing /qna/{vector_name}: {str(err)} traceback: {traceback.format_exc()}'}
        
        logging.info(f'==LLM Q:{user_input} - A:{bot_output["answer"]}')
        
        return jsonify(bot_output)

    # Any other QNA related routes can be added here
