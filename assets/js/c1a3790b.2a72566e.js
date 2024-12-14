"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:300,displayed_sidebar:"clientApisSidebar",sidebar_label:"intersect (Sorted Only)"},l="intersect",s={unversionedId:"client_apis/python/arr/intersect",id:"client_apis/python/arr/intersect",title:"intersect",description:"|Param|Description|",source:"@site/docs/client_apis/python/arr/intersect.md",sourceDirName:"client_apis/python/arr",slug:"/client_apis/python/arr/intersect",permalink:"/client_apis/python/arr/intersect",draft:!1,tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300,displayed_sidebar:"clientApisSidebar",sidebar_label:"intersect (Sorted Only)"},sidebar:"clientApisSidebar",previous:{title:"swap (Unsorted Only)",permalink:"/client_apis/python/arr/swap"},next:{title:"min (Sorted Only)",permalink:"/client_apis/python/arr/min"}},p={},o=[{value:"Array Type Differences",id:"array-type-differences",level:2},{value:"Raises",id:"raises",level:2},{value:"Examples",id:"examples",level:2}],c={toc:o},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intersect"},"intersect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"async def intersect(arrA: str, arrB: str) -> List[str] | List[int]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the array")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"arrA"),(0,a.kt)("td",{parentName:"tr",align:null},"First array to intersect")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"arrB"),(0,a.kt)("td",{parentName:"tr",align:null},"Second array to intersect")))),(0,a.kt)("p",null,"Intersects ",(0,a.kt)("inlineCode",{parentName:"p"},"arrA")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"arrB"),"."),(0,a.kt)("h2",{id:"array-type-differences"},"Array Type Differences"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only applies to sorted arrays")),(0,a.kt)("h2",{id:"raises"},"Raises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ResponseError")," if query fails",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arrA")," does not exist"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arrB")," does not exist"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValueError")," caught before query is sent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arrA")," is empty"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arrB")," is empty"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arrA == arrB")," ")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"client = NdbClient()\nawait client.open('ws://127.0.0.1:1987/')\n\nsortedInts = SortedIntArrays(client)\nawait sortedInts.create('array1', 5)\nawait sortedInts.create('array2', 6)\n\nawait sortedInts.set_rng('array1', [25,10,50,100,80])\nawait sortedInts.set_rng('array2', [10,25,100,120,200,5])\n\nintersected = await sortedInts.intersect('array1', 'array2')\nprint(intersected)\n")),(0,a.kt)("p",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[10, 25, 100]\n")),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"async def createData(s: int, size: int):\n    from random import sample, seed\n    seed(s)\n    return sample(range(0, size*4), size)\n\n\nclient = NdbClient()\nconnect = client.open('ws://127.0.0.1:1987/')\n\nprint('Creating data') \ndata1 = await createData(7,500)\ndata2 = await createData(9,500)\n\nawait connect\n\nsortedInts = SortedIntArrays(client)\n\nprint('Creating arrays') \nawait sortedInts.create('array1', 500)\nawait sortedInts.create('array2', 500)\n\nprint('Storing data')\nawait sortedInts.set_rng('array1', data1)\nawait sortedInts.set_rng('array2', data2)\n\nprint('Intersecting')\nintersected = await sortedInts.intersect('array1', 'array2')\nprint(f'Intersected has: {len(intersected)} values')\n")))}u.isMDXComponent=!0}}]);