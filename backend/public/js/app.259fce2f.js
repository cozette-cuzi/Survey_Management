(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({routes:"routes"}[e]||e)+"."+{"chunk-2577f650":"3bbd5126","chunk-3bddf008":"ba80eab3","chunk-5b1c50be":"a2671cbe",routes:"fb62cf48","chunk-2d2178ab":"c9e45906"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-2577f650":1,"chunk-3bddf008":1,"chunk-5b1c50be":1,routes:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({routes:"routes"}[e]||e)+"."+{"chunk-2577f650":"1ed29b95","chunk-3bddf008":"7ce62710","chunk-5b1c50be":"047505cd",routes:"2c7beb87","chunk-2d2178ab":"31d6cfe0"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("2eba"),n("7f10");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{theme:{primary:"#FED635",secondary:"#262626",accent:"#F6F3FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"fa4"});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("h1",[e._v("Survey management")]),n("router-view")],1)},i=[],c={name:"App",data:function(){return{}}},s=c,u=(n("6e01"),n("2877")),l=n("6544"),f=n.n(l),d=n("7496"),p=Object(u["a"])(s,o,i,!1,null,"762d3a3c",null),m=p.exports;f()(p,{VApp:d["a"]});n("96cf");var h=n("1da1"),b=n("8c4f"),g=[{path:"*",meta:{public:!0},redirect:{path:"/404"}},{path:"/404",meta:{public:!0},name:"NotFound",component:function(){return Promise.all([n.e("chunk-2577f650"),n.e("routes")]).then(n.bind(null,"9703"))}},{path:"",meta:{breadcrumb:!0},name:"Root",component:function(){return n.e("chunk-2d2178ab").then(n.bind(null,"c6bd"))},children:[{path:"",meta:{breadcrumb:!0},name:"Home",component:function(){return Promise.all([n.e("chunk-2577f650"),n.e("chunk-5b1c50be")]).then(n.bind(null,"bb51"))}},{path:"/create-survey",meta:{breadcrumb:!0,title:"CreateSurvey"},name:"CreateSurvey",component:function(){return Promise.all([n.e("chunk-2577f650"),n.e("chunk-3bddf008")]).then(n.bind(null,"61c5"))}}]}],v=n("323e"),y=n.n(v);n("a5d8");r["a"].use(b["a"]);var O=new b["a"]({base:"/",mode:"history",linkActiveClass:"active",routes:g});O.beforeEach(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:y.a.start(),r();case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),O.afterEach((function(e,t){return y.a.done()}));var S=O,_=(n("6762"),n("2fdb"),n("2909")),w=n("2f62"),T=n("bc3a"),k=n.n(T),A=(window.location.hostname,window.location.protocol,{ACTIONS:{Survey:"survey"},CONSTANTS:{STATES:["Abu Dhabi","Ajman","Al Ain","Al Madam","Ar-Rams","Dhaid","Dibba Al-Fujairah","Dibba Al-Hisn","Dubai","Fujairah","Ghayathi","Hatta","Jebel Ali","Kalba","Khor Fakkan","Liwa Oasis","Madinat Zayed","RAK City","Ruwais","Sharjah","Umm al-Quwain"],WHATSAPP_NUMBERS:["971965656008","971954044416","971965656005","971660805740"],ACCOUNT_ENTRY_TYPES:["wallet_migration","ride","payment","passenger_penalty","captain_penalty","closing_payment","payment_approval","passenger_bonus","captain_bonus"],GENDER:{MALE:1,FEMALE:0},COLOR_INDICATORS:{PENDING:"#9f43cf",CONFIRMED:"#8e8e88",STARTED:"#428bca",ARRIVED:"#ffa60c",PICKED_UP:"#e04b4a",DONE:"#69b869"}}}),E=n("8055"),N=n.n(E),I=n("fa97"),C=n.n(I),D=(n("a481"),function(e){var t=+new Date;window.moment.now=function(){var n=+new Date,r=n-t;return e+r}});r["a"].use(w["a"]);var F=new w["a"].Store({state:{user:JSON.parse(localStorage.getItem("user")),notifications:JSON.parse(localStorage.getItem("notifications"))||[],socket:null,ai_status:{snoozed_at:null,snooze_interval:0,dispatch_interval:0,ai_stopped:"0"}},mutations:{SET_ONLINE:function(e,t){e.user=Object.assign({},e.user,{online:t})},SET_AI_STATUS:function(e,t){e.ai_status=t},LOGIN:function(e,t){e.user=t,D(t.timestamp),k.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.accessToken),localStorage.setItem("user",JSON.stringify(t))},LOGOUT:function(e){try{k.a.defaults.headers.common["Authorization"]="",e.user=null,localStorage.removeItem("user"),localStorage.removeItem("notifications"),e.socket&&e.socket.disconnect()}catch(t){console.log(t)}},NEW_NOTIFICATION:function(e,t){e.notifications=[].concat(Object(_["a"])(e.notifications),[t]),localStorage.setItem("notifications",JSON.stringify(e.notifications))},INIT_SOCKET:function(e){var t=this;e.socket=N()(A.SOCKET.USERS,{transportOptions:{polling:{extraHeaders:k.a.defaults.headers.common}}}),e.socket.on("error",(function(e){return console.log("SOCKET ERROR",e)})),e.user&&[11,12].includes(e.user.roles[0].id)?e.socket={}:(e.socket.on(A.SOCKET.EVENTS.NEW_NOTIFICATION,(function(e){var n=e.message,r=e.datetime,a=void 0===r?+new Date:r,o=e.color,i=void 0===o?"orange":o;return t.commit("NEW_NOTIFICATION",{message:n,color:i,datetime:a})})),e.socket.on("Ai:status_updated",(function(e){return t.commit("SET_AI_STATUS",e)})),e.socket.on("Dashboard:new_passenger",(function(e){var n=!(!e.id_card_front&&!e.id_card_back);t.commit("NEW_NOTIFICATION",{color:"grey",message:"New Passenger ".concat(e.first_name," ").concat(e.last_name," ").concat(n?"With Docs":"Without Docs"),datetime:+new Date}),new Audio(C.a).play()})))}},actions:{validateToken:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,i,c,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.state,a=s.length>1&&void 0!==s[1]?s[1]:null,e.prev=2,a?o={accessToken:a}:(o=r.user,a=o.accessToken),k.a.defaults.headers.common["Authorization"]="Bearer ".concat(a),e.next=7,k.a.get(A.ACTIONS.CHECK_TOKEN);case 7:return i=e.sent,c=i.data.data,e.next=11,n("LOGIN",Object.assign({},o,c));case 11:return e.next=13,n("SET_AI_STATUS",c.ai_status);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](2),n("LOGOUT");case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));function t(t){return e.apply(this,arguments)}return t}(),initSocket:function(e){var t=e.commit,n=e.state;n.socket&&n.socket.disconnect(),t("INIT_SOCKET")}}});r["a"].prototype.hasPermission=function(e){var t=F.state.user.permissions;return-1!==t.indexOf(e)},r["a"].prototype.airportAgency=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;try{return F.state.user&&[11,12].includes(F.state.user.roles[0].id)}catch(t){return!!e&&[11,12].includes(e[0].id)}},r["a"].directive("redirect-if-no-permission",(function(e,t){var n=t.arg,a=t.binding,o=void 0===a?{name:"Dashboard"}:a;n||console.warn("[Wasilni] No argument was given to redirect-if-no-permission"),r["a"].prototype.hasPermission(n)||S.push(o)}));var j=n("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d5e8");r["a"].config.productionTip=!1,k.a.defaults.timeout=3e5,k.a.defaults.baseURL=A.MAIN_URL+"/api/",r["a"].prototype.axios=k.a,r["a"].prototype.api=A,new r["a"]({router:S,render:function(e){return e(m)}}).$mount("#app")},"6e01":function(e,t,n){"use strict";n("ea9e")},ea9e:function(e,t,n){},fa97:function(e,t,n){e.exports=n.p+"media/new_passenger_registered.90a6d5af.mp3"}});
//# sourceMappingURL=app.259fce2f.js.map