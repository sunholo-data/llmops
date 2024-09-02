"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1294],{5933:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=s(4848),l=s(8453);const t={},i="vac_routes.py",a={id:"sunholo/agents/flask/vac_routes",title:"vac_routes.py",description:"Source: sunholo/agents/flask/vacroutes.py",source:"@site/docs/sunholo/agents/flask/vac_routes.md",sourceDirName:"sunholo/agents/flask",slug:"/sunholo/agents/flask/vac_routes",permalink:"/docs/sunholo/agents/flask/vac_routes",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/sunholo/agents/flask/vac_routes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"qna_routes.py",permalink:"/docs/sunholo/agents/flask/qna_routes"},next:{title:"langserve.py",permalink:"/docs/sunholo/agents/langserve"}},o={},c=[{value:"Classes",id:"classes",level:2},{value:"VACRoutes",id:"vacroutes",level:3}];function d(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"vac_routespy",children:"vac_routes.py"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"Source"}),": ",(0,r.jsx)(e.a,{href:"https://github.com/sunholo-data/sunholo-py/blob/main/sunholo/agents/flask/vac_routes.py",children:"sunholo/agents/flask/vac_routes.py"})]}),"\n",(0,r.jsx)(e.h2,{id:"classes",children:"Classes"}),"\n",(0,r.jsx)(e.h3,{id:"vacroutes",children:"VACRoutes"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Usage Example:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'from agents.flask import VACRoutes\n\napp = Flask(__name__)\n\ndef stream_interpreter(question, vector_name, chat_history, **kwargs):\n    # Implement your streaming logic\n    ...\n\ndef vac_interpreter(question, vector_name, chat_history, **kwargs):\n    # Implement your static VAC logic\n    ...\n\nvac_routes = VACRoutes(app, stream_interpreter, vac_interpreter)\n\nif __name__ == "__main__":\n    app.run(debug=True)\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"init"}),"(self, app, stream_interpreter, vac_interpreter, additional_routes=None)"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Initialize self.  See help(type(self)) for accurate signature."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"check_authentication(self)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"create_langfuse_trace(self, request, vector_name, trace_id)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"handle_file_upload(self, file, vector_name)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"handle_openai_compatible_endpoint(self, vector_name=None)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"handle_process_vac(self, vector_name)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"handle_stream_vac(self, vector_name)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"health(self)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"home(self)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"make_openai_response(self, user_message, vector_name, answer)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"openai_health_endpoint()"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"prep_vac(self, request, vector_name)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"register_additional_routes(self)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Registers additional custom routes provided during initialization."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'from flask import Flask, jsonify\nfrom agents.flask import VACRoutes\n\napp = Flask(__name__)\n\ndef stream_interpreter(question, vector_name, chat_history, **kwargs):\n    # Implement your streaming logic\n    ...\n\ndef vac_interpreter(question, vector_name, chat_history, **kwargs):\n    # Implement your static VAC logic\n    ...\n\ndef custom_handler():\n    return jsonify({"message": "Custom route!"})\n\ncustom_routes = [\n    {\n        "rule": "/custom",\n        "methods": ["GET"],\n        "handler": custom_handler\n    }\n]\n\nvac_routes = VACRoutes(app, stream_interpreter, vac_interpreter, additional_routes=custom_routes)\n\nif __name__ == "__main__":\n    app.run(debug=True)\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["register_routes(self)","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Registers all the VAC routes for the Flask application."}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>a});var r=s(6540);const l={},t=r.createContext(l);function i(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);