(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[410],{9039:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(5007),l=r(5900),a=r.n(l),o=r(345),c=r(6378);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d=function(e){var t=e.children,r=e.className,l=e.gapless,o=p(e,["children","className","gapless"]);return n.default.createElement(c.Z,f({renderAs:"span"},o,{className:a()("tags",r,{"has-addons":l})}),t)};function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}d.defaultProps=s(s({},o.Z.defaultProps),{},{children:null,className:void 0,style:void 0,gapless:!1});var v=function(e){var t,r=e.children,l=e.className,o=e.color,u=e.size,s=e.rounded,i=e.remove,f=g(e,["children","className","color","size","rounded","remove"]);return n.default.createElement(c.Z,y({},f,{className:a()("tag",l,(t={},m(t,"is-".concat(u),u),m(t,"is-".concat(o),o),m(t,"is-rounded",s),m(t,"is-delete",i),t))}),!i&&r)};v.Group=d,v.defaultProps=O(O({},o.Z.defaultProps),{},{children:null,className:void 0,style:void 0,color:void 0,size:void 0,rounded:!1,remove:!1,renderAs:"span"});var j=v,h=function(e){var t=e.tags;return n.default.createElement(j.Group,null,t.split(",").map((function(e){return n.default.createElement(j,{key:e},e)})))}},5466:function(e,t,r){"use strict";r.r(t);var n=r(5007),l=r(5444),a=r(801),o=r(2317),c=r(5871),u=r(5167),s=r(2836),i=r(9039);t.default=function(e){var t=e.data.blog.posts;return n.default.createElement(c.Z,null,n.default.createElement(u.Z,{title:"Matt McCorry's Blog Index"}),n.default.createElement(a.Z,null,n.default.createElement(a.Z.Column,{size:3},n.default.createElement(s.Z,null)),n.default.createElement(a.Z.Column,null,n.default.createElement(o.Z,null,"Blog Posts"),t.map((function(e){return n.default.createElement("article",{key:e.id},n.default.createElement(l.Link,{to:"/blog"+e.fields.slug},n.default.createElement(o.Z,null,e.frontmatter.title),n.default.createElement(o.Z,{subtitle:!0},e.frontmatter.author,", ",e.frontmatter.date)),n.default.createElement(i.Z,{tags:e.frontmatter.tags}),n.default.createElement("p",null,e.excerpt))})))))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-d88201cb73385f91a538.js.map