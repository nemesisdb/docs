"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[2105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:50,displayed_sidebar:"clientApisSidebar"},l="get",s={unversionedId:"client_apis/python/arr/get",id:"client_apis/python/arr/get",title:"get",description:"|Param|Description|",source:"@site/docs/client_apis/python/arr/get.md",sourceDirName:"client_apis/python/arr",slug:"/client_apis/python/arr/get",permalink:"/client_apis/python/arr/get",draft:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,displayed_sidebar:"clientApisSidebar"},sidebar:"clientApisSidebar",previous:{title:"set_rng",permalink:"/client_apis/python/arr/set_rng"},next:{title:"get_rng",permalink:"/client_apis/python/arr/get_rng"}},o={},p=[{value:"Returns",id:"returns",level:2},{value:"Array Type Differences",id:"array-type-differences",level:2},{value:"Raises",id:"raises",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get"},"get"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"async def get(name: str, pos: int) -> dict | str | int\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the array")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pos"),(0,a.kt)("td",{parentName:"tr",align:null},"The position of the item")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"The item requested."),(0,a.kt)("h2",{id:"array-type-differences"},"Array Type Differences"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"raises"},"Raises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ResponseError")," if query fails",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," does not exist"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pos")," out of bounds"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValueError")," caught before query is sent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," is empty")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"client = NdbClient()\nawait client.open('ws://127.0.0.1:1987/')\n\nvalues = [56,34,78,45]\n\n# unsorted\nunsortedInts = IntArrays(client)\nawait unsortedInts.create('values', 4)\nawait unsortedInts.set_rng('values', values)\n\n# sorted\nsortedInts = SortedIntArrays(client)\nawait sortedInts.create('values', 4)\nawait sortedInts.set_rng('values', values)\n\nfirst = await unsortedInts.get('values', 0)\nlast = await unsortedInts.get('values', 3)\nprint(f'Unsorted: {first} and {last}')\n\nfirst = await sortedInts.get('values', 0)\nlast = await sortedInts.get('values', 3)\nprint(f'Sorted: {first} and {last}')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Unsorted: 56 and 45\nSorted: 34 and 78\n")))}d.isMDXComponent=!0}}]);