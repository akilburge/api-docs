"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[1276],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1773:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={description:"Preuploaded Barcodes and Allocation"},s="Barcodes and Allocation",c={unversionedId:"guides/barcodes-and-allocation",id:"guides/barcodes-and-allocation",title:"Barcodes and Allocation",description:"Preuploaded Barcodes and Allocation",source:"@site/docs/guides/barcodes-and-allocation.mdx",sourceDirName:"guides",slug:"/guides/barcodes-and-allocation",permalink:"/docs/guides/barcodes-and-allocation",editUrl:"https://github.com/viagogo/viagogo-api-docs/tree/main/docs/guides/barcodes-and-allocation.mdx",tags:[],version:"current",frontMatter:{description:"Preuploaded Barcodes and Allocation"},sidebar:"docs",previous:{title:"Creating a Listing",permalink:"/docs/guides/creating-a-listing"}},d=[{value:"Barcode Allocation",id:"barcode-allocation",children:[],level:3},{value:"Forcing Allocation",id:"forcing-allocation",children:[{value:"Allocate low to high:",id:"allocate-low-to-high",children:[],level:4},{value:"Allocate high to low:",id:"allocate-high-to-low",children:[],level:4}],level:3},{value:"Knowing When Barcode Preupload is Required",id:"knowing-when-barcode-preupload-is-required",children:[],level:3}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"barcodes-and-allocation"},"Barcodes and Allocation"),(0,r.kt)("h3",{id:"barcode-allocation"},"Barcode Allocation"),(0,r.kt)("p",null,"How allocation of barcodes works is nuanced. It is important to understand how allocation works as misallocation can quickly lead to double sales."),(0,r.kt)("p",null,"Barcodes can be preuploaded against a listing. This can be done either by creating the listing with, or updating a listing to have, a ",(0,r.kt)("inlineCode",{parentName:"p"},"barcodes")," property - see ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/inventory/#operation/SellerListings_CreateListingForRequestedEvent"},"Creating Listings")," and ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/inventory#operation/SellerListings_Patch"},"Editing Listings"),"."),(0,r.kt)("p",null,"Any listing can have barcodes set against them. If the event is configured to sell as barcodes and barcodes have been uploaded against the listing, then ",(0,r.kt)("strong",{parentName:"p"},"sales will come through with seats already assigned.")," You can tell which seats have been assigned from either the webhook, or the sale object itself - see ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/sales#operation/Sales_Get"},"Getting a Sale")," and ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/webhooks#tag/Topics/paths/provisional-sale/post"},"Sale Webhooks"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important"),": the barcode is embedded within the sale in the GetSale endpoint, but not in the webhook. Missing this nuance can mean you miss the allocation."),(0,r.kt)("h3",{id:"forcing-allocation"},"Forcing Allocation"),(0,r.kt)("p",null,"Preuploaded barcodes are allocated from sales low to high based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"seat_ordinal")," property provided when setting the barcodes against the listing. If you want to force Stubhub to allocated high to low, reverse the sort order vs the seats."),(0,r.kt)("h4",{id:"allocate-low-to-high"},"Allocate low to high:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {"seat_ordinal":0, "row":"A","seat":"1","barcode_values":["12345"]},\n   {"seat_ordinal":1, "row":"A","seat":"2","barcode_values":["12346"]},\n]\n')),(0,r.kt)("h4",{id:"allocate-high-to-low"},"Allocate high to low:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {"seat_ordinal":1, "row":"A","seat":"1","barcode_values":["12345"]},\n   {"seat_ordinal":0, "row":"A","seat":"2","barcode_values":["12346"]},\n]\n')),(0,r.kt)("p",null,"N.b. it is not possible to, and you should not try to predict the allocation that Stubhub will use. Attempting to will cause double sales. Always use the barcodes provided in the API and webhooks."),(0,r.kt)("h3",{id:"knowing-when-barcode-preupload-is-required"},"Knowing When Barcode Preupload is Required"),(0,r.kt)("p",null,"Some events, at certain times, for certain sellers will require barcodes to be preuploaded. If you create a listing without barcodes for an event that requires barcodes, the ",(0,r.kt)("inlineCode",{parentName:"p"},"undeliverable")," boolean on the listing will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and the listing will not be purchasable. Remedy this by adding the barcodes to the listing. As preupload can become required at any time, a webhook is available to notify you when a listing becomes undeliverable."))}p.isMDXComponent=!0}}]);