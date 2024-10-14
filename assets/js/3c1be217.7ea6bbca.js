"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5377],{8604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(4848),a=n(8453);n(2800),n(5208);const o={title:"Dynamic UIs in Markdown using GenAI, React Components and MDX",authors:"me",tags:["agents","ux"],image:"https://dev.sunholo.com/assets/images/cognitive-design-ec3719c6b00a22113dd45194210067fa.webp",slug:"/dynamic-output-mdx"},i=void 0,r={permalink:"/blog/dynamic-output-mdx",source:"@site/blog/2024-10-15-dynamic-output-with-mdx.mdx",title:"Dynamic UIs in Markdown using GenAI, React Components and MDX",description:"Every few years I feel the need to change my blogging platform, and each time I am compelled to write a blog post about the exciting new blog tech.  I've moved through Blogpost, Wordpress, Posterous, Jenkins, Hugo and today I'd like to introduce Docusaurus.",date:"2024-10-15T00:00:00.000Z",tags:[{inline:!0,label:"agents",permalink:"/blog/tags/agents"},{inline:!0,label:"ux",permalink:"/blog/tags/ux"}],readingTime:10.145,hasTruncateMarker:!0,authors:[{name:"Mark Edmondson",title:"Founder",url:"https://sunholo.com/",imageURL:"https://code.markedmondson.me/images/gde_avatar.jpg",socials:{github:"https://github.com/MarkEdmondson1234",linkedin:"https://www.linkedin.com/in/markpeteredmondson/"},key:"me",page:null}],frontMatter:{title:"Dynamic UIs in Markdown using GenAI, React Components and MDX",authors:"me",tags:["agents","ux"],image:"https://dev.sunholo.com/assets/images/cognitive-design-ec3719c6b00a22113dd45194210067fa.webp",slug:"/dynamic-output-mdx"},unlisted:!1,nextItem:{title:"Using Cognitive Design to create a BigQuery Agent",permalink:"/blog/cognitive-design"}},l={authorsImageUrls:[void 0]},c=[];function d(e){const t={a:"a",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Every few years I feel the need to change my blogging platform, and each time I am compelled to write a blog post about the exciting new blog tech.  I've moved through Blogpost, Wordpress, Posterous, Jenkins, Hugo and today I'd like to introduce ",(0,s.jsx)(t.a,{href:"https://docusaurus.io/",children:"Docusaurus"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"And since this is a GenAI blog, it makes sense I selected a new blogging platform I feel will support GenAI.  Its a little thought provoking that the current GenAI models work best when working with the most popular languages, frameworks or opinions. They are after all approximating the average of all of human expression.  This means they will do better at English, Python and React than more niche areas such as Danish, R or Vue.  I hope this does not destroy diversity."}),"\n",(0,s.jsx)(t.p,{children:"But it also means that since it seems React is the most popular web frontend framework at the moment, it makes sense to investigate using React within GenAI applications."}),"\n",(0,s.jsx)(t.p,{children:"This Docusaurus blog is written in a flavour of Markdown that supports React Components which made me think: is this a good vessel for creating GenAI output that can dynamically adjust its output format?  Can we go beyond text to dynamic user experiences depending on what they need?  Lets find out."})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2800:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(6540),a=n(4848);const o=e=>{let{data:t,layout:o}=e;const[i,r]=(0,s.useState)(null);return(0,s.useEffect)((()=>{let e=!0;return n.e(1236).then(n.bind(n,1236)).then((t=>{e&&r((()=>t.default))})),()=>{e=!1}}),[]),i?(0,a.jsx)(i,{data:t,layout:o||{title:"Dynamic UI Plot",autosize:!0,margin:{t:30,l:30,r:30,b:30}},useResizeHandler:!0,style:{width:"100%",height:"300px"}}):(0,a.jsx)("div",{children:"Loading Plot..."})}},5208:(e,t,n)=>{n.d(t,{A:()=>l});var s=n(6540),a=n(3134),o=n(7639),i=n(9813),r=n(4848);const l=function(e){let{components:t,debug:n=!1}=e;const{siteConfig:l}=(0,o.A)(),[c,d]=(0,s.useState)(""),[u,m]=(0,s.useState)(""),[h,g]=(0,s.useState)(!1),[p,y]=(0,s.useState)(null),f=l.customFields.multivacApiKey;(0,s.useEffect)((()=>()=>{m(""),y(null),g(!1)}),[]);const w=e=>{e.preventDefault(),c.trim()?n?(async()=>{g(!0),y(null),m("");try{await new Promise((e=>setTimeout(e,2e3))),m("This is normal markdown. <Highlight color=\"#c94435\">This is a highlighted response</Highlight>. This is a CustomPlot component:\n      <CustomPlot data={[\n          { x: [1, 2, 3, 4], y: [10, 15, 13, 17], type: 'scatter', mode: 'lines+markers' }\n      ]} />\n      ")}catch(p){y("An error occurred while fetching data.")}finally{g(!1)}})():(async()=>{if(g(!0),y(null),m(""),!f)return y("Missing API key. Please ensure the 'REACT_APP_MULTIVAC_API_KEY' environment variable is set."),void g(!1);try{const e=await fetch("https://multivac-api.sunholo.com/v1/vertex-genai/vac/streaming/dynamic_blog_mdx",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":f},body:JSON.stringify({user_input:c})});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=e.body.getReader(),n=new TextDecoder("utf-8");let s=!1;for(;!s;){const{value:e,done:a}=await t.read();if(s=a,e){const t=n.decode(e);m((e=>e+t))}}}catch(p){y(`An error occurred while fetching data: ${p.message}`)}finally{g(!1)}})():y("Input cannot be empty")};return(0,r.jsx)(i.A,{children:()=>(0,r.jsxs)("div",{className:"multivac-chat-container",children:[(0,r.jsxs)("form",{onSubmit:w,children:[(0,r.jsx)("input",{type:"text",placeholder:"Ask a question...",value:c,onChange:e=>d(e.target.value),className:"multivac-input"}),(0,r.jsx)("button",{type:"submit",disabled:h,className:"multivac-submit-btn",children:h?"Loading...":"Submit"})]}),h&&(0,r.jsx)("p",{children:"Fetching response..."}),p&&(0,r.jsx)("p",{className:"error-message",children:p}),(0,r.jsx)("div",{className:"multivac-message-output",children:(0,r.jsx)(a.A,{jsx:u,components:t,renderInWrapper:!1,allowUnknownElements:!1,blacklistedTags:["script","style","iframe","link","meta"]})})]})})}}}]);