import os
from urllib.parse import quote
from datetime import datetime, timedelta

# needs to be in minimal to check gcp
from google.auth.exceptions import RefreshError

try:
    from google.cloud import storage 
except ImportError:
    storage = None

from ..custom_logging import log
from ..utils.gcp import is_running_on_gcp
from ..auth.refresh import refresh_credentials, get_default_creds, get_default_email
from io import BytesIO
try:
    from PIL import Image
except ImportError:
    Image = None

gcs_credentials = None
project_id = None
gcs_client = None
gcs_bucket_cache = {}

def get_image_from_gcs(gs_uri: str):
    """Converts image bytes from GCS to a PIL Image object."""
    image_bytes = get_bytes_from_gcs(gs_uri)
    if not Image:
        raise ImportError('Could not import PIL (pillow) - install via `pip install sunholo[gcp]`')
    try:
        img = Image.open(BytesIO(image_bytes))
        return img
    except IOError as e:
        raise ValueError("Unable to open image from bytes:", e)

def get_bytes_from_gcs(gs_uri):
    """
    Downloads a file from Google Cloud Storage and returns its bytes.

    Args:
        gs_uri (str): The Google Cloud Storage URI of the file to download (e.g., 'gs://bucket_name/file_name').

    Returns:
        bytes: The content of the file in bytes, or None if an error occurs.
    """
    if not gs_uri.startswith('gs://'):
        log.error(f"Invalid GCS URI: {gs_uri}")
        return None
    
    try:
        storage_client = storage.Client()
    except Exception as err:
        log.error(f"Error creating storage client: {str(err)}")
        return None
    
    try:
        # Parse the GCS URI
        path_parts = gs_uri[5:].split('/', 1)
        bucket_name = path_parts[0]
        blob_name = path_parts[1]

        # Get the bucket and blob
        bucket = storage_client.bucket(bucket_name)
        blob = bucket.blob(blob_name)

        # Download the blob as bytes
        file_bytes = blob.download_as_bytes()
        return file_bytes

    except Exception as err:
        log.error(f"Error downloading file from GCS: {str(err)}")
        return None


if is_running_on_gcp():
    # Perform a refresh request to get the access token of the current credentials (Else, it's None)
    gcs_credentials, project_id = get_default_creds()
    # Prepare global variables for client reuse
    if storage:
        gcs_client = storage.Client()

def get_bucket(bucket_name):
    if bucket_name not in gcs_bucket_cache:
        gcs_bucket_cache[bucket_name] = gcs_client.get_bucket(bucket_name)
    return gcs_bucket_cache[bucket_name]

def sign_gcs_url(bucket_name:str, object_name:str, expiry_secs = 86400):
    
    service_account_email = get_default_email()

    expires = datetime.now() + timedelta(seconds=expiry_secs)

    try:
        bucket = get_bucket(bucket_name)
        blob = bucket.blob(object_name)
        if not blob:
            return None
        url = blob.generate_signed_url(
            version="v4",
            expiration=expires,
            service_account_email=service_account_email,
            access_token=gcs_credentials.token)
        return url
    except RefreshError:
        log.info("Refreshing gcs_credentials due to token expiration.")
        refreshed = refresh_credentials()
        if refreshed:
            return sign_gcs_url(bucket_name, object_name, expiry_secs)
        log.error("Failed to refresh gcs credentials")
        return None
    except Exception as e:
        log.error(f"Failed to generate signed URL: {e}")
        return None


def construct_download_link(source_uri: str) -> tuple[str, str, bool]:
    """Creates a viewable Cloud Storage web browser link from a gs:// URI.""" 
    if not source_uri.startswith("gs://"):
        return source_uri, source_uri, False  # Return the URI as is if it doesn't start with gs://

    bucket_name, object_name = parse_gs_uri(source_uri)

    signed_url = sign_gcs_url(bucket_name, object_name)
    if signed_url:
        the_name = os.path.basename(object_name)
        log.info(f"Creating signed URL for {the_name} - {signed_url}")
        return signed_url, the_name, True
    
    log.error(f"Failed to generate signed URL for {source_uri}")
    return construct_download_link_simple(bucket_name, object_name)


def construct_download_link_simple(bucket_name:str, object_name:str) -> tuple[str, str, bool]:
    """Creates a viewable Cloud Storage web browser link from a gs:// URI.

    Args:
        source_uri: The gs:// URI of the object in Cloud Storage.

    Returns:
        A URL that directly access the object in the Cloud Storage web browser.
    """

    public_url = f"https://storage.cloud.google.com/{bucket_name}/{quote(object_name)}"
    filename = os.path.basename(object_name)
    signed = False
    return public_url, filename, signed

def parse_gs_uri(gs_uri: str) -> tuple[str, str]:
    """Parses a gs:// URI into the bucket name and object name.

    Args:
        gs_uri: The gs:// URI to parse.

    Returns:
        A tuple containing the bucket name and object name.
    """
    parts = gs_uri.split("/")
    if len(parts) < 3:
        raise ValueError(f"Invalid gs:// URI: {gs_uri}")
    return parts[2], "/".join(parts[3:])