"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[690],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),s=m(a),N=r,g=s["".concat(p,".").concat(N)]||s[N]||k[N]||l;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[s]="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},4990:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1,displayed_sidebar:"apiSidebar"},i="Response Status Values",d={unversionedId:"api/Statuses",id:"api/Statuses",title:"Response Status Values",description:"Many commands return a status (st) value which is an unsigned integer.",source:"@site/docs/api/Statuses.md",sourceDirName:"api",slug:"/api/Statuses",permalink:"/docs/api/Statuses",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"Overview",permalink:"/docs/api/Overview"},next:{title:"Sessions",permalink:"/docs/category/sessions-1"}},p={},m=[{value:"General",id:"general",level:2},{value:"Keys",id:"keys",level:2},{value:"Values",id:"values",level:2},{value:"Find",id:"find",level:2},{value:"Session",id:"session",level:2}],o={toc:m},s="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"response-status-values"},"Response Status Values"),(0,r.kt)("p",null,"Many commands return a status (",(0,r.kt)("inlineCode",{parentName:"p"},"st"),") value which is an unsigned integer."),(0,r.kt)("p",null,"This table listed a 'friendly name' and value. THe friendly name is used throughout the API docs rather than the number value for readability."),(0,r.kt)("h2",{id:"general"},"General"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ok"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Command successful, everything good")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PayLoadInvalid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"WebSocket pay invalid, must be text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JsonInvalid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON failed parsing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PathInvalid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path invalid, for example in ",(0,r.kt)("inlineCode",{parentName:"td"},"KV_UPDATE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PathNotExist"),(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path is valid syntax, but not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CommandNotExist"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Command does not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CommandMultiple"),(0,r.kt)("td",{parentName:"tr",align:"center"},"11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Multiple commands in the same request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CommandType"),(0,r.kt)("td",{parentName:"tr",align:"center"},"12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Command is known but it is the incorrect type (most commands are objects)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CommandSyntax"),(0,r.kt)("td",{parentName:"tr",align:"center"},"13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Command is known but contains invalid syntax. ",(0,r.kt)("inlineCode",{parentName:"td"},"m")," will contain the offending parameter if known.")))),(0,r.kt)("h2",{id:"keys"},"Keys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeySet"),(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key value is set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyUpdated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key already existed and has been updated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyNotExist"),(0,r.kt)("td",{parentName:"tr",align:"center"},"22"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key does not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyExist"),(0,r.kt)("td",{parentName:"tr",align:"center"},"23"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key exist (i.e. with ",(0,r.kt)("inlineCode",{parentName:"td"},"KV_CONTAINS"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyRemoved"),(0,r.kt)("td",{parentName:"tr",align:"center"},"24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key deleted/removed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyMissing"),(0,r.kt)("td",{parentName:"tr",align:"center"},"26"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key param not in command, i.e. ",(0,r.kt)("inlineCode",{parentName:"td"},"keys"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyTypeInvalid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"27"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key wrong type. Must always be a string")))),(0,r.kt)("h2",{id:"values"},"Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ValueMissing"),(0,r.kt)("td",{parentName:"tr",align:"center"},"40"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Expected value not present")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ValueTypeInvalid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"41"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Value has incorrect type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ValueSize"),(0,r.kt)("td",{parentName:"tr",align:"center"},"42"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Value exceeds maximum size (NOTE: if the payload size exceeds the maximum, this is not returned)")))),(0,r.kt)("h2",{id:"find"},"Find"),(0,r.kt)("p",null,"These all relate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"KV_FIND")," command."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"FindNoPath"),(0,r.kt)("td",{parentName:"tr",align:"center"},"60"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No ",(0,r.kt)("inlineCode",{parentName:"td"},"path"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"FindNoOperator"),(0,r.kt)("td",{parentName:"tr",align:"center"},"61"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No operator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"FindInvalidOperator"),(0,r.kt)("td",{parentName:"tr",align:"center"},"62"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Operator not permitted")))),(0,r.kt)("h2",{id:"session"},"Session"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SessionNotExist"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session does not exist (token is incorrect)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SessionTokenInvalid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"101"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Token is invalid (i.e. not a string)")))))}k.isMDXComponent=!0}}]);