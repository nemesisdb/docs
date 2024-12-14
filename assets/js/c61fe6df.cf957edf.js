"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[4178],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=c(a),y=n,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||i;return a?r.createElement(m,s(s({ref:t},o),{},{components:a})):r.createElement(m,s({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},3902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:120,displayed_sidebar:"clientApisSidebar"},s="used",l={unversionedId:"client_apis/python/arr/used",id:"client_apis/python/arr/used",title:"used",description:"|Param|Description|",source:"@site/docs/client_apis/python/arr/used.md",sourceDirName:"client_apis/python/arr",slug:"/client_apis/python/arr/used",permalink:"/client_apis/python/arr/used",draft:!1,tags:[],version:"current",sidebarPosition:120,frontMatter:{sidebar_position:120,displayed_sidebar:"clientApisSidebar"},sidebar:"clientApisSidebar",previous:{title:"capacity",permalink:"/client_apis/python/arr/capacity"},next:{title:"swap (Unsorted Only)",permalink:"/client_apis/python/arr/swap"}},p={},c=[{value:"Array Type Differences",id:"array-type-differences",level:2},{value:"Raises",id:"raises",level:2},{value:"Examples",id:"examples",level:2}],o={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"used"},"used"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"async def used(name: str) -> int\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the array")))),(0,n.kt)("p",null,"Returns the number of items in the array. This can differ from the ",(0,n.kt)("inlineCode",{parentName:"p"},"capacity()")," because capacity is how many items the array ",(0,n.kt)("em",{parentName:"p"},"can")," store, whilst ",(0,n.kt)("inlineCode",{parentName:"p"},"used()")," is how many items are ",(0,n.kt)("em",{parentName:"p"},"currently")," stored."),(0,n.kt)("p",null,"When ",(0,n.kt)("inlineCode",{parentName:"p"},"used() == capacity()")," the array is full."),(0,n.kt)("h2",{id:"array-type-differences"},"Array Type Differences"),(0,n.kt)("p",null,"None"),(0,n.kt)("h2",{id:"raises"},"Raises"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ResponseError")," if query fails",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," does not exist"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ValueError")," caught before query is sent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," is empty")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"client = NdbClient()\nawait client.open('ws://127.0.0.1:1987/')\n\narrays = StringArrays(client)\nawait arrays.create('values', capacity=4)\n\n# no items stored\ncapacity = await arrays.capacity('values')\nused = await arrays.used('values')\nprint (f'1. capacity: {capacity}, used: {used}')\n\n# store 3 items, leaving 1 array slot free\nawait arrays.set_rng('values', ['a', 'b', 'c'])\ncapacity = await arrays.capacity('values')\nused = await arrays.used('values')\nprint (f'2. capacity: {capacity}, used: {used}')\n\n# clear the first 2 items\nawait arrays.clear('values', start=0, stop=2)\n\ncapacity = await arrays.capacity('values')\nused = await arrays.used('values')\nprint (f'3. capacity: {capacity}, used: {used}')\n")),(0,n.kt)("p",null,"Output"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"1. capacity: 4, used: 0\n2. capacity: 4, used: 3\n3. capacity: 4, used: 1\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Used is 0 because no items are stored"),(0,n.kt)("li",{parentName:"ol"},"Three items are stored, so ",(0,n.kt)("inlineCode",{parentName:"li"},"used")," is 3"),(0,n.kt)("li",{parentName:"ol"},"Two items were cleared, so now ",(0,n.kt)("inlineCode",{parentName:"li"},"used")," is 1")),(0,n.kt)("p",null,"Capacity never changes after ",(0,n.kt)("inlineCode",{parentName:"p"},"create()"),"."))}d.isMDXComponent=!0}}]);