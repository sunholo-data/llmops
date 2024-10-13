"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8488],{8028:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>i});var t=o(4848),a=o(8453);const s={},l="Talk to AlloyDB",r={id:"howto/talk_to_alloydb",title:"Talk to AlloyDB",description:"This is an example of a VAC that communicates with an AlloyDB database via natural language, by using tools to search and fetch documents.",source:"@site/docs/howto/talk_to_alloydb.md",sourceDirName:"howto",slug:"/howto/talk_to_alloydb",permalink:"/docs/howto/talk_to_alloydb",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/howto/talk_to_alloydb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Streaming",permalink:"/docs/howto/streaming"},next:{title:"Integrations",permalink:"/docs/integrations/"}},c={},i=[{value:"Config - config/vac_config.yaml",id:"config---configvac_configyaml",level:2},{value:"HTTP Flask App - app.py",id:"http-flask-app---apppy",level:2},{value:"Creating the VAC logic - vac_service.py",id:"creating-the-vac-logic---vac_servicepy",level:2},{value:"Calling AlloyDB via genai tools - talk_to_alloydb.py",id:"calling-alloydb-via-genai-tools---talk_to_alloydbpy",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"talk-to-alloydb",children:"Talk to AlloyDB"})}),"\n",(0,t.jsx)(n.p,{children:"This is an example of a VAC that communicates with an AlloyDB database via natural language, by using tools to search and fetch documents."}),"\n",(0,t.jsx)(n.h2,{id:"config---configvac_configyaml",children:"Config - config/vac_config.yaml"}),"\n",(0,t.jsxs)(n.p,{children:["A vacConfig is first set up in a local ",(0,t.jsx)(n.code,{children:"config/"})," directory.  This determines which database AlloyDB will use.  This is picked up by the ",(0,t.jsx)(n.code,{children:"ConfigManager"})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"kind: vacConfig\napiVersion: v1\nvac:\n  demo_alloydb:\n    llm: vertex\n    model: gemini-1.5-pro\n    model_quick: gemini-1.5-flash-001\n    agent: vertex-genai\n    display_name: Speak to AlloydB\n    description: Demo Speak to AlloyDB VAC\n    tools:\n       alloydb:\n          vac: my_alloydb_db # which db to call\n    alloydb_config:\n      project_id: multivac-demoalloydb\n      region: europe-west1\n      cluster: multivac-alloydb-cluster\n      instance: primary-instance\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"http-flask-app---apppy",children:"HTTP Flask App - app.py"}),"\n",(0,t.jsxs)(n.p,{children:["A simple Flask app is set up using the ",(0,t.jsx)(n.code,{children:"VACRoutes"})," class to create endpoints such as streaming and OpenAI compatible URLs."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import os\n\nfrom sunholo.agents import VACRoutes, create_app\n\nfrom vac_service import vac_stream\n\napp = create_app(__name__)\n\n# Register the Q&A routes with the specific interpreter functions\n# creates /vac/<vector_name> and /vac/streaming/<vector_name>\nVACRoutes(app, vac_stream, vac)\n\nif __name__ == "__main__":\n    import os\n    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 8080)), debug=True)\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"creating-the-vac-logic---vac_servicepy",children:"Creating the VAC logic - vac_service.py"}),"\n",(0,t.jsx)(n.p,{children:"For this example we shall only stream the GenAI results:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from sunholo.utils import ConfigManager\nfrom sunholo.vertex import init_genai\n\nfrom talk_to_alloydb import get_alloydb_model, process_alloydb_funcs\n\ndef vac_stream(question: str, vector_name:str, chat_history=[], callback=None, **kwargs):\n\n    init_genai()\n    config=ConfigManager(vector_name)\n\n    orchestrator = get_alloydb_model(config)\n\n    chat = orchestrator.start_chat()\n\n    model = get_alloydb_model(config)\n\n    content = [\n      (\n        "The user has asked a question which may or may not be answered by the documents in your database."\n        f"<question>{question}</question>"\n      )\n    ]\n    response = chat.send_message(content)\n    parsed_response = process_alloydb_funcs(response, config, output_parts=True)\n\n    executed_response = chat.send_message(parsed_response, stream=True)\n\n    text = ""\n\n    for chunk in executed_response:\n        try:\n            # Concatenate the text parts (if multiple parts exist)\n            token = chunk.text\n        \n            callback.on_llm_new_token(token=token)\n            text += token\n            \n        except ValueError as err:\n            callback.on_llm_new_token(token=str(err))\n\n    callback.on_llm_end(response=text)\n\n    metadata = {\n        "question:": question,\n        "chat_history": chat_history,\n    }\n\n    return {"answer": text, "metadata": metadata}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"calling-alloydb-via-genai-tools---talk_to_alloydbpy",children:"Calling AlloyDB via genai tools - talk_to_alloydb.py"}),"\n",(0,t.jsxs)(n.p,{children:["This holds the genai function processing, the function definitions created via the inherited class from ",(0,t.jsx)(n.code,{children:"GenAIFunctionProcessor"})," and genai model that will use the function as tools."]}),"\n",(0,t.jsxs)(n.p,{children:["The functions are defined to the model via the docstrings, but they are not executed.  Once the function arguments are returned by the model, the ",(0,t.jsx)(n.code,{children:"AlloyDBClient"})," class is used to actually communicate with AlloyDB and extract the results."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from sunholo.database import AlloyDBClient\nfrom sunholo.utils import ConfigManager\nfrom sunholo.genai import GenAIFunctionProcessor\n\n# Example subclass for AlloyDB\nclass AlloyDBFunctionProcessor(GenAIFunctionProcessor):\n    def construct_tools(self) -> dict:\n        tools = self.config.vacConfig("tools")\n        alloydb_tool_config = tools.get("alloydb")\n        vector_name = alloydb_tool_config.get("vac")\n        if not vector_name:\n            log.error("could not process_alloydb_funcs due to no config.tools.alloydb.vac found")\n            return {"Config error in config.tools.alloydb.vac so no results found": None}\n\n        def list_alloydb_sources(sources: list[str], search_type: str = "OR") -> list[str]:\n            """\n            List the document source names e.g. sources=[\'example\'] will match [\'example1.pdf\', \'example2.pdf\'] in the AlloyDB docstore.\n            Will use %ILIKE% to look for source names that match the string given, so split long strings into individual words for broader searches e.g. [\'german\',\'contracts\'] will match more than \'german contracts\'\n\n            Args:\n            sources: list(str) List of sources to fetch from the docstore.  \n            search_type: str (optional) The type of search to perform (e.g., \'OR\', \'AND\')\n            \n            Returns:\n                List of strings showing names of sources in AlloyDB database\n            """\n            adb = AlloyDBClient(self.config, db=os.environ.get("ALLOYDB_DB"))\n            return adb.get_sources_from_docstore(\n                sources=sources,\n                vector_name=vector_name,\n                search_type=search_type,\n                just_source_name=True\n            )\n\n        def get_alloydb_source_text(source: str) -> dict:\n            """\n            From the passed source string finds a single file that is an exact match of the name, then fetches the stored text and metadata\n            \n            Args:\n            source: str The exact match name of the source file to fetch.  Will only match one file.\n            \n            Returns:\n                A dictionary of the source text and the metadata, or None if no file exists of this name.\n            """\n            adb = AlloyDBClient(self.config)\n            source_data = adb.get_document_from_docstore(\n                source=source,\n                vector_name=vector_name\n            )\n            return source_data\n\n        return {\n            "list_alloydb_sources": list_alloydb_sources,\n            "get_alloydb_source_text": get_alloydb_source_text,\n        }\n\ndef process_alloydb_funcs(full_response, config: ConfigManager, output_parts=False):\n\n    alloydb_processor = AlloyDBFunctionProcessor(config)\n\n    return alloydb_processor.process_funcs(full_response)\n\ndef get_alloydb_model(config: ConfigManager):\n\n    alloydb_processor = AlloyDBFunctionProcessor(config)\n    \n    tools = config.vacConfig(\'tools\')\n\n    if tools and tools.get(\'alloydb\'):\n        alloydb_model = alloydb_processor.get_model(\n            system_instruction=(\n                    "You are a helpful AlloyDB agent that helps users search and extract documents from the database. "\n                    "Use the list_sources_in_docstore tool to determine what files are available and the get_single_source_text_from_docstore tool to fetch the actual text and metadata"\n                )\n        )\n\n        if alloydb_model:\n            return alloydb_model\n\n    log.error("Error initializing alloydb model")    \n    return None\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var t=o(6540);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);