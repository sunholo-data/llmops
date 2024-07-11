from ..logging import log

def process_azure_blob_event(data: dict) -> tuple:
    """
    Extracts message data and metadata from an Azure Blob Storage event.

    Args:
        data (dict): The Azure Event Grid event data.

    Returns:
        tuple: A tuple containing the blob URL, attributes as metadata, and the vector name.
        
    Example of Event Grid schema:
    {
        "topic": "/subscriptions/{subscription-id}/resourceGroups/{resource-group}/providers/Microsoft.Storage/storageAccounts/{storage-account}",
        "subject": "/blobServices/default/containers/{container}/blobs/{blob}",
        "eventType": "Microsoft.Storage.BlobCreated",
        "eventTime": "2021-01-01T12:34:56.789Z",
        "id": "event-id",
        "data": {
            "api": "PutBlob",
            "clientRequestId": "client-request-id",
            "requestId": "request-id",
            "eTag": "etag",
            "contentType": "application/octet-stream",
            "contentLength": 524288,
            "blobType": "BlockBlob",
            "url": "https://{storage-account}.blob.core.windows.net/{container}/{blob}",
            "sequencer": "0000000000000000000000000000000000000000000000000000000000000000",
            "storageDiagnostics": {
                "batchId": "batch-id"
            }
        },
        "dataVersion": "",
        "metadataVersion": "1"
    }
    """
    # Extract relevant fields from the event data
    blob_url = data['data']['url']
    event_time = data['eventTime']
    event_id = data['id']
    event_type = data['eventType']
    subject = data['subject']
    attributes = {
        'event_type': event_type,
        'event_time': event_time,
        'event_id': event_id,
        'subject': subject,
        'url': blob_url
    }
    
    # Extract 'vector_name' from the container name
    vector_name = subject.split('/')[4]  # Extracting the container name
    
    log.info(f"Process Azure Blob Event was triggered by eventId {event_id} at {event_time}")
    log.debug(f"Process Azure Blob Event data: {blob_url}")
    
    # Check for a valid Azure Blob Storage event type
    if event_type == "Microsoft.Storage.BlobCreated":
        log.info(f"Got valid event from Azure Blob Storage: {blob_url}")

    return blob_url, attributes, vector_name