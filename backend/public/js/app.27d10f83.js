(function(e){function n(n){for(var r,o,i=n[0],s=n[1],u=n[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(n);while(d.length)d.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==a[i]&&(r=!1)}r&&(c.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-03186540":"0cc6c5b9","chunk-34f06c6b":"0d9858e2","chunk-3bddf008":"1cab106f","chunk-88f2e596":"bc8aac8b","chunk-2d0b2d66":"a5490c08","chunk-2d2178ab":"c9e45906"}[e]+".js"}function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-03186540":1,"chunk-34f06c6b":1,"chunk-3bddf008":1,"chunk-88f2e596":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-03186540":"d7051dd7","chunk-34f06c6b":"edea1070","chunk-3bddf008":"7ce62710","chunk-88f2e596":"df85565b","chunk-2d0b2d66":"31d6cfe0","chunk-2d2178ab":"31d6cfe0"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),t(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var f=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d"),t("2eba"),t("7f10");var r=t("2b0e"),o=t("bb71");t("da64");r["a"].use(o["a"],{theme:{secondary:"#64B5F6",primary:"#2196F3",accent:"#F6F3FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"fa4"});var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",{staticClass:"container"},[t("h1",[e._v("Survey management")]),t("v-divider"),t("router-view")],1)},c=[],i={name:"App",data:function(){return{}}},s=i,u=t("2877"),l=t("6544"),d=t.n(l),f=t("7496"),p=t("ce7e"),m=Object(u["a"])(s,a,c,!1,null,"6792efda",null),h=m.exports;d()(m,{VApp:f["a"],VDivider:p["a"]});t("96cf");var v=t("1da1"),b=t("8c4f"),g=[{path:"*",meta:{public:!0},redirect:{path:"/404"}},{path:"/404",meta:{public:!0},name:"NotFound",component:function(){return Promise.all([t.e("chunk-03186540"),t.e("chunk-34f06c6b")]).then(t.bind(null,"9703"))}},{path:"",meta:{breadcrumb:!0},name:"Root",component:function(){return t.e("chunk-2d2178ab").then(t.bind(null,"c6bd"))},children:[{path:"",meta:{breadcrumb:!0},name:"Home",component:function(){return Promise.all([t.e("chunk-03186540"),t.e("chunk-88f2e596")]).then(t.bind(null,"bb51"))}},{path:"/create-survey",meta:{breadcrumb:!0},name:"CreateSurvey",component:function(){return Promise.all([t.e("chunk-03186540"),t.e("chunk-3bddf008")]).then(t.bind(null,"61c5"))}},{path:"/surveys",meta:{breadcrumb:!0},name:"Surveys",component:function(){return t.e("chunk-2d0b2d66").then(t.bind(null,"268d"))}}]}],k=t("323e"),y=t.n(k);t("a5d8");r["a"].use(b["a"]);var O=new b["a"]({base:"/",mode:"history",linkActiveClass:"active",routes:g});O.beforeEach(function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(n,t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:y.a.start(),r();case 2:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()),O.afterEach((function(e,n){return y.a.done()}));var w=O,S=(t("6762"),t("2fdb"),t("2909")),_=t("2f62"),T=t("bc3a"),N=t.n(T),E=window.location.hostname,A="http://".concat(E,":8000"),I={MAIN_URL:A,ACTIONS:{SURVEY:"survey"}},C=t("8055"),F=t.n(C),j=t("fa97"),x=t.n(j),P=(t("a481"),function(e){var n=+new Date;window.moment.now=function(){var t=+new Date,r=t-n;return e+r}});r["a"].use(_["a"]);var L=new _["a"].Store({state:{user:JSON.parse(localStorage.getItem("user")),notifications:JSON.parse(localStorage.getItem("notifications"))||[],socket:null,ai_status:{snoozed_at:null,snooze_interval:0,dispatch_interval:0,ai_stopped:"0"}},mutations:{SET_ONLINE:function(e,n){e.user=Object.assign({},e.user,{online:n})},SET_AI_STATUS:function(e,n){e.ai_status=n},LOGIN:function(e,n){e.user=n,P(n.timestamp),N.a.defaults.headers.common["Authorization"]="Bearer ".concat(n.accessToken),localStorage.setItem("user",JSON.stringify(n))},LOGOUT:function(e){try{N.a.defaults.headers.common["Authorization"]="",e.user=null,localStorage.removeItem("user"),localStorage.removeItem("notifications"),e.socket&&e.socket.disconnect()}catch(n){console.log(n)}},NEW_NOTIFICATION:function(e,n){e.notifications=[].concat(Object(S["a"])(e.notifications),[n]),localStorage.setItem("notifications",JSON.stringify(e.notifications))},INIT_SOCKET:function(e){var n=this;e.socket=F()(I.SOCKET.USERS,{transportOptions:{polling:{extraHeaders:N.a.defaults.headers.common}}}),e.socket.on("error",(function(e){return console.log("SOCKET ERROR",e)})),e.user&&[11,12].includes(e.user.roles[0].id)?e.socket={}:(e.socket.on(I.SOCKET.EVENTS.NEW_NOTIFICATION,(function(e){var t=e.message,r=e.datetime,o=void 0===r?+new Date:r,a=e.color,c=void 0===a?"orange":a;return n.commit("NEW_NOTIFICATION",{message:t,color:c,datetime:o})})),e.socket.on("Ai:status_updated",(function(e){return n.commit("SET_AI_STATUS",e)})),e.socket.on("Dashboard:new_passenger",(function(e){var t=!(!e.id_card_front&&!e.id_card_back);n.commit("NEW_NOTIFICATION",{color:"grey",message:"New Passenger ".concat(e.first_name," ").concat(e.last_name," ").concat(t?"With Docs":"Without Docs"),datetime:+new Date}),new Audio(x.a).play()})))}},actions:{validateToken:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(n){var t,r,o,a,c,i,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.commit,r=n.state,o=s.length>1&&void 0!==s[1]?s[1]:null,e.prev=2,o?a={accessToken:o}:(a=r.user,o=a.accessToken),N.a.defaults.headers.common["Authorization"]="Bearer ".concat(o),e.next=7,N.a.get(I.ACTIONS.CHECK_TOKEN);case 7:return c=e.sent,i=c.data.data,e.next=11,t("LOGIN",Object.assign({},a,i));case 11:return e.next=13,t("SET_AI_STATUS",i.ai_status);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](2),t("LOGOUT");case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));function n(n){return e.apply(this,arguments)}return n}(),initSocket:function(e){var n=e.commit,t=e.state;t.socket&&t.socket.disconnect(),n("INIT_SOCKET")}}});r["a"].prototype.hasPermission=function(e){var n=L.state.user.permissions;return-1!==n.indexOf(e)},r["a"].prototype.airportAgency=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;try{return L.state.user&&[11,12].includes(L.state.user.roles[0].id)}catch(n){return!!e&&[11,12].includes(e[0].id)}},r["a"].directive("redirect-if-no-permission",(function(e,n){var t=n.arg,o=n.binding,a=void 0===o?{name:"Dashboard"}:o;t||console.warn("[Wasilni] No argument was given to redirect-if-no-permission"),r["a"].prototype.hasPermission(t)||w.push(a)}));var R=t("9483");Object(R["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d5e8");r["a"].config.productionTip=!1,N.a.defaults.timeout=3e5,N.a.defaults.baseURL=I.MAIN_URL+"/api/",r["a"].prototype.axios=N.a,r["a"].prototype.api=I,new r["a"]({router:w,render:function(e){return e(h)}}).$mount("#app")},fa97:function(e,n,t){e.exports=t.p+"media/new_passenger_registered.90a6d5af.mp3"}});
//# sourceMappingURL=app.27d10f83.js.map