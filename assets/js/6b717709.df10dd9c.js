"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[681],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(n),d=r,h=g["".concat(s,".").concat(d)]||g[d]||p[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2311:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={authors:"viagogo",tags:["tls","deprecation","breaking-change"]},s="TLS v1.0 Deprecation Notice",l={permalink:"/viagogo-api-docs/blog/2018/06/30/tls-deprecation-notice",editUrl:"https://github.com/viagogo/viagogo-api-docs/tree/main/blog/2018-06-30-tls-deprecation-notice.md",source:"@site/blog/2018-06-30-tls-deprecation-notice.md",title:"TLS v1.0 Deprecation Notice",description:"viagogo will be disabling support for TLS v1.0 on our public facing api. We are providing advanced notice so that our customers and partners can prepare accordingly. If you are using unsupported clients to connect to the viagogo API after disabling TLS v1.0, you will begin receiving connection error messages.",date:"2018-06-30T00:00:00.000Z",formattedDate:"June 30, 2018",tags:[{label:"tls",permalink:"/viagogo-api-docs/blog/tags/tls"},{label:"deprecation",permalink:"/viagogo-api-docs/blog/tags/deprecation"},{label:"breaking-change",permalink:"/viagogo-api-docs/blog/tags/breaking-change"}],readingTime:1.65,truncated:!1,authors:[{name:"viagogo",title:"The World\u2019s Largest Ticket Marketplace",url:"https://viagogo.com",imageURL:"https://github.com/viagogo.png",key:"viagogo"}]},u={authorsImageUrls:[void 0]},p=[{value:"Why are we disabling TLS v1.0?",id:"why-are-we-disabling-tls-v10",children:[],level:2},{value:"Am I affected?",id:"am-i-affected",children:[],level:2}],g={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"viagogo will be disabling support for TLS v1.0 on our public facing api. We are providing advanced notice so that our customers and partners can prepare accordingly. If you are using unsupported clients to connect to the viagogo API after disabling TLS v1.0, you will begin receiving connection error messages."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Possible breaking change"),"\nThis change is a possible breaking change to clients that connect to our API using Tls1.0."))),(0,a.kt)("h2",{id:"why-are-we-disabling-tls-v10"},"Why are we disabling TLS v1.0?"),(0,a.kt)("p",null,"We are disabling TLS v1.0 to ensure that viagogo software is providing our customers and partners with safe and secure protocols for our connections. This change is enforced throughout the industry to maintain secure connections that encrypt and protect your sensitive data from malicious breaches. The PCI Security Standards Council updated their guidance and will now require full deprecation of TLS 1.0  for applications that process payments. Although, we only support payments on the viagogo website application, we will be following the recommendation across all our inbound connections."),(0,a.kt)("h2",{id:"am-i-affected"},"Am I affected?"),(0,a.kt)("p",null,"Customers that have custom clients and are using clients that do not support TLS v1.1 and above will no longer be able to successfully connect to our public API."),(0,a.kt)("p",null,"Customer should ensure that they are using a supported client or else it will lead to downtime of any internal processes that utilize the viagogo API."),(0,a.kt)("p",null,"viagogo will be performing analysis of connections to our public API and performing proactive communications to affected customer to ensure a smooth transition.  We still recommend that our customers do not rely solely on us to reach out to them, each customer that utilizes these APIs should ensure that they are prepared for the deprecation date."),(0,a.kt)("p",null,"You can use the following API to easily test the library you are using for API connections to viagogo to ensure it supports TLS v1.1 or greater."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.howsmyssl.com/a/check"},"https://www.howsmyssl.com/a/check")),(0,a.kt)("p",null,"The HTTP response will contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"tls_version")," value which contains the highest version of TLS that is supported by the client."))}d.isMDXComponent=!0}}]);