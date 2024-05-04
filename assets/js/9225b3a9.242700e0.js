"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[950],{5690:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=a(4848),o=a(8453);const s={},i="Config files",r={id:"config",title:"Config files",description:"A main aim for the sunholo library is to have as much of the functionality needed for GenAI apps available via configuration files, rather than within the code.",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/docs/config",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/config.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Functions",permalink:"/docs/function-reference"}},c={},l=[{value:"llm_config.yaml",id:"llm_configyaml",level:2},{value:"agent_config.yaml",id:"agent_configyaml",level:2},{value:"users_config.yaml",id:"users_configyaml",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"config-files",children:"Config files"}),"\n",(0,t.jsxs)(n.p,{children:["A main aim for the ",(0,t.jsx)(n.code,{children:"sunholo"})," library is to have as much of the functionality needed for GenAI apps available via configuration files, rather than within the code."]}),"\n",(0,t.jsx)(n.p,{children:"This allows you to set up new instances of GenAI apps quickly, and experiment with new models, vectorstores and other features."}),"\n",(0,t.jsx)(n.p,{children:"There are various config files available that control different features such as VAC behaviour and user access.  This is very much still a work in progress so the format may change in the future."}),"\n",(0,t.jsx)(n.h2,{id:"llm_configyaml",children:"llm_config.yaml"}),"\n",(0,t.jsx)(n.p,{children:"This is the main day to day configuration file that is used to set LLMs, databases and VAC tags.  An example is shown here:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'kind: vacConfig\napiVersion: v1\nvac:\n    pirate_speak:\n        llm: openai\n        agent: langserve\n        #agent_url: you can specify manually your URL endpoint here, or on Multivac it will be populated automatically\n        display_name: Pirate Speak\n        tags: ["free"] # for user access, matches users_config.yaml\n        avatar_url: https://avatars.githubusercontent.com/u/126733545?s=48&v=4\n        description: A Langserve demo using a demo [Langchain Template](https://templates.langchain.com/) that will repeat back what you say but in a pirate accent.  Ooh argh me hearties!  Langchain templates cover many different GenAI use cases and all can be streamed to Multivac clients.\n    csv_agent:\n        llm: openai\n        agent: langserve\n        #agent_url: you can specify manually your URL endpoint here, or on Multivac it will be populated automatically\n        display_name: Titanic\n        tags: ["free"]\n        avatar_url: https://avatars.githubusercontent.com/u/126733545?s=48&v=4\n        description: A Langserve demo using a demo [Langchain Template](https://templates.langchain.com/) that lets you ask questions over structured data like a database.  In this case, a local database contains statistics from the Titanic disaster passengers.  Langchain templates cover many different GenAI use cases and all can be streamed to Multivac clients.\n    rag_lance:\n        llm: openai\n        agent: langserve\n        display_name: Simple RAG\n        tags: ["free"]\n        avatar_url: https://avatars.githubusercontent.com/u/126733545?s=48&v=4\n        description: A Langserve demo using a demo [Langchain Template](https://templates.langchain.com/) that lets you ask questions over unstructured data.\n        memory: # you can have multiple destinations for your embedding pipelines\n            - lancedb-vectorstore:\n                vectorstore: lancedb\n                provider: LanceDB \n    finetuned_model:\n        llm: model_garden # an example of a custom model such as Llama3 served by Vertex Model Garden\n        agent: langserve\n        tags: ["clientA"]\n        gcp_config: # details of the Model Garden endpoint\n            project_id: model_garden_project\n            endpoint_id: 12345678\n            location: europe-west1\n    image_talk:\n        llm: vertex\n        model: gemini-1.0-pro-vision\n        agent: langserve\n        upload: # example of accepting uploads\n            mime_types:\n            - image\n        display_name: Talk to Images\n        tags: ["free"]\n        avatar_url: https://avatars.githubusercontent.com/u/1342004?s=200&v=4\n        description: A picture is worth a thousand words, so upload your picture and ask your question to the Gemini Pro Vision model.  Images are remembered for your conversation until you upload another.  This offers powerful applications, which you can get a feel for via the [Gemini Pro Vision docs](https://cloud.google.com/vertex-ai/docs/generative-ai/multimodal/design-multimodal-prompts) \n    eduvac:\n        llm: anthropic\n        model: claude-3-opus-20240229\n        agent: eduvac # needs to match multivac service name\n        agent_type: langserve # if you are using langserve instance for each VAC, you can specify its derived from langserve\n        display_name: Edu-VAC\n        tags: ["free"] # set to "eduvac" if you want to restrict usage to only users tagged "eduvac" in users_config.yaml\n        avatar_url: ../public/eduvac.png\n        description: Educate yourself in your own personal documents via guided learning from Eduvac, the ever patient teacher bot. Use search filters to examine available syllabus or upload your own documents to get started.\n        upload:   # to accept uploads of private documents to a bucket\n            mime_types: # pick which mime types got to which bucket\n            - all\n            buckets:\n                all: your-bucket\n        buckets: # pick which bucket takes default uploads\n            raw: your-bucket\n        docstore: # this needs to be valid to have document storage\n            - alloydb-docstore: # you can have multiple doc stores\n                type: alloydb\n        alloydb_config: # example if using alloydb as your doc or vectorstore\n            project_id: your-projectid\n            region: europe-west1\n            cluster: your-cluster\n            instance: primary-instance-1\n    sample_vector:\n        llm: azure # using Azure OpenAI endpoints\n        model: gpt-4-turbo-1106-preview\n        agent: langserve\n        display_name: Sample vector for tests\n        avatar_url: https://avatars.githubusercontent.com/u/126733545?s=48&v=4\n        description: An Azure OpenAI example\n        memory: # you can have multiple vectorstore destinations\n            - lancedb-vectorstore:\n                vectorstore: lancedb\n                provider: LanceDB \n        embedder:\n            llm: azure\n        azure: # your azure details\n            azure_openai_endpoint: https://openai-central-blah.openai.azure.com/\n            openai_api_version: 2024-02-01\n            embed_model: text-embedding-ada-002 # or text-embedding-3-large\n'})}),"\n",(0,t.jsx)(n.h2,{id:"agent_configyaml",children:"agent_config.yaml"}),"\n",(0,t.jsx)(n.p,{children:"This configuration file sets up standard endpoints for each type of agent, corresponding to a VAC running."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# this config file controls the behaviour of agent-types such as langserve, controlling what endpoints are used\ndefault:\n  stream: "{stem}/stream"\n  invoke: "{stem}/invoke"\n\nlangserve:\n  stream: "{stem}/{vector_name}/stream"\n  invoke: "{stem}/{vector_name}/invoke"\n  input_schema: "{stem}/{vector_name}/input_schema"\n  output_schema: "{stem}/{vector_name}/output_schema"\n  config_schema: "{stem}/{vector_name}/config_schema"\n  batch: "{stem}/{vector_name}/batch"\n  stream_log: "{stem}/{vector_name}/stream_log"\n\nedmonbrain:\n  stream: "{stem}/qna/streaming/{vector_name}"\n  invoke: "{stem}/qna/{vector_name}"\n\nopeninterpreter:\n  stream: "{stem}/qna/streaming/{vector_name}"\n  invoke: "{stem}/qna/{vector_name}"\n\ncrewai:\n  stream: "{stem}/qna/streaming/{vector_name}"\n  invoke: "{stem}/qna/{vector_name}"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"users_configyaml",children:"users_config.yaml"}),"\n",(0,t.jsxs)(n.p,{children:["This lets you do user authentication by matching the tags within ",(0,t.jsx)(n.code,{children:"llm_config.yaml"})," with user email domains"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'user_groups:\n  - name: "admin"\n    domain: "sunholo.com"\n    role: "ADMIN"\n    tags:\n      - "admin_user"\n\n  - name: "eduvac"\n    emails:\n      - "multivac@sunholo.com"\n    role: "eduvac"\n    tags:\n      - "eduvac"\n\n  # Example of another firm using both domain and specific emails\n  - name: "another_firm"\n    domain: "anotherfirm.com"\n    emails:\n      - "specialcase@anotherfirm.com"\n    role: "partner"\n    tags:\n      - "partner"\n\ndefault_user:\n  role: "USER"\n  tags:\n    - "user"\n\nfree_user:\n  role: "USER-FREE"\n  tags:\n    - "user"\n    - "free"\n'})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var t=a(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);