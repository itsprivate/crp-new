"use strict";(self.webpackChunkcrp=self.webpackChunkcrp||[]).push([[354],{1803:function(e,t,a){t.YM=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},n=u(a(2784)),r=u(a(3980)),o=a(8666);function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e,t,a){return function(r){var o,u,s,l=e[r.type],g=(u=(o=r).value,s=o.isDisabled,function(){!s&&a&&t!==u&&a(u)});return n.default.createElement(l,i({onClick:g},r))}};t.YM=function(e){var t=e.itemTypeToComponent,a=e.WrapperComponent,u=void 0===a?"div":a,l=function(e){var a=e.currentPage,r=e.totalPages,l=e.boundaryPagesRange,g=e.siblingPagesRange,d=e.hideEllipsis,P=e.hidePreviousAndNextPageLinks,c=e.hideFirstAndLastPageLinks,f=e.onChange,p=e.disabled,h=function(e,t){var a={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(a[i]=e[i]);return a}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),v=(0,o.getPaginationModel)({currentPage:a,totalPages:r,boundaryPagesRange:l,siblingPagesRange:g,hideEllipsis:d,hidePreviousAndNextPageLinks:P,hideFirstAndLastPageLinks:c}),E=s(t,a,f);return n.default.createElement(u,h,v.map((function(e){return E(i({},e,{isDisabled:!!p}))})))};return l.propTypes={currentPage:r.default.number.isRequired,totalPages:r.default.number.isRequired,boundaryPagesRange:r.default.number,siblingPagesRange:r.default.number,hideEllipsis:r.default.bool,hidePreviousAndNextPageLinks:r.default.bool,hideFirstAndLastPageLinks:r.default.bool,onChange:r.default.func,disabled:r.default.bool},l},o.ITEM_TYPES},593:function(e,t){t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},3587:function(e,t,a){var i=a(593);t.createFirstEllipsis=function(e){return{type:i.ITEM_TYPES.ELLIPSIS,key:i.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:i.ITEM_TYPES.ELLIPSIS,key:i.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:i.ITEM_TYPES.FIRST_PAGE_LINK,key:i.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:i.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:i.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:i.ITEM_TYPES.NEXT_PAGE_LINK,key:i.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(a,t+1),isActive:t===a}},t.createLastPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:i.ITEM_TYPES.LAST_PAGE_LINK,key:i.ITEM_KEYS.LAST_PAGE_LINK,value:a,isActive:t===a}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:i.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}},4280:function(e,t){t.createRange=function(e,t){for(var a=[],i=e;i<=t;i++)a.push(i);return a}},8666:function(e,t,a){var i=a(4280),n=a(3587);t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var a=Number(e.currentPage);if(isNaN(a))throw new Error("getPaginationModel(): currentPage should be a number");if(a<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(a>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var r=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(r))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(r<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var o=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(o))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(o<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var u=Boolean(e.hidePreviousAndNextPageLinks),s=Boolean(e.hideFirstAndLastPageLinks),l=Boolean(e.hideEllipsis),g=l?0:1,d=[],P=n.createPageFunctionFactory(e);if(s||d.push(n.createFirstPageLink(e)),u||d.push(n.createPreviousPageLink(e)),1+2*g+2*o+2*r>=t){var c=i.createRange(1,t).map(P);d.push.apply(d,c)}else{var f=r,p=i.createRange(1,f).map(P),h=t+1-r,v=t,E=i.createRange(h,v).map(P),x=Math.min(Math.max(a-o,f+g+1),h-g-2*o-1),b=x+2*o,I=i.createRange(x,b).map(P);if(d.push.apply(d,p),!l){var L=x-1,_=(L===f+1?P:n.createFirstEllipsis)(L);d.push(_)}if(d.push.apply(d,I),!l){var m=b+1,S=(m===h-1?P:n.createSecondEllipsis)(m);d.push(S)}d.push.apply(d,E)}return u||d.push(n.createNextPageLink(e)),s||d.push(n.createLastPageLink(e)),d};var r=a(593);t.ITEM_TYPES=r.ITEM_TYPES,t.ITEM_KEYS=r.ITEM_KEYS},7263:function(e,t,a){a.d(t,{Z:function(){return g}});var i=a(9231),n=a(195),r=a(7359);function o(e){var t=e.src,a=e.width,n=e.height;return(0,i.tZ)("figure",{sx:{m:0}},(0,i.tZ)(r.xu,{sx:{display:"flex",justifyContent:"center",maxWidth:"full"}},(0,i.tZ)("video",{preload:"auto",loop:!0,autoPlay:!0,muted:!0,width:a,height:n,sx:{maxWidth:"full",width:"full",height:"full"}},(0,i.tZ)("source",{src:t}))))}var u=a(9086),s=a(2784);function l(e){return e.image&&(0,u.e)(e.image)?(0,u.e)(e.image):e.imageRemote}var g=function(e){var t=e.item,a=t.video,r=t.provider,u=(0,s.useState)(0),g=u[0],d=u[1];if((0,s.useEffect)((function(){if(a&&a.url&&"Reddit"===r&&a.height&&a.width){var e=window.innerWidth;e>1024&&(e=1024);var t=375/e;t*=e>=768?1.62:1.1;var i=a.height+248,n=a.width,o=56.25;i&&n&&(o=i>n?180:100*i*1.6/n),d(o*t+"%")}}),null),!a||!a.url)return null;var P,c=-1!==(P=(P=a.url).replace(/(https?:\/\/)?(www.)?/i,"")).indexOf("/")?P.split("/")[0]:P,f=new URL(a.url);if("Reddit"===r){var p=a.embed,h=a.height+248,v=a.width;return(0,i.tZ)("figure",{sx:{pb:0,m:0}},p?(0,i.tZ)("div",{sx:{position:"relative",height:0,margin:0,overflow:"hidden",maxWidth:"full",paddingBottom:g}},(0,i.tZ)("iframe",{"data-test":"item-embed-video",title:"video "+t.id,frameBorder:"0",allowFullScreen:!0,scrolling:"no",src:a.url,sx:{width:"full",height:"full",position:"absolute",left:0,top:0}})):a&&(0,i.tZ)(o,{embed:p,src:a.url,height:h,width:v}))}if("youtube.com"===c){var E=f.searchParams.get("v");return(0,i.tZ)("figure",{sx:{position:"relative",pb:"56.25%",m:0}},(0,i.tZ)("iframe",{"data-test":"item-embed-video",title:t.title,type:"text/html",sx:{position:"absolute",top:0,left:0},width:"100%",height:"100%",allowFullScreen:!0,src:"https://www.youtube.com/embed/"+E,frameBorder:"0"}))}return(0,i.tZ)("figure",{"data-test":"item-video-container",sx:{pb:0,m:0}},(0,i.tZ)("div",{sx:{position:"relative",pb:"56.25%"}},(0,i.tZ)(n.Z,{controls:!0,muted:!0,sx:{position:"absolute",top:0,left:0},width:"100%",height:"100%",url:a.url,config:{file:{attributes:{muted:!0,poster:l(t)}}}})))}},173:function(e,t,a){a.d(t,{Z:function(){return L}});var i=a(8447),n=a(9231),r=(a(2784),a(1803)),o=a(5362),u=a(7359),s=a(586),l=a.n(s),g=a(8778);function d(e,t){var a=e.prefix,n=e.pagePath,r=e.pageContext,l=t.disabled||t.isActive;return"issue"===r.pageType?null:l?(0,g.tZ)(u.xv,{sx:{px:2,fontWeight:t.isActive?"bold":void 0,color:t.isActive?"text":"textMuted"}},t.value):(0,g.tZ)(u.rU,{as:o.UE,to:(0,i.withPrefix)(1===t.value?""+a:(0,s.join)(""+a,n+"/"+t.value+"/")),sx:{px:2,color:"textMuted"}},t.value)}function P(e){var t=e.children;return t.length>2&&(t=[t[0],(0,n.tZ)(u.kC,{key:"pagination-pages"},t.slice(1,t.length-1)),t[t.length-1]]),(0,n.tZ)("nav",{"data-test":"pagination",sx:{mb:4,lineHeight:2}},(0,n.tZ)(u.kC,{sx:{justifyContent:"space-between",flexWrap:"wrap",fontSize:2}},t))}var c=a(1189);function f(e,t){var a=e.prefix,r=e.pageContext,l=r.originalPath,g=r.currentPage,d=r.pageType,P="page",f="Previous";return"issue"===d&&(P=l.slice(1,l.indexOf("/"+g)),f="Previous Issue"),t.isActive?(0,n.tZ)("div",{sx:{flexGrow:1,textAlign:"left"}}):(0,n.tZ)("div",{sx:{flexGrow:1,textAlign:"left"}},(0,n.tZ)(u.rU,{as:o.UE,to:(0,i.withPrefix)(1===t.value&&"issue"!==d?""+a:(0,s.join)(a,P+"/"+t.value+"/")),sx:{color:"textMuted"}},"← ",(0,n.tZ)(c.c,null,f)))}function p(e,t){var a=e.prefix,r=e.pageContext,l=r.originalPath,g=r.currentPage,d="page",P="Next";return"issue"===r.pageType&&(d=l.slice(1,l.indexOf("/"+g)),P="Next Issue"),t.isActive?(0,n.tZ)("div",{sx:{flexGrow:1,textAlign:"right"}}):(0,n.tZ)("div",{sx:{flexGrow:1,textAlign:"right"}},(0,n.tZ)(u.rU,{disabled:t.disabled,as:o.UE,to:(0,i.withPrefix)(1===t.value?""+a:(0,s.join)(a,d+"/"+t.value+"/")),sx:{color:"textMuted",flexGrow:1,textAlign:"right"}},(0,n.tZ)(c.c,null,P)," →"))}function h(){return(0,g.tZ)(u.xv,{sx:{color:"textMuted",px:2}},"...")}function v(e,t){var a=e.prefix;return(0,g.tZ)(u.rU,{disabled:t.disabled,as:o.UE,to:a,sx:{color:"textMuted"}},"««")}function E(e,t){var a=e.prefix,n=e.pagePath;return(0,g.tZ)(u.rU,{disabled:t.disabled,as:o.UE,to:(0,i.withPrefix)(1===t.value?""+a:(0,s.join)(a,n+"/"+t.value+"/")),sx:{color:"textMuted"}},"»»")}var x=function(e){var t={PAGE:d,ELLIPSIS:h,FIRST_PAGE_LINK:v,LAST_PAGE_LINK:E,PREVIOUS_PAGE_LINK:f,NEXT_PAGE_LINK:p};Object.keys(t).forEach((function(a){t[a]=t[a].bind(null,{prefix:e.prefix,pagePath:e.pagePath||"page",pageContext:e.pageContext})}));var a=r.YM({itemTypeToComponent:t,WrapperComponent:P});return(0,g.tZ)(a,e)},b=a(9857),I=a.n(b),L=function(e){var t=e.pageContext,a=t.pageType,r=t.tag,o=t.currentPage,u=t.totalPages,s=t.basePath;return"number"==typeof u?(0,n.tZ)(x,{currentPage:o,totalPages:u,hideFirstAndLastPageLinks:!0,prefix:(0,i.withPrefix)(l().join(s,"tag"===a?"tags/"+I()(r):"")),pageContext:t}):null}}}]);
//# sourceMappingURL=75844435ddd1e1dbe9fde94ba73e53864dd56d03-289903c48200cf9d3a6a.js.map