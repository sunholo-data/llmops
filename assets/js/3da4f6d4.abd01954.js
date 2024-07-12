"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7597],{1645:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=s(4848),l=s(8453);const o={},t="extensions_class.py",r={id:"sunholo/vertex/extensions_class",title:"extensions_class.py",description:"Source: sunholo/vertex/extensionsclass.py",source:"@site/docs/sunholo/vertex/extensions_class.md",sourceDirName:"sunholo/vertex",slug:"/sunholo/vertex/extensions_class",permalink:"/docs/sunholo/vertex/extensions_class",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/sunholo/vertex/extensions_class.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"extensions_call.py",permalink:"/docs/sunholo/vertex/extensions_call"},next:{title:"init.py",permalink:"/docs/sunholo/vertex/init"}},a={},c=[{value:"Classes",id:"classes",level:2},{value:"VertexAIExtensions",id:"vertexaiextensions",level:3}];function x(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"extensions_classpy",children:"extensions_class.py"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Source"}),": ",(0,i.jsx)(n.a,{href:"https://github.com/sunholo-data/sunholo-py/blob/main/sunholo/vertex/extensions_class.py",children:"sunholo/vertex/extensions_class.py"})]}),"\n",(0,i.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,i.jsx)(n.h3,{id:"vertexaiextensions",children:"VertexAIExtensions"}),"\n",(0,i.jsx)(n.p,{children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from sunholo.vertex import VertexAIExtensions\nvex = VertexAIExtensions(project_id='your-project')\nvex.list_extensions()\n# [{'resource_name': 'projects/374404277595/locations/us-central1/extensions/770924776838397952', \n#   'display_name': 'Code Interpreter', \n#   'description': 'N/A'}]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Creating an extension example as per:\n",(0,i.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/generative-ai/docs/extensions/create-extension",children:"https://cloud.google.com/vertex-ai/generative-ai/docs/extensions/create-extension"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"## validates before upload\nvex.upload_openapi_file(\"your-extension-name.yaml\")\nvex.openapi_file_gcs\n# 'gs://your-extensions-bucket/your-extension-name.yaml'\n\n## load in examples to be used by creation later\nvex.load_tool_use_examples('your-examples.yaml')\n\nvex.create_extension(\n    \"My New Extension\", \n    description=\"Querying the VAC above my database\", \n    service_account='sa-serviceaccount@my-project.iam.gserviceaccount.com')\n"})}),"\n",(0,i.jsx)(n.p,{children:"Call the extension"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'operation_params = {"input": {"question":"This needs to be in same schema as your openapi spec"}\nvex.execute_extension("an_operation_id_from_your_openai_spec", \n                      operation_params = operation_params)\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"init"}),"(self, project_id=None)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Initialize self.  See help(type(self)) for accurate signature."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"create_extension(self, display_name: str, description: str, open_api_file: str = None, tool_example_file: str = None, runtime_config: dict = None, service_account: str = None, bucket_name: str = None, vac: str = None)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"create_extension_manifest(self, display_name, description, open_api_gcs_uri: str, service_account: str)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"execute_code_extension(self, query: str, filenames: list[str] = None, gcs_files: list[str] = None, bucket_name: str = None)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"execute_extension(self, operation_id: str, operation_params: dict, extension_id: str = None, extension_display_name: str = None, vac: str = None)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"get_auth_token(self)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"list_extensions(self)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"load_tool_use_examples(self, filename: str)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"parse_files_to_html(self, outputFiles, save_files_locally=True)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"process_response(self, response: dict, save_file_name=None) -> str"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"update_tool_use_examples_via_patch(self)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"upload_openapi_file(self, filename: str, vac: str = None)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"upload_to_gcs(self, filename)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"validate_openapi(self, filename)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var i=s(6540);const l={},o=i.createContext(l);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);