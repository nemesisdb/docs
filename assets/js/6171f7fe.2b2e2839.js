"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[7325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||s;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:8,displayed_sidebar:"clientApisSidebar",sidebar_label:"session_load"},i="session_load",o={unversionedId:"client_apis/python/sessions/Load",id:"client_apis/python/sessions/Load",title:"session_load",description:"Restore sessions that were saved with session_save().",source:"@site/docs/client_apis/python/sessions/Load.md",sourceDirName:"client_apis/python/sessions",slug:"/client_apis/python/sessions/Load",permalink:"/client_apis/python/sessions/Load",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,displayed_sidebar:"clientApisSidebar",sidebar_label:"session_load"},sidebar:"clientApisSidebar",previous:{title:"session_save",permalink:"/client_apis/python/sessions/Save"},next:{title:"Server Info",permalink:"/category/server-info"}},l={},p=[{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"session_load"},"session_load"),(0,r.kt)("p",null,"Restore sessions that were saved with ",(0,r.kt)("a",{parentName:"p",href:"./Save"},"session_save()"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the dataset"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The command is available even if persistance is disabled"))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dict")," : See table below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of sessions loaded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"keys"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of keys loaded")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Save and load one session'",title:"'Save",and:!0,load:!0,one:!0,"session'":!0},"client = SessionClient()\nawait client.open('ws://127.0.0.1:1987/')\n\n# clear before start\n(cleared, count) = await client.end_all_sessions()\nassert cleared\n\nsession = await client.create_session()\nif session.isValid:\n  dataSetName = 'my_data'\n  \n  await client.set({'fname':'james', 'sname':'smith'}, session.tkn)\n  \n  # save to filesystem\n  await client.session_save(dataSetName, [session.tkn])\n\n  # clear and restore\n  count = await client.end_all_sessions()\n  assert cleared and count == 1\n\n  # restore keys\n  rsp = await client.session_load(dataSetName)\n  assert loaded and rsp['sessions'] == 1 and rsp['keys'] == 2\n")))}m.isMDXComponent=!0}}]);