"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6675],{7854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>_,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var s=n(4848),r=n(8453);const a={},o="streaming.py",i={id:"sunholo/streaming/streaming",title:"streaming.py",description:"Source: sunholo/streaming/streaming.py",source:"@site/docs/sunholo/streaming/streaming.md",sourceDirName:"sunholo/streaming",slug:"/sunholo/streaming/",permalink:"/docs/sunholo/streaming/",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/sunholo/streaming/streaming.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stream_voice.py",permalink:"/docs/sunholo/senses/stream_voice"},next:{title:"content_buffer.py",permalink:"/docs/sunholo/streaming/content_buffer"}},c={},u=[{value:"Functions",id:"functions",level:2},{value:"start_streaming_chat_async(question, vector_name, qna_func_async, chat_history=[], wait_time=2, timeout=120, **kwargs)",id:"start_streaming_chat_asyncquestion-vector_name-qna_func_async-chat_history-wait_time2-timeout120-kwargs",level:3},{value:"start_streaming_chat(question, vector_name, qna_func, chat_history=[], wait_time=2, timeout=120, **kwargs)",id:"start_streaming_chatquestion-vector_name-qna_func-chat_history-wait_time2-timeout120-kwargs",level:3},{value:"generate_proxy_stream(stream_to_f, user_input, vector_name, chat_history, generate_f_output, **kwargs)",id:"generate_proxy_streamstream_to_f-user_input-vector_name-chat_history-generate_f_output-kwargs",level:3},{value:"generate_proxy_stream_async(stream_to_f, user_input, vector_name, chat_history, generate_f_output, **kwargs)",id:"generate_proxy_stream_asyncstream_to_f-user_input-vector_name-chat_history-generate_f_output-kwargs",level:3},{value:"process_streaming_content(streaming_content, generate_f_output, json_buffer, inside_json)",id:"process_streaming_contentstreaming_content-generate_f_output-json_buffer-inside_json",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"streamingpy",children:"streaming.py"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Source"}),": ",(0,s.jsx)(t.a,{href:"https://github.com/sunholo-data/sunholo-py/blob/main/sunholo/streaming/streaming.py",children:"sunholo/streaming/streaming.py"})]}),"\n",(0,s.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(t.h3,{id:"start_streaming_chat_asyncquestion-vector_name-qna_func_async-chat_history-wait_time2-timeout120-kwargs",children:"start_streaming_chat_async(question, vector_name, qna_func_async, chat_history=[], wait_time=2, timeout=120, **kwargs)"}),"\n",(0,s.jsx)(t.p,{children:"Asynchronously initiates a chat session that streams responses back to the caller in real-time.\nThis function manages the chat by starting a separate thread to handle the chat interaction,\nwhile the main coroutine periodically sends out chat responses as they become available."}),"\n",(0,s.jsx)(t.p,{children:"Parameters:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"question (str): The initial question to start the chat with."}),"\n",(0,s.jsx)(t.li,{children:"vector_name (str): The vector configuration that determines the behavior of the AI in the chat."}),"\n",(0,s.jsx)(t.li,{children:"qna_func_async (callable): The async function that processes the chat and generates responses."}),"\n",(0,s.jsx)(t.li,{children:"chat_history (list, optional): A list of previous messages in the chat session to maintain context."}),"\n",(0,s.jsx)(t.li,{children:"wait_time (int, optional): The interval in seconds between checking for new chat responses."}),"\n",(0,s.jsx)(t.li,{children:"timeout (int, optional): The maximum time in seconds to wait for a new response before timing out."}),"\n",(0,s.jsxs)(t.li,{children:["**kwargs: Additional keyword arguments that are passed to the ",(0,s.jsx)(t.code,{children:"qna_func"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Yields:\nstr: Outputs from the chat function, which could include processing status messages, chat responses, or final results."}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import asyncio\n\nasync def example_usage():\n    async for message in start_streaming_chat_async(\n        question="Hello, what\'s the weather today?",\n        vector_name="weatherBot",\n        qna_func=fetch_weather_response,\n        wait_time=1,\n        timeout=30):\n        print(message)\n\ndef fetch_weather_response(question, vector_name, chat_history, callback, **kwargs):\n    # Example callback usage, assuming `callback` handles the response formatting.\n    responses = ["It\'s sunny.", "Do you want to know tomorrow\'s weather?"]\n    for response in responses:\n        callback.handle_message(response)\n        time.sleep(1)  # Simulate delay in response generation\n    return {"status": "completed", "data": responses}\n\nif __name__ == \'__main__\':\n    asyncio.run(example_usage())\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This example demonstrates setting up an asynchronous streaming chat with a simple Q&A function simulating weather responses.\nThe ",(0,s.jsx)(t.code,{children:"start_streaming_chat_async"})," function is used in a coroutine that prints messages as they are generated."]}),"\n",(0,s.jsx)(t.h3,{id:"start_streaming_chatquestion-vector_name-qna_func-chat_history-wait_time2-timeout120-kwargs",children:"start_streaming_chat(question, vector_name, qna_func, chat_history=[], wait_time=2, timeout=120, **kwargs)"}),"\n",(0,s.jsx)(t.p,{children:"No docstring available."}),"\n",(0,s.jsx)(t.h3,{id:"generate_proxy_streamstream_to_f-user_input-vector_name-chat_history-generate_f_output-kwargs",children:"generate_proxy_stream(stream_to_f, user_input, vector_name, chat_history, generate_f_output, **kwargs)"}),"\n",(0,s.jsx)(t.p,{children:"Generator function for proxying and processing streaming output from an underlying model."}),"\n",(0,s.jsx)(t.p,{children:"This function serves as an adapter for streaming responses from different model agents. It handles the synchronous nature of streaming,\nparses streaming content, and adapts the output format based on the configured agent type."}),"\n",(0,s.jsxs)(t.p,{children:["Args:\nstream_to_f: The underlying function that generates streaming responses (e.g., from a language model).\nuser_input (str): The user's input query or message.\nvector_name (str): The name of the vector store being used.\nchat_history (list): A list of previous chat messages for context.\ngenerate_f_output: A function that processes the raw streaming output from ",(0,s.jsx)(t.code,{children:"stream_to_f"}),".\n**kwargs: Additional keyword arguments to pass to ",(0,s.jsx)(t.code,{children:"stream_to_f"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Yields:\nstr: Parsed and processed chunks of text from the streaming output."}),"\n",(0,s.jsx)(t.p,{children:"Raises:\nValueError: If an invalid agent type is configured."}),"\n",(0,s.jsx)(t.p,{children:"Examples:"}),"\n",(0,s.jsx)(t.p,{children:"def my_stream_to_function(user_input, vector_name, chat_history, stream=True, **kwargs):"}),"\n",(0,s.jsx)(t.h1,{id:"-your-custom-streaming-logic-",children:"... your custom streaming logic ..."}),"\n",(0,s.jsx)(t.p,{children:"def my_generate_f_output(output):"}),"\n",(0,s.jsx)(t.h1,{id:"-your-custom-output-processing-",children:"... your custom output processing ..."}),"\n",(0,s.jsx)(t.p,{children:'for output in generate_proxy_stream(\nmy_stream_to_function,\n"Hello, how are you?",\n"my_vector_store",\n[],\nmy_generate_f_output\n):\nprint(output)  # Process each streaming output chunk'}),"\n",(0,s.jsx)(t.h3,{id:"generate_proxy_stream_asyncstream_to_f-user_input-vector_name-chat_history-generate_f_output-kwargs",children:"generate_proxy_stream_async(stream_to_f, user_input, vector_name, chat_history, generate_f_output, **kwargs)"}),"\n",(0,s.jsx)(t.p,{children:"Asynchronous generator function for proxying and processing streaming output from an underlying model."}),"\n",(0,s.jsx)(t.p,{children:"This function serves as an adapter for streaming responses from different model agents. It handles the asynchronous nature of streaming,\nparses streaming content, and adapts the output format based on the configured agent type."}),"\n",(0,s.jsxs)(t.p,{children:["Args:\nstream_to_f: The underlying asynchronous function that generates streaming responses (e.g., from a language model).\nuser_input (str): The user's input query or message.\nvector_name (str): The name of the vector store being used.\nchat_history (list): A list of previous chat messages for context.\ngenerate_f_output: A function that processes the raw streaming output from ",(0,s.jsx)(t.code,{children:"stream_to_f"}),".\n**kwargs: Additional keyword arguments to pass to ",(0,s.jsx)(t.code,{children:"stream_to_f"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Yields:\nstr: Parsed and processed chunks of text from the streaming output."}),"\n",(0,s.jsx)(t.p,{children:"Raises:\nValueError: If an invalid agent type is configured."}),"\n",(0,s.jsx)(t.p,{children:"Examples:"}),"\n",(0,s.jsx)(t.p,{children:"async def my_stream_to_function(user_input, vector_name, chat_history, stream=True, **kwargs):"}),"\n",(0,s.jsx)(t.h1,{id:"-your-custom-streaming-logic--1",children:"... your custom streaming logic ..."}),"\n",(0,s.jsx)(t.p,{children:"async def my_generate_f_output(output):"}),"\n",(0,s.jsx)(t.h1,{id:"-your-custom-output-processing--1",children:"... your custom output processing ..."}),"\n",(0,s.jsx)(t.p,{children:'async for output in generate_proxy_stream_async(\nmy_stream_to_function,\n"Hello, how are you?",\n"my_vector_store",\n[],\nmy_generate_f_output\n):\nprint(output)  # Process each streaming output chunk'}),"\n",(0,s.jsx)(t.h3,{id:"process_streaming_contentstreaming_content-generate_f_output-json_buffer-inside_json",children:"process_streaming_content(streaming_content, generate_f_output, json_buffer, inside_json)"}),"\n",(0,s.jsx)(t.p,{children:"No docstring available."})]})}function _(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(6540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);