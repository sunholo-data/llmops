"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7984],{5528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(4848),a=t(8453);const i={},o="EduVAC",r={id:"VACs/eduvac",title:"EduVAC",description:"This VAC is a Langserve app that allows users to interact via a database to learn specific material.  It imports the data or allows users to upload their own files and get the bot to teach them using adaptive learning techniques, tailoring the lesson plan according to the student responses and previous experience.",source:"@site/docs/VACs/eduvac.md",sourceDirName:"VACs",slug:"/VACs/eduvac",permalink:"/docs/VACs/eduvac",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/VACs/eduvac.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Pirate Talk",permalink:"/docs/VACs/pirate_talk"}},c={},l=[{value:"Summary",id:"summary",level:2},{value:"A Pydantic typed Question input schema:",id:"a-pydantic-typed-question-input-schema",level:3},{value:"A configurable model",id:"a-configurable-model",level:3},{value:"prompt including chat history, summary and pulled in document context",id:"prompt-including-chat-history-summary-and-pulled-in-document-context",level:3},{value:"Retrieve from docstore",id:"retrieve-from-docstore",level:3},{value:"Prompt management",id:"prompt-management",level:3},{value:"GenAI analytics",id:"genai-analytics",level:3},{value:"Config yaml",id:"config-yaml",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"eduvac",children:"EduVAC"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(6772).A+"",width:"400",height:"398"})}),"\n",(0,s.jsx)(n.p,{children:"This VAC is a Langserve app that allows users to interact via a database to learn specific material.  It imports the data or allows users to upload their own files and get the bot to teach them using adaptive learning techniques, tailoring the lesson plan according to the student responses and previous experience."}),"\n",(0,s.jsxs)(n.p,{children:["Its code is open-source here: ",(0,s.jsx)(n.a,{href:"https://github.com/sunholo-data/vacs-public/tree/dev/eduvac",children:"https://github.com/sunholo-data/vacs-public/tree/dev/eduvac"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(6046).A+"",width:"2692",height:"1354"})}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"This VAC application incorporates the following features:"}),"\n",(0,s.jsx)(n.h3,{id:"a-pydantic-typed-question-input-schema",children:"A Pydantic typed Question input schema:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class ChatEntry(BaseModel):\n    name: str\n    content: str\n\nclass Question(BaseModel):\n    question: str\n    chat_history:   Optional[List[ChatEntry]] = []\n    source_filters: Optional[List[str]] = []\n    private_docs:   Optional[List[str]] = []\n    source_filters_and_or: Optional[bool] = False\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"sunholo"})," functions within ",(0,s.jsx)(n.a,{href:"..sunholo/agents/langserve",children:(0,s.jsx)(n.code,{children:"sunholo/agents/langserve.py"})})," query this input schema before sending it the payload to make sure it is in the correct format."]}),"\n",(0,s.jsx)(n.h3,{id:"a-configurable-model",children:"A configurable model"}),"\n",(0,s.jsx)(n.p,{children:"This allows the developer to set a choice for model to use, e.g. paid users can use a more expensive but smarter model"}),"\n",(0,s.jsxs)(n.p,{children:["Using Langserve configurables within sunholo streaming functions such as ",(0,s.jsx)(n.a,{href:"../sunholo/streaming",children:(0,s.jsx)(n.code,{children:"generate_proxy_stream_async()"})})," you can configure Langserve attributes on the fly."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'config_model = quick_model.configurable_alternatives(\n    ConfigurableField(\n        id="role",\n        name="User Role",\n        description=(\n            "The user role used to configure which model to use"\n        ),\n    ),\n    eduvac=model,\n    ADMIN=model,\n    USER=quick_model,\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This is called from the Sunholo clients by adding a ",(0,s.jsx)(n.code,{children:"configurable"})," parameter:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'generate = await generate_proxy_stream_async\n    **kwargs,\n    # langchain configurable dictionary\n    configurable={\n        # if user role matches vector_name\n        "role": app_user.metadata["role"],\n        "vector_name": config["name"],\n    })\n'})}),"\n",(0,s.jsx)(n.h3,{id:"prompt-including-chat-history-summary-and-pulled-in-document-context",children:"prompt including chat history, summary and pulled in document context"}),"\n",(0,s.jsx)(n.p,{children:"The main GenAI prompt uses these components to keep the conversation history relevant, and inserts the material that has been selected to learn within the client settings."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'_inputs = RunnableParallel({\n        "metadata": RunnableLambda(get_retriever) | RunnableLambda(format_docs),\n        "question": itemgetter("question"),\n        "chat_history": RunnableLambda(format_chat_history) | itemgetter("chat_history"),\n        "chat_summary": RunnableLambda(format_chat_summary) | summary_branch | itemgetter("chat_summary"),\n    })\n'})}),"\n",(0,s.jsx)(n.h3,{id:"retrieve-from-docstore",children:"Retrieve from docstore"}),"\n",(0,s.jsxs)(n.p,{children:["The initial implementation uses AlloyDB as its storage backend.  It uses ",(0,s.jsx)(n.code,{children:"get_sources_from_docstore_async()"}),"[../sunholo/database/alloydb] to fetch sources based on the ",(0,s.jsx)(n.code,{children:"source_filters"})," and ",(0,s.jsx)(n.code,{children:"source_filters_and_or"})," arguments.  You could replace this with any docstore."]}),"\n",(0,s.jsx)(n.h3,{id:"prompt-management",children:"Prompt management"}),"\n",(0,s.jsxs)(n.p,{children:["The prompts themselves are managed by Langfuse, or a back up yaml file using the ",(0,s.jsx)(n.a,{href:"/docs/config",children:(0,s.jsx)(n.code,{children:"kind: promptConfig"})})," configuration."]}),"\n",(0,s.jsx)(n.h3,{id:"genai-analytics",children:"GenAI analytics"}),"\n",(0,s.jsxs)(n.p,{children:["The GenAI calls are sent to the ",(0,s.jsx)(n.a,{href:"https://langfuse.sunholo.com",children:"Multivac Langfuse instance"})," using the callback function provided via ",(0,s.jsx)(n.a,{href:"../sunholo/langfuse/callback",children:"add_langfuse_tracing()"})]}),"\n",(0,s.jsx)(n.h2,{id:"config-yaml",children:"Config yaml"}),"\n",(0,s.jsx)(n.p,{children:"An explanation of the configuration is below:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vac.eduvac"}),' - this is the key that all other configurations are derived from, referred to as "vector_name"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"llm"}),": The configuration specifies an LLM model.  You can swap this for any model supported by ",(0,s.jsx)(n.code,{children:"sunholo"})," so that it can work with the ",(0,s.jsx)(n.a,{href:"../sunholo/components/llm",children:(0,s.jsx)(n.code,{children:"get_llm()"})})," function via ",(0,s.jsx)(n.code,{children:'model = get_llm("eduvac")'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent"}),": Required to specify what type of agent this VAC is, which determines which Cloud Run or other runtime is queried via the endpoints.  This agent is derived from Langserve."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_type"}),": If the agent is not the same as the ",(0,s.jsx)(n.code,{children:"agent_type"})," then it is specified here to get the correct routing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"display_name"}),": Used by end clients such as the webapp for the UI."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"avatar_url"}),": Used by end clients such as the webapp for the UI."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": Used by end clients such as the webapp for the UI."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tags"}),": Used to specify which users are authorized to see this VAC, defined via ",(0,s.jsx)(n.code,{children:"users_config.yaml"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"upload"}),': This block determines if the user can upload file mime types and where they end up.  For eduvac this is only available for users with the "eduvac" permission tag.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"buckets"}),": Which Google Cloud Storage bucket uploads are available"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"docstore"}),": Whether the VAC has access to a docstore.  Downloads entire documents after parsing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"alloydb"}),": For Eduvac, alloydb is used for chunking and the docstore.  This configures connection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"embedder"}),": Configurations for embedding after chunking.  In this case it specifies which LLM embedding model will be used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chunker"}),": Configurations for chunking.  When new documents are added to the bucket or uploaded, they will be automatically chunked according to the settings here.  In this case, semantic chunking is used which uses an LLM to determine what are optimal chunk sizes."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'kind: vacConfig\napiVersion: v1\nvac:\n  eduvac:\n    llm: anthropic\n    model: claude-3-opus-20240229\n    agent: eduvac # needs to match cloud run service name\n    agent_type: langserve\n    display_name: Edu-VAC\n    tags: ["eduvac", "free"]\n    avatar_url: ../public/eduvac_small.png\n    description: "Educate yourself in your own personal documents via guided learning from Eduvac, the ever patient teacher bot.  Use the settings below ![](../public/settings_chat_small.png) to examine and select available syllabus. If you\'d like to learn from your own private documents, get in touch at multivac@sunholo.com. "\n    upload:  \n      mime_types:\n        - all\n      buckets:\n        all: multivac-eduvac-bucket\n    buckets:\n      raw: multivac-eduvac-bucket\n    docstore:\n      - alloydb-docstore:\n          type: alloydb\n    alloydb_config:\n      project_id: multivac-alloydb\n      region: europe-west1\n      cluster: multivac-alloydb-cluster\n      instance: primary-instance-1\n    embedder:\n      llm: openai # if different from llm is what embedding model uses\n    chunker:\n      type: semantic\n      llm: openai\n      summarise:\n        llm: openai\n        model: gpt-3.5-turbo\n        threshold: 3000\n        model_limit: 30000\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6046:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/eduvac-demo-52f240df3945c1af75c62c17e9f17b27.png"},6772:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/eduvac_small-e9ba4108560ddd97ba70ff2120cebc18.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);