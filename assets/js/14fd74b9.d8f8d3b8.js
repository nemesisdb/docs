"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[8348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3,displayed_sidebar:"clientApisSidebar",sidebar_label:"get"},l="get",o={unversionedId:"client_apis/python/kv/Get",id:"client_apis/python/kv/Get",title:"get",description:"|Param|Description|",source:"@site/docs/client_apis/python/kv/Get.md",sourceDirName:"client_apis/python/kv",slug:"/client_apis/python/kv/Get",permalink:"/client_apis/python/kv/Get",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,displayed_sidebar:"clientApisSidebar",sidebar_label:"get"},sidebar:"clientApisSidebar",previous:{title:"set",permalink:"/client_apis/python/kv/Set"},next:{title:"add",permalink:"/client_apis/python/kv/Add"}},p={},s=[{value:"Returns",id:"returns",level:2},{value:"Raises",id:"raises",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get"},"get"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"async def get(keys = None, key=None) -> dict | Any:\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key"),(0,a.kt)("td",{parentName:"tr",align:null},"Key to retrieve")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keys"),(0,a.kt)("td",{parentName:"tr",align:null},"Keys to retrieve")))),(0,a.kt)("p",null,"Retrieves keys from the database."),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"keys")," set, a ",(0,a.kt)("inlineCode",{parentName:"li"},"dict")," is returned",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If a key does not exist, its value is ",(0,a.kt)("inlineCode",{parentName:"li"},"None")))),(0,a.kt)("li",{parentName:"ul"},"If value of ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," is returned",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," does not exist, ",(0,a.kt)("inlineCode",{parentName:"li"},"None")," is returned")))),(0,a.kt)("h2",{id:"raises"},"Raises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ResponseError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValueError"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Both ",(0,a.kt)("inlineCode",{parentName:"li"},"keys")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," are set"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TypeError"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keys")," not a dict"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key")," not a str")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Connect and Set'",title:"'Connect",and:!0,"Set'":!0},"from ndb.client import NdbClient\nfrom ndb.kv import KV\n\n\nclient = NdbClient(debug=False) # toggle for debug\nawait client.open('ws://127.0.0.1:1987/')\n\n# create API instance\nkv = KV(client)\nawait kv.set({'username':'billy', 'password':'billy_passy'})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Get various'",title:"'Get","various'":!0},"# get single key\nvalue = await kv.get(key='username')\nprint (value)\n\n# get multiple keys\nvalues = await kv.get(keys=('username', 'password'))\nprint (values)\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"billy\n{'password': 'billy_passy', 'username': 'billy'}\n")))}d.isMDXComponent=!0}}]);