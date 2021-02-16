!function(){"use strict";var e="top",t="bottom",n="right",r="left",i="auto",o=[e,t,n,r],a="start",s="end",c="viewport",u="popper",f=o.reduce((function(e,t){return e.concat([t+"-"+a,t+"-"+s])}),[]),p=[].concat(o,[i]).reduce((function(e,t){return e.concat([t,t+"-"+a,t+"-"+s])}),[]),d=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function l(e){return e?(e.nodeName||"").toLowerCase():null}function m(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){return e instanceof m(e).Element||e instanceof Element}function h(e){return e instanceof m(e).HTMLElement||e instanceof HTMLElement}function g(e){return e.split("-")[0]}function b(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function y(e,t){var n,r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&((n=r)instanceof m(n).ShadowRoot||n instanceof ShadowRoot)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function w(e){return m(e).getComputedStyle(e)}function x(e){return["table","td","th"].indexOf(l(e))>=0}function O(e){return((v(e)?e.ownerDocument:e.document)||window.document).documentElement}function E(e){return"html"===l(e)?e:e.assignedSlot||e.parentNode||e.host||O(e)}function j(e){if(!h(e)||"fixed"===w(e).position)return null;var t=e.offsetParent;if(t){var n=O(t);if("body"===l(t)&&"static"===w(t).position&&"static"!==w(n).position)return n}return t}function A(e){for(var t=m(e),n=j(e);n&&x(n)&&"static"===w(n).position;)n=j(n);return n&&"body"===l(n)&&"static"===w(n).position?t:n||function(e){for(var t=E(e);h(t)&&["html","body"].indexOf(l(t))<0;){var n=w(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}function T(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function L(e,t,n){return Math.max(e,Math.min(t,n))}function D(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function M(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var k={top:"auto",right:"auto",bottom:"auto",left:"auto"};function C(i){var o,a=i.popper,s=i.popperRect,c=i.placement,u=i.offsets,f=i.position,p=i.gpuAcceleration,d=i.adaptive,l=i.roundOffsets?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Math.round(t*r)/r||0,y:Math.round(n*r)/r||0}}(u):u,v=l.x,h=void 0===v?0:v,g=l.y,b=void 0===g?0:g,y=u.hasOwnProperty("x"),w=u.hasOwnProperty("y"),x=r,E=e,j=window;if(d){var T=A(a);T===m(a)&&(T=O(a)),c===e&&(E=t,b-=T.clientHeight-s.height,b*=p?1:-1),c===r&&(x=n,h-=T.clientWidth-s.width,h*=p?1:-1)}var L,D=Object.assign({position:f},d&&k);return p?Object.assign(Object.assign({},D),{},((L={})[E]=w?"0":"",L[x]=y?"0":"",L.transform=(j.devicePixelRatio||1)<2?"translate("+h+"px, "+b+"px)":"translate3d("+h+"px, "+b+"px, 0)",L)):Object.assign(Object.assign({},D),{},((o={})[E]=w?b+"px":"",o[x]=y?h+"px":"",o.transform="",o))}var S={passive:!0};var B={left:"right",right:"left",bottom:"top",top:"bottom"};function H(e){return e.replace(/left|right|bottom|top/g,(function(e){return B[e]}))}var V={start:"end",end:"start"};function P(e){return e.replace(/start|end/g,(function(e){return V[e]}))}function W(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function I(e){var t=m(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function R(e){return W(O(e)).left+I(e).scrollLeft}function N(e){var t=w(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function q(e){return["html","body","#document"].indexOf(l(e))>=0?e.ownerDocument.body:h(e)&&N(e)?e:q(E(e))}function _(e,t){void 0===t&&(t=[]);var n=q(e),r="body"===l(n),i=m(n),o=r?[i].concat(i.visualViewport||[],N(n)?n:[]):n,a=t.concat(o);return r?a:a.concat(_(E(o)))}function U(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function F(e,t){return t===c?U(function(e){var t=m(e),n=O(e),r=t.visualViewport,i=n.clientWidth,o=n.clientHeight,a=0,s=0;return r&&(i=r.width,o=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:i,height:o,x:a+R(e),y:s}}(e)):h(t)?function(e){var t=W(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):U(function(e){var t=O(e),n=I(e),r=e.ownerDocument.body,i=Math.max(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=Math.max(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-n.scrollLeft+R(e),s=-n.scrollTop;return"rtl"===w(r||t).direction&&(a+=Math.max(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:o,x:a,y:s}}(O(e)))}function z(e,t,n){var r="clippingParents"===t?function(e){var t=_(E(e)),n=["absolute","fixed"].indexOf(w(e).position)>=0&&h(e)?A(e):e;return v(n)?t.filter((function(e){return v(e)&&y(e,n)&&"body"!==l(e)})):[]}(e):[].concat(t),i=[].concat(r,[n]),o=i[0],a=i.reduce((function(t,n){var r=F(e,n);return t.top=Math.max(r.top,t.top),t.right=Math.min(r.right,t.right),t.bottom=Math.min(r.bottom,t.bottom),t.left=Math.max(r.left,t.left),t}),F(e,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function $(e){return e.split("-")[1]}function X(i){var o,c=i.reference,u=i.element,f=i.placement,p=f?g(f):null,d=f?$(f):null,l=c.x+c.width/2-u.width/2,m=c.y+c.height/2-u.height/2;switch(p){case e:o={x:l,y:c.y-u.height};break;case t:o={x:l,y:c.y+c.height};break;case n:o={x:c.x+c.width,y:m};break;case r:o={x:c.x-u.width,y:m};break;default:o={x:c.x,y:c.y}}var v=p?T(p):null;if(null!=v){var h="y"===v?"height":"width";switch(d){case a:o[v]=o[v]-(c[h]/2-u[h]/2);break;case s:o[v]=o[v]+(c[h]/2-u[h]/2)}}return o}function Y(r,i){void 0===i&&(i={});var a=i,s=a.placement,f=void 0===s?r.placement:s,p=a.boundary,d=void 0===p?"clippingParents":p,l=a.rootBoundary,m=void 0===l?c:l,h=a.elementContext,g=void 0===h?u:h,b=a.altBoundary,y=void 0!==b&&b,w=a.padding,x=void 0===w?0:w,E=D("number"!=typeof x?x:M(x,o)),j=g===u?"reference":u,A=r.elements.reference,T=r.rects.popper,L=r.elements[y?j:g],k=z(v(L)?L:L.contextElement||O(r.elements.popper),d,m),C=W(A),S=X({reference:C,element:T,strategy:"absolute",placement:f}),B=U(Object.assign(Object.assign({},T),S)),H=g===u?B:C,V={top:k.top-H.top+E.top,bottom:H.bottom-k.bottom+E.bottom,left:k.left-H.left+E.left,right:H.right-k.right+E.right},P=r.modifiersData.offset;if(g===u&&P){var I=P[f];Object.keys(V).forEach((function(r){var i=[n,t].indexOf(r)>=0?1:-1,o=[e,t].indexOf(r)>=0?"y":"x";V[r]+=I[o]*i}))}return V}function J(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,s=n.padding,c=n.flipVariations,u=n.allowedAutoPlacements,d=void 0===u?p:u,l=$(r),m=l?c?f:f.filter((function(e){return $(e)===l})):o,v=m.filter((function(e){return d.indexOf(e)>=0}));0===v.length&&(v=m);var h=v.reduce((function(t,n){return t[n]=Y(e,{placement:n,boundary:i,rootBoundary:a,padding:s})[g(n)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}function G(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function K(i){return[e,n,t,r].some((function(e){return i[e]>=0}))}function Q(e,t,n){void 0===n&&(n=!1);var r,i,o=O(t),a=W(e),s=h(t),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(s||!s&&!n)&&(("body"!==l(t)||N(o))&&(c=(r=t)!==m(r)&&h(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:I(r)),h(t)?((u=W(t)).x+=t.clientLeft,u.y+=t.clientTop):o&&(u.x=R(o))),{x:a.left+c.scrollLeft-u.x,y:a.top+c.scrollTop-u.y,width:a.width,height:a.height}}function Z(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}var ee={placement:"bottom",modifiers:[],strategy:"absolute"};function te(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function ne(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,o=void 0===i?ee:i;return function(e,t,n){void 0===n&&(n=o);var i,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},ee),o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,f={state:s,setOptions:function(n){p(),s.options=Object.assign(Object.assign(Object.assign({},o),s.options),n),s.scrollParents={reference:v(e)?_(e):e.contextElement?_(e.contextElement):[],popper:_(t)};var i,a,u=function(e){var t=Z(e);return d.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((i=[].concat(r,s.options.modifiers),a=i.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{}),Object.keys(a).map((function(e){return a[e]}))));return s.orderedModifiers=u.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"==typeof i){var o=i({state:s,name:t,instance:f,options:r}),a=function(){};c.push(o||a)}})),f.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference,n=e.popper;if(te(t,n)){s.rects={reference:Q(t,A(n),"fixed"===s.options.strategy),popper:b(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var i=s.orderedModifiers[r],o=i.fn,a=i.options,c=void 0===a?{}:a,p=i.name;"function"==typeof o&&(s=o({state:s,options:c,name:p,instance:f})||s)}else s.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){f.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(i())}))}))),a}),destroy:function(){p(),u=!0}};if(!te(e,t))return f;function p(){c.forEach((function(e){return e()})),c=[]}return f.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var re=ne({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,o=void 0===i||i,a=r.resize,s=void 0===a||a,c=m(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach((function(e){e.addEventListener("scroll",n.update,S)})),s&&c.addEventListener("resize",n.update,S),function(){o&&u.forEach((function(e){e.removeEventListener("scroll",n.update,S)})),s&&c.removeEventListener("resize",n.update,S)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,a=void 0===o||o,s=n.roundOffsets,c=void 0===s||s,u={placement:g(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),C(Object.assign(Object.assign({},u),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),C(Object.assign(Object.assign({},u),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];h(i)&&l(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});h(r)&&l(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var i=t.state,o=t.options,a=t.name,s=o.offset,c=void 0===s?[0,0]:s,u=p.reduce((function(t,o){return t[o]=function(t,i,o){var a=g(t),s=[r,e].indexOf(a)>=0?-1:1,c="function"==typeof o?o(Object.assign(Object.assign({},i),{},{placement:t})):o,u=c[0],f=c[1];return u=u||0,f=(f||0)*s,[r,n].indexOf(a)>=0?{x:f,y:u}:{x:u,y:f}}(o,i.rects,c),t}),{}),f=u[i.placement],d=f.x,l=f.y;null!=i.modifiersData.popperOffsets&&(i.modifiersData.popperOffsets.x+=d,i.modifiersData.popperOffsets.y+=l),i.modifiersData[a]=u}},{name:"flip",enabled:!0,phase:"main",fn:function(o){var s=o.state,c=o.options,u=o.name;if(!s.modifiersData[u]._skip){for(var f=c.mainAxis,p=void 0===f||f,d=c.altAxis,l=void 0===d||d,m=c.fallbackPlacements,v=c.padding,h=c.boundary,b=c.rootBoundary,y=c.altBoundary,w=c.flipVariations,x=void 0===w||w,O=c.allowedAutoPlacements,E=s.options.placement,j=g(E),A=m||(j===E||!x?[H(E)]:function(e){if(g(e)===i)return[];var t=H(e);return[P(e),t,P(t)]}(E)),T=[E].concat(A).reduce((function(e,t){return e.concat(g(t)===i?J(s,{placement:t,boundary:h,rootBoundary:b,padding:v,flipVariations:x,allowedAutoPlacements:O}):t)}),[]),L=s.rects.reference,D=s.rects.popper,M=new Map,k=!0,C=T[0],S=0;S<T.length;S++){var B=T[S],V=g(B),W=$(B)===a,I=[e,t].indexOf(V)>=0,R=I?"width":"height",N=Y(s,{placement:B,boundary:h,rootBoundary:b,altBoundary:y,padding:v}),q=I?W?n:r:W?t:e;L[R]>D[R]&&(q=H(q));var _=H(q),U=[];if(p&&U.push(N[V]<=0),l&&U.push(N[q]<=0,N[_]<=0),U.every((function(e){return e}))){C=B,k=!1;break}M.set(B,U)}if(k)for(var F=function(e){var t=T.find((function(t){var n=M.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},z=x?3:1;z>0;z--){if("break"===F(z))break}s.placement!==C&&(s.modifiersData[u]._skip=!0,s.placement=C,s.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(i){var o=i.state,s=i.options,c=i.name,u=s.mainAxis,f=void 0===u||u,p=s.altAxis,d=void 0!==p&&p,l=s.boundary,m=s.rootBoundary,v=s.altBoundary,h=s.padding,y=s.tether,w=void 0===y||y,x=s.tetherOffset,O=void 0===x?0:x,E=Y(o,{boundary:l,rootBoundary:m,padding:h,altBoundary:v}),j=g(o.placement),D=$(o.placement),M=!D,k=T(j),C="x"===k?"y":"x",S=o.modifiersData.popperOffsets,B=o.rects.reference,H=o.rects.popper,V="function"==typeof O?O(Object.assign(Object.assign({},o.rects),{},{placement:o.placement})):O,P={x:0,y:0};if(S){if(f){var W="y"===k?e:r,I="y"===k?t:n,R="y"===k?"height":"width",N=S[k],q=S[k]+E[W],_=S[k]-E[I],U=w?-H[R]/2:0,F=D===a?B[R]:H[R],z=D===a?-H[R]:-B[R],X=o.elements.arrow,J=w&&X?b(X):{width:0,height:0},G=o.modifiersData["arrow#persistent"]?o.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=G[W],Q=G[I],Z=L(0,B[R],J[R]),ee=M?B[R]/2-U-Z-K-V:F-Z-K-V,te=M?-B[R]/2+U+Z+Q+V:z+Z+Q+V,ne=o.elements.arrow&&A(o.elements.arrow),re=ne?"y"===k?ne.clientTop||0:ne.clientLeft||0:0,ie=o.modifiersData.offset?o.modifiersData.offset[o.placement][k]:0,oe=S[k]+ee-ie-re,ae=S[k]+te-ie,se=L(w?Math.min(q,oe):q,N,w?Math.max(_,ae):_);S[k]=se,P[k]=se-N}if(d){var ce="x"===k?e:r,ue="x"===k?t:n,fe=S[C],pe=L(fe+E[ce],fe,fe-E[ue]);S[C]=pe,P[C]=pe-fe}o.modifiersData[c]=P}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(i){var o,a=i.state,s=i.name,c=a.elements.arrow,u=a.modifiersData.popperOffsets,f=g(a.placement),p=T(f),d=[r,n].indexOf(f)>=0?"height":"width";if(c&&u){var l=a.modifiersData[s+"#persistent"].padding,m=b(c),v="y"===p?e:r,h="y"===p?t:n,y=a.rects.reference[d]+a.rects.reference[p]-u[p]-a.rects.popper[d],w=u[p]-a.rects.reference[p],x=A(c),O=x?"y"===p?x.clientHeight||0:x.clientWidth||0:0,E=y/2-w/2,j=l[v],D=O-m[d]-l[h],M=O/2-m[d]/2+E,k=L(j,M,D),C=p;a.modifiersData[s]=((o={})[C]=k,o.centerOffset=k-M,o)}},effect:function(e){var t=e.state,n=e.options,r=e.name,i=n.element,a=void 0===i?"[data-popper-arrow]":i,s=n.padding,c=void 0===s?0:s;null!=a&&("string"!=typeof a||(a=t.elements.popper.querySelector(a)))&&y(t.elements.popper,a)&&(t.elements.arrow=a,t.modifiersData[r+"#persistent"]={padding:D("number"!=typeof c?c:M(c,o))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,a=Y(t,{elementContext:"reference"}),s=Y(t,{altBoundary:!0}),c=G(a,r),u=G(s,i,o),f=K(c),p=K(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":f,"data-popper-escaped":p})}}]}),ie="tippy-content",oe="tippy-arrow",ae="tippy-svg-arrow",se={passive:!0,capture:!0};function ce(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function ue(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function fe(e,t){return"function"==typeof e?e.apply(void 0,t):e}function pe(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function de(e){return[].concat(e)}function le(e,t){-1===e.indexOf(t)&&e.push(t)}function me(e){return[].slice.call(e)}function ve(){return document.createElement("div")}function he(e){return["Element","Fragment"].some((function(t){return ue(e,t)}))}function ge(e){return he(e)?[e]:function(e){return ue(e,"NodeList")}(e)?me(e):Array.isArray(e)?e:me(document.querySelectorAll(e))}function be(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function ye(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function we(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}var xe={isTouch:!1},Oe=0;function Ee(){xe.isTouch||(xe.isTouch=!0,window.performance&&document.addEventListener("mousemove",je))}function je(){var e=performance.now();e-Oe<20&&(xe.isTouch=!1,document.removeEventListener("mousemove",je)),Oe=e}function Ae(){var e,t=document.activeElement;if((e=t)&&e._tippy&&e._tippy.reference===e){var n=t._tippy;t.blur&&!n.state.isVisible&&t.blur()}}var Te="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",Le=/MSIE |Trident\//.test(Te),De=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),Me=Object.keys(De);function ke(e){var t=(e.plugins||[]).reduce((function(t,n){var r=n.name,i=n.defaultValue;return r&&(t[r]=void 0!==e[r]?e[r]:i),t}),{});return Object.assign({},e,{},t)}function Ce(e,t){var n=Object.assign({},t,{content:fe(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(ke(Object.assign({},De,{plugins:t}))):Me).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},De.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function Se(e,t){e.innerHTML=t}function Be(e){var t=ve();return!0===e?t.className=oe:(t.className=ae,he(e)?t.appendChild(e):Se(t,e)),t}function He(e,t){he(t.content)?(Se(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?Se(e,t.content):e.textContent=t.content)}function Ve(e){var t=e.firstElementChild,n=me(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(ie)})),arrow:n.find((function(e){return e.classList.contains(oe)||e.classList.contains(ae)})),backdrop:n.find((function(e){return e.classList.contains("tippy-backdrop")}))}}function Pe(e){var t=ve(),n=ve();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=ve();function i(n,r){var i=Ve(t),o=i.box,a=i.content,s=i.arrow;r.theme?o.setAttribute("data-theme",r.theme):o.removeAttribute("data-theme"),"string"==typeof r.animation?o.setAttribute("data-animation",r.animation):o.removeAttribute("data-animation"),r.inertia?o.setAttribute("data-inertia",""):o.removeAttribute("data-inertia"),o.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?o.setAttribute("role",r.role):o.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||He(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(o.removeChild(s),o.appendChild(Be(r.arrow))):o.appendChild(Be(r.arrow)):s&&o.removeChild(s)}return r.className=ie,r.setAttribute("data-state","hidden"),He(r,e.props),t.appendChild(n),n.appendChild(r),i(e.props,e.props),{popper:t,onUpdate:i}}Pe.$$tippy=!0;var We=1,Ie=[],Re=[];function Ne(e,t){var n,r,i,o,a,s,c,u,f,p=Ce(e,Object.assign({},De,{},ke((n=t,Object.keys(n).reduce((function(e,t){return void 0!==n[t]&&(e[t]=n[t]),e}),{}))))),d=!1,l=!1,m=!1,v=!1,h=[],g=pe(Y,p.interactiveDebounce),b=We++,y=(f=p.plugins).filter((function(e,t){return f.indexOf(e)===t})),w={id:b,reference:e,popper:ve(),popperInstance:null,props:p,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:y,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(i),cancelAnimationFrame(o)},setProps:function(t){if(w.state.isDestroyed)return;H("onBeforeUpdate",[w,t]),$();var n=w.props,r=Ce(e,Object.assign({},w.props,{},t,{ignoreAttributes:!0}));w.props=r,z(),n.interactiveDebounce!==r.interactiveDebounce&&(W(),g=pe(Y,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?de(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");P(),B(),E&&E(n,r);w.popperInstance&&(Q(),ee().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));H("onAfterUpdate",[w,t])},setContent:function(e){w.setProps({content:e})},show:function(){var e=w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=xe.isTouch&&!w.props.touch,i=ce(w.props.duration,0,De.duration);if(e||t||n||r)return;if(M().hasAttribute("disabled"))return;if(H("onShow",[w],!1),!1===w.props.onShow(w))return;w.state.isVisible=!0,D()&&(O.style.visibility="visible");B(),q(),w.state.isMounted||(O.style.transition="none");if(D()){var o=C(),a=o.box,s=o.content;be([a,s],0)}c=function(){if(w.state.isVisible&&!v){if(v=!0,O.offsetHeight,O.style.transition=w.props.moveTransition,D()&&w.props.animation){var e=C(),t=e.box,n=e.content;be([t,n],i),ye([t,n],"visible")}V(),P(),le(Re,w),w.state.isMounted=!0,H("onMount",[w]),w.props.animation&&D()&&function(e,t){U(e,t)}(i,(function(){w.state.isShown=!0,H("onShown",[w])}))}},function(){var e,t=w.props.appendTo,n=M();e=w.props.interactive&&t===De.appendTo||"parent"===t?n.parentNode:fe(t,[n]);e.contains(O)||e.appendChild(O);Q()}()},hide:function(){var e=!w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=ce(w.props.duration,1,De.duration);if(e||t||n)return;if(H("onHide",[w],!1),!1===w.props.onHide(w))return;w.state.isVisible=!1,w.state.isShown=!1,v=!1,d=!1,D()&&(O.style.visibility="hidden");if(W(),_(),B(),D()){var i=C(),o=i.box,a=i.content;w.props.animation&&(be([o,a],r),ye([o,a],"hidden"))}V(),P(),w.props.animation?D()&&function(e,t){U(e,(function(){!w.state.isVisible&&O.parentNode&&O.parentNode.contains(O)&&t()}))}(r,w.unmount):w.unmount()},hideWithInteractivity:function(e){k().addEventListener("mousemove",g),le(Ie,g),g(e)},enable:function(){w.state.isEnabled=!0},disable:function(){w.hide(),w.state.isEnabled=!1},unmount:function(){w.state.isVisible&&w.hide();if(!w.state.isMounted)return;Z(),ee().forEach((function(e){e._tippy.unmount()})),O.parentNode&&O.parentNode.removeChild(O);Re=Re.filter((function(e){return e!==w})),w.state.isMounted=!1,H("onHidden",[w])},destroy:function(){if(w.state.isDestroyed)return;w.clearDelayTimeouts(),w.unmount(),$(),delete e._tippy,w.state.isDestroyed=!0,H("onDestroy",[w])}};if(!p.render)return w;var x=p.render(w),O=x.popper,E=x.onUpdate;O.setAttribute("data-tippy-root",""),O.id="tippy-"+w.id,w.popper=O,e._tippy=w,O._tippy=w;var j=y.map((function(e){return e.fn(w)})),A=e.hasAttribute("aria-expanded");return z(),P(),B(),H("onCreate",[w]),p.showOnCreate&&te(),O.addEventListener("mouseenter",(function(){w.props.interactive&&w.state.isVisible&&w.clearDelayTimeouts()})),O.addEventListener("mouseleave",(function(e){w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0&&(k().addEventListener("mousemove",g),g(e))})),w;function T(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function L(){return"hold"===T()[0]}function D(){var e;return!!(null==(e=w.props.render)?void 0:e.$$tippy)}function M(){return u||e}function k(){var e,t=M().parentNode;return t?(e=de(t)[0])&&e.ownerDocument||document:document}function C(){return Ve(O)}function S(e){return w.state.isMounted&&!w.state.isVisible||xe.isTouch||a&&"focus"===a.type?0:ce(w.props.delay,e?0:1,De.delay)}function B(){O.style.pointerEvents=w.props.interactive&&w.state.isVisible?"":"none",O.style.zIndex=""+w.props.zIndex}function H(e,t,n){var r;(void 0===n&&(n=!0),j.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(r=w.props)[e].apply(r,t)}function V(){var t=w.props.aria;if(t.content){var n="aria-"+t.content,r=O.id;de(w.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(w.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var i=t&&t.replace(r,"").trim();i?e.setAttribute(n,i):e.removeAttribute(n)}}))}}function P(){!A&&w.props.aria.expanded&&de(w.props.triggerTarget||e).forEach((function(e){w.props.interactive?e.setAttribute("aria-expanded",w.state.isVisible&&e===M()?"true":"false"):e.removeAttribute("aria-expanded")}))}function W(){k().removeEventListener("mousemove",g),Ie=Ie.filter((function(e){return e!==g}))}function I(e){if(!(xe.isTouch&&(m||"mousedown"===e.type)||w.props.interactive&&O.contains(e.target))){if(M().contains(e.target)){if(xe.isTouch)return;if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0)return}else H("onClickOutside",[w,e]);!0===w.props.hideOnClick&&(w.clearDelayTimeouts(),w.hide(),l=!0,setTimeout((function(){l=!1})),w.state.isMounted||_())}}function R(){m=!0}function N(){m=!1}function q(){var e=k();e.addEventListener("mousedown",I,!0),e.addEventListener("touchend",I,se),e.addEventListener("touchstart",N,se),e.addEventListener("touchmove",R,se)}function _(){var e=k();e.removeEventListener("mousedown",I,!0),e.removeEventListener("touchend",I,se),e.removeEventListener("touchstart",N,se),e.removeEventListener("touchmove",R,se)}function U(e,t){var n=C().box;function r(e){e.target===n&&(we(n,"remove",r),t())}if(0===e)return t();we(n,"remove",s),we(n,"add",r),s=r}function F(t,n,r){void 0===r&&(r=!1),de(w.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),h.push({node:e,eventType:t,handler:n,options:r})}))}function z(){var e;L()&&(F("touchstart",X,{passive:!0}),F("touchend",J,{passive:!0})),(e=w.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(F(e,X),e){case"mouseenter":F("mouseleave",J);break;case"focus":F(Le?"focusout":"blur",G);break;case"focusin":F("focusout",G)}}))}function $(){h.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,i=e.options;t.removeEventListener(n,r,i)})),h=[]}function X(e){var t,n=!1;if(w.state.isEnabled&&!K(e)&&!l){var r="focus"===(null==(t=a)?void 0:t.type);a=e,u=e.currentTarget,P(),!w.state.isVisible&&ue(e,"MouseEvent")&&Ie.forEach((function(t){return t(e)})),"click"===e.type&&(w.props.trigger.indexOf("mouseenter")<0||d)&&!1!==w.props.hideOnClick&&w.state.isVisible?n=!0:te(e),"click"===e.type&&(d=!n),n&&!r&&ne(e)}}function Y(e){var t=e.target,n=M().contains(t)||O.contains(t);"mousemove"===e.type&&n||function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,i=e.popperState,o=e.props.interactiveBorder,a=i.placement.split("-")[0],s=i.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,f="right"===a?s.left.x:0,p="left"===a?s.right.x:0,d=t.top-r+c>o,l=r-t.bottom-u>o,m=t.left-n+f>o,v=n-t.right-p>o;return d||l||m||v}))}(ee().concat(O).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:p}:null})).filter(Boolean),e)&&(W(),ne(e))}function J(e){K(e)||w.props.trigger.indexOf("click")>=0&&d||(w.props.interactive?w.hideWithInteractivity(e):ne(e))}function G(e){w.props.trigger.indexOf("focusin")<0&&e.target!==M()||w.props.interactive&&e.relatedTarget&&O.contains(e.relatedTarget)||ne(e)}function K(e){return!!xe.isTouch&&L()!==e.type.indexOf("touch")>=0}function Q(){Z();var t=w.props,n=t.popperOptions,r=t.placement,i=t.offset,o=t.getReferenceClientRect,a=t.moveTransition,s=D()?Ve(O).arrow:null,u=o?{getBoundingClientRect:o,contextElement:o.contextElement||M()}:e,f=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(D()){var n=C().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}];D()&&s&&f.push({name:"arrow",options:{element:s,padding:3}}),f.push.apply(f,(null==n?void 0:n.modifiers)||[]),w.popperInstance=re(u,O,Object.assign({},n,{placement:r,onFirstUpdate:c,modifiers:f}))}function Z(){w.popperInstance&&(w.popperInstance.destroy(),w.popperInstance=null)}function ee(){return me(O.querySelectorAll("[data-tippy-root]"))}function te(e){w.clearDelayTimeouts(),e&&H("onTrigger",[w,e]),q();var t=S(!0),n=T(),i=n[0],o=n[1];xe.isTouch&&"hold"===i&&o&&(t=o),t?r=setTimeout((function(){w.show()}),t):w.show()}function ne(e){if(w.clearDelayTimeouts(),H("onUntrigger",[w,e]),w.state.isVisible){if(!(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){
var t=S(!1);t?i=setTimeout((function(){w.state.isVisible&&w.hide()}),t):o=requestAnimationFrame((function(){w.hide()}))}}else _()}}function qe(e,t){void 0===t&&(t={});var n=De.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",Ee,se),window.addEventListener("blur",Ae);var r=Object.assign({},t,{plugins:n}),i=ge(e).reduce((function(e,t){var n=t&&Ne(t,r);return n&&e.push(n),e}),[]);return he(e)?i[0]:i}qe.defaultProps=De,qe.setDefaultProps=function(e){Object.keys(e).forEach((function(t){De[t]=e[t]}))},qe.currentInput=xe,qe.setDefaultProps({render:Pe});const _e=e=>void 0!==e&&null!=e||(console.log(e+" nicht gefunden"),!1),Ue=async e=>fetch("../languages/lang_DE.json").then((e=>e.json())).then((t=>{e.innerHTML=t[e.getAttribute("data-translate")]})),Fe=e=>{for(const t of e.parentNode.children)console.log(t),t.classList.remove("active");e.classList.add("active")},ze=()=>{const e=document.querySelectorAll(".navigation__item");if(_e(e)){$e(e[0]);for(const t of e)qe(t,{content:"Lorem iasduhsdf usdhf oassdhu ssdf hsdfh pas uhds osdj jasih sjgj oisj ",animation:"scale"}),t.addEventListener("click",(function(){$e(this),Fe(this)}))}},$e=e=>{"item-audit"===e.getAttribute("id")?Xe("audit"):"item-report"===e.getAttribute("id")?Xe("report"):"item-setting"===e.getAttribute("id")&&Xe("setting")},Xe=e=>{const t=document.getElementById("midContainer");_e(t)&&fetch("../interfaces/"+e+".html").then((function(e){return e.text()})).then((function(e){t.innerHTML=e})).then((()=>{"analysis"==e?console.log("Analysis aufgerufen"):"report"==e?console.log("Report aufgerufen"):"setting"==e&&console.log("Setting aufgerufen")}))};window.onload=()=>{Ye()};const Ye=()=>{ze(),(()=>{const e=document.getElementById("icon-close");_e(e)&&e.addEventListener("click",(()=>{window.close()}))})(),(async()=>{const e=document.querySelectorAll("[data-translate]");if(_e(e))for(const t of e)await console.log(Ue(t))})()}}();