"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[6802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:10,displayed_sidebar:"homeSidebar"},l="Configure",o={unversionedId:"home/config",id:"home/config",title:"Configure",description:"Default Config",source:"@site/docs/home/config.md",sourceDirName:"home",slug:"/home/config",permalink:"/home/config",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar",previous:{title:"Run",permalink:"/home/run"},next:{title:"Key Values",permalink:"/home/keyvalues"}},p={},s=[{value:"Default Config",id:"default-config",level:2},{value:"<code>core</code>",id:"core",level:2},{value:"<code>persist</code>",id:"persist",level:2},{value:"arrays",id:"arrays",level:2}],d={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure"},"Configure"),(0,r.kt)("h2",{id:"default-config"},"Default Config"),(0,r.kt)("p",null,"There is a default configuration included in the install package and Docker image. "),(0,r.kt)("p",null,"Default settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Listen on ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1:1987")),(0,r.kt)("li",{parentName:"ul"},"Assigned to core ",(0,r.kt)("inlineCode",{parentName:"li"},"0")),(0,r.kt)("li",{parentName:"ul"},"Sessions disabled"),(0,r.kt)("li",{parentName:"ul"},"Persistance disabled")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="default.jsonc"',title:'"default.jsonc"'},'{\n  "version":6,\n  "core":0,\n  "ip":"127.0.0.1",\n  "port":1987,\n  "maxPayload":8192,\n  "persist":\n  {\n    "enabled":false,\n    "path":"./data"\n  },\n  "arrays":\n  {\n    "maxCapacity":10000,\n    "maxResponseSize":10000\n  }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"version"),(0,r.kt)("td",{parentName:"tr",align:"center"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Must be 5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"core"),(0,r.kt)("td",{parentName:"tr",align:"center"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The core to assign this instance.",(0,r.kt)("br",null)," If not present or above maximum available, defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"center"},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxPayload"),(0,r.kt)("td",{parentName:"tr",align:"center"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The max size, in bytes, of the WebSocket payload"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"persist"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Settings for saving/loading keys"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"arrays"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Settings for arrays"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"core"},(0,r.kt)("inlineCode",{parentName:"h2"},"core")),(0,r.kt)("p",null,"This is the ",(0,r.kt)("strong",{parentName:"p"},"logical")," core, which may differ from physical cores when hyperthreading is present.",(0,r.kt)("br",null)),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"When running multiple instances, remember to change the ",(0,r.kt)("inlineCode",{parentName:"li"},"port")),(0,r.kt)("li",{parentName:"ul"},"If running in a Docker container, the core(s) available depends on those available for the container."))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"persist"},(0,r.kt)("inlineCode",{parentName:"h2"},"persist")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"),":",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"KV_SAVE")," available",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"path")," must exist",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"false"),":",(0,r.kt)("br",null),"-",(0,r.kt)("inlineCode",{parentName:"td"},"KV_SAVE")," not available",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"path")," is not checked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to the directory where data is stored. Must be a directory.",(0,r.kt)("br",null),"If ",(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," is true, this path must exist.")))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../api/kv/kv-save"},"KV_SAVE")," for more."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"arrays"},"arrays"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxCapacity"),(0,r.kt)("td",{parentName:"tr",align:"center"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Arrays are fixed size so this is the max number of elements in the array, ",(0,r.kt)("strong",{parentName:"td"},"not")," max number of bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxResponseSize"),(0,r.kt)("td",{parentName:"tr",align:"center"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum number of items permitted in a response that returns multiple items, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"get_range()"),".",(0,r.kt)("br",null),"If this is less than ",(0,r.kt)("inlineCode",{parentName:"td"},"maxCapacity")," it is possible that not all items will be returned")))))}c.isMDXComponent=!0}}]);