"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[527],{1108:function(e,t,r){r.r(t),r.d(t,{renderImageToString:function(){return p},swapPlaceholderImage:function(){return d}});var n=r(2532),o=r(5299),a=r(3856);r(5147);let i;const c=new WeakMap,l=navigator.connection||navigator.mozConnection||navigator.webkitConnection,s=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function u(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function f(e,t,r,n,o,a){const i=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),l=r.has(t);function s(e){this.removeEventListener("load",s);const t=e.currentTarget,r=new Image;r.src=t.currentSrc,r.decode?r.decode().then((()=>{u(this,c),null==o||o({wasCached:l})})).catch((e=>{u(this,c),null==a||a(e)})):(u(this,c),null==o||o({wasCached:l}))}return i.addEventListener("load",s),null==n||n({wasCached:l}),Array.from(i.parentElement.children).forEach((e=>{const t=e.getAttribute("data-src"),r=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),r&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",r))})),r.add(t),i.complete&&s.call(i,{currentTarget:i}),()=>{i&&i.removeEventListener("load",s)}}function d(e,t,o,a,s,u,d){if(!(0,n.h)()){let n;const _=(g=()=>{n=f(e,t,o,s,u,d)},"IntersectionObserver"in window?(i||(i=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting&&(null==(t=c.get(e.target))||t(),c.delete(e.target))}))}),{rootMargin:"4g"!==(null==l?void 0:l.effectiveType)||null!=l&&l.saveData?"2500px":"1250px"})),function(e){return c.set(e,g),i.observe(e),function(){i&&e&&(c.delete(e),i.unobserve(e))}}):function(){return g(),function(){}}),m=_(e);var p,h;return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(p=a.objectFit)?p:"cover",e.dataset.objectPosition=`${null!=(h=a.objectPosition)?h:"50% 50%"}`,async function(e){"objectFitPolyfill"in window||await r.e(452).then(r.t.bind(r,1452,23)),window.objectFitPolyfill(e)}(e)),()=>{n&&n(),m()}}var g;return f(e,t,o,s,u,d)}function p(e){let{image:t,loading:r="lazy",isLoading:i,isLoaded:c,imgClassName:l,imgStyle:u={},objectPosition:f,backgroundColor:d,objectFit:p="cover"}=e,h=(0,n._)(e,s);const{width:g,height:_,layout:m,images:v,placeholder:b,backgroundColor:y}=t;return u=(0,n.a)({objectFit:p,objectPosition:f,backgroundColor:d},u),(0,a.qV)(o.default.createElement(n.L,{layout:m,width:g,height:_},o.default.createElement(n.P,(0,n.a)({},(0,n.g)(b,c,m,g,_,y,p,f))),o.default.createElement(n.M,(0,n.a)({},h,{width:g,height:_,className:l},(0,n.b)(i,c,v,r,u)))))}},8394:function(e,t,r){r.d(t,{F0:function(){return C}});var n=r(172),o=/[\s\n\\/='"\0<>]/,a=/^(xlink|xmlns|xml)([A-Z])/,i=/^accessK|^auto[A-Z]|^cell|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|spellC|src[A-Z]|tabI|useM|item[A-Z]/,c=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,l=/["&<]/;function s(e){if(0===e.length||!1===l.test(e))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1}return r!==t&&(n+=e.slice(t,r)),n}var u={},f=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),d=/[A-Z]/g;function p(e){var t="";for(var r in e){var n=e[r];if(null!=n&&""!==n){var o="-"==r[0]?r:u[r]||(u[r]=r.replace(d,"-$&").toLowerCase()),a=";";"number"!=typeof n||o.startsWith("--")||f.has(o)||(a="px;"),t=t+o+":"+n+a}}return t||void 0}function h(){this.__d=!0}function g(e,t){return{__v:e,context:t,props:e.props,setState:h,forceUpdate:h,__d:!0,__h:new Array(0)}}var _,m,v,b,y={},w=[],k=Array.isArray,x=Object.assign,F="";function C(e,t,r){var o=n.fF.__s;n.fF.__s=!0,_=n.fF.__b,m=n.fF.diffed,v=n.fF.__r,b=n.fF.unmount;var a=(0,n.h)(n.FK,null);a.__k=[e];try{var i=E(e,t||y,!1,void 0,a,!1,r);return k(i)?i.join(F):i}catch(c){if(c.then)throw new Error('Use "renderToStringAsync" for suspenseful rendering.');throw c}finally{n.fF.__c&&n.fF.__c(e,w),n.fF.__s=o,w.length=0}}function A(e,t){var r,n=e.type,o=!0;return e.__c?(o=!1,(r=e.__c).state=r.__s):r=new n(e.props,t),e.__c=r,r.__v=e,r.props=e.props,r.context=t,r.__d=!0,null==r.state&&(r.state=y),null==r.__s&&(r.__s=r.state),n.getDerivedStateFromProps?r.state=x({},r.state,n.getDerivedStateFromProps(r.props,r.state)):o&&r.componentWillMount?(r.componentWillMount(),r.state=r.__s!==r.state?r.__s:r.state):!o&&r.componentWillUpdate&&r.componentWillUpdate(),v&&v(e),r.render(r.props,r.state,t)}function E(e,t,r,l,u,f,d){if(null==e||!0===e||!1===e||e===F)return F;var h=typeof e;if("object"!=h)return"function"==h?F:"string"==h?s(e):e+F;if(k(e)){var w,C=F;u.__k=e;for(var S=0;S<e.length;S++){var j=e[S];if(null!=j&&"boolean"!=typeof j){var T,P=E(j,t,r,l,u,f,d);"string"==typeof P?C+=P:(w||(w=[]),C&&w.push(C),C=F,k(P)?(T=w).push.apply(T,P):w.push(P))}}return w?(C&&w.push(C),w):C}if(void 0!==e.constructor)return F;e.__=u,_&&_(e);var D=e.type,I=e.props;if("function"==typeof D){var M,U,W,Z=t;if(D===n.FK){if("tpl"in I){for(var $=F,q=0;q<I.tpl.length;q++)if($+=I.tpl[q],I.exprs&&q<I.exprs.length){var z=I.exprs[q];if(null==z)continue;"object"!=typeof z||void 0!==z.constructor&&!k(z)?$+=z:$+=E(z,t,r,l,e,f,d)}return $}if("UNSTABLE_comment"in I)return"\x3c!--"+s(I.UNSTABLE_comment)+"--\x3e";U=I.children}else{if(null!=(M=D.contextType)){var K=t[M.__c];Z=K?K.props.value:M.__}var N=D.prototype&&"function"==typeof D.prototype.render;if(N)U=A(e,Z),W=e.__c;else{e.__c=W=g(e,Z);for(var O=0;W.__d&&O++<25;)W.__d=!1,v&&v(e),U=D.call(W,I,Z);W.__d=!0}if(null!=W.getChildContext&&(t=x({},t,W.getChildContext())),N&&n.fF.errorBoundaries&&(D.getDerivedStateFromError||W.componentDidCatch)){U=null!=U&&U.type===n.FK&&null==U.key&&null==U.props.tpl?U.props.children:U;try{return E(U,t,r,l,e,f,d)}catch(te){return D.getDerivedStateFromError&&(W.__s=D.getDerivedStateFromError(te)),W.componentDidCatch&&W.componentDidCatch(te,y),W.__d?(U=A(e,t),null!=(W=e.__c).getChildContext&&(t=x({},t,W.getChildContext())),E(U=null!=U&&U.type===n.FK&&null==U.key&&null==U.props.tpl?U.props.children:U,t,r,l,e,f,d)):F}finally{m&&m(e),e.__=null,b&&b(e)}}}U=null!=U&&U.type===n.FK&&null==U.key&&null==U.props.tpl?U.props.children:U;try{var H=E(U,t,r,l,e,f,d);return m&&m(e),e.__=null,n.fF.unmount&&n.fF.unmount(e),H}catch(re){if(!f&&d&&d.onError){var B=d.onError(re,e,(function(n){return E(n,t,r,l,e,f,d)}));if(void 0!==B)return B;var V=n.fF.__e;return V&&V(re,e),F}if(!f)throw re;if(!re||"function"!=typeof re.then)throw re;return re.then((function n(){try{return E(U,t,r,l,e,f,d)}catch(re){if(!re||"function"!=typeof re.then)throw re;return re.then((function(){return E(U,t,r,l,e,f,d)}),n)}}))}}var R,G="<"+D,J=F;for(var Q in I){var X=I[Q];if("function"!=typeof X){switch(Q){case"children":R=X;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in I)continue;Q="for";break;case"className":if("class"in I)continue;Q="class";break;case"defaultChecked":Q="checked";break;case"defaultSelected":Q="selected";break;case"defaultValue":case"value":switch(Q="value",D){case"textarea":R=X;continue;case"select":l=X;continue;case"option":l!=X||"selected"in I||(G+=" selected")}break;case"dangerouslySetInnerHTML":J=X&&X.__html;continue;case"style":"object"==typeof X&&(X=p(X));break;case"acceptCharset":Q="accept-charset";break;case"httpEquiv":Q="http-equiv";break;default:if(a.test(Q))Q=Q.replace(a,"$1:$2").toLowerCase();else{if(o.test(Q))continue;"-"!==Q[4]&&"draggable"!==Q||null==X?r?c.test(Q)&&(Q="panose1"===Q?"panose-1":Q.replace(/([A-Z])/g,"-$1").toLowerCase()):i.test(Q)&&(Q=Q.toLowerCase()):X+=F}}null!=X&&!1!==X&&(G=!0===X||X===F?G+" "+Q:G+" "+Q+'="'+("string"==typeof X?s(X):X+F)+'"')}}if(o.test(D))throw new Error(D+" is not a valid HTML tag name in "+G+">");if(J||("string"==typeof R?J=s(R):null!=R&&!1!==R&&!0!==R&&(J=E(R,t,"svg"===D||"foreignObject"!==D&&r,l,e,f,d))),m&&m(e),e.__=null,b&&b(e),!J&&L.has(D))return G+"/>";var Y="</"+D+">",ee=G+">";return k(J)?[ee].concat(J,[Y]):"string"!=typeof J?[ee,J,Y]:ee+J+Y}var L=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"])}}]);
//# sourceMappingURL=527-2221e4885a4cba5383a2.js.map