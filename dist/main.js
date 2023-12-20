(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),d=n.n(o),i=n(645),r=n.n(i)()(d());r.push([e.id,"\n\nbody, html {\n    margin: 0;\n    padding: 0;\n    font-family: Mina;\n    background: #FCD7E9;\n    color: #5A5A5A;\n  }\n  \n  .main-title {\n    position: relative;\n    display: inline-block;\n    padding: 20px 40px;\n    color: white;\n    font-size: 32px; \n    text-align: center;\n    background: linear-gradient(135deg, #ff4081 20%, #f2d600 40%, #75c940 60%, #C740FF 80%);\n    border-radius: 20px;\n    box-shadow: 0 8px 15px rgba(0,0,0,0.1);\n    overflow: hidden;\n    width: 92%; \n\n  }\n  \n  .main-title::before {\n    content: '';\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    border-radius: 50%;\n    transform: scaleX(1.5) translate(0, -60%);\n    transform-origin: bottom center;\n    z-index: -1;\n    transition: transform 0.3s ease-in-out;\n  }\n  \n  .main-title:hover::before {\n    transform: scaleX(1.5) translate(0, -70%);\n  }\n  \n  .main-title span {\n    position: relative;\n    z-index: 2;\n  }\n  \n\n\n\n\n  #sidebar {\n    background-color: #EDE9E1;\n    width: 250px; \n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    padding-top: 20px; \n    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);\n  }\n  \n\n  .sidebar-item {\n    padding: 20px 30px; \n    color: #333;\n    cursor: pointer;\n    font-size: 18px;\n    border-bottom: 1px solid #f0f0f0;\n  }\n  \n  .sidebar-item:hover {\n    background-color: #f9f9f9;\n  }\n  \n\n  .add-project-btn {\n    display: block;\n    width: 90%;\n    margin: 10px auto; \n    padding: 10px;\n    background-color: #ff4081;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    font-weight: bold;\n    text-align: center;\n    cursor: pointer;\n  }\n  \n  .add-project-btn:hover {\n    background-color: #75c940;\n  }\n  \n\n  #content {\n    margin-left: 250px; \n    padding: 20px;\n    background: #F3F3EF;\n    min-height: 100vh;\n  }\n  \n\n \n  \n\n  .content-heading {\n    font-size: 20px;\n    margin-bottom: 15px;\n    \n  }\n  \n\n  .content-details {\n    font-size: 16px;\n    line-height: 1.6;\n    color: #666;\n  }\n  \n\n  .content-section {\n    background: #fff;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n    margin-bottom: 20px;\n  }\n  \n \n\n\n  #add-task-btn {\n    font-size: 16px;\n    padding: 5px 10px;\n    margin: 20px 0;\n    background-color: #f2d600; \n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n  \n  #add-task-btn:hover {\n    background-color: #75c940;\n  }\n  \n\n \n\n\n.popup {\n    display: flex;\n    flex-direction: column;\n      justify-content: center;\n    gap: 10px;\n    position: fixed; \n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white; \n    padding: 20px; \n    border: 1px solid #ccc; \n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); \n    z-index: 1000; \n    max-width: 800px; /* Maksimum genişlik sınırı */\n    min-width: 450px; /* Minimum genişlik sınırı */\n    height: auto; \n    max-height: 300px; /* Maksimum yükseklik sınırı */\n    min-height: 100px; /* Minimum yükseklik sınırı */\n  }\n  \n\n  #todo-list {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    gap: 20px; \n    justify-content: flex-start; \n    align-items: stretch; \n  }\n\n  .todo-item {\n    background-color: #FAF3EB;  \n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    padding: 15px; \n    border-radius: 4px; \n    display: flex;\n    align-items: center;\n    justify-content: space-between; \n  }\n  \n\n.todo-label {\n  display: flex;\n  align-items: center;\n  gap: 10px; \n}\n\n\n.todo-item.completed {\n  text-decoration: line-through; \n  background-color: #f8f8f8;\n  color: #b8b8b8; \n}\n\n\n.delete-item-button {\n  display: block;\n  width: 10%;\n  padding: 5px;\n  background-color: #FF5451;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-weight: bold;\n  text-align: center;\n  cursor: pointer;\n}\n\n\n\n#project-form-container {\n  display: flex; \n  flex-direction: column; /* Çocukları dikey olarak hizala */\n  align-items: stretch; /* Tüm çocukları genişlet ve kenarlarına kadar doldur */\n  gap: 10px; /* Elemanlar arasında boşluk */\n  padding: 20px; /* İç boşluk */\n  background-color: white; \n  border: 1px solid #ccc; \n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Gölge efekti */\n  width: 400px; \n  max-width: 100%; /* Genişlik maksimum %100 (ekran dar ise) */\n}\n\n#project-title-input,\n#project-description-input,\n#project-due-date-input {\n  width: 100%; /* Tam genişlik kullan */\n  margin-bottom: 10px; /* Alt elemanlardan boşluk */\n}\n\n#project-description-input {\n  height: 100px; \n}\n\n#project-submit-button,\n#project-close-button {\n  padding: 10px 20px; \n  cursor: pointer; \n  border: 1px solid #ccc; /* Kenarlık */\n  background-color: #f8f8f8; /* Arka plan rengi */\n}\n\n#project-close-button {\n  background-color: #e8e8e8; /* Kapatma butonu için farklı arka plan rengi */\n}\n\n#project-submit-button:hover,\n#project-close-button:hover {\n  background-color: #d8d8d8; /* Üzerine gelince renk değişimi */\n}\n\n\n.project-item {\n  background-color: #d8d8d8; \n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  padding: 15px; \n  border-radius: 4px; \n  display: flex;\n  align-items: center;\n  justify-content: space-between; \n  gap: 10px;\n  background-color: rgba(255, 64, 129, 0.5); /* %50 saydamlık */\n}\n\n#project-list {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 20px; \n  justify-content: flex-start; \n  align-items: stretch; \n\n}\n\n\n.delete-project-button{\n  display: block;\n  width: 10%;\n  padding: 5px;\n  background-color: #FF5451;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-weight: bold;\n  text-align: center;\n  cursor: pointer;\n}\n\n.project-tag {\n  display: inline-block;\n  padding: 2px 8px;\n  margin: 0 5px;\n  background-color: #CCCCCC; \n  color: white;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.project-tag::before {\n  content: '#';\n}\n\n\n\n.details-project-button{\n  display: block;\n  width: 10%;\n  padding: 5px;\n  background-color: #FAF3EB;\n  color: darkgray;\n  border: none;\n  border-radius: 4px;\n  font-weight: bold;\n  text-align: center;\n  cursor: pointer;\n  margin-left: 30px;\n}",""]);const c=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,d,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),d&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=d):l[4]="".concat(d)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},r=[],c=0;c<e.length;c++){var a=e[c],s=o.base?a[0]+o.base:a[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=n(p),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=d(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function d(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,d){var i=o(e=e||[],d=d||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var c=n(i[r]);t[c].references--}for(var a=o(e,d),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=a}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var d=void 0!==n.layer;d&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,d&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var d=t[o];if(void 0!==d)return d.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),d=n.n(o),i=n(569),r=n.n(i),c=n(565),a=n.n(c),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=a(),f.insert=r().bind(null,"head"),f.domAPI=d(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=function(){localStorage.setItem("projects",JSON.stringify(x))},g=function(e){const t=document.getElementById("project-list");t?(t.innerHTML="",e.forEach((e=>{const n=document.createElement("div");n.classList.add("project-item");const o=document.createElement("span");o.classList.add("project-name"),o.textContent=e.name;const d=document.createElement("p");d.textContent=e.description;const i=document.createElement("p");i.textContent=`Due Date: ${e.dueDate}`;const r=document.createElement("button");r.textContent="Details",r.classList.add("details-project-button"),r.dataset.projectId=e.id,r.addEventListener("click",(function(e){!function(e){const t=x.find((t=>t.id===e));if(!t)return void console.error("Project not found!");const n=document.getElementById("todo-list");n.innerHTML="",console.log("alo"),console.log("Project todos:",t.todos),t.todos.forEach((e=>{const t=document.createElement("div");t.classList.add("todo-item");const o=document.createElement("span");o.textContent=e.title,o.classList.add("todo-title");const d=document.createElement("p");d.textContent=e.description,d.classList.add("todo-description"),t.appendChild(o),t.appendChild(d),n.appendChild(t)}))}(e.currentTarget.dataset.projectId)}));const c=document.createElement("button");c.textContent="Delete",c.classList.add("delete-project-button"),c.dataset.projectId=e.id,c.addEventListener("click",(function(e){!function(e){const t=x.findIndex((t=>t.id===e));if(-1!==t){x.splice(t,1);const n=document.querySelector(`[data-project-id="${e}"]`).closest(".project-item");n&&n.remove(),h()}}(e.currentTarget.dataset.projectId)})),n.appendChild(o),n.appendChild(d),n.appendChild(i),n.appendChild(r),n.appendChild(c),t.appendChild(n)}))):console.error("Project list element not found!")};class b{constructor(e,t,n){this.id=Date.now().toString(),this.name=e,this.description=t,this.dueDate=n,this.todos=[]}addTodo(e){this.todos.push(e)}}const x=[],y=function(){const e=k.map((e=>({...e,projectName:x.find((t=>t.id===e.projectId))?.name||"None"})));localStorage.setItem("todos",JSON.stringify(e))},E={};const v=function(e){const t=document.getElementById("todo-list");if(!t)return void console.error("Todo list element not found!");const n=document.createElement("div");n.classList.add("todo-item");const o=document.createElement("input");o.type="checkbox",o.classList.add("completed-checkbox"),o.checked=e.completed||!1,o.addEventListener("change",(t=>{e.completed=t.target.checked,y(),t.target.checked?n.classList.add("completed"):n.classList.remove("completed")}));const d=document.createElement("span");d.classList.add("todo-title"),d.textContent=e.title;const i=document.createElement("label");i.appendChild(o),i.appendChild(d);const r=document.createElement("span");r.classList.add("todo-project-info");const c=x.find((t=>t.id===e.projectId));if(c){const e=document.createElement("span");e.className="project-tag",e.textContent=c.name,e.style.backgroundColor=function(e){if(E[e])return E[e];{const t=function(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}();return E[e]=t,t}}(c.name),r.appendChild(e)}else r.textContent="Project: None";const a=document.createElement("p");a.textContent=e.description;const s=document.createElement("p");s.textContent=`Due Date: ${e.dueDate}`;const l=document.createElement("p");l.textContent=`Priority: ${e.priority}`;const p=document.createElement("button");p.textContent="Delete",p.classList.add("delete-item-button"),p.dataset.todoId=e.id,p.addEventListener("click",(function(e){!function(e){const t=k.findIndex((t=>t.id===e));if(-1!==t){k.splice(t,1);const n=document.querySelector(`[data-todo-id="${e}"]`).closest(".todo-item");n&&n.remove(),y()}}(e.currentTarget.dataset.todoId)})),n.appendChild(i),n.appendChild(r),n.appendChild(a),n.appendChild(s),n.appendChild(l),n.appendChild(p),t.appendChild(n),e.completed?n.classList.add("completed"):n.classList.remove("completed")};class C{constructor(e,t,n,o,d,i){this.id=Date.now().toString(),this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.projectId=d,this.projectName=i,this.completed=!1}}const k=[],j=function(){const e="form-container-"+Date.now(),t=document.getElementById(e);if(t)return void(t.style.display="block");const n=document.createElement("div");n.id="form-container",n.classList.add("popup");const o=document.createElement("input");o.id="title",o.placeholder="Task Title",o.type="text";const d=document.createElement("textarea");d.id="description",d.placeholder="Task Description";const i=document.createElement("input");i.id="due-date",i.type="date";const r=document.createElement("select");r.id="priority",["High","Low"].forEach((e=>{const t=document.createElement("option");t.value=e,t.textContent=e,r.appendChild(t)}));const c=document.createElement("textarea");c.id="notes",c.placeholder="Additional Notes";const a=document.createElement("select");a.id="project-select";const s=x.find((e=>"Demo Project"===e.name));let l=s?s.id:"demo";x.forEach((e=>{const t=document.createElement("option");t.value=e.id,t.textContent=e.name,a.appendChild(t),e.id===l&&(t.selected=!0)}));const p=document.createElement("button");p.textContent="Add Task",p.id="submit-task",p.type="button",p.addEventListener("click",(function(e){e.preventDefault(),function(e){const t=document.getElementById("title").value,n=document.getElementById("description").value,o=document.getElementById("due-date").value,d=document.getElementById("priority").value,i=new C(t,n,o,d,e);k.push(i);const r=x.find((t=>t.id===e));r?r.todos.push(i):console.error("Selected project not found"),v(i),y();const c=document.getElementById("form-container");c&&c.remove()}(a.value)})),n.appendChild(a),n.appendChild(o),n.appendChild(d),n.appendChild(i),n.appendChild(r),n.appendChild(c),n.appendChild(p);const u=document.createElement("button");u.textContent="Close",u.onclick=function(){n.remove()},n.appendChild(u),document.body.appendChild(n)};function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function L(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function I(e){L(1,arguments);var t=function(e){L(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===w(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}(e);return t.setHours(0,0,0,0),t}function T(e){return L(1,arguments),function(e,t){L(2,arguments);var n=I(e),o=I(t);return n.getTime()===o.getTime()}(e,Date.now())}const D=function(){const e=document.getElementById("todo-list"),t=document.getElementById("project-list");e.innerHTML="",t.innerHTML="",k.filter((e=>T(new Date(e.dueDate)))).forEach((e=>v(e)))},B=function(){document.getElementById("todo-list").innerHTML="",document.getElementById("project-list").innerHTML="",k.filter((e=>!T(new Date(e.dueDate)))).forEach((e=>v(e)))},S=function(){document.getElementById("todo-list").innerHTML="",k.forEach((e=>v(e)))},M=function(){document.getElementById("todo-list").innerHTML="",document.getElementById("project-list").innerHTML="",k.filter((e=>"High"===e.priority)).forEach((e=>{v(e)}))},A=function(){document.getElementById("todo-list").innerHTML="",document.getElementById("project-list").innerHTML="",k.filter((e=>e.completed)).forEach((e=>{v(e)}))};let N=null;const H=function(){if(!N){N=document.createElement("div"),N.id="project-form-container",N.classList.add("popup");const e=document.createElement("input");e.id="project-title-input",e.placeholder="Project Title",e.type="text";const t=document.createElement("textarea");t.id="project-description-input",t.placeholder="Project Description";const n=document.createElement("input");n.id="project-due-date-input",n.type="date";const o=document.createElement("button");o.textContent="Add Project",o.id="project-submit-button",o.type="button",o.addEventListener("click",(function(e){e.preventDefault(),function(){const e=document.getElementById("project-title-input").value,t=document.getElementById("project-description-input").value,n=document.getElementById("project-due-date-input").value,o=new b(e,t,n);x.push(o),h(),g(x),document.getElementById("project-title-input").value="",document.getElementById("project-description-input").value="",document.getElementById("project-due-date-input").value="";const d=document.getElementById("project-form-container");d&&(d.style.display="none")}()})),N.appendChild(e),N.appendChild(t),N.appendChild(n),N.appendChild(o);const d=document.createElement("button");d.textContent="Close",d.id="project-close-button",d.onclick=function(){N.style.display="none"},N.appendChild(d),document.body.appendChild(N)}N&&(document.getElementById("project-title-input").value="",document.getElementById("project-description-input").value="",document.getElementById("project-due-date-input").value=""),N.style.display="block"},P=function(){document.getElementById("todo-list").innerHTML="",document.getElementById("project-list").innerHTML="",g(x)};console.log("Todo App is working!"),document.addEventListener("DOMContentLoaded",(()=>{(function(){const e=localStorage.getItem("projects");if(e&&JSON.parse(e).forEach((e=>{x.push(e)})),!x.some((e=>"Demo Project"===e.name))){const e=new b("Demo Project","Demo project description","2023-12-31");x.push(e)}g(x)})(),function(){const e=localStorage.getItem("todos");e&&JSON.parse(e).forEach((e=>{const t=new C(e.title,e.description,e.dueDate,e.priority,e.projectId,e.projectName);t.completed=e.completed,k.push(t),v(t)}))}(),function(){const e=document.getElementById("content"),t=document.getElementById("todo-list")||document.createElement("div");t.id="todo-list";const n=document.getElementById("project-list")||document.createElement("div");n.id="project-list";const o=document.createElement("aside");o.id="sidebar";const d=document.createElement("div");d.textContent="All",d.classList.add("sidebar-item"),d.addEventListener("click",S);const i=document.createElement("div");i.textContent="Today",i.classList.add("sidebar-item"),i.addEventListener("click",D);const r=document.createElement("div");r.textContent="Upcoming",r.classList.add("sidebar-item"),r.addEventListener("click",B);const c=document.createElement("div");c.textContent="Important",c.classList.add("sidebar-item"),c.addEventListener("click",M);const a=document.createElement("div");a.textContent="Completed",a.classList.add("sidebar-item"),a.addEventListener("click",A);const s=document.createElement("div");s.textContent="Projects",s.classList.add("sidebar-item"),s.addEventListener("click",P);const l=document.createElement("button");l.textContent="New Project",l.classList.add("add-project-btn"),l.addEventListener("click",H),o.appendChild(d),o.appendChild(i),o.appendChild(r),o.appendChild(c),o.appendChild(a),o.appendChild(s),o.appendChild(l);const p=document.createElement("h1");p.textContent="TODO - Yet Another To Do App",p.classList.add("main-title");const u=document.createElement("section");u.id="main-content";const m=document.createElement("button");m.textContent="+ Add new task",m.id="add-task-btn",m.addEventListener("click",j),u.appendChild(m),e.textContent="",e.appendChild(o),e.appendChild(p),e.appendChild(u),e.appendChild(t),e.appendChild(n)}()}))})()})();