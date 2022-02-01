"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[5542],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(n),g=i,d=f["".concat(c,".").concat(g)]||f[g]||u[g]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1008:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],p={},c="Pagination",s={unversionedId:"overview/pagination",id:"overview/pagination",title:"Pagination",description:"Requests that return multiple results will be paginated to 100 items by default.",source:"@site/docs/overview/pagination.md",sourceDirName:"overview",slug:"/overview/pagination",permalink:"/viagogo-api-docs/docs/overview/pagination",editUrl:"https://github.com/viagogo/viagogo-api-docs/tree/main/docs/overview/pagination.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Basic Types",permalink:"/viagogo-api-docs/docs/overview/basic-types"},next:{title:"Sorting",permalink:"/viagogo-api-docs/docs/overview/sorting"}},l=[],u={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pagination"},"Pagination"),(0,o.kt)("p",null,"Requests that return multiple results will be paginated to 100 items by default.\nYou can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," parameter to specify which page of data to retrieve. You\ncan use ",(0,o.kt)("inlineCode",{parentName:"p"},"page_size")," parameter to set custom page sizes on the API responses. API\nresponses return pre-built pagination links with rels ",(0,o.kt)("inlineCode",{parentName:"p"},"first"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"prev"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"next"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"last")," and client applications are encouraged to follow these links for\npagination."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET https://api.viagogo.net/inventory/sellerlistings?page=1&page_size=30")),(0,o.kt)("p",null,"Note that page numbering is 1-based and that omitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," parameter will\nreturn the first page."))}f.isMDXComponent=!0}}]);