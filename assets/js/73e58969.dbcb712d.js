"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[3261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(n),u=a,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:20,displayed_sidebar:"clientApisSidebar"},l="create",s={unversionedId:"client_apis/python/lst/create",id:"client_apis/python/lst/create",title:"create",description:"|Param|Description|",source:"@site/docs/client_apis/python/lst/create.md",sourceDirName:"client_apis/python/lst",slug:"/client_apis/python/lst/create",permalink:"/client_apis/python/lst/create",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,displayed_sidebar:"clientApisSidebar"},sidebar:"clientApisSidebar",previous:{title:"Overview",permalink:"/client_apis/python/lst/overview"},next:{title:"add",permalink:"/client_apis/python/lst/add"}},p={},o=[{value:"Raises",id:"raises",level:2},{value:"Examples",id:"examples",level:2}],c={toc:o},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create"},"create"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"async def create(name: str) -> None\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the list")))),(0,a.kt)("p",null,"Creates a list with the given ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,a.kt)("h2",{id:"raises"},"Raises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ResponseError"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," already exists")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from ndb.client import NdbClient\nfrom ndb.lists import ObjLists\n\nclient = NdbClient()\nawait client.open('ws://127.0.0.1:1987/')\n\n# create API object\nlists = ObjLists(client)\n\nawait lists.create('list1')\nawait lists.create('list2')\n\n# add single item to list1\nawait lists.add('list1', {'prod_name':'TV', 'qty':1})\n# add multiple items to list2\nawait lists.add('list2', [{'prod_name':'Lamp', 'qty':2}, {'prod_name':'Chair', 'qty':3}])\n\nprint(await lists.get_rng('list1', start=0))\nprint(await lists.get_rng('list2', start=0))\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"[{'prod_name': 'TV', 'qty': 1}]\n[{'prod_name': 'Lamp', 'qty': 2}, {'prod_name': 'Chair', 'qty': 3}]\n")))}m.isMDXComponent=!0}}]);