"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[1699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,c=m["".concat(p,".").concat(k)]||m[k]||f[k]||i;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5,displayed_sidebar:"clientApisSidebar",sidebar_label:"sh_info"},l="sh_info",o={unversionedId:"client_apis/python/sh/Info",id:"client_apis/python/sh/Info",title:"sh_info",description:"Returns information for a session.",source:"@site/docs/client_apis/python/sh/Info.md",sourceDirName:"client_apis/python/sh",slug:"/client_apis/python/sh/Info",permalink:"/client_apis/python/sh/Info",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,displayed_sidebar:"clientApisSidebar",sidebar_label:"sh_info"},sidebar:"clientApisSidebar",previous:{title:"sh_session_exists",permalink:"/client_apis/python/sh/Exists"},next:{title:"sh_info_all",permalink:"/client_apis/python/sh/Info_All"}},p={},s=[{value:"Returns",id:"returns",level:2}],d={toc:s},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sh_info"},"sh_info"),(0,r.kt)("p",null,"Returns information for a session."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tkn"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The token"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dict")," : information. See table below")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"keyCnt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of keys in the session")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"shared"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates if the session is shared")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expires"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true if the session expires, false if it never expires")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expiry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Expiry information, only present if ",(0,r.kt)("inlineCode",{parentName:"td"},"expires")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"expiry"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration, in seconds, before expiring")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"remaining"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration, in seconds, remaining until the session expires. Note, this can be negative because the session can expire before the session monitor has checked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"deleteSession"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"),": session is deleted when it expires",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"false"),": only the keys are deleted (default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"extendOnSetAdd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"),": on each set or add, the expire time is extended by ",(0,r.kt)("inlineCode",{parentName:"td"},"duration"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"false"),": default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"extendOnGet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"),": on each get, the expire time is extended by ",(0,r.kt)("inlineCode",{parentName:"td"},"duration"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"false"),": default")))))}f.isMDXComponent=!0}}]);