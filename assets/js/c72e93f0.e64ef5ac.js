"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[6621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=s,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),s=(n(7294),n(3905));const r={sidebar_position:7,displayed_sidebar:"clientApisSidebar",sidebar_label:"session_save"},i="session_save",o={unversionedId:"client_apis/python/sessions/Save",id:"client_apis/python/sessions/Save",title:"session_save",description:"Save one or multiple sessions.",source:"@site/docs/client_apis/python/sessions/Save.md",sourceDirName:"client_apis/python/sessions",slug:"/client_apis/python/sessions/Save",permalink:"/client_apis/python/sessions/Save",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,displayed_sidebar:"clientApisSidebar",sidebar_label:"session_save"},sidebar:"clientApisSidebar",previous:{title:"session_info_all",permalink:"/client_apis/python/sessions/Info_All"},next:{title:"session_load",permalink:"/client_apis/python/sessions/Load"}},l={},p=[{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"session_save"},"session_save"),(0,s.kt)("p",null,"Save one or multiple sessions."),(0,s.kt)("p",null,"The saved sessions can be restored with ",(0,s.kt)("a",{parentName:"p",href:"./Load"},"session_load()"),"."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Param"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"name"),(0,s.kt)("td",{parentName:"tr",align:"center"},"str"),(0,s.kt)("td",{parentName:"tr",align:null},"The name of the dataset"),(0,s.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"tkns"),(0,s.kt)("td",{parentName:"tr",align:"center"},"List","[int]"),(0,s.kt)("td",{parentName:"tr",align:null},"A list of tokens to persist. Default is empty to persist all tokens"),(0,s.kt)("td",{parentName:"tr",align:"center"},"N")))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," is used with ",(0,s.kt)("inlineCode",{parentName:"p"},"session_load()")," to restore at runtime or with ",(0,s.kt)("inlineCode",{parentName:"p"},"--loadName")," to load at startup."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Persistance must be enabled in the server config"))),(0,s.kt)("h2",{id:"returns"},"Returns"),(0,s.kt)("p",null,"None"),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Save all'",title:"'Save","all'":!0},"client = SessionClient()\nawait client.open('ws://127.0.0.1:1987/')\n\nsession = await client.create_session()\nif session.isValid:\n  await client.set({'fname':'james', 'sname':'smith'}, session.tkn)\n  await client.session_save('my_data')\n")),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Save using token list'",title:"'Save",using:!0,token:!0,"list'":!0},"dataSetName = 'my_data'\nnSessions = 10\n\nclient = SessionClient()\nawait client.open('ws://127.0.0.1:1987/')\n\n# create sessions\ntokensToSave = list()\nfor s in range(0, nSessions):\n  session = await client.create_session()\n  tokensToSave.append(session.tkn)\n  await client.set({f'session{s}_key':'some_value'}, session.tkn)\n\n\nprint(tokensToSave)\nawait client.save(dataSetName, tokensToSave)\n\n# clear and then load\nawait client.end_all_sessions()\n\nrsp = await client.load(dataSetName)\nprint(rsp)\n")))}m.isMDXComponent=!0}}]);