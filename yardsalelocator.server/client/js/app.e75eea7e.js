(function(t){function e(e){for(var n,c,s=e[0],i=e[1],l=e[2],u=0,d=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},c={app:0},o={app:0},r=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1f194bee":"713e92d7","chunk-2d0c19e3":"9ea66384","chunk-6af9a284":"ac8b5a56","chunk-6c8eb840":"6fde4d79","chunk-af828c72":"b261d2e7"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-1f194bee":1,"chunk-6af9a284":1,"chunk-6c8eb840":1,"chunk-af828c72":1};c[t]?e.push(c[t]):0!==c[t]&&a[t]&&e.push(c[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-1f194bee":"14b01517","chunk-2d0c19e3":"31d6cfe0","chunk-6af9a284":"23666827","chunk-6c8eb840":"b12453ec","chunk-af828c72":"fbd6766b"}[t]+".css",o=i.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete c[t],p.parentNode.removeChild(p),a(r)},p.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(p)})).then((function(){c[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",d.name="ChunkLoadError",d.type=n,d.request=c,a[1](d)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"035a":function(t,e,a){"use strict";a("0a03")},"0a03":function(t,e,a){},"15c0":function(t,e,a){"use strict";a("e933")},"1e73":function(t,e,a){},"2b20":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i})),a.d(e,"d",(function(){return l})),a.d(e,"c",(function(){return u}));var n=a("bc3a"),c=a.n(n),o=a("feb2");const r=window.location.origin.includes("localhost")?"http://localhost:3000":"https://yard-sale-locator.herokuapp.com",s=c.a.create({baseURL:r,timeout:8e3}),i=c.a.create({baseURL:"https://api.radar.io/v1",timeout:8e3}),l=function(t){s.defaults.headers.authorization=t},u=function(){i.defaults.headers.authorization=o["d"]}},"41cb":function(t,e,a){"use strict";var n=a("6c02"),c=a("8816");function o(t){return()=>a("a2f9")(`./${t}.vue`)}const r=[{path:"/",name:"Home",component:o("HomePage")},{path:"/results",name:"Results",component:o("ResultsPage")},{path:"/listing/:listingId",name:"Listing",component:o("ListingPage")},{path:"/about",name:"About",component:o("AboutPage")},{path:"/profile",name:"Profile",component:o("ProfilePage"),beforeEnter:c["a"]}],s=Object(n["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(n["b"])(),routes:r});e["a"]=s},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("7a23");function c(t,e,a,c,o,r){const s=Object(n["y"])("Navbar"),i=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("header",null,[Object(n["h"])(s)]),Object(n["h"])("main",null,[Object(n["h"])(i,null,{default:Object(n["G"])(({Component:t})=>[(Object(n["r"])(),Object(n["d"])(Object(n["z"])(t)))]),_:1})])],64)}var o=a("83fc"),r={name:"App",setup(){return{appState:Object(n["b"])(()=>o["a"])}}};a("97ef");r.render=c;var s=r;function i(t){const e=a("ccc2");e.keys().forEach(a=>{const n=e(a),c=n.default||n,o=c.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(o,c)})}var l=a("41cb");const u=Object(n["c"])(s);i(u),u.use(l["a"]).mount("#app")},"632d":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("83fc"),c=a("8a4e"),o=a("2b20");class r{getGeoLocation(){c["a"].log(n["a"].userLocation),null!==n["a"].userLocation.latitude&&null!==n["a"].userLocation.longitude||(navigator.geolocation?navigator.geolocation.getCurrentPosition(this.showPosition):document.getElementById("geo-location").innerText="Geolocation is not supported by this browser.\nPlease enter an address.")}showPosition(t){n["a"].userLocation.latitude=t.coords.latitude,n["a"].userLocation.longitude=t.coords.longitude,c["a"].log(n["a"].userLocation)}async getCoordinates(t){try{const e=await o["b"].get("search/autocomplete?query="+t);n["a"].userLocation.latitude=e.data.addresses[0].latitude,n["a"].userLocation.longitude=e.data.addresses[0].longitude,n["a"].userLocation.distance=t.distance,n["a"].userLocation.formattedAddress=e.data.addresses[0].formattedAddress,console.log(n["a"].userLocation)}catch(e){c["a"].error(e)}}}const s=new r},"6ba1":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("8a4e"),c=a("2b20"),o=a("83fc");class r{async getAll(){try{const t=await c["a"].get("api/listing");o["a"].listings=t.data.map(t=>(t.distance="0",t))}catch(t){n["a"].error(t)}}async getListing(t){try{const e=await c["a"].get("api/listing/"+t);o["a"].currentListing=e.data}catch(e){n["a"].error(e)}}async getDistance(t,e){try{const a=await c["b"].get("route/distance/?origin="+t.latitude+"%2C"+t.longitude+"&destination="+e.lat+"%2C"+e.long+"&modes=car&units=imperial"),n=o["a"].listings.findIndex(t=>t.id===e.id);n>=0&&(o["a"].listings[n].distance=a.data.routes.car.distance.text)}catch(a){n["a"].error(a)}}async create(t){try{const e=await c["a"].post("api/listing",t);o["a"].listings=[...o["a"].listings,e.data]}catch(e){n["a"].error(e)}}async editListing(t,e){try{await c["a"].put("api/listing/"+t,e)}catch(a){n["a"].error(a)}}async deleteListing(t){try{await c["a"].delete("api/listing/"+t),this.getAll()}catch(e){n["a"].error(e)}}feetCheck(t){return t.distance&&"ft"===t.distance.split(" ")[1]?1:parseInt(t.distance.split(" ")[0])}}const s=new r},"6c3f":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("83fc"),c=a("8a4e"),o=a("2b20");class r{async getProfile(){try{const t=await o["a"].get("/profile");n["a"].profile=t.data}catch(t){c["a"].error("HAVE YOU STARTED YOUR SERVER YET???",t)}}}const s=new r},"74ca":function(t,e,a){},7716:function(t,e,a){"use strict";a("d3ce")},"7aab":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["K"])("data-v-2cec5aae");Object(n["u"])("data-v-2cec5aae");const o={key:0,class:"current-listing-component col-12 justify-content-start p-3"},r={class:"row p-3"};Object(n["s"])();const s=c((function(t,e,a,c,s,i){return c.listing.profile.id===c.profile.id?(Object(n["r"])(),Object(n["d"])("div",o,[Object(n["h"])("div",r,[Object(n["h"])("div",{class:"col-12 text-light",onClick:e[1]||(e[1]=t=>c.getListing())},[Object(n["h"])("li",null,Object(n["B"])(c.listing.address),1),Object(n["h"])("li",null," Distance: "+Object(n["B"])(c.listing.distance),1)])])])):Object(n["e"])("",!0)}));var i=a("6ba1"),l=a("83fc"),u=a("41cb"),d=a("6c3f"),p={name:"CurrentListingComponent",props:{listingProp:Object,locationProp:Object},setup(t){return Object(n["p"])(async()=>{await d["a"].getProfile(),await i["a"].getDistance(t.locationProp,t.listingProp),l["a"].userLocation.distance=JSON.parse(window.localStorage.getItem("distance"))}),{profile:Object(n["b"])(()=>l["a"].profile),listing:Object(n["b"])(()=>t.listingProp),location:Object(n["b"])(()=>t.locationProp),distance:Object(n["b"])(()=>l["a"].userLocation.distance),async getListing(){await i["a"].getListing(t.listingProp.id),u["a"].push({name:"Listing",params:{listingId:t.listingProp.id}})},feetCheck(){return"ft"===t.listingProp.distance.split(" ")[1]?1:parseInt(t.listingProp.distance.split(" ")[0])}}}};a("15c0");p.render=s,p.__scopeId="data-v-2cec5aae";e["default"]=p},"7b9d":function(t,e,a){"use strict";a("1e73")},"83fc":function(t,e,a){"use strict";a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return o}));var n=a("7a23");const c=Object(n["v"])({user:{},profile:{},userLocation:{latitude:null,longitude:null,distance:null,formattedAddress:null},listings:[],currentListing:{},searchTags:[]}),o=Object(n["v"])({listings:Object(n["b"])(()=>c.listings.sort((t,e)=>t.distance<e.distance?1:-1))})},"8a4e":function(t,e,a){"use strict";function n(t,e){window.location.origin.includes("localhost")&&console[t](...e)}a.d(e,"a",(function(){return c}));const c={log(){n("log",arguments)},error(){n("error",arguments)},warn(){n("warn",arguments)},assert(){n("assert",arguments)},trace(){n("trace",arguments)}}},"90a3":function(t,e,a){"use strict";a("ca28")},"97ef":function(t,e,a){"use strict";a("74ca")},"9d8d":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["K"])("data-v-0dd927ed");Object(n["u"])("data-v-0dd927ed");const o={class:"navbar navbar-expand bg-transparent text-light"},r=Object(n["h"])("div",{class:"d-flex flex-column align-items-center"},null,-1),s=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon bg-dark"})],-1),i={class:"collapse navbar-collapse",id:"navbarText"},l={class:"navbar-nav mr-auto"},u={class:"navbar-text"},d={key:1,class:"dropdown"},p={class:"mx-3"},g=Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable"}," Home ",-1),b=Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable"}," Profile ",-1),f=Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable"}," Results ",-1);Object(n["s"])();const h=c((function(t,e,a,h,O,m){const v=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["d"])("nav",o,[Object(n["h"])(v,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:c(()=>[r]),_:1}),s,Object(n["h"])("div",i,[Object(n["h"])("ul",l,["Home"!==h.route.name?(Object(n["r"])(),Object(n["d"])("li",{key:0,onClick:e[1]||(e[1]=(...t)=>h.goBack(...t)),class:"nav-item nav-link text-light p-0 pr-3"}," BACK ")):Object(n["e"])("",!0)]),Object(n["h"])("span",u,[h.user.isAuthenticated?(Object(n["r"])(),Object(n["d"])("div",d,[Object(n["h"])("div",{class:"dropdown-toggle text-light",onClick:e[3]||(e[3]=t=>h.state.dropOpen=!h.state.dropOpen)},[Object(n["h"])("img",{src:h.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(n["h"])("span",p,Object(n["B"])(h.user.name),1)]),Object(n["h"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:h.state.dropOpen}],onClick:e[5]||(e[5]=t=>h.state.dropOpen=!1)},[Object(n["h"])(v,{to:{name:"Home"}},{default:c(()=>[g]),_:1}),Object(n["h"])(v,{to:{name:"Profile"}},{default:c(()=>[b]),_:1}),Object(n["h"])(v,{to:{name:"Results"}},{default:c(()=>[f]),_:1}),Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[4]||(e[4]=(...t)=>h.logout(...t))}," Logout ")],2)])):(Object(n["r"])(),Object(n["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[2]||(e[2]=(...t)=>h.login(...t))}," Login "))])])])}));var O=a("8816"),m=a("83fc"),v=a("feb2"),j=a("41cb"),w=a("2b20"),y=a("6c3f");const k=Object(O["b"])({domain:v["f"],clientId:v["e"],audience:v["c"],onRedirectCallback:t=>{j["a"].push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});k.on(k.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(w["d"])(k.bearer),await y["a"].getProfile(),m["a"].user=k.user}));var P=a("6c02"),L={name:"Navbar",setup(){const t=Object(P["c"])(),e=Object(n["v"])({dropOpen:!1});return{state:e,route:t,user:Object(n["b"])(()=>m["a"].user),async login(){k.loginWithPopup(),j["a"].push({name:"Profile"})},async logout(){await k.logout({returnTo:window.location.origin})},goBack(){j["a"].go(-1)}}}};a("7716");L.render=h,L.__scopeId="data-v-0dd927ed";e["default"]=L},a074:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["K"])("data-v-17ccfd71");Object(n["u"])("data-v-17ccfd71");const o={class:"tag-input-component"};Object(n["s"])();const r=c((function(t,e,a,c,r,s){return Object(n["r"])(),Object(n["d"])("div",o,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.tags,(t,e)=>(Object(n["r"])(),Object(n["d"])("div",{key:t,class:"tag-input__tag"},[Object(n["h"])("span",{class:"mr-2 text-danger",onClick:t=>c.removeTag(e)},"×",8,["onClick"]),Object(n["g"])(" "+Object(n["B"])(t),1)]))),128)),Object(n["h"])("input",{type:"text",placeholder:"Enter a Tag",class:"form-control tag-input__text w-100 bg-white my-2 rounded",onKeydown:[e[1]||(e[1]=Object(n["I"])((...t)=>c.addTag(...t),["enter"])),e[2]||(e[2]=Object(n["I"])((...t)=>c.addTag(...t),["space"])),e[3]||(e[3]=Object(n["I"])((...t)=>c.removeLastTag(...t),["delete"]))]},null,32)])}));var s=a("83fc"),i={setup(){return{tags:Object(n["b"])(()=>s["a"].searchTags),addTag(t){t.preventDefault();var e=t.target.value.trim();e.length>0&&(this.tags.push(e),t.target.value="")},removeTag(t){this.tags.splice(t,1)},removeLastTag(t){0===t.target.value.length&&this.removeTag(this.tags.length-1)}}},methods:{}};a("90a3");i.render=r,i.__scopeId="data-v-17ccfd71";e["default"]=i},a2f9:function(t,e,a){var n={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./HomePage.vue":["78a7","chunk-6af9a284"],"./ListingPage.vue":["d257","chunk-1f194bee"],"./ProfilePage.vue":["1a3e","chunk-af828c72"],"./ResultsPage.vue":["7acc","chunk-6c8eb840"]};function c(t){if(!a.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],c=e[0];return a.e(e[1]).then((function(){return a(c)}))}c.keys=function(){return Object.keys(n)},c.id="a2f9",t.exports=c},b66d:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["h"])("div",{id:"targetId"},null,-1),o=Object(n["h"])("div",{id:"map",class:"App"},null,-1);function r(t,e,a,r,s,i){return Object(n["r"])(),Object(n["d"])(n["a"],null,[c,o],64)}var s=a("8a4e"),i=a("feb2");let l,u,d=!!window.google;const p=new Promise((t,e)=>{l=t,u=e});function g(){if(d)return p;d=!0,window[i["b"]]=()=>l(window.google);const t=document.createElement("script");return t.async=!0,t.defer=!0,t.src=`https://maps.googleapis.com/maps/api/js?key=${i["a"]}&callback=${i["b"]}`,t.onerror=u,document.querySelector("head").appendChild(t),p}var b=a("2b20"),f=a("632d"),h=a("6ba1"),O=a("83fc"),m={name:"App",setup(){Object(n["p"])(async()=>{await Object(b["c"])(),await f["a"].getGeoLocation(),await h["a"].getAll(),O["a"].userLocation.distance=await JSON.parse(window.localStorage.getItem("distance")),O["a"].searchTags=await JSON.parse(window.localStorage.getItem("searchTags")),await O["a"].listings.forEach(t=>{h["a"].getDistance(O["a"].userLocation,t)}),await setTimeout(async()=>{try{const t=await g(),e=new t.maps.Map(document.getElementById("map"),{zoom:10,center:{lat:O["a"].userLocation.latitude,lng:O["a"].userLocation.longitude}});await O["a"].listings.forEach(a=>{const n=JSON.parse(window.localStorage.getItem("distance")),c=h["a"].feetCheck(a),o="http://maps.google.com/mapfiles/ms/icons";if(c<=n){const n=new t.maps.Marker({position:{lat:parseFloat(a.lat),lng:parseFloat(a.long)},map:e,icon:o+"/red-dot.png"}),c=a.address.split(","),r=c[0],s=c[1],i=c[2].split(" ")[1],l=c[2].split(" ")[2],u=JSON.parse(window.localStorage.getItem("searchTags"));for(let t=0;t<u.length;t++){const e=u[t];for(let t=0;t<a.tags.length;t++){const c=a.tags[t];e===c&&n.setIcon(o+"/blue-dot.png")}}const d=`\n          <div>\n            <div class = "mb-2 custom-address-font-size">\n              <span>${r}</span><br>\n              <span>${s}</span>\n              <span>${i}</span>\n              <span>${l}</span>\n            </div>\n            <p class="${a.isOpen?"text-success":"text-danger"}">${a.isOpen?"open":"closed"}</p>\n            <p class="m-0">${a.distance}</p>\n            <p>tags: ${a.tags}</p>\n            <div class="d-flex justify-content-around align-items-center">\n              <a class="d-block p-1 text-nowrap" href="http://yard-sale-locator.herokuapp.com/#/listing/${a.id}">\n                <i class="fas fa-binoculars fa-2x text-primary"></i>\n              </a>\n              <a class="d-block p-1 text-nowrap" href="https://www.google.com/maps/dir/${O["a"].userLocation.latitude},${O["a"].userLocation.longitude}/${a.lat},${a.long}">\n                <i class="fas fa-map fa-2x text-secondary"></i>\n              </a>\n            </div>\n          </div>\n          `,p=new t.maps.InfoWindow({content:d});n.addListener("click",()=>{p.open(e,n)})}})}catch(t){s["a"].error(t)}},1e3)})}};a("035a");m.render=r;e["default"]=m},ca28:function(t,e,a){},ccc2:function(t,e,a){var n={"./CurrentListingComponent.vue":"7aab","./ListingComponent.vue":"f267","./MapComponent.vue":"b66d","./TagInputComponent.vue":"a074","./navbar.vue":"9d8d"};function c(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=o,t.exports=c,c.id="ccc2"},d3ce:function(t,e,a){},e933:function(t,e,a){},f267:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["K"])("data-v-01c1794a");Object(n["u"])("data-v-01c1794a");const o={key:0,class:"listing-component col-12 d-flex justify-content-start border-top p-3"},r={class:"col-2"},s={class:"col-10"},i={class:"text-dark"},l={key:0},u={key:1,class:"text-success"},d={key:2,class:"text-danger"};Object(n["s"])();const p=c((function(t,e,a,c,p,g){return c.listing.distance&&c.feetCheck()<c.distance&&(c.state.match.length>0||!c.searchTags.length)?(Object(n["r"])(),Object(n["d"])("div",o,[Object(n["h"])("div",{class:"row",onClick:e[1]||(e[1]=t=>c.getListing())},[Object(n["h"])("div",r,[c.listing.img?(Object(n["r"])(),Object(n["d"])("img",{key:0,src:c.listing.img,alt:"img"},null,8,["src"])):Object(n["e"])("",!0)]),Object(n["h"])("div",s,[Object(n["h"])("ul",i,[Object(n["h"])("li",null,Object(n["B"])(c.listing.address),1),Object(n["h"])("li",null," Distance: "+Object(n["B"])(c.listing.distance),1),c.state.match.length>0?(Object(n["r"])(),Object(n["d"])("li",l," Matching Tags: "+Object(n["B"])(c.state.match),1)):Object(n["e"])("",!0),c.listing.isOpen?(Object(n["r"])(),Object(n["d"])("li",u," open ")):Object(n["e"])("",!0),c.listing.isOpen?Object(n["e"])("",!0):(Object(n["r"])(),Object(n["d"])("li",d," closed "))])])])])):Object(n["e"])("",!0)}));var g=a("6ba1"),b=a("83fc"),f=a("41cb"),h={name:"ListingComponent",props:{listingProp:Object,locationProp:Object,tagProp:Object},setup(t){const e=Object(n["v"])({match:b["a"].searchTags.filter(e=>t.listingProp.tags.includes(e))});return Object(n["p"])(async()=>{await g["a"].getDistance(t.locationProp,t.listingProp),b["a"].userLocation.distance=JSON.parse(window.localStorage.getItem("distance"))}),{state:e,listing:Object(n["b"])(()=>t.listingProp),tags:Object(n["b"])(()=>t.listingProp.tags),location:Object(n["b"])(()=>t.locationProp),distance:Object(n["b"])(()=>b["a"].userLocation.distance),searchTags:Object(n["b"])(()=>t.tagProp),async getListing(){await g["a"].getListing(t.listingProp.id),f["a"].push({name:"Listing",params:{listingId:t.listingProp.id}})},feetCheck(){return"ft"===t.listingProp.distance.split(" ")[1]?1:parseInt(t.listingProp.distance.split(" ")[0])}}}};a("7b9d");h.render=p,h.__scopeId="data-v-01c1794a";e["default"]=h},feb2:function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"e",(function(){return c})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i}));const n="bcwclassroom.us.auth0.com",c="hJgtcn911QsufT20bCh8ChHMtvuoFqd8",o="https://yardsalelocator/api",r="prj_test_pk_84c02a43b10a046d097af851761c145f54316090",s="AIzaSyA3d9hA6pbLww_QEaABa94ZqMpGs_Anmrc",i="initMap"}});