"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2309],{8648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(4848),o=t(8453);const a={},i="Vertex AI",s={id:"integrations/vertexai",title:"Vertex AI",description:"Vertex AI Extensions",source:"@site/docs/integrations/vertexai.md",sourceDirName:"integrations",slug:"/integrations/vertexai",permalink:"/docs/integrations/vertexai",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/integrations/vertexai.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Playwright",permalink:"/docs/integrations/playwright"},next:{title:"Multivac Cloud",permalink:"/docs/multivac/"}},c={},l=[{value:"Vertex AI Extensions",id:"vertex-ai-extensions",level:2},{value:"VertexAIExtensions()",id:"vertexaiextensions",level:3},{value:"Vertex AI Search",id:"vertex-ai-search",level:2},{value:"LlamaIndex on Vertex AI",id:"llamaindex-on-vertex-ai",level:2},{value:"Calling Vertex AI Search and LlamaIndex",id:"calling-vertex-ai-search-and-llamaindex",level:3},{value:"Calling Vertex AI Search via Langchain",id:"calling-vertex-ai-search-via-langchain",level:3},{value:"Vertex Model Garden",id:"vertex-model-garden",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"vertex-ai",children:"Vertex AI"})}),"\n",(0,r.jsx)(n.h2,{id:"vertex-ai-extensions",children:"Vertex AI Extensions"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/generative-ai/docs/extensions/overview",children:"Vertex AI Extensions"})," are API endpoints your GenAI applications can use to import data not within the model.  Extensions often wrap another API."]}),"\n",(0,r.jsx)(n.p,{children:"An example is the Code Extension, which lets you execute code in your GenAI workflow."}),"\n",(0,r.jsx)(n.p,{children:"Since each VAC running has its own API endpoints, they are candidates for becoming Vertex AI Extensions to be called from other VACs or other GenAI applications not running upon Multivac Cloud.  Vertex AI Extensions have different authentication options ranging from free to an API key or OAuth2."}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VertexAIExtensions"})," class provides methods for executing, creating and deploying Vertex AI extensions."]}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"extensions"})," within your ",(0,r.jsx)(n.code,{children:"vacConfig"})," to use specific extensions in your VAC:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  my_extension_powered_vac:\n    llm: vertex\n    model: gemini-1.5-pro-001\n    agent: vertex-genai\n    extensions:\n      - operation_id: post_edmonbrain_invoke\n        vac: edmonbrain # optional - if extension is calling a vac then this is used to determine the URL for the extension\n        extension_display_name: \'Edmonbrain Database\' # specify this or extension_id\n        #extension_id: 123123123\n        operation_params: # helps get_extension_content() to know what schema will send in data and how to parse it out its reply\n          output:\n            answer: "output.content"  # which key to use for question\n            metadata: "output.metadata"  # which key to use for metadata\n          input:\n            question: ""  # Placeholder for the question parameter\n            chat_history: []  # Optional chat history\n            # other input parameters as needed by your extension\n            animal: ""\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You could then fetch data from the Vertex AI Extension from within your app using the helper function ",(0,r.jsx)(n.a,{href:"../sunholo/vertex/extensions_call",children:"get_extension_content()"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from sunholo.vertex import get_extension_content\nfrom sunholo.utils import ConfigManager\n\nconfig = ConfigManager('my_extension_powered_vac')\nquestion = \"What is in my database that talks about kittens?\")\n\n# maybe other params your extension handles i.e. 'animal'\nextension_content = get_extension_content(question, config=config, animal=\"cat\")\n"})}),"\n",(0,r.jsx)(n.h3,{id:"vertexaiextensions",children:"VertexAIExtensions()"}),"\n",(0,r.jsxs)(n.p,{children:["The underlying ",(0,r.jsx)(n.a,{href:"../sunholo/vertex/extensions_class",children:"VertexAIExtensions()"})," class has methods to aid creating extensions and executing them. See its documentation for more information."]}),"\n",(0,r.jsx)(n.h2,{id:"vertex-ai-search",children:"Vertex AI Search"}),"\n",(0,r.jsx)(n.p,{children:"Formally called Enterprise Search and AI Search and Conversation, this is a data store chunk version."}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"vectorstore: vertex_ai_search"})," to use in your application"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"memory:\n    - discovery_engine_vertex_ai_search:\n        vectorstore: vertex_ai_search # or 'discovery_engine'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"llamaindex-on-vertex-ai",children:"LlamaIndex on Vertex AI"}),"\n",(0,r.jsxs)(n.p,{children:["To use Llama Index on Vertex AI, set it as a ",(0,r.jsx)(n.code,{children:"memory"})," within your ",(0,r.jsx)(n.code,{children:"vacConfig"})," file."]}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"vectorstore: llamaindex"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"memory:\n    - llamaindex-native:\n        vectorstore: llamaindex\n        rag_id: 4611686018427387904 \n"})}),"\n",(0,r.jsx)(n.h3,{id:"calling-vertex-ai-search-and-llamaindex",children:"Calling Vertex AI Search and LlamaIndex"}),"\n",(0,r.jsxs)(n.p,{children:["First add ",(0,r.jsx)(n.code,{children:"vectorstore: llamaindex"})," and/or ",(0,r.jsx)(n.code,{children:"vectorstore: vertex_ai_search"})," to your ",(0,r.jsx)(n.code,{children:"vacConfig"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"kind: vacConfig\napiVersion: v1\nvac:\n  personal_llama:\n    llm: vertex\n    model: gemini-1.5-pro-preview-0514\n    agent: vertex-genai\n    display_name: Gemini with grounding via LlamaIndex and Vertex AI Search\n    memory:\n      - llamaindex-native:\n          vectorstore: llamaindex\n          rag_id: 4611686018427387904  # created via cli beforehand\n      - discovery_engine_vertex_ai_search:\n          vectorstore: vertex_ai_search # or discovery_engine\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then you can call those memory types (",(0,r.jsx)(n.code,{children:"vertex_ai_search"})," or ",(0,r.jsx)(n.code,{children:"llamaindex"}),") in your Vertex GenAI apps like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from sunholo.vertex import init_vertex, get_vertex_memories, vertex_safety\nfrom sunholo.utils import ConfigManager\n\nfrom vertexai.preview.generative_models import GenerativeModel, Tool\n\nvac_name = "must_match_your_vacConfig"\n\n# will init vertex client\ninit_vertex()\n\n# get_vertex_memories() will look in your vacConfig for vertex-ai-search and llamaindex vectorstores\n# Fetches a Vertex AI Search chunked memory (Discovery Engine)\n# also fetches a LlamaIndex chunked memory (LlamaIndexc on Vertex)\nconfig = ConfigManager(vac_name)\ncorpus_tools = get_vertex_memories(config)\n\n# load model from config\nmodel = config.vacConfig("model")\n\n# use vertex Generative model with your tools\nrag_model = GenerativeModel(\n    model_name=model or "gemini-1.5-flash-001", \n    tools=corpus_tools,\n)\n\n# call the model\nresponse = rag_model.generate_content(contents, \n                                        safety_settings=vertex_safety(),\n                                        stream=True)\nfor chunk in response:\n    print(chunk)\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"There is also a class for working with Vertex Corpus, which can be accessed via the CLI or in python code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sunholo llamaindex -h  \nusage: sunholo llamaindex [-h] {create,delete,fetch,find,list} ...\n\npositional arguments:\n  {create,delete,fetch,find,list}\n                        LlamaIndex subcommands\n    create              Create a new corpus\n    delete              Delete a corpus\n    fetch               Fetch a corpus\n    find                Find a corpus\n    list                List all corpus\n\noptional arguments:\n  -h, --help            show this help message and exit\n"})}),"\n",(0,r.jsx)(n.h3,{id:"calling-vertex-ai-search-via-langchain",children:"Calling Vertex AI Search via Langchain"}),"\n",(0,r.jsxs)(n.p,{children:["The above example used the ",(0,r.jsx)(n.code,{children:"vertex"})," python library, but you can use Vertex AI Search from any python script."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"LlamaIndex on Vertex can't be used from non-Vertex framworks, but you can deploy a native LlamaIndex VAC and use it instead - perhaps via Vertex AI Extensions"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A popular GenAI framework is Langchain."}),"\n",(0,r.jsxs)(n.p,{children:["To use Vertex AI Search within Langchain, the ",(0,r.jsx)(n.a,{href:"../sunholo/discovery_engine/discovery_engine_client/",children:(0,r.jsx)(n.code,{children:"DiscoveryEngineClient"})})," can be used to import or export chunks from the Vertex AI Search data store."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"DiscoveryEngine is the old name for Vertex AI Search"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["An example for a ",(0,r.jsx)(n.code,{children:"vac_service.py"})," file is below, based of a ",(0,r.jsx)(n.a,{href:"https://python.langchain.com/v0.2/docs/how_to/qa_chat_history_how_to",children:"Langchain QA Chat to docs tutorial"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from sunholo.components import pick_retriever, get_llm, get_embeddings\nfrom sunholo.discovery_engine.discovery_engine_client import DiscoveryEngineClient\nfrom sunholo.utils.gcp_project import get_gcp_project\nfrom sunholo.utils.parsers import escape_braces\n\ndef vac(question: str, vector_name, chat_history=[], **kwargs):\n\n    llm = get_llm(vector_name)\n    embeddings = get_embeddings(vector_name)\n    retriever = pick_retriever(vector_name, embeddings=embeddings)\n    intro_prompt = load_prompt_from_yaml("intro", prefix=vector_name)\n\n    # create data store client, that has the vector_name VAC as its id\n    de = DiscoveryEngineClient(vector_name, project_id=get_gcp_project())\n\n    chunks = de.get_chunks(question)\n    chunk_prompt = intro_prompt.format(context=chunks)\n\n    # we stuff chunks into a langchain prompt that may contain { } \n    # so use escape_braces() so it doesn\'t break langchain promptTemplate\n    chunked_prompt = escape_braces(chunk_prompt) + "\\n{context}\\nQuestion:{input}\\nYour Answer:\\n"\n\n    message_tuples = [\n        ("system", "You are an assistant bot who is very helpful in your answers"),\n        ("human", {"type": "text", "text": chunked_prompt})\n    ]\n\n    prompt = ChatPromptTemplate.from_messages(message_tuples)\n\n    summarise_prompt   = PromptTemplate.from_template(load_prompt_from_yaml("summarise", prefix=vector_name))\n    \n    question_answer_chain = create_stuff_documents_chain(llm, prompt)\n    history_aware_retriever = create_history_aware_retriever(\n        llm, retriever, summarise_prompt\n    )\n\n    chain = create_retrieval_chain(history_aware_retriever, question_answer_chain)\n    \n    response = chain.invoke({"input": question, "chat_history": chat_history})\n\n    return {"answer": response}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"vertex-model-garden",children:"Vertex Model Garden"}),"\n",(0,r.jsxs)(n.p,{children:["To use GenAI model's deployed to Vertex Model Garden, you can set your 'llm' config and supply an ",(0,r.jsx)(n.code,{children:"endpoint_id"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"vac_model_garden:\n    llm: model_garden\n    gcp_config:\n        project_id: model_garden_project\n        endpoint_id: 12345678\n        location: europe-west1\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);