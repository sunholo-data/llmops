"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1222],{7288:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=i(4848),t=i(8453);const o={},s="VertexAI Grounding with LlamaIndex and Google Search",l={id:"VACs/vertex-llamaindex",title:"VertexAI Grounding with LlamaIndex and Google Search",description:"LlamaIndex is available within the VertexAI platform via a serverless integration",source:"@site/docs/VACs/vertex-llamaindex.md",sourceDirName:"VACs",slug:"/VACs/vertex-llamaindex",permalink:"/docs/VACs/vertex-llamaindex",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/VACs/vertex-llamaindex.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pirate Talk",permalink:"/docs/VACs/pirate_talk"},next:{title:"Sunholo CLI",permalink:"/docs/cli"}},r={},d=[{value:"Setup",id:"setup",level:2},{value:"File Indexing",id:"file-indexing",level:2},{value:"Config",id:"config",level:2},{value:"Test calls",id:"test-calls",level:2},{value:"Locally",id:"locally",level:3},{value:"Deployed",id:"deployed",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"vertexai-grounding-with-llamaindex-and-google-search",children:"VertexAI Grounding with LlamaIndex and Google Search"})}),"\n",(0,a.jsxs)(n.p,{children:["LlamaIndex is available within the ",(0,a.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/rag-api",children:"VertexAI platform via a serverless integration"})]}),"\n",(0,a.jsxs)(n.p,{children:["Grounding is also available using a ",(0,a.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/ground-gemini#ground-gemini-web-python_vertex_ai_sdk",children:"Google Search"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"sunholo"})," integrates with this application by providing HTTP endpoints for the indexing or new documents placed within Google Cloud Storage and via streaming or static VAC endpoints.  Whilst only some embedding features are implemented at the moment, the LlamaIndex on VertexAI integration takes care of a lot of aspects such as chunking and embedding, with no server to set up.  This makes it a good choice for quick and low-maintenance RAG applications."]}),"\n",(0,a.jsxs)(n.p,{children:["The code for this VAC is available at the ",(0,a.jsx)(n.a,{href:"https://github.com/sunholo-data/vacs-public/tree/dev/vertex-genai",children:"Public VAC GitHub repository"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(n.p,{children:"You need a corpus ID created when you make one (only available via API at the moment):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import vertexai\nfrom vertexai.preview import rag\n\nvertexai.init(project=<project_id>, location="us-central1")\ncorpus = rag.create_corpus(display_name=..., description=...)\nprint(corpus)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Use the project_id, location and corpus_id within your config below."}),"\n",(0,a.jsxs)(n.p,{children:["You need these ",(0,a.jsx)(n.code,{children:"sunholo"})," modules:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"pip install sunholo[gcp,http]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to test using the CLI also install ",(0,a.jsx)(n.code,{children:"sunholo[cli]"})]}),"\n",(0,a.jsx)(n.p,{children:"e.g"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"pip install sunholo[gcp,http,cli]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"file-indexing",children:"File Indexing"}),"\n",(0,a.jsxs)(n.p,{children:["Once your configuration is loaded within Multivac, embed and index them by adding files to your Google Cloud Storage bucket to have the files indexed, via ",(0,a.jsx)(n.a,{href:"../sunholo/llamaindex/import_files",children:(0,a.jsx)(n.code,{children:"llamaindex.import_files.py"})}),".  This supports large amounts of files."]}),"\n",(0,a.jsxs)(n.p,{children:["For more details on how to set up indexing, see the ",(0,a.jsx)(n.a,{href:"../howto/embedding",children:"embedding pipeline documentation"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,a.jsx)(n.p,{children:"To use LlamaIndex on VertexAI, set up a memory store to send data to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"llm"}),' - LlamaIndex on VertexAI is only available on "vertex"']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"model"})," - Needs to be one of the supported models listed ",(0,a.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/rag-api",children:"here"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"agent"})," - ",(0,a.jsx)(n.code,{children:"vertex-genai"})," is the VAC code shown in this example"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"display_name"})," - for UI integrations"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"description"})," - for UI integrations"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"grounding"})," - Set to add Google Search grounding to the context of the answers"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"memory"})," - configure the ",(0,a.jsx)(n.code,{children:"vectorstore"})," setting to ",(0,a.jsx)(n.code,{children:"llamaindex"})," to trigger sending data to the VertexAI rag corpus.  You can also send data to other memory types, such as ",(0,a.jsx)(n.code,{children:"alloydb"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"gcp_config"})," - settings that determine which VertexAI rag instance the data is sent to.  Only available in ",(0,a.jsx)(n.code,{children:"us-central1"})," at the moment.  ",(0,a.jsx)(n.code,{children:"rag_id"})," is the numeric identifier that you get when using ",(0,a.jsx)(n.code,{children:"rag.create()"})," to make the RAG corpus."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"chunker"})," - settings to configure on how LlamaIndex splits the data."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"kind: vacConfig\napiVersion: v1\ngcp_config: # reached via vac='global'\n  project_id: your-gcp-project\n  location: europe-west1\nvac:  \n  personal_llama:\n    llm: vertex\n    model: gemini-1.5-pro-preview-0514\n    agent: vertex-genai\n    display_name: Gemini with grounding via Google Search and LlamaIndex\n    description: Using LlamaIndex RAG and Google Search to ground the answers\n    grounding:\n      google_search: true # if true will use Google Search in grounding results\n    memory:\n      - llamaindex-native:\n          vectorstore: llamaindex\n          rag_id: 123123132 # you create this during setup\n    gcp_config:\n      project_id: your-gcp-project\n      location: us-central1   # llamaindex is only available in us-central1 atm\n    chunker:\n      chunk_size: 1000\n      overlap: 200\n"})}),"\n",(0,a.jsx)(n.h2,{id:"test-calls",children:"Test calls"}),"\n",(0,a.jsx)(n.h3,{id:"locally",children:"Locally"}),"\n",(0,a.jsx)(n.p,{children:"Start up the Flask server:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"python vertex-genai/app.py\n"})}),"\n",(0,a.jsx)(n.p,{children:"curl query against the URLs:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'curl http://127.0.0.1:8080/vac/personal_llama \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "user_input": "What do you know about MLOps?"\n}\'\n\ncurl http://127.0.0.1:8080/vac/streaming/personal_llama \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "user_input": "What do you know about MLOps?"\n}\'\n'})}),"\n",(0,a.jsx)(n.h3,{id:"deployed",children:"Deployed"}),"\n",(0,a.jsxs)(n.p,{children:["If deployed on Multivac, you can use the ",(0,a.jsx)(n.code,{children:"sunholo"})," CLI to chat with an instance via a proxy for the authenticated calls:"]}),"\n",(0,a.jsxs)(n.p,{children:["Assuming the same config as above, which has a ",(0,a.jsx)(n.a,{href:"https://services.google.com/fh/files/misc/practitioners_guide_to_mlops_whitepaper.pdf",children:"practioners guide to MLOPs"})," within its Llamaindex:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sunholo vac chat personal_llama  \n\nVAC Proxies - `sunholo proxy list`                           \n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 VAC          \u2503 Port \u2503 PID   \u2503 URL                   \u2503 Local \u2503 Logs                  \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 vertex-genai \u2502 8080 \u2502 48434 \u2502 http://127.0.0.1:8080 \u2502 No    \u2502 No log file specified \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Gemini with grounding via Google Search and LlamaIndex \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n\u2502 Starting VAC chat session                                                                                                \u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500 stream: http://127.0.0.1:8080/vac/streaming/personal_llama invoke: http://127.0.0.1:8080/vac/personal_llama \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\nYou: what is MLOps?\n\u273a Thinking...\n"})}),"\n",(0,a.jsx)(n.p,{children:"The reply below takes the grounding from LlamaIndex:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"personal_llama: MLOps, short for Machine Learning Operations, is a methodology bridging the gap between machine learning application \ndevelopment and their real-world deployment and operation. It aims to streamline and automate the entire lifecycle of an ML \nmodel, from its initial development to deployment and ongoing maintenance. \n\nHere's a breakdown of what MLOps encompasses:\n\n* **Standardized Processes:** MLOps establishes standardized workflows and best practices for building, deploying, and \nmanaging ML systems, ensuring consistency and efficiency.\n* **Automation:** It emphasizes automating repetitive tasks within the ML lifecycle, like model training, testing, and \ndeployment, to accelerate development and reduce errors.\n* **Reliability and Scalability:**  MLOps promotes practices that guarantee the reliability, scalability, and performance of\nML models in production environments. \n* **Continuous Improvement:** By incorporating monitoring, logging, and feedback mechanisms, MLOps enables continuous model \nimprovement and adaptation over time.\n\n**In essence, MLOps combines the best of software engineering and machine learning to deliver ML solutions in a robust, \nscalable, and automated manner.** \n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"})}),"\n",(0,a.jsx)(n.p,{children:"Testing the Google Search grounding:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"You: what happened this week in the run up to the UK election?\n\u273a Thinking...\n\npersonal_llama: Combining the information provided:\n\nWhile I cannot access real-time information to confirm specific news from last week, it's likely that news regarding the UK \ngeneral election included:\n\n* **Reform UK launching their campaign in Clacton.** This suggests the party is actively campaigning in specific areas.\n* **The Liberal Democrats announcing an NHS funding pledge.**  This indicates parties are revealing key policy points in \ntheir election manifestos. \n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var a=i(6540);const t={},o=a.createContext(t);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);