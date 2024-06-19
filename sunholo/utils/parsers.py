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
import re
import hashlib
import textwrap  # For wrapping text

def format_long_yaml(x, max_width=70):
    """Formats the endpoint address, adding >- and line breaks if necessary.
# Example usage:
endpoint_template = "https://edmonbrain-blqtqfexwa-ew.a.run.app/openai/v1/chat/completions/{stem}/{vector_name}"

formatted_address = format_long_yaml(x)
print(formatted_address)
    
    """
    if len(x) < max_width: 
        return x
    
    # Wrap the URL if it's too long
    wrapped_x = textwrap.wrap(x, width=max_width)
    output = ">-\n  " + "\n  ".join(wrapped_x)

    return output





def contains_url(message_data):
    """
    Check if the provided text contains a URL.

    Args:
        message_data (str): The text to check.

    Returns:
        bool: True if the text contains a URL, False otherwise.

    Example:
    ```python
    text = "Visit us at https://example.com for more details."
    has_url = contains_url(text)
    print(has_url)  # True
    ```
    """
    url_pattern = re.compile(r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+')
    if url_pattern.search(message_data):
        return True
    else:
        return False

def extract_urls(text):
    """
    Extract all URLs from the provided text.

    Args:
        text (str): The text to extract URLs from.

    Returns:
        list[str]: A list of URLs found in the text.

    Example:
    ```python
    text = "Check out https://example.com and http://another.com."
    urls = extract_urls(text)
    print(urls)  # ['https://example.com', 'http://another.com']
    ```
    """
    url_pattern = re.compile(r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+')
    urls = url_pattern.findall(text)
    return urls

def compute_sha1_from_file(file_path):
    """
    Compute the SHA-1 hash of a file.

    Args:
        file_path (str): The path to the file.

    Returns:
        str: The SHA-1 hash of the file.

    Example:
    ```python
    file_path = 'path/to/file.txt'
    file_hash = compute_sha1_from_file(file_path)
    print(file_hash)  # Outputs the SHA-1 hash of the file
    ```
    """
    with open(file_path, "rb") as file:
        bytes = file.read() 
        readable_hash = hashlib.sha1(bytes).hexdigest()
    return readable_hash

def compute_sha1_from_content(content):
    """
    Compute the SHA-1 hash of the provided content.

    Args:
        content (bytes): The content to hash.

    Returns:
        str: The SHA-1 hash of the content.

    Example:
    ```python
    content = b"Hello, world!"
    content_hash = compute_sha1_from_content(content)
    print(content_hash)  # Outputs the SHA-1 hash of the content
    ```
    """
    readable_hash = hashlib.sha1(content).hexdigest()
    return readable_hash


def remove_whitespace(page_content: str):
    """
    Remove newline, carriage return, tab characters, and double spaces from the provided string.

    Args:
        page_content (str): The string to clean.

    Returns:
        str: The cleaned string.

    Example:
    ```python
    raw_text = "Hello,\nworld!\t This is   an example."
    cleaned_text = remove_whitespace(raw_text)
    print(cleaned_text)  # Outputs 'Hello, world! This is an example.'
    ```
    """
    return page_content.replace("\n", " ").replace("\r", " ").replace("\t", " ").replace("  ", " ")

def check_kwargs_support(func):
    """
    Check if the function 'func' accepts arbitrary keyword arguments (**kwargs).

    Args:
    func (callable): The function to check.

    Returns:
    bool: True if **kwargs is accepted, False otherwise.
    """
    import inspect
    
    sig = inspect.signature(func)
    for param in sig.parameters.values():
        if param.kind == param.VAR_KEYWORD:
            return True
    return False