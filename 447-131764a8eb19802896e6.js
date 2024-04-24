"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[447],{8223:function(e,t,r){r.r(t),r.d(t,{renderImageToString:function(){return p},swapPlaceholderImage:function(){return f}});var n=r(3723),o=r(9748),a=r(7709);r(3204);let i;const c=new WeakMap,l=navigator.connection||navigator.mozConnection||navigator.webkitConnection,s=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function u(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function d(e,t,r,n,o,a){const i=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),l=r.has(t);function s(e){this.removeEventListener("load",s);const t=e.currentTarget,r=new Image;r.src=t.currentSrc,r.decode?r.decode().then((()=>{u(this,c),null==o||o({wasCached:l})})).catch((e=>{u(this,c),null==a||a(e)})):(u(this,c),null==o||o({wasCached:l}))}return i.addEventListener("load",s),null==n||n({wasCached:l}),Array.from(i.parentElement.children).forEach((e=>{const t=e.getAttribute("data-src"),r=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),r&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",r))})),r.add(t),i.complete&&s.call(i,{currentTarget:i}),()=>{i&&i.removeEventListener("load",s)}}function f(e,t,o,a,s,u,f){if(!(0,n.h)()){let n;const _=(g=()=>{n=d(e,t,o,s,u,f)},"IntersectionObserver"in window?(i||(i=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting&&(null==(t=c.get(e.target))||t(),c.delete(e.target))}))}),{rootMargin:"4g"!==(null==l?void 0:l.effectiveType)||null!=l&&l.saveData?"2500px":"1250px"})),function(e){return c.set(e,g),i.observe(e),function(){i&&e&&(c.delete(e),i.unobserve(e))}}):function(){return g(),function(){}}),m=_(e);var p,h;return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(p=a.objectFit)?p:"cover",e.dataset.objectPosition=""+(null!=(h=a.objectPosition)?h:"50% 50%"),async function(e){"objectFitPolyfill"in window||await r.e(843).then(r.t.bind(r,4843,23)),window.objectFitPolyfill(e)}(e)),()=>{n&&n(),m()}}var g;return d(e,t,o,s,u,f)}function p(e){let{image:t,loading:r="lazy",isLoading:i,isLoaded:c,imgClassName:l,imgStyle:u={},objectPosition:d,backgroundColor:f,objectFit:p="cover"}=e,h=(0,n._)(e,s);const{width:g,height:_,layout:m,images:v,placeholder:y,backgroundColor:b}=t;return u=(0,n.a)({objectFit:p,objectPosition:d,backgroundColor:f},u),(0,a.uS)(o.default.createElement(n.L,{layout:m,width:g,height:_},o.default.createElement(n.P,(0,n.a)({},(0,n.g)(y,c,m,g,_,b,p,d))),o.default.createElement(n.M,(0,n.a)({},h,{width:g,height:_,className:l},(0,n.b)(i,c,v,r,u)))))}},7649:function(e,t,r){r.d(t,{Dq:function(){return w}});var n=r(6400),o=/[\s\n\\/='"\0<>]/,a=/^(xlink|xmlns|xml)([A-Z])/,i=/^accessK|^auto[A-Z]|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|readO|rowS|spellC|src[A-Z]|tabI|item[A-Z]/,c=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,l=/["&<]/;function s(e){if(0===e.length||!1===l.test(e))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1}return r!==t&&(n+=e.slice(t,r)),n}var u={},d=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),f=/[A-Z]/g;function p(e){var t="";for(var r in e){var n=e[r];if(null!=n&&""!==n){var o="-"==r[0]?r:u[r]||(u[r]=r.replace(f,"-$&").toLowerCase()),a=";";"number"!=typeof n||o.startsWith("--")||d.has(o)||(a="px;"),t=t+o+":"+n+a}}return t||void 0}var h,g,_,m,v=[],y=Array.isArray,b=Object.assign;function w(e,t){var r=n.YM.__s;n.YM.__s=!0,h=n.YM.__b,g=n.YM.diffed,_=n.YM.__r,m=n.YM.unmount;var o=(0,n.h)(n.HY,null);o.__k=[e];try{return A(e,t||x,!1,void 0,o,!1)}catch(a){if(a.then)throw new Error('Use "renderToStringAsync" for suspenseful rendering.');throw a}finally{n.YM.__c&&n.YM.__c(e,v),n.YM.__s=r,v.length=0}}function k(){this.__d=!0}var x={};function C(e,t){var r,n=e.type,o=!0;return e.__c?(o=!1,(r=e.__c).state=r.__s):r=new n(e.props,t),e.__c=r,r.__v=e,r.props=e.props,r.context=t,r.__d=!0,null==r.state&&(r.state=x),null==r.__s&&(r.__s=r.state),n.getDerivedStateFromProps?r.state=b({},r.state,n.getDerivedStateFromProps(r.props,r.state)):o&&r.componentWillMount?(r.componentWillMount(),r.state=r.__s!==r.state?r.__s:r.state):!o&&r.componentWillUpdate&&r.componentWillUpdate(),_&&_(e),r.render(r.props,r.state,t)}function A(e,t,r,l,u,d){if(null==e||!0===e||!1===e||""===e)return"";if("object"!=typeof e)return"function"==typeof e?"":s(e+"");if(y(e)){var f,v="";u.__k=e;for(var w=0;w<e.length;w++){var x=e[w];if(null!=x&&"boolean"!=typeof x){var L,j=A(x,t,r,l,u,d);"string"==typeof j?v+=j:(f=f||[],v&&f.push(v),v="",Array.isArray(j)?(L=f).push.apply(L,j):f.push(j))}}return f?(v&&f.push(v),f):v}if(void 0!==e.constructor)return"";e.__=u,h&&h(e);var E,M,Y,F=e.type,P=e.props,T=t;if("function"==typeof F){if(F===n.HY){if(P.tpl){for(var D="",H=0;H<P.tpl.length;H++)if(D+=P.tpl[H],P.exprs&&H<P.exprs.length){var I=P.exprs[H];if(null==I)continue;"object"!=typeof I||void 0!==I.constructor&&!y(I)?D+=I:D+=A(I,t,r,l,e,d)}return D}if(P.UNSTABLE_comment)return"\x3c!--"+s(P.UNSTABLE_comment||"")+"--\x3e";M=P.children}else{if(null!=(E=F.contextType)){var U=t[E.__c];T=U?U.props.value:E.__}if(F.prototype&&"function"==typeof F.prototype.render)M=C(e,T),Y=e.__c;else{e.__c=Y={__v:e,props:P,context:T,setState:k,forceUpdate:k,__d:!0,__h:[]};for(var W=0;Y.__d&&W++<25;)Y.__d=!1,_&&_(e),M=F.call(Y,P,T);Y.__d=!0}if(null!=Y.getChildContext&&(t=b({},t,Y.getChildContext())),(F.getDerivedStateFromError||Y.componentDidCatch)&&n.YM.errorBoundaries){var Z="";M=null!=M&&M.type===n.HY&&null==M.key?M.props.children:M;try{return Z=A(M,t,r,l,e,d)}catch(G){return F.getDerivedStateFromError&&(Y.__s=F.getDerivedStateFromError(G)),Y.componentDidCatch&&Y.componentDidCatch(G,{}),Y.__d&&(M=C(e,t),null!=(Y=e.__c).getChildContext&&(t=b({},t,Y.getChildContext())),Z=A(M=null!=M&&M.type===n.HY&&null==M.key?M.props.children:M,t,r,l,e,d)),Z}finally{g&&g(e),e.__=null,m&&m(e)}}}M=null!=M&&M.type===n.HY&&null==M.key&&null==M.props.tpl?M.props.children:M;try{var q=A(M,t,r,l,e,d);return g&&g(e),e.__=null,m&&m(e),q}catch(G){if(!d)throw G;if(!G||"function"!=typeof G.then)throw G;var z=function n(){try{return A(M,t,r,l,e,d)}catch(o){if(!o||"function"!=typeof o.then)throw o;return o.then((function(){return A(M,t,r,l,e,d)}),(function(){return n()}))}};return G.then((function(){return z()}))}}var N,$="<"+F,O="";for(var B in P){var R=P[B];switch(B){case"children":N=R;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in P)continue;B="for";break;case"className":if("class"in P)continue;B="class";break;case"defaultChecked":B="checked";break;case"defaultSelected":B="selected";break;case"defaultValue":case"value":switch(B="value",F){case"textarea":N=R;continue;case"select":l=R;continue;case"option":l!=R||"selected"in P||($+=" selected")}break;case"dangerouslySetInnerHTML":O=R&&R.__html;continue;case"style":"object"==typeof R&&(R=p(R));break;case"acceptCharset":B="accept-charset";break;case"httpEquiv":B="http-equiv";break;default:if(a.test(B))B=B.replace(a,"$1:$2").toLowerCase();else{if(o.test(B))continue;"-"!==B[4]&&"draggable"!==B||null==R?r?c.test(B)&&(B="panose1"===B?"panose-1":B.replace(/([A-Z])/g,"-$1").toLowerCase()):i.test(B)&&(B=B.toLowerCase()):R+=""}}null!=R&&!1!==R&&"function"!=typeof R&&($=!0===R||""===R?$+" "+B:$+" "+B+'="'+s(R+"")+'"')}if(o.test(F))throw new Error(F+" is not a valid HTML tag name in "+$+">");if(O||("string"==typeof N?O=s(N):null!=N&&!1!==N&&!0!==N&&(O=A(N,t,"svg"===F||"foreignObject"!==F&&r,l,e,d))),g&&g(e),e.__=null,m&&m(e),!O&&S.has(F))return $+"/>";var V="</"+F+">",K=$+">";return Array.isArray(O)?[K].concat(O,[V]):"string"!=typeof O?[K,O,V]:K+O+V}var S=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"])}}]);
//# sourceMappingURL=447-131764a8eb19802896e6.js.map