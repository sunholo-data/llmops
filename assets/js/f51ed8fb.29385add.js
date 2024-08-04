"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[670],{1277:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var n=s(4848),o=s(8453);const r={},l="download_url.py",i={id:"sunholo/gcs/download_url",title:"download_url.py",description:"Source: sunholo/gcs/downloadurl.py",source:"@site/docs/sunholo/gcs/download_url.md",sourceDirName:"sunholo/gcs",slug:"/sunholo/gcs/download_url",permalink:"/docs/sunholo/gcs/download_url",draft:!1,unlisted:!1,editUrl:"https://github.com/sunholo-data/sunholo-py/tree/main/docs/docs/sunholo/gcs/download_url.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"add_file.py",permalink:"/docs/sunholo/gcs/add_file"},next:{title:"metadata.py",permalink:"/docs/sunholo/gcs/metadata"}},c={},a=[{value:"Functions",id:"functions",level:2},{value:"construct_download_link(source_uri: &#39;str&#39;) -&gt; &#39;Tuple[str, str, bool]&#39;",id:"construct_download_linksource_uri-str---tuplestr-str-bool",level:3},{value:"get_bytes_from_gcs(gs_uri) -&gt; &#39;Optional[bytes]&#39;",id:"get_bytes_from_gcsgs_uri---optionalbytes",level:3},{value:"get_image_from_gcs(gs_uri: &#39;str&#39;) -&gt; &#39;Image.Image&#39;",id:"get_image_from_gcsgs_uri-str---imageimage",level:3},{value:"construct_download_link_simple(bucket_name: &#39;str&#39;, object_name: &#39;str&#39;) -&gt; &#39;Tuple[str, str, bool]&#39;",id:"construct_download_link_simplebucket_name-str-object_name-str---tuplestr-str-bool",level:3},{value:"get_bucket(bucket_name: &#39;str&#39;) -&gt; &#39;Optional[Bucket]&#39;",id:"get_bucketbucket_name-str---optionalbucket",level:3},{value:"parse_gs_uri(gs_uri: &#39;str&#39;) -&gt; &#39;Tuple[str, str]&#39;",id:"parse_gs_urigs_uri-str---tuplestr-str",level:3},{value:"sign_gcs_url(bucket_name: &#39;str&#39;, object_name: &#39;str&#39;, expiry_secs: &#39;int&#39; = 86400) -&gt; &#39;Optional[str]&#39;",id:"sign_gcs_urlbucket_name-str-object_name-str-expiry_secs-int--86400---optionalstr",level:3}];function u(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"download_urlpy",children:"download_url.py"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Source"}),": ",(0,n.jsx)(t.a,{href:"https://github.com/sunholo-data/sunholo-py/blob/main/sunholo/gcs/download_url.py",children:"sunholo/gcs/download_url.py"})]}),"\n",(0,n.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsx)(t.h3,{id:"construct_download_linksource_uri-str---tuplestr-str-bool",children:"construct_download_link(source_uri: 'str') -> 'Tuple[str, str, bool]'"}),"\n",(0,n.jsx)(t.p,{children:"Creates a viewable Cloud Storage web browser link from a gs:// URI."}),"\n",(0,n.jsx)(t.h3,{id:"get_bytes_from_gcsgs_uri---optionalbytes",children:"get_bytes_from_gcs(gs_uri) -> 'Optional[bytes]'"}),"\n",(0,n.jsx)(t.p,{children:"Downloads a file from Google Cloud Storage and returns its bytes."}),"\n",(0,n.jsx)(t.p,{children:"Args:\ngs_uri (str): The Google Cloud Storage URI of the file to download (e.g., 'gs://bucket_name/file_name')."}),"\n",(0,n.jsx)(t.p,{children:"Returns:\nbytes: The content of the file in bytes, or None if an error occurs."}),"\n",(0,n.jsx)(t.h3,{id:"get_image_from_gcsgs_uri-str---imageimage",children:"get_image_from_gcs(gs_uri: 'str') -> 'Image.Image'"}),"\n",(0,n.jsx)(t.p,{children:"Converts image bytes from GCS to a PIL Image object."}),"\n",(0,n.jsx)(t.h3,{id:"construct_download_link_simplebucket_name-str-object_name-str---tuplestr-str-bool",children:"construct_download_link_simple(bucket_name: 'str', object_name: 'str') -> 'Tuple[str, str, bool]'"}),"\n",(0,n.jsx)(t.p,{children:"Creates a viewable Cloud Storage web browser link from a gs:// URI."}),"\n",(0,n.jsx)(t.p,{children:"Args:\nsource_uri: The gs:// URI of the object in Cloud Storage."}),"\n",(0,n.jsx)(t.p,{children:"Returns:\nA URL that directly access the object in the Cloud Storage web browser."}),"\n",(0,n.jsx)(t.h3,{id:"get_bucketbucket_name-str---optionalbucket",children:"get_bucket(bucket_name: 'str') -> 'Optional[Bucket]'"}),"\n",(0,n.jsx)(t.p,{children:"Gets a Cloud Storage bucket and initialised GCS client"}),"\n",(0,n.jsx)(t.p,{children:"Args:\nbucket_name: Name of the bucket"}),"\n",(0,n.jsx)(t.p,{children:"Returns:"}),"\n",(0,n.jsx)(t.h3,{id:"parse_gs_urigs_uri-str---tuplestr-str",children:"parse_gs_uri(gs_uri: 'str') -> 'Tuple[str, str]'"}),"\n",(0,n.jsx)(t.p,{children:"Parses a gs:// URI into the bucket name and object name."}),"\n",(0,n.jsx)(t.p,{children:"Args:\ngs_uri: The gs:// URI to parse."}),"\n",(0,n.jsx)(t.p,{children:"Returns:\nA tuple containing the bucket name and object name."}),"\n",(0,n.jsx)(t.h3,{id:"sign_gcs_urlbucket_name-str-object_name-str-expiry_secs-int--86400---optionalstr",children:"sign_gcs_url(bucket_name: 'str', object_name: 'str', expiry_secs: 'int' = 86400) -> 'Optional[str]'"}),"\n",(0,n.jsx)(t.p,{children:"Creates a signed URL so that users can download a file from Google Cloud Storage without authentication"}),"\n",(0,n.jsx)(t.p,{children:"Args:\nbucket_name: Name of the bucket where the object lies\nobject_name: Object within the bucket\nexpiry_secs: How long the link will be valid - default 24hrs"}),"\n",(0,n.jsx)(t.p,{children:"Returns:\nstr: The signed URL or None if not avialable"})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>i});var n=s(6540);const o={},r=n.createContext(o);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);