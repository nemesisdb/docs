"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[1195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const i={sidebar_position:20,displayed_sidebar:"clientApisSidebar"},a="sh_set",o={unversionedId:"client_apis/python/sh/sh_set",id:"client_apis/python/sh/sh_set",title:"sh_set",description:"Store keys in a session.",source:"@site/docs/client_apis/python/sh/sh_set.md",sourceDirName:"client_apis/python/sh",slug:"/client_apis/python/sh/sh_set",permalink:"/client_apis/python/sh/sh_set",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,displayed_sidebar:"clientApisSidebar"},sidebar:"clientApisSidebar",previous:{title:"sh_info_all",permalink:"/client_apis/python/sh/Info_All"},next:{title:"sh_get",permalink:"/client_apis/python/sh/sh_get"}},l={},p=[{value:"Raises",id:"raises",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sh_set"},"sh_set"),(0,s.kt)("p",null,"Store keys in a session."),(0,s.kt)("p",null,"Existing keys are overwritten, to avoid this use ",(0,s.kt)("a",{parentName:"p",href:"./sh_add"},"sh_add"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"sh_set(tkn: int, keys: dict) -> None\n")),(0,s.kt)("h2",{id:"raises"},"Raises"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ResponseError")," if query fails")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Connect'",title:"'Connect'"},"client = NdbClient(debug=False) # toggle for debug logs\nif not (await client.open('ws://127.0.0.1:1987/')):\n  print('Failed to connect')\n  return\n")),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Single session'",title:"'Single","session'":!0},"session = await client.sh_create_session()\nprint(f\"Session created with session token: {session.tkn}\")\n\n# set keys in the session\nawait client.sh_set(session.tkn, {'fname':'James', 'sname':'smith'})\n\n# retrieve\nvalues = await client.sh_get(session.tkn, keys=('fname', 'sname'))\nprint(values)\n\n# overwrite surname ('smith' to 'Smith')\nawait client.sh_set(session.tkn, {'sname':'Smith'})\n\n# retrieve updated value\nupdatedSurname = await client.sh_get(session.tkn, key='sname')\nprint(updatedSurname)\n")),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"./sh_get"},"sh_get"),"."))}d.isMDXComponent=!0}}]);