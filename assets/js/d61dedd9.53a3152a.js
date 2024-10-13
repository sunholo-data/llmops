"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1188],{5766:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>i,frontMatter:()=>t,metadata:()=>n,toc:()=>_});var a=s(4848),r=s(8453);const t={},l="alloydb.py",n={id:"sunholo/database/alloydb",title:"alloydb.py",description:"Source: sunholo/database/alloydb.py",source:"@site/docs/sunholo/database/alloydb.md",sourceDirName:"sunholo/database",slug:"/sunholo/database/alloydb",permalink:"/docs/sunholo/database/alloydb",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/sunholo/database/alloydb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"database.py",permalink:"/docs/sunholo/database/"},next:{title:"alloydb_client.py",permalink:"/docs/sunholo/database/alloydb_client"}},c={},_=[{value:"Functions",id:"functions",level:2},{value:"add_document_if_not_exists(doc, vector_name)",id:"add_document_if_not_existsdoc-vector_name",level:3},{value:"_get_sources_from_docstore(sources, vector_name, search_type=&#39;OR&#39;)",id:"_get_sources_from_docstoresources-vector_name-search_typeor",level:3},{value:"_list_sources_from_docstore(sources, vector_name, search_type=&#39;OR&#39;)",id:"_list_sources_from_docstoresources-vector_name-search_typeor",level:3},{value:"and_or_ilike(sources: List[str], search_type: str = &#39;OR&#39;, operator: str = &#39;ILIKE&#39;)",id:"and_or_ilikesources-liststr-search_type-str--or-operator-str--ilike",level:3},{value:"create_alloydb_engine(vector_name)",id:"create_alloydb_enginevector_name",level:3},{value:"create_alloydb_table(vector_name, engine, type=&#39;vectorstore&#39;, alloydb_config=None, username=None)",id:"create_alloydb_tablevector_name-engine-typevectorstore-alloydb_confignone-usernamenone",level:3},{value:"create_docstore_table(table_name, alloydb_config, username)",id:"create_docstore_tabletable_name-alloydb_config-username",level:3},{value:"create_vectorstore_table(table_name, alloydb_config, username)",id:"create_vectorstore_tabletable_name-alloydb_config-username",level:3},{value:"delete_sources_from_alloydb(sources, vector_name)",id:"delete_sources_from_alloydbsources-vector_name",level:3},{value:"get_sources_from_docstore(sources, vector_name, search_type=&#39;OR&#39;, just_source_name=False)",id:"get_sources_from_docstoresources-vector_name-search_typeor-just_source_namefalse",level:3},{value:"get_sources_from_docstore_async(sources, vector_name, search_type=&#39;OR&#39;, just_source_name=False)",id:"get_sources_from_docstore_asyncsources-vector_name-search_typeor-just_source_namefalse",level:3},{value:"load_alloydb_sql(sql, vector_name)",id:"load_alloydb_sqlsql-vector_name",level:3},{value:"load_alloydb_sql_async(sql, vector_name)",id:"load_alloydb_sql_asyncsql-vector_name",level:3}];function d(e){const o={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"alloydbpy",children:"alloydb.py"})}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.em,{children:"Source"}),": ",(0,a.jsx)(o.a,{href:"https://github.com/sunholo-data/sunholo-py/blob/main/sunholo/database/alloydb.py",children:"sunholo/database/alloydb.py"})]}),"\n",(0,a.jsx)(o.h2,{id:"functions",children:"Functions"}),"\n",(0,a.jsx)(o.h3,{id:"add_document_if_not_existsdoc-vector_name",children:"add_document_if_not_exists(doc, vector_name)"}),"\n",(0,a.jsx)(o.p,{children:"No docstring available."}),"\n",(0,a.jsx)(o.h3,{id:"_get_sources_from_docstoresources-vector_name-search_typeor",children:"_get_sources_from_docstore(sources, vector_name, search_type='OR')"}),"\n",(0,a.jsx)(o.p,{children:"No docstring available."}),"\n",(0,a.jsx)(o.h3,{id:"_list_sources_from_docstoresources-vector_name-search_typeor",children:"_list_sources_from_docstore(sources, vector_name, search_type='OR')"}),"\n",(0,a.jsx)(o.p,{children:"No docstring available."}),"\n",(0,a.jsx)(o.h3,{id:"and_or_ilikesources-liststr-search_type-str--or-operator-str--ilike",children:"and_or_ilike(sources: List[str], search_type: str = 'OR', operator: str = 'ILIKE')"}),"\n",(0,a.jsx)(o.p,{children:"No docstring available."}),"\n",(0,a.jsx)(o.h3,{id:"create_alloydb_enginevector_name",children:"create_alloydb_engine(vector_name)"}),"\n",(0,a.jsx)(o.p,{children:"No docstring available."}),"\n",(0,a.jsx)(o.h3,{id:"create_alloydb_tablevector_name-engine-typevectorstore-alloydb_confignone-usernamenone",children:"create_alloydb_table(vector_name, engine, type='vectorstore', alloydb_config=None, username=None)"}),"\n",(0,a.jsx)(o.p,{children:"No docstring available."}),"\n",(0,a.jsx)(o.h3,{id:"create_docstore_tabletable_name-alloydb_config-username",children:"create_docstore_table(table_name, alloydb_config, username)"}),"\n",(0,a.jsx)(o.p,{children:"No docstring available."}),"\n",(0,a.jsx)(o.h3,{id:"create_vectorstore_tabletable_name-alloydb_config-username",children:"create_vectorstore_table(table_name, alloydb_config, username)"}),"\n",(0,a.jsx)(o.p,{children:"No docstring available."}),"\n",(0,a.jsx)(o.h3,{id:"delete_sources_from_alloydbsources-vector_name",children:"delete_sources_from_alloydb(sources, vector_name)"}),"\n",(0,a.jsx)(o.p,{children:"Deletes from both vectorstore and docstore"}),"\n",(0,a.jsx)(o.h3,{id:"get_sources_from_docstoresources-vector_name-search_typeor-just_source_namefalse",children:"get_sources_from_docstore(sources, vector_name, search_type='OR', just_source_name=False)"}),"\n",(0,a.jsx)(o.p,{children:"No docstring available."}),"\n",(0,a.jsx)(o.h3,{id:"get_sources_from_docstore_asyncsources-vector_name-search_typeor-just_source_namefalse",children:"get_sources_from_docstore_async(sources, vector_name, search_type='OR', just_source_name=False)"}),"\n",(0,a.jsx)(o.p,{children:"No docstring available."}),"\n",(0,a.jsx)(o.h3,{id:"load_alloydb_sqlsql-vector_name",children:"load_alloydb_sql(sql, vector_name)"}),"\n",(0,a.jsx)(o.p,{children:"No docstring available."}),"\n",(0,a.jsx)(o.h3,{id:"load_alloydb_sql_asyncsql-vector_name",children:"load_alloydb_sql_async(sql, vector_name)"}),"\n",(0,a.jsx)(o.p,{children:"No docstring available."})]})}function i(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>l,x:()=>n});var a=s(6540);const r={},t=a.createContext(r);function l(e){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:o},e.children)}}}]);