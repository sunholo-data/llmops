"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[886],{1140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(4848),o=t(8453);const r={},i="discovery_engine_client.py",c={id:"sunholo/discovery_engine/discovery_engine_client",title:"discovery_engine_client.py",description:"Source: sunholo/discoveryengine/discoveryengineclient.py",source:"@site/docs/sunholo/discovery_engine/discovery_engine_client.md",sourceDirName:"sunholo/discovery_engine",slug:"/sunholo/discovery_engine/discovery_engine_client",permalink:"/docs/sunholo/discovery_engine/discovery_engine_client",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/sunholo/discovery_engine/discovery_engine_client.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"create_new.py",permalink:"/docs/sunholo/discovery_engine/create_new"},next:{title:"embed_chunk.py",permalink:"/docs/sunholo/embedder/embed_chunk"}},l={},a=[{value:"Classes",id:"classes",level:2},{value:"DiscoveryEngineClient",id:"discoveryengineclient",level:3}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"discovery_engine_clientpy",children:"discovery_engine_client.py"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Source"}),": ",(0,s.jsx)(n.a,{href:"https://github.com/sunholo-data/sunholo-py/blob/main/sunholo/discovery_engine/discovery_engine_client.py",children:"sunholo/discovery_engine/discovery_engine_client.py"})]}),"\n",(0,s.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,s.jsx)(n.h3,{id:"discoveryengineclient",children:"DiscoveryEngineClient"}),"\n",(0,s.jsx)(n.p,{children:"Client for interacting with Google Cloud Discovery Engine."}),"\n",(0,s.jsx)(n.p,{children:"Args:\nproject_id (str): Your Google Cloud project ID.\ndata_store_id (str): The ID of your Discovery Engine data store.\nlocation (str, optional): The location of the data store (default is 'eu')."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'client = DiscoveryEngineClient(project_id=\'your-project-id\', data_store_id=\'your-data-store-id\')\n\n# Create a collection\ncollection_name = client.create_collection("my_new_collection")\n\n# Perform a search\nsearch_response = client.get_chunks("your query", "your_collection_id")\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"Parsing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Perform a search\nsearch_response = client.get_chunks("your query", "your_collection_id")\n\n# Iterate through the search results\nfor result in search_response.results:\n    # Get the document (which contains the chunks)\n    document = result.document\n\n    # Iterate through the chunks within the document\n    for chunk in document.chunks:\n        chunk_text = chunk.snippet  # Extract the text content of the chunk\n        chunk_document_name = chunk.document_name  # Get the name of the document the chunk belongs to\n        \n        # Do something with the chunk_text and chunk_document_name (e.g., print, store, etc.)\n        print(f"Chunk Text: {chunk_text}")\n        print(f"Document Name: {chunk_document_name}")\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"init"}),"(self, data_store_id, project_id, location='eu')"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Initialize self.  See help(type(self)) for accurate signature."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"chunk_format(self, chunk: google.cloud.discoveryengine_v1alpha.types.chunk.Chunk)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"create_data_store(self, chunk_size: int = 500, collection: str = 'default_collection') -> str"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Creates a new data store with default configuration."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Args:\nchunk_size (int, optional): The size of the chunks to create for documents (default is 500)."}),"\n",(0,s.jsx)(n.p,{children:"Returns:\nstr: The name of the long-running operation for data store creation."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["get_chunks(self, query: str, num_previous_chunks: int = 3, num_next_chunks: int = 3, page_size: int = 10, parse_chunks_to_string: bool = True, doc_or_chunks: str = 'CHUNKS', serving_config: str = 'default_serving_config')","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Retrieves chunks or documents based on a query."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Args:\nquery (str): The search query.\ncollection_id (str): The ID of the collection to search.\nnum_previous_chunks (int, optional): Number of previous chunks to return for context (default is 3).\nnum_next_chunks (int, optional): Number of next chunks to return for context (default is 3).\npage_size (int, optional): The maximum number of results to return per page (default is 10).\nparse_chunks_to_string: If True will put chunks in one big string, False will return object"}),"\n",(0,s.jsx)(n.p,{children:"Returns:\ndiscoveryengine.SearchResponse: The search response object containing the search results."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"search_response = client.get_chunks('your query', 'your_collection_id')\nfor result in search_response.results:\n    for chunk in result.document.chunks:\n        print(f\"Chunk: {chunk.snippet}, document name: {chunk.document_name}\")\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["import_documents(self, gcs_uri: Optional[str] = None, data_schema='content', branch='default_branch', bigquery_dataset: Optional[str] = None, bigquery_table: Optional[str] = None, bigquery_project_id: Optional[str] = None) -> str","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Args:"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"gcs_uri: Required. List of Cloud Storage URIs to input files. Each URI can be up to 2000 characters long. URIs can match the full object path (for example, gs://bucket/directory/object.json) or a pattern matching one or more files, such as gs://bucket/directory/*.json. A request can contain at most 100 files (or 100,000 files if data_schema is content). Each file can be up to 2 GB (or 100 MB if data_schema is content)."}),"\n",(0,s.jsx)(n.li,{children:"data_schema: Must be one of 'user_event', 'custom' or 'document' if using BigQuery. Default 'content' only for GCS. The schema to use when parsing the data from the source. Supported values for document imports: - document (default): One JSON Document per line. Each document must have a valid Document.id. - content: Unstructured data (e.g. PDF, HTML). Each file matched by input_uris becomes a document, with the ID set to the first 128 bits of SHA256(URI) encoded as a hex string. - custom: One custom data JSON per row in arbitrary format that conforms to the defined Schema of the data store. This can only be used by the GENERIC Data Store vertical. - csv: A CSV file with header conforming to the defined Schema of the data store. Each entry after the header is imported as a Document. This can only be used by the GENERIC Data Store vertical. Supported values for user event imports: - user_event (default): One JSON UserEvent per line."}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["process_chunks(self, response: google.cloud.discoveryengine_v1alpha.types.search_service.SearchResponse)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);