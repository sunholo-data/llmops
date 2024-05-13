"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5950],{5690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(4848),o=n(8453);const s={},i="Config files",r={id:"config",title:"Config files",description:"A main aim for the sunholo library is to have as much of the functionality needed for GenAI apps available via configuration files, rather than within the code.",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/docs/config",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/config.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pirate Talk",permalink:"/docs/VACs/pirate_talk"},next:{title:"chat_history.py",permalink:"/docs/sunholo/agents/chat_history"}},c={},l=[{value:"llm_config.yaml",id:"llm_configyaml",level:2},{value:"agent_config.yaml",id:"agent_configyaml",level:2},{value:"users_config.yaml",id:"users_configyaml",level:2},{value:"prompt_config.yaml",id:"prompt_configyaml",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"config-files",children:"Config files"}),"\n",(0,a.jsxs)(t.p,{children:["A main aim for the ",(0,a.jsx)(t.code,{children:"sunholo"})," library is to have as much of the functionality needed for GenAI apps available via configuration files, rather than within the code."]}),"\n",(0,a.jsx)(t.p,{children:"This allows you to set up new instances of GenAI apps quickly, and experiment with new models, vectorstores and other features."}),"\n",(0,a.jsx)(t.p,{children:"There are various config files available that control different features such as VAC behaviour and user access.  This is very much still a work in progress so the format may change in the future."}),"\n",(0,a.jsx)(t.h2,{id:"llm_configyaml",children:"llm_config.yaml"}),"\n",(0,a.jsx)(t.p,{children:"This is the main day to day configuration file that is used to set LLMs, databases and VAC tags.  An example is shown here:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'kind: vacConfig\napiVersion: v1\nvac:\n    pirate_speak:\n        llm: openai\n        agent: langserve\n        #agent_url: you can specify manually your URL endpoint here, or on Multivac it will be populated automatically\n        display_name: Pirate Speak\n        tags: ["free"] # for user access, matches users_config.yaml\n        avatar_url: https://avatars.githubusercontent.com/u/126733545?s=48&v=4\n        description: A Langserve demo using a demo [Langchain Template](https://templates.langchain.com/) that will repeat back what you say but in a pirate accent.  Ooh argh me hearties!  Langchain templates cover many different GenAI use cases and all can be streamed to Multivac clients.\n    csv_agent:\n        llm: openai\n        agent: langserve\n        #agent_url: you can specify manually your URL endpoint here, or on Multivac it will be populated automatically\n        display_name: Titanic\n        tags: ["free"]\n        avatar_url: https://avatars.githubusercontent.com/u/126733545?s=48&v=4\n        description: A Langserve demo using a demo [Langchain Template](https://templates.langchain.com/) that lets you ask questions over structured data like a database.  In this case, a local database contains statistics from the Titanic disaster passengers.  Langchain templates cover many different GenAI use cases and all can be streamed to Multivac clients.\n    rag_lance:\n        llm: openai\n        agent: langserve\n        display_name: Simple RAG\n        tags: ["free"]\n        avatar_url: https://avatars.githubusercontent.com/u/126733545?s=48&v=4\n        description: A Langserve demo using a demo [Langchain Template](https://templates.langchain.com/) that lets you ask questions over unstructured data.\n        memory: # you can have multiple destinations for your embedding pipelines\n            - lancedb-vectorstore:\n                vectorstore: lancedb\n                provider: LanceDB \n    finetuned_model:\n        llm: model_garden # an example of a custom model such as Llama3 served by Vertex Model Garden\n        agent: langserve\n        tags: ["clientA"]\n        gcp_config: # details of the Model Garden endpoint\n            project_id: model_garden_project\n            endpoint_id: 12345678\n            location: europe-west1\n    image_talk:\n        llm: vertex\n        model: gemini-1.0-pro-vision\n        agent: langserve\n        upload: # example of accepting uploads\n            mime_types:\n            - image\n        display_name: Talk to Images\n        tags: ["free"]\n        avatar_url: https://avatars.githubusercontent.com/u/1342004?s=200&v=4\n        description: A picture is worth a thousand words, so upload your picture and ask your question to the Gemini Pro Vision model.  Images are remembered for your conversation until you upload another.  This offers powerful applications, which you can get a feel for via the [Gemini Pro Vision docs](https://cloud.google.com/vertex-ai/docs/generative-ai/multimodal/design-multimodal-prompts) \n    eduvac:\n        llm: anthropic\n        model: claude-3-opus-20240229\n        agent: eduvac # needs to match multivac service name\n        agent_type: langserve # if you are using langserve instance for each VAC, you can specify its derived from langserve\n        display_name: Edu-VAC\n        tags: ["free"] # set to "eduvac" if you want to restrict usage to only users tagged "eduvac" in users_config.yaml\n        avatar_url: ../public/eduvac.png\n        description: Educate yourself in your own personal documents via guided learning from Eduvac, the ever patient teacher bot. Use search filters to examine available syllabus or upload your own documents to get started.\n        upload:   # to accept uploads of private documents to a bucket\n            mime_types: # pick which mime types got to which bucket\n            - all\n            buckets:\n                all: your-bucket\n        buckets: # pick which bucket takes default uploads\n            raw: your-bucket\n        docstore: # this needs to be valid to have document storage\n            - alloydb-docstore: # you can have multiple doc stores\n                type: alloydb\n        alloydb_config: # example if using alloydb as your doc or vectorstore\n            project_id: your-projectid\n            region: europe-west1\n            cluster: your-cluster\n            instance: primary-instance-1\n    sample_vector:\n        llm: azure # using Azure OpenAI endpoints\n        model: gpt-4-turbo-1106-preview\n        agent: langserve\n        display_name: Sample vector for tests\n        avatar_url: https://avatars.githubusercontent.com/u/126733545?s=48&v=4\n        description: An Azure OpenAI example\n        memory: # you can have multiple vectorstore destinations\n            - lancedb-vectorstore:\n                vectorstore: lancedb\n                provider: LanceDB \n        embedder:\n            llm: azure\n        azure: # your azure details\n            azure_openai_endpoint: https://openai-central-blah.openai.azure.com/\n            openai_api_version: 2024-02-01\n            embed_model: text-embedding-ada-002 # or text-embedding-3-large\n'})}),"\n",(0,a.jsx)(t.h2,{id:"agent_configyaml",children:"agent_config.yaml"}),"\n",(0,a.jsx)(t.p,{children:"This configuration file sets up standard endpoints for each type of agent, corresponding to a VAC running."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'# this config file controls the behaviour of agent-types such as langserve, controlling what endpoints are used\ndefault:\n  stream: "{stem}/stream"\n  invoke: "{stem}/invoke"\n\nlangserve:\n  stream: "{stem}/{vector_name}/stream"\n  invoke: "{stem}/{vector_name}/invoke"\n  input_schema: "{stem}/{vector_name}/input_schema"\n  output_schema: "{stem}/{vector_name}/output_schema"\n  config_schema: "{stem}/{vector_name}/config_schema"\n  batch: "{stem}/{vector_name}/batch"\n  stream_log: "{stem}/{vector_name}/stream_log"\n\nedmonbrain:\n  stream: "{stem}/qna/streaming/{vector_name}"\n  invoke: "{stem}/qna/{vector_name}"\n\nopeninterpreter:\n  stream: "{stem}/qna/streaming/{vector_name}"\n  invoke: "{stem}/qna/{vector_name}"\n\ncrewai:\n  stream: "{stem}/qna/streaming/{vector_name}"\n  invoke: "{stem}/qna/{vector_name}"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"users_configyaml",children:"users_config.yaml"}),"\n",(0,a.jsxs)(t.p,{children:["This lets you do user authentication by matching the tags within ",(0,a.jsx)(t.code,{children:"llm_config.yaml"})," with user email domains"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'user_groups:\n  - name: "admin"\n    domain: "sunholo.com"\n    role: "ADMIN"\n    tags:\n      - "admin_user"\n\n  - name: "eduvac"\n    emails:\n      - "multivac@sunholo.com"\n    role: "eduvac"\n    tags:\n      - "eduvac"\n\n  # Example of another firm using both domain and specific emails\n  - name: "another_firm"\n    domain: "anotherfirm.com"\n    emails:\n      - "specialcase@anotherfirm.com"\n    role: "partner"\n    tags:\n      - "partner"\n\ndefault_user:\n  role: "USER"\n  tags:\n    - "user"\n\n'})}),"\n",(0,a.jsx)(t.h2,{id:"prompt_configyaml",children:"prompt_config.yaml"}),"\n",(0,a.jsx)(t.p,{children:"This file contains various prompts for a vector_name of a VAC.  It is preferred that the native Langfuse prompt library is used, but this yaml file is a backup if its not available via Langfuse."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"kind: promptConfig\napiVersion: v1\nprompts:\n  eduvac:\n    intro: |\n      You are an expert teacher versed with the latest techniques to enhance learning with your students.\n      Todays date is {the_date}\n      Please create an assignment for the student that will demonstrate their understanding of the text. \n      Instruct the student to think of you as a coach who will supply formative feedback in an iterative process which ends when you are convinced that the student fully understands the text, and is able to apply said understanding into the assignment.\n      Formative feedback focuses on helping students get better, as opposed to evaluation. \n      Eg, formative feedback helps students become aware of what they need to improve in relation to both knowledge, competences and capabilities. \n      It also helps them clarify what resources they might need in order to improve, or what support they might need. \n      A formative approach also means that the teacher (here, that means you, the AI) becomes a coach, who helps with suggestions for good learning strategies.\n      You also need to establish the student's level before you come up with an assignment. \n      You can quiz the student and ask them to self-assess. \n      When creating the assignment, you need to have established the zone of proximal development (as described by Vygotsky), so that the assignment can be tailored to this specific student's needs. \n    template: |\n      Answer the question below with the help of the following context.  The context contains chunks of data from what is hoped to be relevant documents from the database along with some metadata on where the document chunks have come from:\n      # Context\n      {metadata}\n      # End Context\n\n      This is the conversation so far - it is important to make sure you are creating responses based off the correct stage of the learning process as described above - e.g. creating an assignment, assessing the students answers, coaching the student or helping assess the student to see what questions they require.\n      # Chat Summary\n      ...{chat_summary}\n      # Chat History\n      ...{chat_history}\n      # End of Chat History\n\n      If you have made an earlier plan in your chat history, briefly restate it and update where you are in that plan to make sure to keep yourself on track and to not forget the original purpose of your answers.\n\n      If the context or chat history does not help as not relevant to the question, answer with your best guess, but say its not related to the context.\n      When replying, indicate how certain you are of your answer.\n      If the question is specifying a particular document, use the context metadata to prioritise which context you should be looking within to help with your answer.\n      When using a particular chunk of information from the context in your answer, you are encouraged to quote directly from the chunk, and use the chunk metadata to create references to the file it came from. Its important to replicate precisely the metadata objectId basename of the source in particular, as this will be used to create hyperlinks to the document in post-processing.\n      Reference objectId's after your answer using wiki style references e.g. numbers in the text [1], the numbers are then explained at the bottom like this example: - [1] the_file1.pdf - the objectId is both indicated via ## above a chunk and underneath each chunk within the metadata.\n      Use 'objectId' metadata for your source references which contains the file ref you need: folder1/folder2/the_file1.pdf e.g. use only the file basename and do not include any directory paths.\n      For complex questions, your first task is to restate the question asked to communicate any assumptions, then outline a step by step strategy on how you can best answer the question, then answer following your strategy in a logical and detailed manner.\n      If you have made a plan, then execute it in the same reply if possible.  You can also ask for more details if needed from the user, or if unsure, ask the user if they agree with your plan and wish for you to continue. Use then the plan in your chat history to execute as many steps as possible.\n      If no plan has been made, include in your reply why you think the question was asked, and offer to answer follow up questions linked to those reasons.\n\n      If no context is provided then you can not help: ask the user to provide some content to base the lesson upon, either via uploading a document or specifying a document from the database.\n      Always cite your sources.\n\n      If the context chunk you use has metadata for 'image_gsurls' then this is a list of images for that chunk that will help illustrate your answer.  \n      Include them within your answer text as a raw gs:// url. Any gs:// image URI you add will be translated to an image the user can view post processing.\n      Question: {question}\n      Your Answer:\n    chat_summary: |\n      Summarise the conversation below:\n      # Chat History\n      {chat_history}\n      # End Chat History\n      If in the chat history is a lesson plan, make sure to restate it in your summary so it won't get lost, and indicate what has been done so far and what is left to do.\n      Your Summary of the chat history above:\n    summarise_known_question: |\n      You are an teacher assistant to a student and teacher who has has this input from the student:\n      {question}\n\n      # Chat history (teacher and student)\n      {chat_history}\n      # End Chat History\n\n      # Context (what the student is learning)\n      {context}\n      # end context\n      Assess if the student has completed the latest tasks set by the teacher, with recommendations on what the student and teacher should do next. \n      Use the context to formulate what material the student and teacher will need to examine next, and create a summary of information you think both will be needed next.\n      Include text snippets from the context below in your summary, and include why you think it is relevant to the question.\n\n      Your Summary:\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(6540);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);