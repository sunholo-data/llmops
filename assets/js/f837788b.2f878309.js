"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9620],{3438:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=t(4848),r=t(8453);const i={},l="content_buffer.py",o={id:"sunholo/streaming/content_buffer",title:"content_buffer.py",description:"Source: sunholo/streaming/contentbuffer.py",source:"@site/docs/sunholo/streaming/content_buffer.md",sourceDirName:"sunholo/streaming",slug:"/sunholo/streaming/content_buffer",permalink:"/docs/sunholo/streaming/content_buffer",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/sunholo/streaming/content_buffer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"streaming.py",permalink:"/docs/sunholo/streaming/"},next:{title:"langserve.py",permalink:"/docs/sunholo/streaming/langserve"}},a={},h=[{value:"Classes",id:"classes",level:2},{value:"BufferStreamingStdOutCallbackHandler",id:"bufferstreamingstdoutcallbackhandler",level:3},{value:"ContentBuffer",id:"contentbuffer",level:3}];function d(n){const e={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"content_bufferpy",children:"content_buffer.py"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"Source"}),": ",(0,s.jsx)(e.a,{href:"https://github.com/sunholo-data/sunholo-py/blob/main/sunholo/streaming/content_buffer.py",children:"sunholo/streaming/content_buffer.py"})]}),"\n",(0,s.jsx)(e.h2,{id:"classes",children:"Classes"}),"\n",(0,s.jsx)(e.h3,{id:"bufferstreamingstdoutcallbackhandler",children:"BufferStreamingStdOutCallbackHandler"}),"\n",(0,s.jsx)(e.p,{children:"A callback handler for streaming LLM output to a content buffer."}),"\n",(0,s.jsx)(e.p,{children:"This class handles the streaming of output from a large language model (LLM),\nprocesses tokens from the model output, and writes them to a ContentBuffer.\nIt supports handling different types of tokens and keeps track of code blocks\nand questions."}),"\n",(0,s.jsx)(e.p,{children:"Attributes:\ncontent_buffer (ContentBuffer): The buffer to which content is streamed.\ntokens (str): Tokens that indicate the end of a statement, for buffer flushing.\nbuffer (str): Temporary storage for accumulating streamed tokens.\nstream_finished (threading.Event): Signals when the streaming is finished.\nin_code_block (bool): Indicates whether the current context is a code block.\nin_question_block (bool): Indicates whether the current context is a question block.\nquestion_buffer (str): Stores the accumulated questions."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"init"}),"(self, content_buffer: sunholo.streaming.content_buffer.ContentBuffer, tokens: str = '.?!\\n', *args, **kwargs)"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Initializes a new BufferStreamingStdOutCallbackHandler instance."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:'Args:\ncontent_buffer (ContentBuffer): The buffer to which content will be written.\ntokens (str): Tokens that indicate the end of a statement (default: ".?!\n").\n*args: Additional positional arguments.\n**kwargs: Additional keyword arguments.'}),"\n",(0,s.jsx)(e.p,{children:"Sets up the callback handler with the given content buffer and tokens.\nInitializes tracking variables for code blocks, buffer content, and the finished signal."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"_async_process_buffer(self)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Asynchronously processes the buffer content and writes to the content buffer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"If the buffer ends with a numbered list pattern or specified tokens, the buffer is flushed\nto the content buffer. Otherwise, the buffer is left intact for further accumulation."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["_process_buffer(self)","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Processes the buffer content and writes to the content buffer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"If the buffer ends with a numbered list pattern or specified tokens, the buffer is flushed\nto the content buffer. Otherwise, the buffer is left intact for further accumulation."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["async_on_llm_end(self, response: langchain_core.outputs.llm_result.LLMResult, **kwargs: Any) -> None","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Asynchronously handles the end of LLM streaming."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nresponse (LLMResult): The result returned by the LLM.\n**kwargs: Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["async_on_llm_new_token(self, token: str, **kwargs: Any) -> None","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Asynchronously processes a new token from the LLM output."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\ntoken (str): The new token generated by the LLM.\n**kwargs: Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_agent_action(self, action: 'AgentAction', **kwargs: 'Any') -> 'Any'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run on agent action."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\naction (AgentAction): The agent action.\n**kwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_agent_finish(self, finish: 'AgentFinish', **kwargs: 'Any') -> 'None'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run on the agent end."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nfinish (AgentFinish): The agent finish.\n**kwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_chain_end(self, outputs: 'Dict[str, Any]', **kwargs: 'Any') -> 'None'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run when a chain ends running."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\noutputs (Dict[str, Any]): The outputs of the chain.\n**kwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_chain_error(self, error: 'BaseException', **kwargs: 'Any') -> 'None'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run when chain errors."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nerror (BaseException): The error that occurred.\n**kwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_chain_start(self, serialized: 'Dict[str, Any]', inputs: 'Dict[str, Any]', **kwargs: 'Any') -> 'None'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run when a chain starts running."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nserialized (Dict[str, Any]): The serialized chain.\ninputs (Dict[str, Any]): The inputs to the chain.\n**kwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_chat_model_start(self, serialized: 'Dict[str, Any]', messages: 'List[List[BaseMessage]]', **kwargs: 'Any') -> 'None'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run when LLM starts running."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nserialized (Dict[str, Any]): The serialized LLM.\nmessages (List[List[BaseMessage]]): The messages to run.\n**kwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_custom_event(self, name: 'str', data: 'Any', *, run_id: 'UUID', tags: 'Optional[List[str]]' = None, metadata: 'Optional[Dict[str, Any]]' = None, **kwargs: 'Any') -> 'Any'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Override to define a handler for a custom event."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nname: The name of the custom event.\ndata: The data for the custom event. Format will match\nthe format specified by the user.\nrun_id: The ID of the run.\ntags: The tags associated with the custom event\n(includes inherited tags).\nmetadata: The metadata associated with the custom event\n(includes inherited metadata)."}),"\n",(0,s.jsx)(e.p,{children:".. versionadded:: 0.2.15"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_llm_end(self, response: langchain_core.outputs.llm_result.LLMResult, **kwargs: Any) -> None","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Handles the end of LLM streaming."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nresponse (LLMResult): The result returned by the LLM.\n**kwargs: Additional keyword arguments."}),"\n",(0,s.jsx)(e.p,{children:"Writes any remaining buffer content to the content buffer, and sets a signal indicating\nthat the streaming has finished."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_llm_error(self, error: 'BaseException', **kwargs: 'Any') -> 'None'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run when LLM errors."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nerror (BaseException): The error that occurred.\n**kwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_llm_new_token(self, token: str, **kwargs: Any) -> None","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Processes a new token from the LLM output."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\ntoken (str): The new token generated by the LLM.\n**kwargs: Additional keyword arguments."}),"\n",(0,s.jsx)(e.p,{children:"Accumulates the token in the buffer and processes it based on the current context.\nThe buffer content is written to the content buffer when appropriate tokens or\npatterns are detected."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_llm_start(self, serialized: 'Dict[str, Any]', prompts: 'List[str]', **kwargs: 'Any') -> 'None'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run when LLM starts running."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nserialized (Dict[str, Any]): The serialized LLM.\nprompts (List[str]): The prompts to run.\n**kwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_retriever_end(self, documents: 'Sequence[Document]', *, run_id: 'UUID', parent_run_id: 'Optional[UUID]' = None, **kwargs: 'Any') -> 'Any'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run when Retriever ends running."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\ndocuments (Sequence[Document]): The documents retrieved.\nrun_id (UUID): The run ID. This is the ID of the current run.\nparent_run_id (UUID): The parent run ID. This is the ID of the parent run.\nkwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_retriever_error(self, error: 'BaseException', *, run_id: 'UUID', parent_run_id: 'Optional[UUID]' = None, **kwargs: 'Any') -> 'Any'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run when Retriever errors."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nerror (BaseException): The error that occurred.\nrun_id (UUID): The run ID. This is the ID of the current run.\nparent_run_id (UUID): The parent run ID. This is the ID of the parent run.\nkwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_retriever_start(self, serialized: 'Dict[str, Any]', query: 'str', *, run_id: 'UUID', parent_run_id: 'Optional[UUID]' = None, tags: 'Optional[List[str]]' = None, metadata: 'Optional[Dict[str, Any]]' = None, **kwargs: 'Any') -> 'Any'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run when the Retriever starts running."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nserialized (Dict[str, Any]): The serialized Retriever.\nquery (str): The query.\nrun_id (UUID): The run ID. This is the ID of the current run.\nparent_run_id (UUID): The parent run ID. This is the ID of the parent run.\ntags (Optional[List[str]]): The tags.\nmetadata (Optional[Dict[str, Any]]): The metadata.\nkwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_retry(self, retry_state: 'RetryCallState', *, run_id: 'UUID', parent_run_id: 'Optional[UUID]' = None, **kwargs: 'Any') -> 'Any'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run on a retry event."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nretry_state (RetryCallState): The retry state.\nrun_id (UUID): The run ID. This is the ID of the current run.\nparent_run_id (UUID): The parent run ID. This is the ID of the parent run.\nkwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_text(self, text: 'str', **kwargs: 'Any') -> 'None'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run on an arbitrary text."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\ntext (str): The text to print.\n**kwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_tool_end(self, output: 'Any', **kwargs: 'Any') -> 'None'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run when tool ends running."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\noutput (Any): The output of the tool.\n**kwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_tool_error(self, error: 'BaseException', **kwargs: 'Any') -> 'None'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run when tool errors."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nerror (BaseException): The error that occurred.\n**kwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["on_tool_start(self, serialized: 'Dict[str, Any]', input_str: 'str', **kwargs: 'Any') -> 'None'","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Run when the tool starts running."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\nserialized (Dict[str, Any]): The serialized tool.\ninput_str (str): The input string.\n**kwargs (Any): Additional keyword arguments."}),"\n",(0,s.jsx)(e.h3,{id:"contentbuffer",children:"ContentBuffer"}),"\n",(0,s.jsx)(e.p,{children:"A buffer class for storing and managing textual content."}),"\n",(0,s.jsx)(e.p,{children:"This class provides methods to write text to the buffer, read the entire buffer content,\nand clear the buffer content. The buffer can be used to collect text output for further\nprocessing or inspection."}),"\n",(0,s.jsx)(e.p,{children:"Attributes:\ncontent (str): Stores the textual content of the buffer."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"init"}),"(self)","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Initializes a new ContentBuffer instance."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"The content buffer starts with an empty string, and logging is initialized to indicate\nthat the buffer has been created."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["async_clear(self)","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Asynchronously clears the content buffer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Empties the buffer content, resetting it to an empty string."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["async_read(self) -> str","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Asynchronously reads the entire content from the buffer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Returns:\nstr: The content of the buffer."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["async_write(self, text: str)","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Asynchronously writes text to the content buffer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\ntext (str): The text to be added to the buffer."}),"\n",(0,s.jsx)(e.p,{children:"Adds the given text to the existing content of the buffer."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["clear(self)","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Clears the content buffer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Empties the buffer content, resetting it to an empty string."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["read(self) -> str","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Reads the entire content from the buffer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Returns:\nstr: The content of the buffer."}),"\n",(0,s.jsx)(e.p,{children:"Provides the entire content stored in the buffer."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["write(self, text: str)","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Writes text to the content buffer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Args:\ntext (str): The text to be added to the buffer."}),"\n",(0,s.jsx)(e.p,{children:"Adds the given text to the existing content of the buffer."})]})}function c(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);