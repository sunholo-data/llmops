"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[892],{4082:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(4848),i=t(8453);const s={},r="Pirate Talk",o={id:"VACs/pirate_talk",title:"Pirate Talk",description:"This VAC is a 'hello world' Langserve app that is taken from the official piratetalk Langserve template.",source:"@site/docs/VACs/pirate_talk.md",sourceDirName:"VACs",slug:"/VACs/pirate_talk",permalink:"/docs/VACs/pirate_talk",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/VACs/pirate_talk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EduVAC",permalink:"/docs/VACs/eduvac"},next:{title:"VertexAI Grounding with LlamaIndex and Google Search",permalink:"/docs/VACs/vertex-llamaindex"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Config yaml",id:"config-yaml",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"pirate-talk",children:"Pirate Talk"})}),"\n",(0,n.jsxs)(a.p,{children:["This VAC is a 'hello world' Langserve app that is taken from the official ",(0,n.jsx)(a.a,{href:"https://templates.langchain.com/?integration_name=pirate-speak",children:"pirate_talk Langserve template"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"It demonstrates how to deploy a Langserve application on Multivac, and the configuration needed.  Its a good starter VAC to try first."}),"\n",(0,n.jsx)(a.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(a.p,{children:"This VAC application translates your questions into pirate speak! Ohh arr."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(3935).A+"",width:"1376",height:"948"})}),"\n",(0,n.jsx)(a.h2,{id:"config-yaml",children:"Config yaml"}),"\n",(0,n.jsx)(a.p,{children:"An explanation of the configuration is below:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"vac.pirate_speak"}),' - this is the key that all other configurations are derived from, referred to as "vector_name"']}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"llm"}),": The configuration specifies an LLM model.  You can swap this for any model supported by ",(0,n.jsx)(a.code,{children:"sunholo"})," so that it can work with the ",(0,n.jsx)(a.code,{children:"pick_llm()"})," function via ",(0,n.jsx)(a.code,{children:'model = pick_llm("pirate_speak")'}),"."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"agent"}),": Required to specify what type of agent this VAC is, which determines which Cloud Run or other runtime is queried via the endpoints"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"display_name"}),": Used by end clients such as the webapp for the UI."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"avatar_url"}),": Used by end clients such as the webapp for the UI."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"description"}),": Used by end clients such as the webapp for the UI."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"tags"}),": Used to specify which users are authorized to see this VAC, defined via ",(0,n.jsx)(a.code,{children:"users_config.yaml"})]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",children:'kind: vacConfig\napiVersion: v1\nvac:\n    pirate_speak:\n        llm: openai\n        agent: langserve\n        #agent_url: you can specify manually your URL endpoint here, or on Multivac it will be populated automatically\n        display_name: Pirate Speak\n        tags: ["free"] # for user access, matches users_config.yaml\n        avatar_url: https://avatars.githubusercontent.com/u/126733545?s=48&v=4\n        description: A Langserve demo using a demo [Langchain Template](https://templates.langchain.com/) that will repeat back what you say but in a pirate accent.  Ooh argh me hearties!  Langchain templates cover many different GenAI use cases and all can be streamed to Multivac clients.\n'})})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3935:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/vac-pirate-speak-d81a9474af9df325006a4227218a109c.png"},8453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var n=t(6540);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);