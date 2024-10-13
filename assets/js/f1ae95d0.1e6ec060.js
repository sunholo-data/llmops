"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7776],{3237:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=s(4848),l=s(8453);const a={},i="async_class.py",r={id:"sunholo/invoke/async_class",title:"async_class.py",description:"Source: sunholo/invoke/asyncclass.py",source:"@site/docs/sunholo/invoke/async_class.md",sourceDirName:"sunholo/invoke",slug:"/sunholo/invoke/async_class",permalink:"/docs/sunholo/invoke/async_class",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/sunholo/invoke/async_class.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"safety.py",permalink:"/docs/sunholo/genai/safety"},next:{title:"direct_vac_func.py",permalink:"/docs/sunholo/invoke/direct_vac_func"}},o={},c=[{value:"Classes",id:"classes",level:2},{value:"AsyncTaskRunner",id:"asynctaskrunner",level:3}];function u(n){const e={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"async_classpy",children:"async_class.py"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"Source"}),": ",(0,t.jsx)(e.a,{href:"https://github.com/sunholo-data/sunholo-py/blob/main/sunholo/invoke/async_class.py",children:"sunholo/invoke/async_class.py"})]}),"\n",(0,t.jsx)(e.h2,{id:"classes",children:"Classes"}),"\n",(0,t.jsx)(e.h3,{id:"asynctaskrunner",children:"AsyncTaskRunner"}),"\n",(0,t.jsx)(e.p,{children:"No docstring available."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"init"}),"(self, retry_enabled=False, retry_kwargs=None, timeout=120)"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Initialize self.  See help(type(self)) for accurate signature."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"_execute_task(self, func: Callable[..., Any], *args: Any, **kwargs: Any) -> Any"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Executes the given task function and returns its result."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Args:\nfunc (Callable): The callable to execute.\n*args: Positional arguments to pass to the callable.\n**kwargs: Keyword arguments to pass to the callable."}),"\n",(0,t.jsx)(e.p,{children:"Returns:\nAny: The result of the task."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"_monitor_tasks(self, task_infos, queue)"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Monitors the tasks and heartbeats, and sends a sentinel to the queue when done."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"_run_with_retries_and_timeout(self, name: str, func: Callable[..., Any], args: tuple, kwargs: dict, queue: asyncio.queues.Queue, completion_event: asyncio.locks.Event) -> None"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"_send_heartbeat(self, func_name: str, completion_event: asyncio.locks.Event, queue: asyncio.queues.Queue, interval: int = 2)"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Sends periodic heartbeat updates to indicate the task is still in progress."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Args:\nfunc_name (str): The name of the task function.\ncompletion_event (asyncio.Event): Event to signal when the task is completed.\nqueue (asyncio.Queue): The queue to send heartbeat messages to.\ninterval (int): How frequently to send heartbeat messages (in seconds)."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["add_task(self, func: Callable[..., Any], *args: Any, **kwargs: Any)","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Adds a task to the list of tasks to be executed, supporting both positional and keyword arguments."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Args:\nfunc: The function to be executed.\n*args: Positional arguments for the function.\n**kwargs: Keyword arguments for the function."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["run_async_as_completed(self) -> AsyncGenerator[Dict[str, Any], NoneType]","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Runs all tasks concurrently and yields results as they complete,\nwhile periodically sending heartbeat messages."}),"\n"]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>r});var t=s(6540);const l={},a=t.createContext(l);function i(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);