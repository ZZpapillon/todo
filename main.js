(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>g});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),l=t.n(c),d=new URL(t(372),t.b),s=new URL(t(557),t.b),p=new URL(t(769),t.b),u=a()(o()),f=l()(d),m=l()(s),h=l()(p);u.push([e.id,"@font-face {\n    font-family: 'MyFont';\n    src: url("+f+") format('truetype'),\n         url("+m+') format(\'ttf\');\n        \n\n}\nbody {\n    margin: 0;\n    padding: 0;\n    /* Replace with your desired background color */\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --light-blue: #ADD8E6;\n    --light-gray: #D3D3D3;\n}\n\n.container {\n    display: grid;\n    grid-template-areas:\n        "header header"\n        "sidebar content"\n        "footer footer";\n    grid-template-rows: 1fr 11fr 1fr;\n    grid-template-columns: 1fr 5fr;\n    height: 100vh;\n}\n\n.header {\n    grid-area: header;\n    background-color: var(--light-gray);\n    padding: 20px;\n    color: #333;\n    display: grid;\n    grid-template-columns: 1fr 1fr 10fr;\n    \n}\n.header-icon img {\n  width: 80px;\n  height: 80px\n}\n.header-name {\n    font-size: 70px;\n    font-weight: bolder;\n    white-space: nowrap;\n    \n}\n\n.sidebar {\n    grid-area: sidebar;\n    background-color: var(--light-blue);\n    padding: 20px;\n    color: #fff;\n}\n\n.content {\n    grid-area: content;\n    background-color: var(--light-gray);\n    padding: 20px;\n    color: #333;\n    border-top: 3px solid white;\n}\n\n.footer {\n    grid-area: footer;\n    background-color: white;\n    padding: 3px;\n    color: #333;\n    text-align: center;\n    font-size: 25px;\n    overflow: hidden;\n    \n}\n\n\n.sidebar {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    gap: 10px;\n    border-top: 3px solid white;\n    border-right: 3px solid white;\n    \n}\n.icons {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 15px;\n    grid-template-columns: auto;\n}\n.icons img {\n    width: 35px;\n    height: 35px;\n}\n\n.todos {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 17px;\n    grid-template-columns: auto;\n    font-size: 25px\n}\n\n.selection {\n    color: white;\n    font-size: 30px;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n.newProject {\n    height: 20px;\n    width: 100px;\n    justify-self: end;\n}\n\n.blur>*:not(.form-container) {\n    filter: blur(5px);\n}\n/* CSS */\n/* CSS */\n/* CSS */\n/* CSS */\n/* Form container */\n.form-container {\n    display: grid;\n        grid-template-columns: 1fr;\n        gap: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    height: 500px;\n    background-color: #fff;\n    border: 4px solid lightblue;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    padding: 30px;\n}\n.form {\n    display: grid;\n    gap: 20px;\n}\n.form label {\n    font-weight: bold;\n}\n\n.form select,\n.form input[type="text"],\n.form textarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #C9D6DF;\n    border-radius: 5px;\n    background-color: #FFFFFF;\n    font-size: 14px;\n    color: #333333;\n}\n\n.form select {\n    appearance: none;\n    background-image: url('+h+');\n    background-repeat: no-repeat;\n    background-position: right 8px center;\n    padding-right: 30px;\n}\n\n.form textarea {\n    resize: vertical;\n}\n\n.form button[type="submit"] {\n    padding: 12px 20px;\n    border: none;\n    border-radius: 5px;\n    background-color: #007BFF;\n    color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.form button[type="submit"]:hover {\n    background-color: #0056b3;\n}\n\n.form button[type="submit"]:focus {\n    outline: none;\n}\n\n/* Additional Styling */\n\n.form-container {\n    max-width: 400px;\n    margin: 0 auto;\n}\n\n.form label {\n    margin-bottom: 2px;\n}\n\n.form textarea {\n    min-height: 30px;\n    max-height: 50px;\n    overflow-y: auto\n}\n\n.form button[type="submit"] {\n    width: 50%;\n    margin-top: 30px;\n    margin-left: 200px;\n}\n\n.priority-circle {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n}',""]);const g=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],d=r.base?l[0]+r.base:l[0],s=i[d]||0,p="".concat(d," ").concat(s);i[d]=s+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var l=r(e,o),d=0;d<i.length;d++){var s=t(i[d]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},769:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3E%3Cpath fill=%27%23000000%27 d=%27M8 3L5 6V0zM0 3l3-3h2v6H3L0 3z%27/%3E%3C/svg%3E"},372:(e,n,t)=>{e.exports=t.p+"114db6f044ce13c78069.ttf"},557:(e,n,t)=>{e.exports=t.p+"de9666d81037cf49084b.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),l=t.n(c),d=t(216),s=t.n(d),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let h=new class{constructor(e,n,t,r){this.title=e,this.describtion=n,this.priority=t,this.checklist=r}info=()=>`title: ${this.title} describtion: ${this.describtion} priority: ${this.priority} checklist: ${this.checklist}`}("title","describtion","priority","checklist");console.log("Radi radi"),console.log(h.info()),document.querySelector(".container"),document.querySelector(".header"),document.querySelector(".header-icon"),document.querySelector(".header-name"),document.querySelector(".sidebar"),document.querySelector(".icons"),document.querySelector(".today-icon"),document.querySelector(".projects-icon"),document.querySelector(".personal-icon"),document.querySelector(".work-icon"),document.querySelector(".todos"),document.querySelector(".today"),document.querySelector(".projects"),document.querySelector(".personal"),document.querySelector(".work");const g=document.querySelector(".content"),b=(document.querySelector(".footer"),document.createElement("div"));b.classList.add("selection"),b.textContent="Today:",g.appendChild(b);const y=document.createElement("button");y.classList.add("newProject"),y.textContent="Click",g.appendChild(y),function(){const e=document.querySelector(".container");document.querySelector(".content"),document.querySelector(".newProject").addEventListener("click",(()=>{e.classList.add("blur");const n=document.createElement("div");n.classList.add("form-container"),n.style.display="block";const t=document.createElement("form");t.classList.add("form");const r=document.createElement("label");r.textContent="Category:";const o=document.createElement("select");o.name="category";const i=["Projects","Personal","Work"];i.forEach((e=>{const n=document.createElement("option");n.value=e.toLowerCase(),n.textContent=e,o.appendChild(n)})),r.appendChild(o);const a=document.createElement("label");a.textContent="Title:";const c=document.createElement("input");c.type="text",c.name="title",a.appendChild(c);const l=document.createElement("label");l.textContent="Description:";const d=document.createElement("textarea");d.name="description",l.appendChild(d);const s=document.createElement("label");s.textContent="Priority:";const p=document.createElement("select");p.name="priority",[{value:"gray",color:"#999"},{value:"blue",color:"#00f"},{value:"red",color:"#f00"}].forEach((e=>{const n=document.createElement("option");n.value=e.value;const t=document.createElement("span");t.classList.add("priority-circle"),t.style.backgroundColor=e.color,n.appendChild(t),p.appendChild(n)})),s.appendChild(p);const u=document.createElement("button");u.type="submit",u.textContent="Submit",t.appendChild(r),t.appendChild(a),t.appendChild(l),t.appendChild(s),t.appendChild(u),n.appendChild(t),document.body.appendChild(n),e.scrollTo({top:n.offsetTop,behavior:"smooth"}),t.addEventListener("submit",(e=>{e.preventDefault();const n=o.value,t=c.value,r=d.value,a=priorityInput.value;console.log("Category:",n),console.log("Title:",t),console.log("Description:",r),console.log("Priority:",a),o.value=i[0].toLowerCase(),c.value="",d.value="",priorityInput.value=""}))}))}()})()})();