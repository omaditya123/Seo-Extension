!function(e){function t(t){for(var a,s,c=t[0],l=t[1],o=t[2],u=0,O=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&O.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(d&&d(t);O.length;)O.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={1:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=function(e){return s.p+"static/js/"+({}[e]||e)+"."+{3:"df508132"}[e]+".chunk.js"}(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(o);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}i[e]=void 0}};var o=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=this["webpackJsonpchrome-react-seo-extension"]=this["webpackJsonpchrome-react-seo-extension"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var d=l;r.push([5,2]),n()}({10:function(e,t,n){},11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(4),s=n.n(r),c=(n(10),n(2)),l=(n(11),n(0));var o=function(){var e=i.a.useState(""),t=Object(c.a)(e,2),n=t[0],a=t[1],r=i.a.useState(""),s=Object(c.a)(r,2),o=s[0],d=s[1],u=i.a.useState(0),O=Object(c.a)(u,2),j=O[0],h=O[1],f=i.a.useState([]),p=Object(c.a)(f,2),b=p[0],m=p[1];return i.a.useEffect((function(){chrome.tabs&&chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.sendMessage(e[0].id||0,{type:"GET_DOM"},(function(e){a(e.title),m(e.headlines),h(e.images),d(e.url)}))}))})),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"SEO Extension"}),Object(l.jsx)("span",{className:"SEOValidationFieldStatus Error tags",children:"Not Good for SEO Optimization"}),Object(l.jsx)("span",{className:"SEOValidationFieldStatus Ok tags",children:"Good for SEO Optimization"}),Object(l.jsxs)("ul",{className:"SEOForm",children:[Object(l.jsxs)("li",{className:"SEOValidation",children:[Object(l.jsxs)("div",{className:"SEOValidationField",children:[Object(l.jsx)("span",{className:"SEOValidationFieldTitle",children:"Title"}),Object(l.jsxs)("span",{className:"SEOValidationFieldStatus ".concat(n.length<30||n.length>65?"Error":"Ok"),children:[n.length," Characters"]})]}),Object(l.jsx)("div",{className:"SEOVAlidationFieldValue",children:n})]}),Object(l.jsxs)("li",{className:"SEOValidation",children:[Object(l.jsxs)("div",{className:"SEOValidationField",children:[Object(l.jsx)("span",{className:"SEOValidationFieldTitle",children:"Main Heading"}),Object(l.jsx)("span",{className:"SEOValidationFieldStatus ".concat(1!==b.length?"Error":"Ok"),children:b.length})]}),Object(l.jsx)("div",{className:"SEOVAlidationFieldValue",children:Object(l.jsx)("ul",{children:b.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))})})]}),Object(l.jsx)("li",{className:"SEOValidation",children:Object(l.jsxs)("div",{className:"SEOValidationField",children:[Object(l.jsx)("span",{className:"SEOValidationFieldTitle",children:"Images"}),Object(l.jsxs)("span",{className:"SEOValidationFieldStatus ".concat(j<10||j>30?"Error":"Ok"),children:[j," images"]})]})}),Object(l.jsx)("li",{className:"SEOValidation",children:Object(l.jsxs)("div",{className:"SEOValidationField",children:[Object(l.jsx)("span",{className:"SEOValidationFieldTitle",children:"Webpage Url"}),Object(l.jsx)("span",{className:"SEOValidationFieldStatus ".concat(o.length>80?"Error":"Ok"),children:o})]})})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root")),d()},5:function(e,t,n){e.exports=n(14)}});
//# sourceMappingURL=main.js.map