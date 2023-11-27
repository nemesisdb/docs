"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[5756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(k,s(s({ref:t},m),{},{components:n})):a.createElement(k,s({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:25},s="SH_SAVE",l={unversionedId:"api/sessions/sh-save",id:"api/sessions/sh-save",title:"SH_SAVE",description:"Saves the data to the filesystem so it can be loaded on startup, restoring the database.",source:"@site/docs/api/sessions/sh-save.md",sourceDirName:"api/sessions",slug:"/api/sessions/sh-save",permalink:"/api/sessions/sh-save",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"apiSidebar",previous:{title:"SH_INFO_ALL",permalink:"/api/sessions/sh-info-all"},next:{title:"SH_LOAD",permalink:"/api/sessions/sh-load"}},o={},p=[{value:"Response",id:"response",level:2},{value:"Initial Response",id:"initial-response",level:3},{value:"Final Response",id:"final-response",level:3},{value:"Example",id:"example",level:2},{value:"Save All",id:"save-all",level:3},{value:"Save Select Sessions",id:"save-select-sessions",level:3}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sh_save"},"SH_SAVE"),(0,r.kt)("p",null,"Saves the data to the filesystem so it can be loaded on startup, restoring the database."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The data is written to the ",(0,r.kt)("inlineCode",{parentName:"li"},"session::save::path")," set in the config file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session::save::enabled")," must be ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," for this command to be available")),(0,r.kt)("p",null,"Restored sessions retain their shared and expiry settings. If a session has expiry settings, the expiry time is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"now + duration"),"."),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A friendly name for the dataset. The data is saved to a directory with this name. The name is used when loading the data."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tkns"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An array of session tokens to save. If ",(0,r.kt)("inlineCode",{parentName:"td"},"tkns")," is not defined all sessions are saved."),(0,r.kt)("td",{parentName:"tr",align:"center"},"N")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"If the config file has:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"save":\n{\n  "enabled":true,\n  "path":"/nemesisdb/data"\n}\n')),(0,r.kt)("p",null,"And this is sent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_SAVE":\n  {\n    "name":"dump1"\n  }\n}\n')),(0,r.kt)("p",null,"The data is written to:  ",(0,r.kt)("inlineCode",{parentName:"p"},"/nemesisdb/data/dump1/<timestamp>"),"."),(0,r.kt)("p",null,"If the command is sent again with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", it won't overwrite the first because the ",(0,r.kt)("inlineCode",{parentName:"p"},"<timestamp>")," is different."),(0,r.kt)("p",null,"When loading data, the newest timestamp is selected. "),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SH_SAVE_RSP")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"st"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name used in the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration, in milliseconds, to write the data")))),(0,r.kt)("p",null,"The response is split in two:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An initial response indicating if the command is accepted"),(0,r.kt)("li",{parentName:"ul"},"A final response confirming the save is complete or error during saving")),(0,r.kt)("h3",{id:"initial-response"},"Initial Response"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"st")," can be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CommandDisabled (save disabled in the config file)"),(0,r.kt)("li",{parentName:"ul"},"CommandSyntax (",(0,r.kt)("inlineCode",{parentName:"li"},"name")," not present or not a string)"),(0,r.kt)("li",{parentName:"ul"},"ValueTypeInvalid (",(0,r.kt)("inlineCode",{parentName:"li"},"tkns")," is present but not an array, or an item in the array is not an unsigned integer)"),(0,r.kt)("li",{parentName:"ul"},"SaveDirWriteFail (failed to create directory/files required before starting)"),(0,r.kt)("li",{parentName:"ul"},"SaveStart (command accepted, expect a final response)")),(0,r.kt)("h3",{id:"final-response"},"Final Response"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"st")," can be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SaveComplete (save complete without error)"),(0,r.kt)("li",{parentName:"ul"},"SaveError (save incomplete, error occured)")),(0,r.kt)("p",null,"If the final response status is ",(0,r.kt)("inlineCode",{parentName:"p"},"SaveError")," the data cannot be loaded."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"./../Statuses"},"response status")," for status values."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"save-all"},"Save All"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Initiate save"',title:'"Initiate','save"':!0},'{\n  "SH_SAVE":\n  {\n    "name":"dump"\n  }\n}\n')),(0,r.kt)("p",null,"Initial response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Save accepted"',title:'"Save','accepted"':!0},'{\n  "SH_SAVE_RSP":\n  {\n    "name":"dump",\n    "st": 120\n  }\n}\n')),(0,r.kt)("p",null,"Soon afterwards:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Save complete"',title:'"Save','complete"':!0},'{\n  "SH_SAVE_RSP":\n  {\n    "name":"dump",\n    "st": 121\n  }\n}\n')),(0,r.kt)("p",null,"After this, the data can be found in:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<savepath>/dump/<timestamp>")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"<savepath>")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"session::save::path")," in the server config."),(0,r.kt)("h3",{id:"save-select-sessions"},"Save Select Sessions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Initiate saving of three sessions"',title:'"Initiate',saving:!0,of:!0,three:!0,'sessions"':!0},'{\n  "SH_SAVE":\n  {\n    "name":"save_three_sessions",\n    "tkns":\n    [\n      3349001631311176311,\n      6725099647173095979,\n      7096468318535971751\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"A response confirming this was accepted is sent followed by a final ",(0,r.kt)("inlineCode",{parentName:"p"},"SessionComplete"),"."))}u.isMDXComponent=!0}}]);