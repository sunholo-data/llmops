"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1775],{8348:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>g,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var l=o(4848),t=o(8453);const s={},r="custom_logging.py",i={id:"sunholo/custom_logging",title:"custom_logging.py",description:"Source: sunholo/customlogging.py",source:"@site/docs/sunholo/custom_logging.md",sourceDirName:"sunholo",slug:"/sunholo/custom_logging",permalink:"/docs/sunholo/custom_logging",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/sunholo/custom_logging.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vectorstore.py",permalink:"/docs/sunholo/components/vectorstore"},next:{title:"database.py",permalink:"/docs/sunholo/database/"}},g={},a=[{value:"Functions",id:"functions",level:2},{value:"get_logger()",id:"get_logger",level:3},{value:"is_logging_setup(logger=None)",id:"is_logging_setuploggernone",level:3},{value:"log_folder_location(folder_name)",id:"log_folder_locationfolder_name",level:3},{value:"setup_logging(logger_name=None, log_level=20, project_id=None)",id:"setup_logginglogger_namenone-log_level20-project_idnone",level:3},{value:"Classes",id:"classes",level:2},{value:"GoogleCloudLogging",id:"googlecloudlogging",level:3}];function c(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"custom_loggingpy",children:"custom_logging.py"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"Source"}),": ",(0,l.jsx)(n.a,{href:"https://github.com/sunholo-data/sunholo-py/blob/main/sunholo/custom_logging.py",children:"sunholo/custom_logging.py"})]}),"\n",(0,l.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,l.jsx)(n.h3,{id:"get_logger",children:"get_logger()"}),"\n",(0,l.jsx)(n.p,{children:"No docstring available."}),"\n",(0,l.jsx)(n.h3,{id:"is_logging_setuploggernone",children:"is_logging_setup(logger=None)"}),"\n",(0,l.jsx)(n.p,{children:"No docstring available."}),"\n",(0,l.jsx)(n.h3,{id:"log_folder_locationfolder_name",children:"log_folder_location(folder_name)"}),"\n",(0,l.jsx)(n.p,{children:"No docstring available."}),"\n",(0,l.jsx)(n.h3,{id:"setup_logginglogger_namenone-log_level20-project_idnone",children:"setup_logging(logger_name=None, log_level=20, project_id=None)"}),"\n",(0,l.jsx)(n.p,{children:"Sets up Google Cloud Logging with the provided log level and project ID. If no project ID\nis provided, it attempts to retrieve the project ID from the metadata server."}),"\n",(0,l.jsx)(n.p,{children:"Parameters:\nlogger_name (str): The name of the log to send to. If not provided, set to run.googleapis.com%2Fstderr\nlog_level: The logging level to capture. Uses Python's logging module levels.\nDefault is log.INFO.\nproject_id: A string representing the Google Cloud project ID. If None, the project ID\nwill be retrieved from the metadata server."}),"\n",(0,l.jsx)(n.p,{children:"Example:"}),"\n",(0,l.jsx)(n.h1,{id:"set-up-google-cloud-logging-for-the-script-with-default-info-level",children:"Set up Google Cloud Logging for the script with default INFO level"}),"\n",(0,l.jsx)(n.p,{children:"setup_logging()"}),"\n",(0,l.jsx)(n.h1,{id:"now-you-can-use-pythons-logging-module-as-usual",children:"Now you can use Python's logging module as usual"}),"\n",(0,l.jsx)(n.p,{children:"import logging\nlog.info('This is an info message that will be sent to Google Cloud log.')"}),"\n",(0,l.jsx)(n.p,{children:"Note:\nThis function requires that the 'google-cloud-logging' library is installed and\nthat the application is authenticated with Google Cloud. This can be done by setting\nthe GOOGLE_APPLICATION_CREDENTIALS environment variable to the path of your service\naccount key file, or by running this code in an environment where default\napplication credentials are already set, such as Google Cloud Compute Engine,\nGoogle Kubernetes Engine, Google App Engine, etc."}),"\n",(0,l.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,l.jsx)(n.h3,{id:"googlecloudlogging",children:"GoogleCloudLogging"}),"\n",(0,l.jsx)(n.p,{children:"No docstring available."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"init"}),"(self, project_id=None, log_level=20, logger_name=None)"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Initialize self.  See help(type(self)) for accurate signature."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"new"}),"(cls, project_id=None, log_level=20, logger_name=None)"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Create and return a new object.  See help(type) for accurate signature."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"_get_caller_info(self)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Internal method to get caller's filename, line number, and function name."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"debug(self, log_text=None, log_struct=None)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Writes a debug log entry."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Args:\nlog_text (str, optional): The debug log message as a text string. Defaults to None.\nlog_struct (dict, optional): The debug log message as structured data. Defaults to None.\nlogger_name (str, optional): The name of the logger to which to write the debug log entry."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["error(self, log_text=None, log_struct=None)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Writes an error log entry."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Args:\nlog_text (str, optional): The error log message as a text string. Defaults to None.\nlog_struct (dict, optional): The error log message as structured data. Defaults to None.\nlogger_name (str, optional): The name of the logger to which to write the error log entry."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["exception(self, log_text=None, log_struct=None)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Writes an exception log entry."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Args:\nlog_text (str, optional): The error log message as a text string. Defaults to None.\nlog_struct (dict, optional): The error log message as structured data. Defaults to None.\nlogger_name (str, optional): The name of the logger to which to write the error log entry."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["info(self, log_text=None, log_struct=None)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Writes an info log entry."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Args:\nlog_text (str, optional): The info log message as a text string. Defaults to None.\nlog_struct (dict, optional): The info log message as structured data. Defaults to None.\nlogger_name (str, optional): The name of the logger to which to write the info log entry."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"setup_logging(self, log_level=20, logger_name=None)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"No docstring available."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"structured_log(self, log_text=None, log_struct=None, logger_name=None, severity='INFO')"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Writes log entries to the specified logger as either text or structured data."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:'Args:\nlog_text (str, optional): The log message as a text string. Defaults to None.\nlog_struct (dict, optional): The log message as a dictionary for structured log. Defaults to None.\nlogger_name (str, optional): The name of the logger to which to write the log entries. e.g.\nlogName="run.googleapis.com%2Fstderr"\nseverity (str, optional): The severity level of the log entry. Defaults to "INFO".'}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["warning(self, log_text=None, log_struct=None)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Writes a warning log entry."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Args:\nlog_text (str, optional): The warning log message as a text string. Defaults to None.\nlog_struct (dict, optional): The warning log message as structured data. Defaults to None.\nlogger_name (str, optional): The name of the logger to which to write the warning log entry."})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>i});var l=o(6540);const t={},s=l.createContext(t);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);