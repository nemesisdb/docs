"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[5505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:70,displayed_sidebar:"clientApisSidebar",sidebar_label:"sh_clear_set"},l="sh_clear_set",i={unversionedId:"client_apis/python/sh/sh_clear_set",id:"client_apis/python/sh/sh_clear_set",title:"sh_clear_set",description:"Deletes all keys and sets new keys in a single call.",source:"@site/docs/client_apis/python/sh/sh_clear_set.md",sourceDirName:"client_apis/python/sh",slug:"/client_apis/python/sh/sh_clear_set",permalink:"/client_apis/python/sh/sh_clear_set",draft:!1,tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,displayed_sidebar:"clientApisSidebar",sidebar_label:"sh_clear_set"},sidebar:"clientApisSidebar",previous:{title:"sh_clear",permalink:"/client_apis/python/sh/sh_clear"},next:{title:"sh_count",permalink:"/client_apis/python/sh/sh_count"}},o={},c=[{value:"Returns",id:"returns",level:2},{value:"Raises",id:"raises",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sh_clear_set"},"sh_clear_set"),(0,a.kt)("p",null,"Deletes ",(0,a.kt)("em",{parentName:"p"},"all")," keys and sets new keys in a single call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"sh_clear_set(tkn: int, keys: dict) -> int:\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keys"),(0,a.kt)("td",{parentName:"tr",align:null},"dict")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tkn"),(0,a.kt)("td",{parentName:"tr",align:null},"int")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"The number of keys deleted"),(0,a.kt)("h2",{id:"raises"},"Raises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ResponseError")," if query fails")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"client = NdbClient()\nawait client.open('ws://127.0.0.1:1987/')\n\nsession = await client.sh_create_session()\n\n# store user stats in a session\n# periodically reset counters to 0\nawait client.sh_clear_set(session.tkn, {'stats_read':0, 'stats_received':0, 'stats_sent':0})\n")))}d.isMDXComponent=!0}}]);