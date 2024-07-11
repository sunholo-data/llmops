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
from ..azure import process_azure_blob_event
from .process_chunker_data import process_chunker_data

def data_to_embed_pubsub(data: dict):
    """Triggered from a message on an Azure Data Grid event.
    Args:
         data JSON
    """

    message_data, metadata, vector_name = process_azure_blob_event(data)

    return process_chunker_data(message_data, metadata, vector_name)

