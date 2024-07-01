"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9615],{5213:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=t(4848),a=t(8453);const i={},s="Creating a Flask VAC app",r={id:"howto/flask_app",title:"Creating a Flask VAC app",description:"As well as using frameworks such as Langserve to create HTTP versions of your GenAI applications, you can customise your own Flask VAC applications for production.  Using the below sunholo boilerplate templates allows you to shortcut to GenAI features such as analytics and streaming, and hook into Multivac supported UIs such as the webapp (https://multivac.sunholo.com/), APIs, or chat bots such as Discord, Teams and GChat.",source:"@site/docs/howto/flask_app.md",sourceDirName:"howto",slug:"/howto/flask_app",permalink:"/docs/howto/flask_app",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/howto/flask_app.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Embedding Pipelines",permalink:"/docs/howto/embedding"},next:{title:"Creating a grounded Vertex app",permalink:"/docs/howto/grounded_vertex"}},c={},l=[{value:"Creating your GenAI VAC",id:"creating-your-genai-vac",level:2},{value:"vac_stream()",id:"vac_stream",level:3},{value:"vac()",id:"vac",level:3},{value:"Attach images",id:"attach-images",level:2},{value:"/openai/v1/chat/completions",id:"openaiv1chatcompletions",level:2},{value:"Config",id:"config",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Into Multivac Cloud",id:"into-multivac-cloud",level:3},{value:"Locally",id:"locally",level:3},{value:"Your own Cloud",id:"your-own-cloud",level:3},{value:"Testing",id:"testing",level:2},{value:"Private VACs",id:"private-vacs",level:3},{value:"Creating new VAC instances",id:"creating-new-vac-instances",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"creating-a-flask-vac-app",children:"Creating a Flask VAC app"}),"\n",(0,o.jsxs)(n.p,{children:["As well as using frameworks such as ",(0,o.jsx)(n.a,{href:"/docs/integrations/langchain",children:"Langserve"})," to create HTTP versions of your GenAI applications, you can customise your own Flask VAC applications for production.  Using the below ",(0,o.jsx)(n.code,{children:"sunholo"})," boilerplate templates allows you to shortcut to GenAI features such as analytics and streaming, and hook into Multivac supported UIs such as the webapp (",(0,o.jsx)(n.a,{href:"https://multivac.sunholo.com/",children:"https://multivac.sunholo.com/"}),"), APIs, or chat bots such as Discord, Teams and GChat."]}),"\n",(0,o.jsx)(n.h2,{id:"creating-your-genai-vac",children:"Creating your GenAI VAC"}),"\n",(0,o.jsxs)(n.p,{children:["To start, create a Flask VAC application app.py - this can be autogenerated via ",(0,o.jsx)(n.code,{children:"sunholo init"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# app.py\nimport os\nfrom sunholo.agents import register_qna_routes, create_app\nfrom vac_service import vac_stream, vac\n\napp = create_app(__name__)\n\n# Register the Q&A routes with the specific interpreter functions\n# creates /vac/<vector_name> and /vac/streaming/<vector_name>\nregister_qna_routes(app, vac_stream, vac)\n\nif __name__ == "__main__":\n    import os\n    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 8080)), debug=True)\n'})}),"\n",(0,o.jsx)(n.p,{children:"This registers endpoints for your Flask app:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/vac/<vector_name>"})," - a dynamic endpoint that you can substitute the vector_names configured in your ",(0,o.jsx)(n.code,{children:"vacConfig"})," file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/vac/streaming/<vector_name>"})," - a streaming endpoint"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/"})," - an 'OK' for you to check its running"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/openai/v1/chat/completions/<vector_name>"})," - an OpenAI compatible API endpoint so you can use Multivac with systems that support it."]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The OpenAI compatible endpoint means you can proxy requests to other model providers e.g. Gemini from applications that support OpenAI endpoints.  It calls the underlying VAC just the same as via the other endpoints."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The unique logic for your app will lie within the ",(0,o.jsx)(n.code,{children:"vac_service.py"})," file within the same folder.  An example is shown below for the LlamaIndex VertexAI integration."]}),"\n",(0,o.jsxs)(n.p,{children:["You need to create two functions ",(0,o.jsx)(n.code,{children:"vac_stream"})," and ",(0,o.jsx)(n.code,{children:"vac"})," which the framework will use to create the endpoint GenAI logic."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# vac_service.py\nfrom sunholo.logging import setup_logging\nfrom sunholo.utils.config import load_config_key\nfrom sunholo.llamaindex.import_files import init_vertex, get_corpus\n\nfrom vertexai.preview import rag\nfrom vertexai.preview.generative_models import GenerativeModel, Tool\nimport vertexai\n\n# streams logs to Cloud Logging for analytics and debugging features\nlog = setup_logging("vertex-genai")\n\n# used as within the streaming generator function\ndef vac_stream(question: str, vector_name: str, chat_history=[], callback=None, **kwargs):\n\n    rag_model = create_model(vector_name)\n\n    response = rag_model.generate_content(question, stream=True)\n    for chunk in response:\n        callback.on_llm_new_token(token=chunk.text)\n    \n    callback.on_llm_end(response="End stream")\n\n\n# used for batched responses\ndef vac(question: str, vector_name, chat_history=[], **kwargs):\n    # Create a gemini-pro model instance\n    # https://ai.google.dev/api/python/google/generativeai/GenerativeModel#streaming\n    rag_model = create_model(vector_name)\n\n    response = rag_model.generate_content(question)\n\n    log.info(f"Got response: {response}")\n\n    return {"answer": response.text}\n\n# this is common to both endpoints so has its own function\ndef create_model(vector_name):\n    gcp_config = load_config_key("gcp_config", vector_name=vector_name, kind="vacConfig")\n    if not gcp_config:\n        raise ValueError(f"Need config.{vector_name}.gcp_config to configure llamaindex on VertexAI")\n\n    # helper function that inits vertex using the vacConfig yaml file\n    init_vertex(gcp_config)\n\n    # helper function that fetches the corpus from the vacConfig yaml file\n    corpus = get_corpus(gcp_config)\n\n    log.info(f"Got corpus: {corpus}")\n\n    if not corpus:\n        raise ValueError("Could not find a valid corpus: {corpus}")\n\n    # vertexai implementation\n    # see https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/rag-api\n    rag_retrieval_tool = Tool.from_retrieval(\n        retrieval=rag.Retrieval(\n            source=rag.VertexRagStore(\n                rag_corpora=[corpus.name],  # Currently only 1 corpus is allowed.\n                similarity_top_k=10,  # Optional\n            ),\n        )\n    )\n\n    # load model type from vacConfig file.\n    model = load_config_key("model", vector_name=vector_name, kind="vacConfig")\n    \n    # Create a gemini-pro model instance\n    # https://ai.google.dev/api/python/google/generativeai/GenerativeModel\n    rag_model = GenerativeModel(\n        model_name=model or "gemini-1.0-pro-002", tools=[rag_retrieval_tool]\n    )\n\n    # return model ready for vac() and vac_stream()\n    return rag_model\n'})}),"\n",(0,o.jsx)(n.h3,{id:"vac_stream",children:"vac_stream()"}),"\n",(0,o.jsx)(n.p,{children:"This will use the streaming functions and requires:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["to have at least the arguments: ",(0,o.jsx)(n.code,{children:"[question: str, vector_name: str, chat_history=[], callback=None, **kwargs]"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"**kwargs"})," may include functions from the clients such as userId or sessionId"]}),"\n",(0,o.jsxs)(n.li,{children:["to use ",(0,o.jsx)(n.code,{children:"callback.on_llm_new_token()"})," for each new token created by the streaming function you are using."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can also optionally use ",(0,o.jsx)(n.code,{children:"callback.on_llm_end()"})," for any cleanup applications, and return a dictionary after all streaming is done with the ",(0,o.jsx)(n.code,{children:"answer"})," key.  This will be streamed with the ",(0,o.jsx)(n.code,{children:'###JSON_START###{"answer": "my genai output"}###JSON_END###'})," delimiters so the end clients can process it properly."]}),"\n",(0,o.jsx)(n.h3,{id:"vac",children:"vac()"}),"\n",(0,o.jsxs)(n.p,{children:["This is a non-streaming variant, and needs to return a dictionary with at least the ",(0,o.jsx)(n.code,{children:"answer"})," key e.g. ",(0,o.jsx)(n.code,{children:'{"answer": "my genai output"}'})]}),"\n",(0,o.jsx)(n.h2,{id:"attach-images",children:"Attach images"}),"\n",(0,o.jsx)(n.p,{children:"Most GenAI models like a storage location for input, not the actual image.  If you want to upload an image with your request, use form data pointing to your file: it will be pre-processed before sending to the model by uploading it to the upload bucket (if available)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'export FLASK_URL=https://your-deployed-url.run.app/\ncurl $FLASK_URL/vac/personal_llama \\\n  -F "file=@application/webapp/public/eduvac.png" \\\n  -F "user_input=Can you describe this image?"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"openaiv1chatcompletions",children:"/openai/v1/chat/completions"}),"\n",(0,o.jsxs)(n.p,{children:["If you leave the ",(0,o.jsx)(n.code,{children:"<vector_name>"}),' blank, then the proxy will attempt to look in the config for the "model" name']}),"\n",(0,o.jsxs)(n.p,{children:["e.g. if calling ",(0,o.jsx)(n.code,{children:"/openai/v1/chat/completions/"}),' then in the config you will need a VAC called "gpt-4o"']}),"\n",(0,o.jsxs)(n.p,{children:["Otherwise you can use ",(0,o.jsx)(n.code,{children:"/openai/v1/chat/completions/<vector_name>"})," to tailor the request to the VAC eg."]}),"\n",(0,o.jsxs)(n.p,{children:["This is useful for using tools such as ",(0,o.jsx)(n.a,{href:"https://jan.ai/",children:"Jan.ai"})," as a UI for Multivac:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"alt text",src:t(6194).A+"",width:"2340",height:"1164"})}),"\n",(0,o.jsxs)(n.p,{children:["See the ",(0,o.jsx)(n.a,{href:"../integrations/jan",children:"Jan.ai integration documentation"})," for more information."]}),"\n",(0,o.jsxs)(n.p,{children:['If authentication is being used in your requests, you will be adding a "Authorization Bearer ',(0,o.jsx)(n.code,{children:"API_KEY"}),'" header.']}),"\n",(0,o.jsxs)(n.p,{children:["When using Multivac Cloud it expects usually an ",(0,o.jsx)(n.code,{children:"x-api-key"})," for authentication, so to handle authentication the endpoints service needs to be available to check the Authentication token is the ",(0,o.jsx)(n.code,{children:"MULTIVAC_API_KEY"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ENV _ENDPOINTS_HOST=yourendpointshost.app.com\n"})}),"\n",(0,o.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,o.jsxs)(n.p,{children:["An example configuration file is shown below.  Read more about ",(0,o.jsx)(n.a,{href:"/docs/config",children:"Configuration"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"kind: vacConfig\napiVersion: v1\nvac:\n  personal_llama:\n    llm: vertex\n    model: gemini-1.5-pro-preview-0514\n    agent: vertex-genai # this should match the agent_config.yaml\n    display_name: LlamaIndex via Vertex AI\n    memory:\n      - llamaindex-native:\n          vectorstore: llamaindex # setup for indexing documents\n    gcp_config:\n      project_id: llamaindex_project\n      location: europe-west1\n      rag_id: 4611686018427387904 # created via rag.create for now     \n    chunker:\n      chunk_size: 1000\n      overlap: 200\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The app will use the default agent configuration within ",(0,o.jsx)(n.code,{children:"agentConfig"}),", which includes an OpenAI compatible endpoint, a VAC unique streaming endpoint, a batch endpoint and some health check endpoints."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# agent_config.yaml\nkind: agentConfig\napiVersion: v2\nagents:\n  default:\n    post:\n      stream: \"{stem}/vac/streaming/{vector_name}\"\n      invoke: \"{stem}/vac/{vector_name}\"\n      openai: \"{stem}/openai/v1/chat/completions\"\n      openai-vac: \"{stem}/openai/v1/chat/completions/{vector_name}\"\n    get:\n      home: \"{stem}/\"\n      health: \"{stem}/health\"\n    response:\n      invoke:\n        '200':\n          description: Successful invocation response\n          schema:\n            type: object\n            properties:\n              answer:\n                type: string\n              source_documents:\n                type: array\n                items:\n                  type: object\n                  properties:\n                    page_content:\n                      type: string\n                    metadata:\n                      type: string\n      stream:\n        '200':\n          description: Successful stream response\n          schema:\n            type: string\n      openai:\n        '200':\n          description: Successful OpenAI response\n          schema:\n            type: object\n            properties:\n              id:\n                type: string\n              object:\n                type: string\n              created:\n                type: string\n              model:\n                type: string\n              system_fingerprint:\n                type: string\n              choices:\n                type: array\n                items:\n                  type: object\n                  properties:\n                    index:\n                      type: integer\n                    delta:\n                      type: object\n                      properties:\n                        content:\n                          type: string\n                    logprobs:\n                      type: string\n                      nullable: true\n                    finish_reason:\n                      type: string\n                      nullable: true\n              usage:\n                type: object\n                properties:\n                  prompt_tokens:\n                    type: integer\n                  completion_tokens:\n                    type: integer\n                  total_tokens:\n                    type: integer\n      openai-vac:\n        '200':\n          description: Successful OpenAI VAC response\n          schema:\n            type: object\n            properties:\n              id:\n                type: string\n              object:\n                type: string\n              created:\n                type: string\n              model:\n                type: string\n              system_fingerprint:\n                type: string\n              choices:\n                type: array\n                items:\n                  type: object\n                  properties:\n                    index:\n                      type: integer\n                    message:\n                      type: object\n                      properties:\n                        role:\n                          type: string\n                        content:\n                          type: string\n                    logprobs:\n                      type: string\n                      nullable: true\n                    finish_reason:\n                      type: string\n                      nullable: true\n              usage:\n                type: object\n                properties:\n                  prompt_tokens:\n                    type: integer\n                  completion_tokens:\n                    type: integer\n                  total_tokens:\n                    type: integer\n      home:\n        '200':\n          description: OK\n          schema:\n            type: string\n      health:\n        '200':\n          description: A healthy response\n          schema:\n            type: object\n            properties:\n              status:\n                type: string\n        '500':\n          description: Unhealthy response\n          schema:\n            type: string\n"})}),"\n",(0,o.jsxs)(n.p,{children:["However, if you add other endpoints or wish to specify it directly, use the VAC name and add those endpoints to the ",(0,o.jsx)(n.code,{children:"agent_config.yaml"})," file"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'# agent_config.yaml\nkind: agentConfig\napiVersion: v1\nagents:\n  vertex-genai:\n    post:\n      stream: "{stem}/vac/streaming/{vector_name}"\n      invoke: "{stem}/vac/{vector_name}"\n    get:\n      home: "{stem}"\n    response:\n      stream:\n        \'200\':\n          description: An OK stream\n          schema:\n            type: string\n    ...\n'})}),"\n",(0,o.jsx)(n.h2,{id:"deploy",children:"Deploy"}),"\n",(0,o.jsx)(n.p,{children:"TBD"}),"\n",(0,o.jsx)(n.h3,{id:"into-multivac-cloud",children:"Into Multivac Cloud"}),"\n",(0,o.jsx)(n.h3,{id:"locally",children:"Locally"}),"\n",(0,o.jsx)(n.h3,{id:"your-own-cloud",children:"Your own Cloud"}),"\n",(0,o.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,o.jsxs)(n.p,{children:["Assuming you have a ",(0,o.jsx)(n.code,{children:"vacConfig"})," setup with the ",(0,o.jsx)(n.code,{children:"personal_llama"})," VAC name, you can then call the app with the following curl commands:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'export FLASK_URL=https://your-deployed-url.run.app/\ncurl ${FLASK_URL}/vac/personal_llama \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "user_input": "What do you know about MLOps?"\n}\'\n# {"answer":"MLOps stands for machine learning operations. It is a methodology for the engineering of machine learning systems that combines the machine learning element, ML, and the operations element, Ops. MLOps promotes the formalization of important parts of the machine learning system\\u2019s construction, standardizing many steps along the way. Some of the key tasks that MLOps addresses include training models, processing data, deploying models, and monitoring models.","trace":"158cd3ba-fabd-4295-bdf3-6be335673ecb","trace_url":"https://langfuse-url.run.app/trace/158cd3ba-fabd-4295-bdf3-6be335673ecb"}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"private-vacs",children:"Private VACs"}),"\n",(0,o.jsxs)(n.p,{children:["If the VAC is setup for non-public access within the VPC, then use the following ",(0,o.jsx)(n.code,{children:"gcloud"})," command to proxy the VAC service:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# proxy the vertex-genai Cloud Run service if not public\ngcloud run services proxy vertex-genai --region=europe-west1\n"})}),"\n",(0,o.jsx)(n.h2,{id:"creating-new-vac-instances",children:"Creating new VAC instances"}),"\n",(0,o.jsxs)(n.p,{children:["If you want a new endpoint, add another entry to the ",(0,o.jsx)(n.code,{children:"vacConfig"})," e.g. ",(0,o.jsx)(n.code,{children:"personal_llama2"})]}),"\n",(0,o.jsx)(n.p,{children:"An example configuration file is shown below."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"kind: vacConfig\napiVersion: v1\nvac:\n  personal_llama:\n    llm: vertex\n    model: gemini-1.5-pro-preview-0514\n    agent: vertex-genai\n    display_name: LlamaIndex via Vertex AI\n    memory:\n      - llamaindex-native:\n          vectorstore: llamaindex\n    gcp_config:\n      project_id: llamaindex_project\n      location: us-central1\n      rag_id: 4611686018427387904 # created via rag.create for now     \n    chunker:\n      chunk_size: 1000\n      overlap: 200\n  personal_llama2:\n    llm: vertex\n    model: gemini-1.5-pro-preview-0514\n    agent: vertex-genai\n    display_name: Another LlamaIndex via Vertex AI\n    memory:\n      - llamaindex-native:\n          vectorstore: llamaindex\n    gcp_config:\n      project_id: llamaindex_project\n      location: europe-west1\n      rag_id: 2323123123213 # created via rag.create for now     \n    chunker:\n      chunk_size: 1000\n      overlap: 200\n"})}),"\n",(0,o.jsx)(n.p,{children:"...and call the same URL with your new VAC:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'curl ${FLASK_URL}/vac/personal_llama2 \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "user_input": "What do you know about MLOps?"\n}\'\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},6194:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/jan-config-3938144f990a5bec684608499b187b3d.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);