"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7745],{9732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=t(4848),i=t(8453);const r={},s="init.py",c={id:"sunholo/vertex/init",title:"init.py",description:"Source: sunholo/vertex/init.py",source:"@site/docs/sunholo/vertex/init.md",sourceDirName:"sunholo/vertex",slug:"/sunholo/vertex/init",permalink:"/docs/sunholo/vertex/init",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/sunholo/vertex/init.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"genai_functions.py",permalink:"/docs/sunholo/vertex/genai_functions"},next:{title:"memory_tools.py",permalink:"/docs/sunholo/vertex/memory_tools"}},l={},a=[{value:"Functions",id:"functions",level:2},{value:"init_vertex(gcp_config=None, location=&#39;eu&#39;, project_id=None)",id:"init_vertexgcp_confignone-locationeu-project_idnone",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"initpy",children:"init.py"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Source"}),": ",(0,o.jsx)(n.a,{href:"https://github.com/sunholo-data/sunholo-py/blob/main/sunholo/vertex/init.py",children:"sunholo/vertex/init.py"})]}),"\n",(0,o.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,o.jsx)(n.h3,{id:"init_vertexgcp_confignone-locationeu-project_idnone",children:"init_vertex(gcp_config=None, location='eu', project_id=None)"}),"\n",(0,o.jsx)(n.p,{children:"Initializes the Vertex AI environment using the provided Google Cloud Platform configuration."}),"\n",(0,o.jsx)(n.p,{children:"This function configures the Vertex AI API session with specified project and location details\nfrom the gcp_config dictionary. It is essential to call this function at the beginning of a session\nbefore performing any operations related to Vertex AI."}),"\n",(0,o.jsx)(n.p,{children:"Parameters:\ngcp_config (dict): A dictionary containing the Google Cloud Platform configuration with keys:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"'project_id': The Google Cloud project ID to configure for Vertex AI."}),"\n",(0,o.jsx)(n.li,{children:"'location': The Google Cloud region to configure for Vertex AI.\nIf default None it will derive it from the environment"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Raises:\nKeyError: If the necessary keys ('project_id' or 'location') are missing in the gcp_config dictionary.\nModuleNotFoundError: If the Vertex AI module is not installed and needs to be installed via pip."}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"gcp_config = {\n     'project_id': 'your-project-id',\n     'location': 'us-central1'\n}\ninit_vertex(gcp_config)\n# This will initialize the Vertex AI session with the provided project ID and location.\n\nNote:\n    Ensure that the 'vertexai' module is installed and correctly configured before calling this function.\n    The function assumes that the required 'vertexai' library is available and that the logging setup is already in place.\n\n### init_genai()\n\nThere are some features that come to the google.generativeai first, \nwhich needs to be authenticated via a GOOGLE_API_KEY environment variable, \ncreated via the Google AI Console at https://aistudio.google.com/app/apikey \n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);