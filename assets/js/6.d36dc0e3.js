(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{256:function(t,n,e){"use strict";e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return s})),e.d(n,"e",(function(){return u})),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return d}));const r=/#.*$/,i=/\.(md|html)$/,l=/\/$/,a=/^(https?:|mailto:|tel:)/;function o(t){return a.test(t)}function s(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function c(t){if(o(t))return t;const n=t.match(r),e=n?n[0]:"",a=function(t){return decodeURI(t).replace(r,"").replace(i,"")}(t);return l.test(a)?t:a+".html"+e}function d(t,n,e){if(!t)return e;let r,i=n;for(;(i=i.$parent)&&!r;)r=i.$refs[t];return r&&r.$el&&(r=r.$el),r||e}},278:function(t,n,e){},290:function(t,n,e){"use strict";var r=e(278);e.n(r).a},306:function(t,n,e){"use strict";e.r(n);var r=e(256),i={props:{link:{required:!0}},computed:{normalizedlink(){return Object(r.a)(this.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.normalizedlink):"/"===this.normalizedlink}},methods:{isExternal:r.c,isMailto:r.d,isTel:r.e}},l=(e(290),e(5)),a=Object(l.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isExternal(t.normalizedlink)?e("a",{staticClass:"nav-link external",attrs:{href:t.normalizedlink,target:t.isMailto(t.normalizedlink)||t.isTel(t.normalizedlink)?null:"_blank",rel:t.isMailto(t.normalizedlink)||t.isTel(t.normalizedlink)?null:"noopener noreferrer"}},[t._t("default")],2):e("router-link",{staticClass:"nav-link",attrs:{to:t.normalizedlink,exact:t.exact}},[t._t("default")],2)}),[],!1,null,null,null);n.default=a.exports}}]);