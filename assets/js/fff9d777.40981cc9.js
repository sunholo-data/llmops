"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[373],{4545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(4848),o=t(8453);const i={},a="Playwright",r={id:"integrations/playwright",title:"Playwright",description:"Playwright is a web browsing developer tool that allows you to browse the web.",source:"@site/docs/integrations/playwright.md",sourceDirName:"integrations",slug:"/integrations/playwright",permalink:"/docs/integrations/playwright",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/integrations/playwright.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ollama",permalink:"/docs/integrations/ollama"},next:{title:"Vertex AI",permalink:"/docs/integrations/vertexai"}},h={},c=[{value:"BrowseWebWithImagePromptsBot",id:"browsewebwithimagepromptsbot",level:2},{value:"Using with your model",id:"using-with-your-model",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"playwright",children:"Playwright"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://playwright.dev",children:"Playwright"})," is a web browsing developer tool that allows you to browse the web."]}),"\n",(0,s.jsx)(n.p,{children:"Vision (or Video) capable GenAI models can create playwright commands based on screenshots that are fed into them."}),"\n",(0,s.jsx)(n.h2,{id:"browsewebwithimagepromptsbot",children:"BrowseWebWithImagePromptsBot"}),"\n",(0,s.jsxs)(n.p,{children:["The sunholo ",(0,s.jsx)(n.code,{children:"BrowseWebWithImagePromptsBot()"}),' class provides methods that you can hook into any GenAI vision model to enable prompt-to-browser features.  It coordinates working with your model and prompt to feed in screenshots until the stated "session goal" is achieved.']}),"\n",(0,s.jsx)(n.p,{children:"An example of it browsing the website looking for a VAC defintion is shown for demo purposes:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(9618).A+"",width:"1280",height:"720"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:".gif"})," is created from the screenshots the model uses in its session.  The images are annotated where the bot clicked or typed text (the red circles in the gif)"]}),"\n",(0,s.jsx)(n.p,{children:"Cookies and the action log of what happened are saved to disk:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(2113).A+"",width:"724",height:"408"})}),"\n",(0,s.jsx)(n.p,{children:"Action log saves the model's description on what it did:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'["Navigated to https://www.sunholo.com", \n"The task is not complete as the FAQs are not shown. Clicked on the \'FAQ\' button.", \n"Clicked on element with selector FAQ at x=459.5390625,y=48.0", \n"The task is not complete as I do not yet see the content of the FAQ. Clicked on the \'What is a VAC?\' FAQ. ", \n"Clicked on element with selector What is a VAC? at x=145.67578125,y=359.79296875"]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"using-with-your-model",children:"Using with your model"}),"\n",(0,s.jsxs)(n.p,{children:["The class requires you to write a ",(0,s.jsx)(n.code,{children:"send_prompt_to_llm()"})," method which will recieve the screenshots and prompt variables and output the instructions for the next browsing task.  A demo of doing this with ",(0,s.jsx)(n.a,{href:"https://deepmind.google/technologies/gemini/flash/",children:"Gemini Flash 1.5"})," is shown below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import os\nimport traceback\nimport json\nimport base64\nimport textwrap\n\nfrom PIL import Image\nfrom io import BytesIO\nimport google.generativeai as genai\n\nfrom flask import Flask, request, jsonify\n\nfrom sunholo.logging import setup_logging\nfrom sunholo.tools import BrowseWebWithImagePromptsBot\nfrom sunholo.vertex import (\n    init_genai,\n    genai_safety,\n)\n\n# Define schemas\ninstruction_schema = genai.protos.Schema(\n    type=genai.protos.Type.OBJECT,\n    properties={\n        \'action\': genai.protos.Schema(type=genai.protos.Type.STRING),\n        \'selector\': genai.protos.Schema(type=genai.protos.Type.STRING),\n        \'url\': genai.protos.Schema(type=genai.protos.Type.STRING),\n        \'text\': genai.protos.Schema(type=genai.protos.Type.STRING),\n        \'direction\': genai.protos.Schema(type=genai.protos.Type.STRING),\n        \'amount\': genai.protos.Schema(type=genai.protos.Type.INTEGER),\n        \'message\': genai.protos.Schema(type=genai.protos.Type.STRING),\n    },\n    required=[\'action\']\n)\n\ninstructions_schema = genai.protos.Schema(\n    type=genai.protos.Type.ARRAY,\n    items=instruction_schema\n)\n\nnext_browser_instructions = genai.protos.Schema(\n    type=genai.protos.Type.OBJECT,\n    properties={\n        \'status\': genai.protos.Schema(type=genai.protos.Type.STRING),\n        \'new_instructions\': instructions_schema,\n        \'message\': genai.protos.Schema(type=genai.protos.Type.STRING)\n    },\n    required=[\'status\']\n)\n\nclass GeminiBot(BrowseWebWithImagePromptsBot):\n    def send_prompt_to_llm(self, prompt_vars, screenshot_base64):\n        init_genai()\n\n        model = genai.GenerativeModel(\n            model_name="models/gemini-1.5-flash",\n            safety_settings=genai_safety(),\n            # https://ai.google.dev/gemini-api/docs/json-mode?lang=python\n            generation_config={"response_mime_type": "application/json",\n                                "response_schema": next_browser_instructions,\n                                "temperature": 0.5}\n            )\n        \n        # Decode the base64 string to create an Image object\n        screenshot = Image.open(BytesIO(base64.b64decode(screenshot_base64)))\n\n        prompt = textwrap.dedent(f"""\n            You are an AI assistant helping a user browse the web.\n            The user has provided you with a screenshot of the current webpage and some details to help you achieve their goal.\n\n            # User Session Goal: \n            Important! \n            {prompt_vars[\'session_goal\']}\n\n            ## Last Action Message\n            The last AI assistant iteration has this message to you:\n            {prompt_vars[\'last_message\']}\n            \n            ## Playwright Actions\n            This is a history of what Playwright instructions you have actioned so far:\n            {prompt_vars[\'last_actions\']}\n\n            If you see repeating actions with an error, then you are in a loop - do something else.\n            \n            ## Instructions\n\n            Based on the provided screenshot and the details, generate the next set of Playwright instructions for the bot to execute. \n            The instructions should be in JSON format and include the necessary details such as action type, selector, URL, text, direction, and amount.\n\n            Allowed actions:\n            - navigate: Navigate to a specified URL.\n            - click: Click on an element specified by the text you see in the screenshot.\n            - scroll: Scroll the page using the mouse whell in the specified direction (\'down\', \'up\', \'left\', \'right\') by the specified amount in pixels.\n            - type: Type the specified text into the element specified by the text you see in the screenshot\n\n            Good example instruction format:\n            [\n                {{\n                    "action": "navigate",\n                    "url": "https://example.com",\n                    "message": "Navigate to the example.com URL"\n                }},\n                {{\n                    "action": "type",\n                    "selector": "Search",\n                    "text": "AI news",\n                    "message": "Search for \'AI news\' within the search field"\n                }},\n                {{\n                    "action": "click",\n                    "selector": "Submit"\n                    "message" : "Click on submit button"\n                }}\n                {{\n                    "action": "scroll",\n                    "amount": "200"\n                    "message" : "Scroll down the page 200 pixels"\n                }}\n            ]\n\n            Bad example instruction format:\n            - Instructions that are not in JSON format.\n            - Using actions other than \'navigate\', \'click\', \'scroll\', or \'type\'.\n            - Missing required fields such as \'action\', \'selector\', \'url\', \'text\', \'direction\', or \'amount\' when necessary.\n            - Instructions that are ambiguous or unclear.\n            - No \'message\' field\n            - Using CSS selectors and not text fields\n            [\n                {{\n                    "task": "goto",\n                    "address": "https://example.com"\n                }},\n                {{\n                    "do": "write",\n                    "locator": "input[name=\'search\']",\n                    "content": "AI news"\n                }},\n                {{\n                    "perform": "press",\n                    "target": "button[type=\'submit\']"\n                }}\n                {{\n                    "action": "click",\n                    "selector": "a[href=\'/faq\']"\n                    "message" : "Click on submit button"\n                }}\n            ]\n\n            ## Output format\n\n            The \'message\' key is used to populate the \'Last Action Message\' for the next iteration of this request - make it useful for the next assistant so they can complete the session goal.\n            Include in the \'message\' key why you think the task is completed, an error or still in progress.\n            Only put in the \'message\' field information from the screenshot.  Do not put any information that is not seen in the screenshot.\n            Put the instruction JSON and a status of the task in this format:\n            \n            {{\n                \'message\': \'The task is not complete as I do not yet see any AI news content. Navigated to the example page and searched for AI news within the search bar\',\n                \'status\': \'in-progress\',\n                \'new_instructions\': {{\n                    [\n                        {{\n                            "action": "navigate",\n                            "url": "https://example.com",\n                            "message": "Go to the example page"\n                        }},\n                        {{\n                            "action": "type",\n                            "selector": "input[name=\'search\']",\n                            "text": "AI news",\n                            "message": "Searching for \'AI news\' within the search field"\n                        }},\n                        {{\n                            "action": "click",\n                            "selector": "button[type=\'submit\']"\n                            "message" : "Click on submit button"\n                        }}\n                    ]\n                }}\n            }}\n\n            ## Important: status\n\n            - status: completed - Only set if you are clear the session goal has been achieved.\n            - status: error: If any problems like infinite loops or if it looks like the history is corrupted use this status\n            - status: in-progress - if not completed or an error, this is the status to enable the next step that will help the user. If the session goal has not been achieved, set the \'in-progress\' status\n\n            If status: in-progress is set then you MUST include new_instructions for the next step to complete.\n\n            When doing the last iteration (status: completed) add to the \'messages\' key any final summary of the session and anything useful for the session goal, but do not use any information outside of the web session screenshots or message history.\n            An example of a good final message would be if the user wanted to find out news on AI, that you add the text of the page from the screenshot that triggered the completed session goal.\n            Also include in the message a restatement of the session goal, and why you think the session goal has been completed.\n\n            \n        """)\n\n        log.info(f"Browser prompt_vars: {prompt_vars}")\n\n        # Generate content with the model\n        response = model.generate_content([screenshot, prompt], tool_config={\'function_calling_config\':\'ANY\'})\n\n        log.debug(f"Browser tool returns: {response=}")\n\n        try:\n            json_object = json.loads(response.text)\n            log.info(f"Got valid json: {json_object}")\n\n            return json_object\n        \n        except Exception as err:\n            log.error(f"Failed to parse GenAI output to JSON: {response=} - {str(err)}")        \n'})}),"\n",(0,s.jsx)(n.p,{children:"You can then put the model behind a HTTP endpoint to created a VAC and have it hooked into Multivac's Cloud Endpoints and Vertex Extension integrations."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"app = Flask(__name__)\n\n@app.route('/browser', methods=['POST'])\ndef browser():\n    data = request.form\n    session_id = data.get('session_id')\n    website_name = data.get('website_name')\n    browser_type = data.get('browser_type', 'chromium')\n    session_goal = data.get('session_goal', \"\")\n    initial_instructions = data.get('instructions')\n\n    bot = GeminiBot(\n        session_id=session_id,\n        website_name=website_name,\n        browser_type=browser_type,\n        headless=True\n    )\n\n    finished_session = bot.start_session(instructions=initial_instructions, session_goal=session_goal)\n\n    return jsonify(finished_session)\n\n\nif __name__ == \"__main__\":\n    app.run(host=\"0.0.0.0\", port=int(os.environ.get(\"PORT\", 8080)), debug=True)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When testing locally, launch the app via ",(0,s.jsx)(n.code,{children:"python app.py"})," then call it locally via:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:' curl -X POST http://localhost:8080/browser \\\n    -F "session_id=session123" \\\n    -F "website_name=https://www.sunholo.com" \\\n    -F "browser_type=chromium" \\\n    -F "session_goal=Find out what the VAC acyonym means in Multi-VAC"\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9618:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/browser_tool-ca6488342512d6910cd5d1ea4c07cac8.gif"},2113:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/browser_tool_files-c035769af921fc4fc074b0499bb4736a.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);