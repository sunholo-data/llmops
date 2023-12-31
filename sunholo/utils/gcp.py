#   Copyright [2023] [Holosun ApS]
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
import os
import requests
import socket
import logging

def get_env_project_id():
    """
    Attempts to retrieve the project ID from environment variables.

    Returns:
        str or None: The project ID if found in environment variables, None otherwise.
    """
    return os.environ.get('GCP_PROJECT') or os.environ.get('GOOGLE_CLOUD_PROJECT')

def is_running_on_gcp():
    """
    Checks if the code is running on a Google Cloud Platform instance.

    Returns:
        bool: True if running on GCP, False otherwise.
    """
    try:
        # Google Cloud instances can reach the metadata server
        socket.setdefaulttimeout(0.1)
        socket.socket().connect(('metadata.google.internal', 80))
        return True
    except (socket.timeout, socket.error):
        return False

def get_service_account_email():
    service_email = os.getenv("GCP_DEFAULT_SERVICE_EMAIL")
    if service_email:
        return service_email
    service_email = get_metadata('instance/service-accounts/default/email')
    os.environ['GCP_DEFAULT_SERVICE_EMAIL'] = service_email
    return service_email

def get_gcp_project():
    project_id = get_env_project_id()
    if project_id:
        return project_id
    project_id = get_metadata('project/project-id')
    os.environ["GCP_PROJECT"] = project_id 
    return project_id

def get_region():
    # The "instance/zone" metadata includes the region as part of the zone name
    region = os.getenv("GCP_REGION")
    if region:
        return region
    
    zone = get_metadata('instance/zone')
    if zone:
        # Split by '/' and take the last part, then split by '-' and take all but the last part
        region_zone = zone.split('/')[-1]
        region = '-'.join(region_zone.split('-')[:-1])
        os.environ["GCP_REGION"] = region
        return region
    return None

def get_metadata(stem):
    if not is_running_on_gcp():
        logging.warning("Not running on GCP, skipping metadata server fetch. For local testing set via env var instead e.g. GCP_PROJECT")
        return None
    
    metadata_server_url = f'http://metadata.google.internal/computeMetadata/v1/{stem}'

    headers = {'Metadata-Flavor': 'Google'}

    response = requests.get(metadata_server_url, headers=headers)

    if response.status_code == 200:
        return response.text
    else:
        print(f"Request failed with status code {response.status_code}")
        return None
