"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8745],{3645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var s=n(4848),r=n(8453);const c={},o="parsers.py",a={id:"sunholo/utils/parsers",title:"parsers.py",description:"Source: sunholo/utils/parsers.py",source:"@site/docs/sunholo/utils/parsers.md",sourceDirName:"sunholo/utils",slug:"/sunholo/utils/parsers",permalink:"/docs/sunholo/utils/parsers",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/sunholo/utils/parsers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gcp_project.py",permalink:"/docs/sunholo/utils/gcp_project"},next:{title:"timedelta.py",permalink:"/docs/sunholo/utils/timedelta"}},l={},i=[{value:"Functions",id:"functions",level:2},{value:"contains_url(message_data)",id:"contains_urlmessage_data",level:3},{value:"extract_urls(text)",id:"extract_urlstext",level:3},{value:"remove_whitespace(page_content: str)",id:"remove_whitespacepage_content-str",level:3},{value:"check_kwargs_support(func)",id:"check_kwargs_supportfunc",level:3},{value:"compute_sha1_from_content(content)",id:"compute_sha1_from_contentcontent",level:3},{value:"compute_sha1_from_file(file_path)",id:"compute_sha1_from_filefile_path",level:3},{value:"escape_braces(text)",id:"escape_bracestext",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"parserspy",children:"parsers.py"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Source"}),": ",(0,s.jsx)(t.a,{href:"https://github.com/sunholo-data/sunholo-py/blob/main/sunholo/utils/parsers.py",children:"sunholo/utils/parsers.py"})]}),"\n",(0,s.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(t.h3,{id:"contains_urlmessage_data",children:"contains_url(message_data)"}),"\n",(0,s.jsx)(t.p,{children:"Check if the provided text contains a URL."}),"\n",(0,s.jsx)(t.p,{children:"Args:\nmessage_data (str): The text to check."}),"\n",(0,s.jsx)(t.p,{children:"Returns:\nbool: True if the text contains a URL, False otherwise."}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'text = "Visit us at https://example.com for more details."\nhas_url = contains_url(text)\nprint(has_url)  # True\n'})}),"\n",(0,s.jsx)(t.h3,{id:"extract_urlstext",children:"extract_urls(text)"}),"\n",(0,s.jsx)(t.p,{children:"Extract all URLs from the provided text."}),"\n",(0,s.jsx)(t.p,{children:"Args:\ntext (str): The text to extract URLs from."}),"\n",(0,s.jsx)(t.p,{children:"Returns:\nlist[str]: A list of URLs found in the text."}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"text = \"Check out https://example.com and http://another.com.\"\nurls = extract_urls(text)\nprint(urls)  # ['https://example.com', 'http://another.com']\n"})}),"\n",(0,s.jsx)(t.h3,{id:"remove_whitespacepage_content-str",children:"remove_whitespace(page_content: str)"}),"\n",(0,s.jsx)(t.p,{children:"Remove newline, carriage return, tab characters, and double spaces from the provided string."}),"\n",(0,s.jsx)(t.p,{children:"Args:\npage_content (str): The string to clean."}),"\n",(0,s.jsx)(t.p,{children:"Returns:\nstr: The cleaned string."}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"raw_text = \"Hello,\nworld!   This is   an example.\"\ncleaned_text = remove_whitespace(raw_text)\nprint(cleaned_text)  # Outputs 'Hello, world! This is an example.'\n"})}),"\n",(0,s.jsx)(t.h3,{id:"check_kwargs_supportfunc",children:"check_kwargs_support(func)"}),"\n",(0,s.jsx)(t.p,{children:"Check if the function 'func' accepts arbitrary keyword arguments (**kwargs)."}),"\n",(0,s.jsx)(t.p,{children:"Args:\nfunc (callable): The function to check."}),"\n",(0,s.jsx)(t.p,{children:"Returns:\nbool: True if **kwargs is accepted, False otherwise."}),"\n",(0,s.jsx)(t.h3,{id:"compute_sha1_from_contentcontent",children:"compute_sha1_from_content(content)"}),"\n",(0,s.jsx)(t.p,{children:"Compute the SHA-1 hash of the provided content."}),"\n",(0,s.jsx)(t.p,{children:"Args:\ncontent (bytes): The content to hash."}),"\n",(0,s.jsx)(t.p,{children:"Returns:\nstr: The SHA-1 hash of the content."}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'content = b"Hello, world!"\ncontent_hash = compute_sha1_from_content(content)\nprint(content_hash)  # Outputs the SHA-1 hash of the content\n'})}),"\n",(0,s.jsx)(t.h3,{id:"compute_sha1_from_filefile_path",children:"compute_sha1_from_file(file_path)"}),"\n",(0,s.jsx)(t.p,{children:"Compute the SHA-1 hash of a file."}),"\n",(0,s.jsx)(t.p,{children:"Args:\nfile_path (str): The path to the file."}),"\n",(0,s.jsx)(t.p,{children:"Returns:\nstr: The SHA-1 hash of the file."}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"file_path = 'path/to/file.txt'\nfile_hash = compute_sha1_from_file(file_path)\nprint(file_hash)  # Outputs the SHA-1 hash of the file\n"})}),"\n",(0,s.jsx)(t.h3,{id:"escape_bracestext",children:"escape_braces(text)"}),"\n",(0,s.jsx)(t.p,{children:"Escapes single braces in the text by converting them to double braces."}),"\n",(0,s.jsx)(t.p,{children:"Args:\ntext (str): The input string containing single braces."}),"\n",(0,s.jsx)(t.p,{children:"Returns:\nstr: The modified string with single braces converted to double braces."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},c=s.createContext(r);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);