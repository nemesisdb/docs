"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[5435],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=s,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:s,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),s=(t(7294),t(3905));const i={sidebar_position:3,displayed_sidebar:"clientApisSidebar",sidebar_label:"sh_end_all"},a="sh_end_all",l={unversionedId:"client_apis/python/sh/End_All",id:"client_apis/python/sh/End_All",title:"sh_end_all",description:"Ends all sessions.",source:"@site/docs/client_apis/python/sh/End_All.md",sourceDirName:"client_apis/python/sh",slug:"/client_apis/python/sh/End_All",permalink:"/client_apis/python/sh/End_All",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,displayed_sidebar:"clientApisSidebar",sidebar_label:"sh_end_all"},sidebar:"clientApisSidebar",previous:{title:"sh_end",permalink:"/client_apis/python/sh/End"},next:{title:"sh_session_exists",permalink:"/client_apis/python/sh/Exists"}},o={},p=[{value:"Examples",id:"examples",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,s.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sh_end_all"},"sh_end_all"),(0,s.kt)("p",null,"Ends all sessions."),(0,s.kt)("p",null,"Sessions with expiry settings are also ended immediately."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"sh_end_all() -> int\n")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Create and end multiple sessions'",title:"'Create",and:!0,end:!0,multiple:!0,"sessions'":!0},"client = NdbClient()\nawait client.open('ws://127.0.0.1:1987/')\n\nsession1 = await client.sh_create_session()\nsession2 = await client.sh_create_session()\n\nif session1.isValid and session2.isValid:\n  print(f'Session 1 token {session1.tkn}')\n  print(f'Session 2 token {session2.tkn}')\n\ncount = await client.sh_end_all()\nprint(f'Ended {count} sessions')\n")))}u.isMDXComponent=!0}}]);