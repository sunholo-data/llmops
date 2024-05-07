"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4537],{9401:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var t=n(4848),a=n(8453);const i={},o="chat_history.py",r={id:"sunholo/agents/chat_history",title:"chat_history.py",description:"Source: sunholo/agents/chathistory.py",source:"@site/docs/sunholo/agents/chat_history.md",sourceDirName:"sunholo/agents",slug:"/sunholo/agents/chat_history",permalink:"/docs/sunholo/agents/chat_history",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/sunholo/agents/chat_history.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Config files",permalink:"/docs/config"},next:{title:"dispatch_to_qa.py",permalink:"/docs/sunholo/agents/dispatch_to_qa"}},c={},h=[{value:"Functions",id:"functions",level:2},{value:"extract_chat_history(chat_history=None)",id:"extract_chat_historychat_historynone",level:3},{value:"create_message_element(message: dict)",id:"create_message_elementmessage-dict",level:3},{value:"embeds_to_json(message: dict)",id:"embeds_to_jsonmessage-dict",level:3},{value:"is_ai(message: dict)",id:"is_aimessage-dict",level:3},{value:"is_bot(message: dict)",id:"is_botmessage-dict",level:3},{value:"is_human(message: dict)",id:"is_humanmessage-dict",level:3}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"chat_historypy",children:"chat_history.py"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Source"}),": ",(0,t.jsx)(s.a,{href:"https://github.com/sunholo-data/sunholo-py/blob/main/sunholo/agents/chat_history.py",children:"sunholo/agents/chat_history.py"})]}),"\n",(0,t.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(s.h3,{id:"extract_chat_historychat_historynone",children:"extract_chat_history(chat_history=None)"}),"\n",(0,t.jsx)(s.p,{children:"Extracts paired chat history between human and AI messages."}),"\n",(0,t.jsx)(s.p,{children:"This function takes a chat history and returns a list of pairs of messages,\nwhere each pair consists of a human message followed by the corresponding AI response."}),"\n",(0,t.jsx)(s.p,{children:"Args:\nchat_history (list): List of chat messages."}),"\n",(0,t.jsx)(s.p,{children:"Returns:\nlist: List of tuples with paired human and AI messages."}),"\n",(0,t.jsx)(s.p,{children:"Example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'chat_history = [\n    {"name": "Human", "text": "Hello, AI!"},\n    {"name": "AI", "text": "Hello, Human! How can I help you today?"}\n]\npaired_messages = extract_chat_history(chat_history)\nprint(paired_messages)\n# Output: [("Hello, AI!", "Hello, Human! How can I help you today?")]\n'})}),"\n",(0,t.jsx)(s.h3,{id:"create_message_elementmessage-dict",children:"create_message_element(message: dict)"}),"\n",(0,t.jsx)(s.p,{children:"Extracts the main content of a message."}),"\n",(0,t.jsx)(s.p,{children:"Args:\nmessage (dict): The message to extract content from."}),"\n",(0,t.jsx)(s.p,{children:"Returns:\nstr: The text or content of the message."}),"\n",(0,t.jsx)(s.p,{children:"Raises:\nKeyError: If neither 'content' nor 'text' fields are found."}),"\n",(0,t.jsx)(s.p,{children:"Example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'message = {"text": "Hello, AI!"}\ncontent = create_message_element(message)\nprint(content)\n# Output: \'Hello, AI!\'\n'})}),"\n",(0,t.jsx)(s.h3,{id:"embeds_to_jsonmessage-dict",children:"embeds_to_json(message: dict)"}),"\n",(0,t.jsx)(s.p,{children:"Converts the 'embeds' field in a message to a JSON string."}),"\n",(0,t.jsx)(s.p,{children:"Args:\nmessage (dict): The message containing the 'embeds' field."}),"\n",(0,t.jsx)(s.p,{children:"Returns:\nstr: JSON string representation of the 'embeds' field or an empty string if no embeds are found."}),"\n",(0,t.jsx)(s.p,{children:"Example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'message = {"embeds": [{"type": "image", "url": "https://example.com/image.png"}]}\njson_string = embeds_to_json(message)\nprint(json_string)\n# Output: \'[{"type": "image", "url": "https://example.com/image.png"}]\'\n'})}),"\n",(0,t.jsx)(s.h3,{id:"is_aimessage-dict",children:"is_ai(message: dict)"}),"\n",(0,t.jsx)(s.p,{children:"Checks if a message was specifically sent by an AI."}),"\n",(0,t.jsx)(s.p,{children:"Args:\nmessage (dict): The message to check."}),"\n",(0,t.jsx)(s.p,{children:"Returns:\nbool: True if the message was sent by an AI, otherwise False."}),"\n",(0,t.jsx)(s.p,{children:"Example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'message = {"name": "AI"}\nprint(is_ai(message))\n# Output: True\n'})}),"\n",(0,t.jsx)(s.h3,{id:"is_botmessage-dict",children:"is_bot(message: dict)"}),"\n",(0,t.jsx)(s.p,{children:"Checks if a message was sent by a bot."}),"\n",(0,t.jsx)(s.p,{children:"Args:\nmessage (dict): The message to check."}),"\n",(0,t.jsx)(s.p,{children:"Returns:\nbool: True if the message was sent by a bot, otherwise False."}),"\n",(0,t.jsx)(s.p,{children:"Example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'message = {"name": "AI"}\nprint(is_bot(message))\n# Output: True\n'})}),"\n",(0,t.jsx)(s.h3,{id:"is_humanmessage-dict",children:"is_human(message: dict)"}),"\n",(0,t.jsx)(s.p,{children:"Checks if a message was sent by a human."}),"\n",(0,t.jsx)(s.p,{children:"Args:\nmessage (dict): The message to check."}),"\n",(0,t.jsx)(s.p,{children:"Returns:\nbool: True if the message was sent by a human, otherwise False."}),"\n",(0,t.jsx)(s.p,{children:"Example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'message = {"name": "Human"}\nprint(is_human(message))\n# Output: True\n'})})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var t=n(6540);const a={},i=t.createContext(a);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);