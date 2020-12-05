(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af828c72"],{"1a3e":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const i=Object(r["K"])("data-v-703ceb94");Object(r["u"])("data-v-703ceb94");const o={class:"profile-page container-fluid text-light"},a={key:0,class:"row height-custom align-items-center p-3"},s=Object(r["h"])("div",{class:"col-12 d-flex justify-content-start"},[Object(r["h"])("h5",{class:"m-0"}," Current Listing ")],-1),c={id:"currentListings",class:"current-listings row justify-content-start align-items-center"},u={key:0,class:"w-100 d-flex justify-content-between align-items-center pl-3"},l={class:"m-3 d-flex"},f={key:1,class:"row justify-content-center align-items-center height-custom","data-toggle":"collapse",href:"#newListing",role:"button","aria-expanded":"false","aria-controls":"newListing"},h=Object(r["f"])('<div class="col-1 d-flex justify-content-start" data-v-703ceb94><span class="d-block" data-v-703ceb94><i class="fa fa-caret-right" aria-hidden="true" data-v-703ceb94></i></span></div><div class="col-10 d-flex justify-content-start" data-v-703ceb94><h5 class="m-0" data-v-703ceb94> Post New Listing </h5></div>',2),p={id:"newListing",class:"post-new-listing row align-items-center collapse"},d={class:"form-group col-12 d-flex flex-column justify-content-center"},b={class:"form-group col-12"},v={class:"form-group col-12"},g={class:"form-group col-12 pl-2"},m=Object(r["h"])("div",{class:"form-check form-check-inline"},[Object(r["h"])("label",{class:"form-check-label"},"Days Open")],-1),_={class:"form-check form-check-inline"},y=Object(r["h"])("label",{class:"form-check-label",for:"newListingDaysOpenOne"},"1",-1),w={class:"form-check form-check-inline"},O=Object(r["h"])("label",{class:"form-check-label",for:"newListingDaysOpenTwo"},"2",-1),E={class:"form-check form-check-inline"},I=Object(r["h"])("label",{class:"form-check-label",for:"newListingDaysOpenThree"},"3",-1),j={class:"form-group col-12"},R={class:"input-group mb-3"},T={class:"custom-file"},S={class:"custom-file-label",for:"newListingImgFile","aria-describedby":"newListingImgFileAddon"},C={class:"input-group-append"},N={class:"row"},k=Object(r["h"])("div",{class:"col-12"},[Object(r["h"])("progress",{class:"w-100 h-50",value:"0",max:"100",id:"uploader"}," 0% ")],-1),A={key:0,class:"col-12 text-center"},L={class:"form-group col-12"},P=Object(r["h"])("div",{class:"form-group col-12"},[Object(r["h"])("button",{type:"submit",class:"btn btn-primary btn-block","data-toggle":"collapse",href:"#newListing"}," Submit ")],-1);Object(r["s"])();const D=i((function(e,t,n,i,D,x){const U=Object(r["y"])("CurrentListingComponent"),F=Object(r["y"])("TagInputComponent");return Object(r["r"])(),Object(r["d"])("div",o,[i.listings.length>0?(Object(r["r"])(),Object(r["d"])("div",a,[s])):Object(r["e"])("",!0),Object(r["h"])("div",c,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(i.listings,e=>(Object(r["r"])(),Object(r["d"])(U,{key:e,"listing-prop":e,"location-prop":i.location},null,8,["listing-prop","location-prop"]))),128)),i.listings[0]?(Object(r["r"])(),Object(r["d"])("div",u,[Object(r["h"])("button",{class:i.listings[0].isOpen?"btn btn-warning btn-block":"btn btn-success btn-block",onClick:t[1]||(t[1]=Object(r["J"])((...e)=>i.toggleOpen(...e),["prevent"]))},Object(r["B"])(i.listings[0].isOpen?"Close Yard Sale":"Open Yard Sale"),3),Object(r["h"])("div",l,[Object(r["h"])("i",{class:"fas fa-trash fa-2x text-danger",onClick:t[2]||(t[2]=Object(r["J"])((...e)=>i.deleteListing(...e),["prevent"]))})])])):Object(r["e"])("",!0)]),0===i.listings.length?(Object(r["r"])(),Object(r["d"])("div",f,[h])):Object(r["e"])("",!0),Object(r["h"])("div",p,[Object(r["h"])("form",{onSubmit:t[11]||(t[11]=Object(r["J"])(e=>i.createListing(),["prevent"])),class:"form-row p-3"},[Object(r["h"])("div",d,[Object(r["H"])(Object(r["h"])("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.state.newListing.address=e),type:"text",name:"newListingAddress",id:"newListingAddress",class:"form-control",placeholder:"Address, City, Zip","aria-describedby":"helpId"},null,512),[[r["E"],i.state.newListing.address]])]),Object(r["h"])("div",b,[Object(r["H"])(Object(r["h"])("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>i.state.newListing.startDate=e),type:"date",name:"newListingStartDate",min:(new Date).toISOString().split("T")[0],id:"newListingStartDate",class:"form-control","aria-describedby":"helpId"},null,8,["min"]),[[r["E"],i.state.newListing.startDate]])]),Object(r["h"])("div",v,[Object(r["h"])(F)]),Object(r["h"])("div",g,[m,Object(r["h"])("div",_,[Object(r["H"])(Object(r["h"])("input",{class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"newListingDaysOpenOne",value:1,"onUpdate:modelValue":t[5]||(t[5]=e=>i.state.newListing.daysOpen=e)},null,512),[[r["D"],i.state.newListing.daysOpen]]),y]),Object(r["h"])("div",w,[Object(r["H"])(Object(r["h"])("input",{class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"newListingDaysOpenTwo",value:2,"onUpdate:modelValue":t[6]||(t[6]=e=>i.state.newListing.daysOpen=e)},null,512),[[r["D"],i.state.newListing.daysOpen]]),O]),Object(r["h"])("div",E,[Object(r["H"])(Object(r["h"])("input",{class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"newListingDaysOpenThree",value:3,"onUpdate:modelValue":t[7]||(t[7]=e=>i.state.newListing.daysOpen=e)},null,512),[[r["D"],i.state.newListing.daysOpen]]),I])]),Object(r["h"])("div",j,[Object(r["h"])("div",R,[Object(r["h"])("div",T,[Object(r["h"])("input",{onChange:t[8]||(t[8]=(...e)=>i.onFileSelected(...e)),type:"file",class:"custom-file-input",id:"newListingImgFile",accept:"image/*"},null,32),Object(r["h"])("label",S,Object(r["B"])(i.state.imgFile[0].name),1)]),Object(r["h"])("div",C,[Object(r["h"])("span",{onClick:t[9]||(t[9]=(...e)=>i.onUpload(...e)),class:"input-group-text",id:"newListingImgFileAddon"},"Upload")])]),Object(r["h"])("div",N,[k,i.state.newListing.img?(Object(r["r"])(),Object(r["d"])("div",A,[Object(r["h"])("img",{class:"img-fluid",src:i.state.newListing.img,alt:"img"},null,8,["src"])])):Object(r["e"])("",!0)])]),Object(r["h"])("div",L,[Object(r["H"])(Object(r["h"])("textarea",{"onUpdate:modelValue":t[10]||(t[10]=e=>i.state.newListing.description=e),rows:"3",type:"text",name:"newListingDescription",id:"newListingDescription",class:"form-control",placeholder:"Description","aria-describedby":"helpId"},null,512),[[r["E"],i.state.newListing.description]])]),P],32)])])}));var x=n("9ab4"),U=n("a8e9"),F=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),M="[DEFAULT]",B=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e=M);var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new U["a"];this.instancesDeferred.set(t,n);try{var r=this.getOrInitializeService(t);r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=Object(x["a"])({identifier:M,optional:!1},e),n=t.identifier,r=t.optional,i=this.normalizeInstanceIdentifier(n);try{var o=this.getOrInitializeService(i);if(!o){if(r)return null;throw Error("Service "+this.name+" is not available")}return o}catch(a){if(r)return null;throw a}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,H(e))try{this.getOrInitializeService(M)}catch(l){}try{for(var r=Object(x["h"])(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=Object(x["e"])(i.value,2),a=o[0],s=o[1],c=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService(c);s.resolve(u)}catch(l){}}}catch(f){t={error:f}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e=M),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Object(x["b"])(this,void 0,void 0,(function(){var e;return Object(x["d"])(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Object(x["f"])(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})),e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()}))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,G(e)),this.instances.set(e,t)),t||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:M:e},e}();function G(e){return e===M?void 0:e}function H(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q,V=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new B(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function z(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K,W=[];(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(K||(K={}));var X,$={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},J=K.INFO,Y=(q={},q[K.DEBUG]="log",q[K.VERBOSE]="log",q[K.INFO]="info",q[K.WARN]="warn",q[K.ERROR]="error",q),Z=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=Y[t];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[o].apply(console,z(["["+i+"]  "+e.name+":"],n))}},Q=function(){function e(e){this.name=e,this._logLevel=J,this._logHandler=Z,this._userLogHandler=null,W.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in K))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"===typeof e?$[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,z([this,K.DEBUG],e)),this._logHandler.apply(this,z([this,K.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,z([this,K.VERBOSE],e)),this._logHandler.apply(this,z([this,K.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,z([this,K.INFO],e)),this._logHandler.apply(this,z([this,K.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,z([this,K.WARN],e)),this._logHandler.apply(this,z([this,K.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,z([this,K.ERROR],e)),this._logHandler.apply(this,z([this,K.ERROR],e))},e}();function ee(e){W.forEach((function(t){t.setLogLevel(e)}))}function te(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=$[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var a=i.map((function(e){if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:K[n].toLowerCase(),message:a,args:i,type:t.name})}},r=0,i=W;r<i.length;r++){var o=i[r];n(o)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne,re=(X={},X["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",X["bad-app-name"]="Illegal App name: '{$appName}",X["duplicate-app"]="Firebase App named '{$appName}' already exists",X["app-deleted"]="Firebase App named '{$appName}' already deleted",X["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",X["invalid-log-argument"]="First argument to `onLog` must be null or a function.",X),ie=new U["b"]("app","Firebase",re),oe="@firebase/app",ae="0.6.13",se="@firebase/analytics",ce="@firebase/auth",ue="@firebase/database",le="@firebase/functions",fe="@firebase/installations",he="@firebase/messaging",pe="@firebase/performance",de="@firebase/remote-config",be="@firebase/storage",ve="@firebase/firestore",ge="firebase-wrapper",me="[DEFAULT]",_e=(ne={},ne[oe]="fire-core",ne[se]="fire-analytics",ne[ce]="fire-auth",ne[ue]="fire-rtdb",ne[le]="fire-fn",ne[fe]="fire-iid",ne[he]="fire-fcm",ne[pe]="fire-perf",ne[de]="fire-rc",ne[be]="fire-gcs",ne[ve]="fire-fst",ne["fire-js"]="fire-js",ne[ge]="fire-js-all",ne),ye=new Q("@firebase/app"),we=function(){function e(e,t,n){var r,i,o=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=Object(U["h"])(e),this.container=new V(t.name),this._addComponent(new F("app",(function(){return o}),"PUBLIC"));try{for(var a=Object(x["h"])(this.firebase_.INTERNAL.components.values()),s=a.next();!s.done;s=a.next()){var c=s.value;this._addComponent(c)}}catch(u){r={error:u}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t=me),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=me),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){ye.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw ie.create("app-deleted",{appName:this.name_})},e}();we.prototype.name&&we.prototype.options||we.prototype.delete||console.log("dc");var Oe="8.0.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e){var t={},n=new Map,r={__esModule:!0,initializeApp:a,app:o,registerVersion:u,setLogLevel:ee,onLog:l,apps:null,SDK_VERSION:Oe,INTERNAL:{registerComponent:c,removeApp:i,components:n,useAsService:f}};function i(e){delete t[e]}function o(e){if(e=e||me,!Object(U["f"])(t,e))throw ie.create("no-app",{appName:e});return t[e]}function a(n,i){if(void 0===i&&(i={}),"object"!==typeof i||null===i){var o=i;i={name:o}}var a=i;void 0===a.name&&(a.name=me);var s=a.name;if("string"!==typeof s||!s)throw ie.create("bad-app-name",{appName:String(s)});if(Object(U["f"])(t,s))throw ie.create("duplicate-app",{appName:s});var c=new e(n,a,r);return t[s]=c,c}function s(){return Object.keys(t).map((function(e){return t[e]}))}function c(i){var a,s,c=i.name;if(n.has(c))return ye.debug("There were multiple attempts to register component "+c+"."),"PUBLIC"===i.type?r[c]:null;if(n.set(c,i),"PUBLIC"===i.type){var u=function(e){if(void 0===e&&(e=o()),"function"!==typeof e[c])throw ie.create("invalid-app-argument",{appName:c});return e[c]()};void 0!==i.serviceProps&&Object(U["i"])(u,i.serviceProps),r[c]=u,e.prototype[c]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=this._getService.bind(this,c);return n.apply(this,i.multipleInstances?e:[])}}try{for(var l=Object(x["h"])(Object.keys(t)),f=l.next();!f.done;f=l.next()){var h=f.value;t[h]._addComponent(i)}}catch(p){a={error:p}}finally{try{f&&!f.done&&(s=l.return)&&s.call(l)}finally{if(a)throw a.error}}return"PUBLIC"===i.type?r[c]:null}function u(e,t,n){var r,i=null!==(r=_e[e])&&void 0!==r?r:e;n&&(i+="-"+n);var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'+i+'" with version "'+t+'":'];return o&&s.push('library name "'+i+'" contains illegal characters (whitespace or "/")'),o&&a&&s.push("and"),a&&s.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void ye.warn(s.join(" "))}c(new F(i+"-version",(function(){return{library:i,version:t}}),"VERSION"))}function l(e,t){if(null!==e&&"function"!==typeof e)throw ie.create("invalid-log-argument",{appName:name});te(e,t)}function f(e,t){if("serverAuth"===t)return null;var n=t;return n}return r["default"]=r,Object.defineProperty(r,"apps",{get:s}),o["App"]=e,r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){var e=Ee(we);function t(t){Object(U["i"])(e,t)}return e.INTERNAL=Object(x["a"])(Object(x["a"])({},e.INTERNAL),{createFirebaseNamespace:Ie,extendNamespace:t,createSubscribe:U["g"],ErrorFactory:U["b"],deepExtend:U["i"]}),e}var je=Ie(),Re=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){var e=this.container.getProviders();return e.map((function(e){if(Te(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){var t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t){e.INTERNAL.registerComponent(new F("platform-logger",(function(e){return new Re(e)}),"PRIVATE")),e.registerVersion(oe,ae,t),e.registerVersion("fire-js","")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(U["j"])()&&void 0!==self.firebase){ye.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var Ce=self.firebase.SDK_VERSION;Ce&&Ce.indexOf("LITE")>=0&&ye.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var Ne=je.initializeApp;je.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Object(U["m"])()&&ye.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),Ne.apply(void 0,e)};var ke=je;Se(ke);var Ae=ke,Le="firebase",Pe="8.1.1";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ae.registerVersion(Le,Pe,"app");var De,xe=n("9dbb"),Ue="@firebase/installations",Fe="0.4.19",Me=1e4,Be="w:"+Fe,Ge="FIS_v2",He="https://firebaseinstallations.googleapis.com/v1",qe=36e5,Ve="installations",ze="Installations",Ke=(De={},De["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',De["not-registered"]="Firebase Installation is not registered.",De["installation-not-found"]="Firebase Installation not found.",De["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',De["app-offline"]="Could not process request. Application offline.",De["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",De),We=new U["b"](Ve,ze,Ke);function Xe(e){return e instanceof U["c"]&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){var t=e.projectId;return He+"/projects/"+t+"/installations"}function Je(e){return{token:e.token,requestStatus:2,expiresIn:tt(e.expiresIn),creationTime:Date.now()}}function Ye(e,t){return Object(x["b"])(this,void 0,void 0,(function(){var n,r;return Object(x["d"])(this,(function(i){switch(i.label){case 0:return[4,t.json()];case 1:return n=i.sent(),r=n.error,[2,We.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function Ze(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Qe(e,t){var n=t.refreshToken,r=Ze(e);return r.append("Authorization",nt(n)),r}function et(e){return Object(x["b"])(this,void 0,void 0,(function(){var t;return Object(x["d"])(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return t=n.sent(),t.status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function tt(e){return Number(e.replace("s","000"))}function nt(e){return Ge+" "+e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,t){var n=t.fid;return Object(x["b"])(this,void 0,void 0,(function(){var t,r,i,o,a,s,c;return Object(x["d"])(this,(function(u){switch(u.label){case 0:return t=$e(e),r=Ze(e),i={fid:n,authVersion:Ge,appId:e.appId,sdkVersion:Be},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,et((function(){return fetch(t,o)}))];case 1:return a=u.sent(),a.ok?[4,a.json()]:[3,3];case 2:return s=u.sent(),c={fid:s.fid||n,registrationStatus:2,refreshToken:s.refreshToken,authToken:Je(s.authToken)},[2,c];case 3:return[4,Ye("Create Installation",a)];case 4:throw u.sent()}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){var t=btoa(String.fromCharCode.apply(String,Object(x["f"])(e)));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at=/^[cdef][\w-]{21}$/,st="";function ct(){try{var e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;var n=ut(e);return at.test(n)?n:st}catch(r){return st}}function ut(e){var t=ot(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e){return e.appName+"!"+e.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft=new Map;function ht(e,t){var n=lt(e);bt(n,t),vt(n,t)}function pt(e,t){mt();var n=lt(e),r=ft.get(n);r||(r=new Set,ft.set(n,r)),r.add(t)}function dt(e,t){var n=lt(e),r=ft.get(n);r&&(r.delete(t),0===r.size&&ft.delete(n),_t())}function bt(e,t){var n,r,i=ft.get(e);if(i)try{for(var o=Object(x["h"])(i),a=o.next();!a.done;a=o.next()){var s=a.value;s(t)}}catch(c){n={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function vt(e,t){var n=mt();n&&n.postMessage({key:e,fid:t}),_t()}var gt=null;function mt(){return!gt&&"BroadcastChannel"in self&&(gt=new BroadcastChannel("[Firebase] FID Change"),gt.onmessage=function(e){bt(e.data.key,e.data.fid)}),gt}function _t(){0===ft.size&&gt&&(gt.close(),gt=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt="firebase-installations-database",wt=1,Ot="firebase-installations-store",Et=null;function It(){return Et||(Et=Object(xe["openDb"])(yt,wt,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(Ot)}}))),Et}function jt(e,t){return Object(x["b"])(this,void 0,void 0,(function(){var n,r,i,o,a;return Object(x["d"])(this,(function(s){switch(s.label){case 0:return n=lt(e),[4,It()];case 1:return r=s.sent(),i=r.transaction(Ot,"readwrite"),o=i.objectStore(Ot),[4,o.get(n)];case 2:return a=s.sent(),[4,o.put(t,n)];case 3:return s.sent(),[4,i.complete];case 4:return s.sent(),a&&a.fid===t.fid||ht(e,t.fid),[2,t]}}))}))}function Rt(e){return Object(x["b"])(this,void 0,void 0,(function(){var t,n,r;return Object(x["d"])(this,(function(i){switch(i.label){case 0:return t=lt(e),[4,It()];case 1:return n=i.sent(),r=n.transaction(Ot,"readwrite"),[4,r.objectStore(Ot).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function Tt(e,t){return Object(x["b"])(this,void 0,void 0,(function(){var n,r,i,o,a,s;return Object(x["d"])(this,(function(c){switch(c.label){case 0:return n=lt(e),[4,It()];case 1:return r=c.sent(),i=r.transaction(Ot,"readwrite"),o=i.objectStore(Ot),[4,o.get(n)];case 2:return a=c.sent(),s=t(a),void 0!==s?[3,4]:[4,o.delete(n)];case 3:return c.sent(),[3,6];case 4:return[4,o.put(s,n)];case 5:c.sent(),c.label=6;case 6:return[4,i.complete];case 7:return c.sent(),!s||a&&a.fid===s.fid||ht(e,s.fid),[2,s]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){return Object(x["b"])(this,void 0,void 0,(function(){var t,n,r;return Object(x["d"])(this,(function(i){switch(i.label){case 0:return[4,Tt(e,(function(n){var r=Ct(n),i=Nt(e,r);return t=i.registrationPromise,i.installationEntry}))];case 1:return n=i.sent(),n.fid!==st?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function Ct(e){var t=e||{fid:ct(),registrationStatus:0};return Pt(t)}function Nt(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var n=Promise.reject(We.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=kt(e,r);return{installationEntry:r,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:At(e)}:{installationEntry:t}}function kt(e,t){return Object(x["b"])(this,void 0,void 0,(function(){var n,r;return Object(x["d"])(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,rt(e,t)];case 1:return n=i.sent(),[2,jt(e,n)];case 2:return r=i.sent(),Xe(r)&&409===r.customData.serverCode?[4,Rt(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,jt(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}function At(e){return Object(x["b"])(this,void 0,void 0,(function(){var t,n,r,i;return Object(x["d"])(this,(function(o){switch(o.label){case 0:return[4,Lt(e)];case 1:t=o.sent(),o.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,it(100)];case 3:return o.sent(),[4,Lt(e)];case 4:return t=o.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,St(e)];case 6:return n=o.sent(),r=n.installationEntry,i=n.registrationPromise,i?[2,i]:[2,r];case 7:return[2,t]}}))}))}function Lt(e){return Tt(e,(function(e){if(!e)throw We.create("installation-not-found");return Pt(e)}))}function Pt(e){return Dt(e)?{fid:e.fid,registrationStatus:0}:e}function Dt(e){return 1===e.registrationStatus&&e.registrationTime+Me<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return Object(x["b"])(this,void 0,void 0,(function(){var e,i,o,a,s,c,u,l;return Object(x["d"])(this,(function(f){switch(f.label){case 0:return e=Ut(n,t),i=Qe(n,t),o=r.getImmediate({optional:!0}),o&&i.append("x-firebase-client",o.getPlatformInfoString()),a={installation:{sdkVersion:Be}},s={method:"POST",headers:i,body:JSON.stringify(a)},[4,et((function(){return fetch(e,s)}))];case 1:return c=f.sent(),c.ok?[4,c.json()]:[3,3];case 2:return u=f.sent(),l=Je(u),[2,l];case 3:return[4,Ye("Generate Auth Token",c)];case 4:throw f.sent()}}))}))}function Ut(e,t){var n=t.fid;return $e(e)+"/"+n+"/authTokens:generate"}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,t){return void 0===t&&(t=!1),Object(x["b"])(this,void 0,void 0,(function(){var n,r,i,o;return Object(x["d"])(this,(function(a){switch(a.label){case 0:return[4,Tt(e.appConfig,(function(r){if(!Ht(r))throw We.create("not-registered");var i=r.authToken;if(!t&&qt(i))return r;if(1===i.requestStatus)return n=Mt(e,t),r;if(!navigator.onLine)throw We.create("app-offline");var o=zt(r);return n=Gt(e,o),o}))];case 1:return r=a.sent(),n?[4,n]:[3,3];case 2:return o=a.sent(),[3,4];case 3:o=r.authToken,a.label=4;case 4:return i=o,[2,i]}}))}))}function Mt(e,t){return Object(x["b"])(this,void 0,void 0,(function(){var n,r;return Object(x["d"])(this,(function(i){switch(i.label){case 0:return[4,Bt(e.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,it(100)];case 3:return i.sent(),[4,Bt(e.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return r=n.authToken,0===r.requestStatus?[2,Ft(e,t)]:[2,r]}}))}))}function Bt(e){return Tt(e,(function(e){if(!Ht(e))throw We.create("not-registered");var t=e.authToken;return Kt(t)?Object(x["a"])(Object(x["a"])({},e),{authToken:{requestStatus:0}}):e}))}function Gt(e,t){return Object(x["b"])(this,void 0,void 0,(function(){var n,r,i;return Object(x["d"])(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,xt(e,t)];case 1:return n=o.sent(),i=Object(x["a"])(Object(x["a"])({},t),{authToken:n}),[4,jt(e.appConfig,i)];case 2:return o.sent(),[2,n];case 3:return r=o.sent(),!Xe(r)||401!==r.customData.serverCode&&404!==r.customData.serverCode?[3,5]:[4,Rt(e.appConfig)];case 4:return o.sent(),[3,7];case 5:return i=Object(x["a"])(Object(x["a"])({},t),{authToken:{requestStatus:0}}),[4,jt(e.appConfig,i)];case 6:o.sent(),o.label=7;case 7:throw r;case 8:return[2]}}))}))}function Ht(e){return void 0!==e&&2===e.registrationStatus}function qt(e){return 2===e.requestStatus&&!Vt(e)}function Vt(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+qe}function zt(e){var t={requestStatus:1,requestTime:Date.now()};return Object(x["a"])(Object(x["a"])({},e),{authToken:t})}function Kt(e){return 1===e.requestStatus&&e.requestTime+Me<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){return Object(x["b"])(this,void 0,void 0,(function(){var t,n,r;return Object(x["d"])(this,(function(i){switch(i.label){case 0:return[4,St(e.appConfig)];case 1:return t=i.sent(),n=t.installationEntry,r=t.registrationPromise,r?r.catch(console.error):Ft(e).catch(console.error),[2,n.fid]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e,t){return void 0===t&&(t=!1),Object(x["b"])(this,void 0,void 0,(function(){var n;return Object(x["d"])(this,(function(r){switch(r.label){case 0:return[4,$t(e.appConfig)];case 1:return r.sent(),[4,Ft(e,t)];case 2:return n=r.sent(),[2,n.token]}}))}))}function $t(e){return Object(x["b"])(this,void 0,void 0,(function(){var t;return Object(x["d"])(this,(function(n){switch(n.label){case 0:return[4,St(e)];case 1:return t=n.sent().registrationPromise,t?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e,t){return Object(x["b"])(this,void 0,void 0,(function(){var n,r,i,o;return Object(x["d"])(this,(function(a){switch(a.label){case 0:return n=Yt(e,t),r=Qe(e,t),i={method:"DELETE",headers:r},[4,et((function(){return fetch(n,i)}))];case 1:return o=a.sent(),o.ok?[3,3]:[4,Ye("Delete Installation",o)];case 2:throw a.sent();case 3:return[2]}}))}))}function Yt(e,t){var n=t.fid;return $e(e)+"/"+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(e){return Object(x["b"])(this,void 0,void 0,(function(){var t,n;return Object(x["d"])(this,(function(r){switch(r.label){case 0:return t=e.appConfig,[4,Tt(t,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(n=r.sent(),!n)return[3,6];if(1!==n.registrationStatus)return[3,2];throw We.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw We.create("app-offline");case 3:return[4,Jt(t,n)];case 4:return r.sent(),[4,Rt(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){var n=e.appConfig;return pt(n,t),function(){dt(n,t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){var t,n;if(!e||!e.options)throw tn("App Configuration");if(!e.name)throw tn("App Name");var r=["projectId","apiKey","appId"];try{for(var i=Object(x["h"])(r),o=i.next();!o.done;o=i.next()){var a=o.value;if(!e.options[a])throw tn(a)}}catch(s){t={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function tn(e){return We.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e){var t="installations";e.INTERNAL.registerComponent(new F(t,(function(e){var t=e.getProvider("app").getImmediate(),n=en(t),r=e.getProvider("platform-logger"),i={appConfig:n,platformLoggerProvider:r},o={app:t,getId:function(){return Wt(i)},getToken:function(e){return Xt(i,e)},delete:function(){return Zt(i)},onIdChange:function(e){return Qt(i,e)}};return o}),"PUBLIC")),e.registerVersion(Ue,Fe)}nn(Ae);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rn,on,an="firebase_id",sn="origin",cn=6e4,un="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ln="https://www.googletagmanager.com/gtag/js";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(e,t,n,r,i){return Object(x["b"])(this,void 0,void 0,(function(){var o,a;return Object(x["d"])(this,(function(s){switch(s.label){case 0:return i&&i.global?(e(rn.EVENT,n,r),[2]):[3,1];case 1:return[4,t];case 2:o=s.sent(),a=Object(x["a"])(Object(x["a"])({},r),{send_to:o}),e(rn.EVENT,n,a),s.label=3;case 3:return[2]}}))}))}function hn(e,t,n,r){return Object(x["b"])(this,void 0,void 0,(function(){var i;return Object(x["d"])(this,(function(o){switch(o.label){case 0:return r&&r.global?(e(rn.SET,{screen_name:n}),[2,Promise.resolve()]):[3,1];case 1:return[4,t];case 2:i=o.sent(),e(rn.CONFIG,i,{update:!0,screen_name:n}),o.label=3;case 3:return[2]}}))}))}function pn(e,t,n,r){return Object(x["b"])(this,void 0,void 0,(function(){var i;return Object(x["d"])(this,(function(o){switch(o.label){case 0:return r&&r.global?(e(rn.SET,{user_id:n}),[2,Promise.resolve()]):[3,1];case 1:return[4,t];case 2:i=o.sent(),e(rn.CONFIG,i,{update:!0,user_id:n}),o.label=3;case 3:return[2]}}))}))}function dn(e,t,n,r){return Object(x["b"])(this,void 0,void 0,(function(){var i,o,a,s,c;return Object(x["d"])(this,(function(u){switch(u.label){case 0:if(!r||!r.global)return[3,1];for(i={},o=0,a=Object.keys(n);o<a.length;o++)s=a[o],i["user_properties."+s]=n[s];return e(rn.SET,i),[2,Promise.resolve()];case 1:return[4,t];case 2:c=u.sent(),e(rn.CONFIG,c,{update:!0,user_properties:n}),u.label=3;case 3:return[2]}}))}))}function bn(e,t){return Object(x["b"])(this,void 0,void 0,(function(){var n;return Object(x["d"])(this,(function(r){switch(r.label){case 0:return[4,e];case 1:return n=r.sent(),window["ga-disable-"+n]=!t,[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["EVENT"]="event",e["SET"]="set",e["CONFIG"]="config"})(rn||(rn={})),function(e){e["ADD_SHIPPING_INFO"]="add_shipping_info",e["ADD_PAYMENT_INFO"]="add_payment_info",e["ADD_TO_CART"]="add_to_cart",e["ADD_TO_WISHLIST"]="add_to_wishlist",e["BEGIN_CHECKOUT"]="begin_checkout",e["CHECKOUT_PROGRESS"]="checkout_progress",e["EXCEPTION"]="exception",e["GENERATE_LEAD"]="generate_lead",e["LOGIN"]="login",e["PAGE_VIEW"]="page_view",e["PURCHASE"]="purchase",e["REFUND"]="refund",e["REMOVE_FROM_CART"]="remove_from_cart",e["SCREEN_VIEW"]="screen_view",e["SEARCH"]="search",e["SELECT_CONTENT"]="select_content",e["SELECT_ITEM"]="select_item",e["SELECT_PROMOTION"]="select_promotion",e["SET_CHECKOUT_OPTION"]="set_checkout_option",e["SHARE"]="share",e["SIGN_UP"]="sign_up",e["TIMING_COMPLETE"]="timing_complete",e["VIEW_CART"]="view_cart",e["VIEW_ITEM"]="view_item",e["VIEW_ITEM_LIST"]="view_item_list",e["VIEW_PROMOTION"]="view_promotion",e["VIEW_SEARCH_RESULTS"]="view_search_results"}(on||(on={}));var vn,gn=new Q("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e){var t=document.createElement("script");t.src=ln+"?l="+e,t.async=!0,document.head.appendChild(t)}function _n(e){var t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}function yn(e,t,n,r,i,o){return Object(x["b"])(this,void 0,void 0,(function(){var a,s,c,u;return Object(x["d"])(this,(function(l){switch(l.label){case 0:a=r[i],l.label=1;case 1:return l.trys.push([1,7,,8]),a?[4,t[a]]:[3,3];case 2:return l.sent(),[3,6];case 3:return[4,Promise.all(n)];case 4:return s=l.sent(),c=s.find((function(e){return e.measurementId===i})),c?[4,t[c.appId]]:[3,6];case 5:l.sent(),l.label=6;case 6:return[3,8];case 7:return u=l.sent(),gn.error(u),[3,8];case 8:return e(rn.CONFIG,i,o),[2]}}))}))}function wn(e,t,n,r,i){return Object(x["b"])(this,void 0,void 0,(function(){var o,a,s,c,u,l,f,h,p;return Object(x["d"])(this,(function(d){switch(d.label){case 0:return d.trys.push([0,4,,5]),o=[],i&&i["send_to"]?(a=i["send_to"],Array.isArray(a)||(a=[a]),[4,Promise.all(n)]):[3,2];case 1:for(s=d.sent(),c=function(e){var n=s.find((function(t){return t.measurementId===e})),r=n&&t[n.appId];if(!r)return o=[],"break";o.push(r)},u=0,l=a;u<l.length;u++)if(f=l[u],h=c(f),"break"===h)break;d.label=2;case 2:return 0===o.length&&(o=Object.values(t)),[4,Promise.all(o)];case 3:return d.sent(),e(rn.EVENT,r,i||{}),[3,5];case 4:return p=d.sent(),gn.error(p),[3,5];case 5:return[2]}}))}))}function On(e,t,n,r){function i(i,o,a){return Object(x["b"])(this,void 0,void 0,(function(){var s;return Object(x["d"])(this,(function(c){switch(c.label){case 0:return c.trys.push([0,6,,7]),i!==rn.EVENT?[3,2]:[4,wn(e,t,n,o,a)];case 1:return c.sent(),[3,5];case 2:return i!==rn.CONFIG?[3,4]:[4,yn(e,t,n,r,o,a)];case 3:return c.sent(),[3,5];case 4:e(rn.SET,o),c.label=5;case 5:return[3,7];case 6:return s=c.sent(),gn.error(s),[3,7];case 7:return[2]}}))}))}return i}function En(e,t,n,r,i){var o=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=On(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function In(){for(var e=window.document.getElementsByTagName("script"),t=0,n=Object.values(e);t<n.length;t++){var r=n[t];if(r.src&&r.src.includes(ln))return r}return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jn=(vn={},vn["already-exists"]="A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",vn["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",vn["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate: {$reason}",vn["invalid-analytics-context"]="Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",vn["indexeddb-unavailable"]="IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",vn["fetch-throttle"]="The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",vn["config-fetch-failed"]="Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",vn["no-api-key"]='The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',vn["no-app-id"]='The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',vn),Rn=new U["b"]("analytics","Analytics",jn),Tn=30,Sn=1e3,Cn=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t=Sn),this.throttleMetadata=e,this.intervalMillis=t}return e.prototype.getThrottleMetadata=function(e){return this.throttleMetadata[e]},e.prototype.setThrottleMetadata=function(e,t){this.throttleMetadata[e]=t},e.prototype.deleteThrottleMetadata=function(e){delete this.throttleMetadata[e]},e}(),Nn=new Cn;function kn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function An(e){var t;return Object(x["b"])(this,void 0,void 0,(function(){var n,r,i,o,a,s,c;return Object(x["d"])(this,(function(u){switch(u.label){case 0:return n=e.appId,r=e.apiKey,i={method:"GET",headers:kn(r)},o=un.replace("{app-id}",n),[4,fetch(o,i)];case 1:if(a=u.sent(),200===a.status||304===a.status)return[3,6];s="",u.label=2;case 2:return u.trys.push([2,4,,5]),[4,a.json()];case 3:return c=u.sent(),(null===(t=c.error)||void 0===t?void 0:t.message)&&(s=c.error.message),[3,5];case 4:return u.sent(),[3,5];case 5:throw Rn.create("config-fetch-failed",{httpStatus:a.status,responseMessage:s});case 6:return[2,a.json()]}}))}))}function Ln(e,t,n){return void 0===t&&(t=Nn),Object(x["b"])(this,void 0,void 0,(function(){var r,i,o,a,s,c,u=this;return Object(x["d"])(this,(function(l){if(r=e.options,i=r.appId,o=r.apiKey,a=r.measurementId,!i)throw Rn.create("no-app-id");if(!o){if(a)return[2,{measurementId:a,appId:i}];throw Rn.create("no-api-key")}return s=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Un,setTimeout((function(){return Object(x["b"])(u,void 0,void 0,(function(){return Object(x["d"])(this,(function(e){return c.abort(),[2]}))}))}),void 0!==n?n:cn),[2,Pn({appId:i,apiKey:o,measurementId:a},s,c,t)]}))}))}function Pn(e,t,n,r){var i=t.throttleEndTimeMillis,o=t.backoffCount;return void 0===r&&(r=Nn),Object(x["b"])(this,void 0,void 0,(function(){var t,a,s,c,u,l,f;return Object(x["d"])(this,(function(h){switch(h.label){case 0:t=e.appId,a=e.measurementId,h.label=1;case 1:return h.trys.push([1,3,,4]),[4,Dn(n,i)];case 2:return h.sent(),[3,4];case 3:if(s=h.sent(),a)return gn.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+a+' provided in the "measurementId" field in the local Firebase config. ['+s.message+"]"),[2,{appId:t,measurementId:a}];throw s;case 4:return h.trys.push([4,6,,7]),[4,An(e)];case 5:return c=h.sent(),r.deleteThrottleMetadata(t),[2,c];case 6:if(u=h.sent(),!xn(u)){if(r.deleteThrottleMetadata(t),a)return gn.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+a+' provided in the "measurementId" field in the local Firebase config. ['+u.message+"]"),[2,{appId:t,measurementId:a}];throw u}return l=503===Number(u.customData.httpStatus)?Object(U["e"])(o,r.intervalMillis,Tn):Object(U["e"])(o,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+l,backoffCount:o+1},r.setThrottleMetadata(t,f),gn.debug("Calling attemptFetch again in "+l+" millis"),[2,Pn(e,f,n,r)];case 7:return[2]}}))}))}function Dn(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((function(){clearTimeout(o),r(Rn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function xn(e){if(!(e instanceof U["c"])||!e.customData)return!1;var t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}var Un=function(){function e(){this.listeners=[]}return e.prototype.addEventListener=function(e){this.listeners.push(e)},e.prototype.abort=function(){this.listeners.forEach((function(e){return e()}))},e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return Object(x["b"])(this,void 0,void 0,(function(){var e;return Object(x["d"])(this,(function(t){switch(t.label){case 0:return Object(U["l"])()?[3,1]:(gn.warn(Rn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),[2,!1]);case 1:return t.trys.push([1,3,,4]),[4,Object(U["n"])()];case 2:return t.sent(),[3,4];case 3:return e=t.sent(),gn.warn(Rn.create("indexeddb-unavailable",{errorInfo:e}).message),[2,!1];case 4:return[2,!0]}}))}))}function Mn(e,t,n,r,i){return Object(x["b"])(this,void 0,void 0,(function(){var o,a,s,c,u,l,f;return Object(x["d"])(this,(function(h){switch(h.label){case 0:return o=Ln(e),o.then((function(t){n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&gn.warn("The measurement ID in the local Firebase config ("+e.options.measurementId+") does not match the measurement ID fetched from the server ("+t.measurementId+"). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return gn.error(e)})),t.push(o),a=Fn().then((function(e){return e?r.getId():void 0})),[4,Promise.all([o,a])];case 1:return s=h.sent(),c=s[0],u=s[1],i("js",new Date),f={},f[sn]="firebase",f.update=!0,l=f,null!=u&&(l[an]=u),i(rn.CONFIG,c.measurementId,l),[2,c.measurementId]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn,Gn,Hn={},qn=[],Vn={},zn="dataLayer",Kn="gtag",Wn=!1;function Xn(e){if(Wn)throw Rn.create("already-initialized");e.dataLayerName&&(zn=e.dataLayerName),e.gtagName&&(Kn=e.gtagName)}function $n(){var e=[];if(Object(U["k"])()&&e.push("This is a browser extension environment."),Object(U["d"])()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"("+(t+1)+") "+e})).join(" "),n=Rn.create("invalid-analytics-context",{errorInfo:t});gn.warn(n.message)}}function Jn(e,t){$n();var n=e.options.appId;if(!n)throw Rn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Rn.create("no-api-key");gn.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+e.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=Hn[n])throw Rn.create("already-exists",{id:n});if(!Wn){In()||mn(zn),_n(zn);var r=En(Hn,qn,Vn,zn,Kn),i=r.wrappedGtag,o=r.gtagCore;Gn=i,Bn=o,Wn=!0}Hn[n]=Mn(e,qn,Vn,t,Bn);var a={app:e,logEvent:function(e,t,r){fn(Gn,Hn[n],e,t,r).catch((function(e){return gn.error(e)}))},setCurrentScreen:function(e,t){hn(Gn,Hn[n],e,t).catch((function(e){return gn.error(e)}))},setUserId:function(e,t){pn(Gn,Hn[n],e,t).catch((function(e){return gn.error(e)}))},setUserProperties:function(e,t){dn(Gn,Hn[n],e,t).catch((function(e){return gn.error(e)}))},setAnalyticsCollectionEnabled:function(e){bn(Hn[n],e).catch((function(e){return gn.error(e)}))},INTERNAL:{delete:function(){return delete Hn[n],Promise.resolve()}}};return a}var Yn="@firebase/analytics",Zn="0.6.2",Qn="analytics";function er(e){function t(e){try{var t=e.getProvider(Qn).getImmediate();return{logEvent:t.logEvent}}catch(n){throw Rn.create("interop-component-reg-failed",{reason:n})}}e.INTERNAL.registerComponent(new F(Qn,(function(e){var t=e.getProvider("app").getImmediate(),n=e.getProvider("installations").getImmediate();return Jn(t,n)}),"PUBLIC").setServiceProps({settings:Xn,EventName:on,isSupported:tr})),e.INTERNAL.registerComponent(new F("analytics-internal",t,"PRIVATE")),e.registerVersion(Yn,Zn)}function tr(){return Object(x["b"])(this,void 0,void 0,(function(){var e;return Object(x["d"])(this,(function(t){switch(t.label){case 0:if(Object(U["k"])())return[2,!1];if(!Object(U["d"])())return[2,!1];if(!Object(U["l"])())return[2,!1];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,Object(U["n"])()];case 2:return e=t.sent(),[2,e];case 3:return t.sent(),[2,!1];case 4:return[2]}}))}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(Ae);var nr="firebasestorage.googleapis.com",rr="storageBucket",ir=12e4,or=6e5,ar=function(e){function t(n,r){var i=e.call(this,cr(n),"Firebase Storage: "+r+" ("+cr(n)+")")||this;return i.customData={serverResponse:null},Object.setPrototypeOf(i,t.prototype),i}return Object(x["c"])(t,e),t.prototype.codeEquals=function(e){return cr(e)===this.code},Object.defineProperty(t.prototype,"message",{get:function(){return this.customData.serverResponse?this.message+"\n"+this.customData.serverResponse:this.message},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e},enumerable:!1,configurable:!0}),t}(U["c"]),sr={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error",UNSUPPORTED_ENVIRONMENT:"unsupported-environment"};function cr(e){return"storage/"+e}function ur(){var e="An unknown error occurred, please check the error payload for server response.";return new ar(sr.UNKNOWN,e)}function lr(e){return new ar(sr.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function fr(e){return new ar(sr.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function hr(){var e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ar(sr.UNAUTHENTICATED,e)}function pr(e){return new ar(sr.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function dr(){return new ar(sr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function br(){return new ar(sr.CANCELED,"User canceled the upload/download.")}function vr(e){return new ar(sr.INVALID_URL,"Invalid URL '"+e+"'.")}function gr(e){return new ar(sr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function mr(){return new ar(sr.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rr+"' property when initializing the app?")}function _r(){return new ar(sr.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function yr(){return new ar(sr.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function wr(){return new ar(sr.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Or(e){return new ar(sr.INVALID_ARGUMENT,e)}function Er(){return new ar(sr.APP_DELETED,"The Firebase app was deleted.")}function Ir(e){return new ar(sr.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function jr(e,t){return new ar(sr.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Rr(e){throw new ar(sr.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},Sr=function(){function e(e,t){this.data=e,this.contentType=t||null}return e}();function Cr(e,t){switch(e){case Tr.RAW:return new Sr(Nr(t));case Tr.BASE64:case Tr.BASE64URL:return new Sr(Ar(e,t));case Tr.DATA_URL:return new Sr(Pr(t),Dr(t))}throw ur()}function Nr(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){var i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){var o=r,a=e.charCodeAt(++n);r=65536|(1023&o)<<10|1023&a,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function kr(e){var t;try{t=decodeURIComponent(e)}catch(n){throw jr(Tr.DATA_URL,"Malformed data URL.")}return Nr(t)}function Ar(e,t){switch(e){case Tr.BASE64:var n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){var i=n?"-":"_";throw jr(e,"Invalid character '"+i+"' found: is it base64url encoded?")}break;case Tr.BASE64URL:var o=-1!==t.indexOf("+"),a=-1!==t.indexOf("/");if(o||a){i=o?"+":"/";throw jr(e,"Invalid character '"+i+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}var s;try{s=atob(t)}catch(l){throw jr(e,"Invalid character found")}for(var c=new Uint8Array(s.length),u=0;u<s.length;u++)c[u]=s.charCodeAt(u);return c}var Lr=function(){function e(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw jr(Tr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var n=t[1]||null;null!=n&&(this.base64=xr(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}return e}();function Pr(e){var t=new Lr(e);return t.base64?Ar(Tr.BASE64,t.rest):kr(t.rest)}function Dr(e){var t=new Lr(e);return t.contentType}function xr(e,t){var n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ur,Fr={STATE_CHANGED:"state_changed"},Mr={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},Br={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Gr(e){switch(e){case Mr.RUNNING:case Mr.PAUSING:case Mr.CANCELING:return Br.RUNNING;case Mr.PAUSED:return Br.PAUSED;case Mr.SUCCESS:return Br.SUCCESS;case Mr.CANCELED:return Br.CANCELED;case Mr.ERROR:return Br.ERROR;default:return Br.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(Ur||(Ur={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hr=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=Ur.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=Ur.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=Ur.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,n,r){if(this.sent_)throw Rr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(var i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw Rr("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw Rr("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw Rr("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)},e}(),qr=function(){function e(){}return e.prototype.createXhrIo=function(){return new Hr},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vr(e){return void 0!==e}function zr(e){return"function"===typeof e}function Kr(e){return"object"===typeof e&&!Array.isArray(e)}function Wr(e){return"string"===typeof e||e instanceof String}function Xr(e){return $r()&&e instanceof Blob}function $r(){return"undefined"!==typeof Blob}function Jr(e,t,n,r){if(r<t)throw new ar(sr.INVALID_ARGUMENT,"Invalid value for '"+e+"'. Expected "+t+" or greater.");if(r>n)throw new ar(sr.INVALID_ARGUMENT,"Invalid value for '"+e+"'. Expected "+n+" or less.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Zr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Yr();if(void 0!==n){for(var r=new n,i=0;i<e.length;i++)r.append(e[i]);return r.getBlob()}if($r())return new Blob(e);throw new ar(sr.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function Qr(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ei=function(){function e(e,t){var n=0,r="";Xr(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,n){if(Xr(this.data_)){var r=this.data_,i=Qr(r,t,n);return null===i?null:new e(i)}var o=new Uint8Array(this.data_.buffer,t,n-t);return new e(o,!0)},e.getBlob=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if($r()){var r=t.map((function(t){return t instanceof e?t.data_:t}));return new e(Zr.apply(null,r))}var i=t.map((function(e){return Wr(e)?Cr(Tr.RAW,e).data:e.data_})),o=0;i.forEach((function(e){o+=e.byteLength}));var a=new Uint8Array(o),s=0;return i.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),ti=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var n;try{n=e.makeFromUrl(t)}catch(r){return new e(t,"")}if(""===n.path)return n;throw gr(t)},e.makeFromUrl=function(t){var n=null,r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}var o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),s={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}for(var u="v[A-Za-z0-9_]+",l=nr.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",h=new RegExp("^https?://"+l+"/"+u+"/b/"+r+"/o"+f,"i"),p={bucket:1,path:3},d="(?:storage.googleapis.com|storage.cloud.google.com)",b="([^?#]*)",v=new RegExp("^https?://"+d+"/"+r+"/"+b,"i"),g={bucket:1,path:2},m=[{regex:a,indices:s,postModify:i},{regex:h,indices:p,postModify:c},{regex:v,indices:g,postModify:c}],_=0;_<m.length;_++){var y=m[_],w=y.regex.exec(t);if(w){var O=w[y.indices.bucket],E=w[y.indices.path];E||(E=""),n=new e(O,E),y.postModify(n);break}}if(null==n)throw vr(t);return n},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ni(e){var t;try{t=JSON.parse(e)}catch(n){return null}return Kr(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){if(0===e.length)return null;var t=e.lastIndexOf("/");if(-1===t)return"";var n=e.slice(0,t);return n}function ii(e,t){var n=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?n:e+"/"+n}function oi(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e){return"https://"+nr+"/v0"+e}function si(e){var t=encodeURIComponent,n="?";for(var r in e)if(e.hasOwnProperty(r)){var i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e,t){return t}var ui=function(){function e(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||ci}return e}(),li=null;function fi(e){return!Wr(e)||e.length<2?e:oi(e)}function hi(){if(li)return li;var e=[];function t(e,t){return fi(t)}e.push(new ui("bucket")),e.push(new ui("generation")),e.push(new ui("metageneration")),e.push(new ui("name","fullPath",!0));var n=new ui("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);var i=new ui("size");return i.xform=r,e.push(i),e.push(new ui("timeCreated")),e.push(new ui("updated")),e.push(new ui("md5Hash",null,!0)),e.push(new ui("cacheControl",null,!0)),e.push(new ui("contentDisposition",null,!0)),e.push(new ui("contentEncoding",null,!0)),e.push(new ui("contentLanguage",null,!0)),e.push(new ui("contentType",null,!0)),e.push(new ui("metadata","customMetadata",!0)),li=e,li}function pi(e,t){function n(){var n=e["bucket"],r=e["fullPath"],i=new ti(n,r);return t.makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function di(e,t,n){for(var r={type:"file"},i=n.length,o=0;o<i;o++){var a=n[o];r[a.local]=a.xform(r,t[a.server])}return pi(r,e),r}function bi(e,t,n){var r=ni(t);if(null===r)return null;var i=r;return di(e,i,n)}function vi(e,t){var n=ni(t);if(null===n)return null;if(!Wr(n["downloadTokens"]))return null;var r=n["downloadTokens"];if(0===r.length)return null;var i=encodeURIComponent,o=r.split(","),a=o.map((function(t){var n=e["bucket"],r=e["fullPath"],o="/b/"+i(n)+"/o/"+i(r),a=ai(o),s=si({alt:"media",token:t});return a+s}));return a[0]}function gi(e,t){for(var n={},r=t.length,i=0;i<r;i++){var o=t[i];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mi="prefixes",_i="items";function yi(e,t,n){var r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[mi])for(var i=0,o=n[mi];i<o.length;i++){var a=o[i],s=a.replace(/\/$/,""),c=e.makeStorageReference(new ti(t,s));r.prefixes.push(c)}if(n[_i])for(var u=0,l=n[_i];u<l.length;u++){var f=l[u];c=e.makeStorageReference(new ti(t,f["name"]));r.items.push(c)}return r}function wi(e,t,n){var r=ni(n);if(null===r)return null;var i=r;return yi(e,t,i)}var Oi=function(){function e(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e){if(!e)throw ur()}function Ii(e,t){function n(n,r){var i=bi(e,r,t);return Ei(null!==i),i}return n}function ji(e,t){function n(n,r){var i=wi(e,t,r);return Ei(null!==i),i}return n}function Ri(e,t){function n(n,r){var i=bi(e,r,t);return Ei(null!==i),vi(i,r)}return n}function Ti(e){function t(t,n){var r;return r=401===t.getStatus()?hr():402===t.getStatus()?fr(e.bucket):403===t.getStatus()?pr(e.path):n,r.serverResponse=n.serverResponse,r}return t}function Si(e){var t=Ti(e);function n(n,r){var i=t(n,r);return 404===n.getStatus()&&(i=lr(e.path)),i.serverResponse=r.serverResponse,i}return n}function Ci(e,t,n){var r=t.fullServerUrl(),i=ai(r),o="GET",a=e.maxOperationRetryTime,s=new Oi(i,o,Ii(e,n),a);return s.errorHandler=Si(t),s}function Ni(e,t,n,r,i){var o={};t.isRoot?o["prefix"]="":o["prefix"]=t.path+"/",n&&n.length>0&&(o["delimiter"]=n),r&&(o["pageToken"]=r),i&&(o["maxResults"]=i);var a=t.bucketOnlyServerUrl(),s=ai(a),c="GET",u=e.maxOperationRetryTime,l=new Oi(s,c,ji(e,t.bucket),u);return l.urlParams=o,l.errorHandler=Ti(t),l}function ki(e,t,n){var r=t.fullServerUrl(),i=ai(r),o="GET",a=e.maxOperationRetryTime,s=new Oi(i,o,Ri(e,n),a);return s.errorHandler=Si(t),s}function Ai(e,t,n,r){var i=t.fullServerUrl(),o=ai(i),a="PATCH",s=gi(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,l=new Oi(o,a,Ii(e,r),u);return l.headers=c,l.body=s,l.errorHandler=Si(t),l}function Li(e,t){var n=t.fullServerUrl(),r=ai(n),i="DELETE",o=e.maxOperationRetryTime;function a(e,t){}var s=new Oi(r,i,a,o);return s.successCodes=[200,204],s.errorHandler=Si(t),s}function Pi(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Di(e,t,n){var r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Pi(null,t)),r}function xi(e,t,n,r,i){var o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}var c=s();a["Content-Type"]="multipart/related; boundary="+c;var u=Di(t,r,i),l=gi(u,n),f="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",h="\r\n--"+c+"--",p=ei.getBlob(f,r,h);if(null===p)throw _r();var d={name:u["fullPath"]},b=ai(o),v="POST",g=e.maxUploadRetryTime,m=new Oi(b,v,Ii(e,n),g);return m.urlParams=d,m.headers=a,m.body=p.uploadData(),m.errorHandler=Ti(t),m}var Ui=function(){function e(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}return e}();function Fi(e,t){var n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){Ei(!1)}var r=t||["active"];return Ei(!!n&&-1!==r.indexOf(n)),n}function Mi(e,t,n,r,i){var o=t.bucketOnlyServerUrl(),a=Di(t,r,i),s={name:a["fullPath"]},c=ai(o),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":r.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},f=gi(a,n),h=e.maxUploadRetryTime;function p(e){var t;Fi(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Ei(!1)}return Ei(Wr(t)),t}var d=new Oi(c,u,p,h);return d.urlParams=s,d.headers=l,d.body=f,d.errorHandler=Ti(t),d}function Bi(e,t,n,r){var i={"X-Goog-Upload-Command":"query"};function o(e){var t=Fi(e,["active","final"]),n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){Ei(!1)}n||Ei(!1);var i=Number(n);return Ei(!isNaN(i)),new Ui(i,r.size(),"final"===t)}var a="POST",s=e.maxUploadRetryTime,c=new Oi(n,a,o,s);return c.headers=i,c.errorHandler=Ti(t),c}var Gi=262144;function Hi(e,t,n,r,i,o,a,s){var c=new Ui(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw yr();var u=c.total-c.current,l=u;i>0&&(l=Math.min(l,i));var f=c.current,h=f+l,p=l===u?"upload, finalize":"upload",d={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":c.current},b=r.slice(f,h);if(null===b)throw _r();function v(e,n){var i,a=Fi(e,["active","final"]),s=c.current+l,u=r.size();return i="final"===a?Ii(t,o)(e,n):null,new Ui(s,u,"final"===a,i)}var g="POST",m=t.maxUploadRetryTime,_=new Oi(n,g,v,m);return _.headers=d,_.body=b.uploadData(),_.progressCallback=s||null,_.errorHandler=Ti(e),_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qi=function(){function e(e,t,n){var r=zr(e)||null!=t||null!=n;if(r)this.next=e,this.error=t,this.complete=n;else{var i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}return e}(),Vi=function(){function e(e,t,n,r,i,o){this.bytesTransferred=e,this.totalBytes=t,this.state=n,this.metadata=r,this.task=i,this.ref=o}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zi(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ki=function(){function e(e,t,n){var r=this;void 0===n&&(n=null),this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=hi(),this._resumable=this._shouldDoResumable(this._blob),this._state=Mr.RUNNING,this._errorHandler=function(e){r._request=void 0,r._chunkMultiplier=1,e.codeEquals(sr.CANCELED)?(r._needToFetchStatus=!0,r.completeTransitions_()):(r._error=e,r._transition(Mr.ERROR))},this._metadataErrorHandler=function(e){r._request=void 0,e.codeEquals(sr.CANCELED)?r.completeTransitions_():(r._error=e,r._transition(Mr.ERROR))},this._promise=new Promise((function(e,t){r._resolve=e,r._reject=t,r._start()})),this._promise.then(null,(function(){}))}return e.prototype._makeProgressCallback=function(){var e=this,t=this._transferred;return function(n){return e._updateProgress(t+n)}},e.prototype._shouldDoResumable=function(e){return e.size()>262144},e.prototype._start=function(){this._state===Mr.RUNNING&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())},e.prototype._resolveToken=function(e){var t=this;this._ref.storage.getAuthToken().then((function(n){switch(t._state){case Mr.RUNNING:e(n);break;case Mr.CANCELING:t._transition(Mr.CANCELED);break;case Mr.PAUSING:t._transition(Mr.PAUSED);break}}))},e.prototype._createResumable=function(){var e=this;this._resolveToken((function(t){var n=Mi(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),r=e._ref.storage.makeRequest(n,t);e._request=r,r.getPromise().then((function(t){e._request=void 0,e._uploadUrl=t,e._needToFetchStatus=!1,e.completeTransitions_()}),e._errorHandler)}))},e.prototype._fetchStatus=function(){var e=this,t=this._uploadUrl;this._resolveToken((function(n){var r=Bi(e._ref.storage,e._ref._location,t,e._blob),i=e._ref.storage.makeRequest(r,n);e._request=i,i.getPromise().then((function(t){t=t,e._request=void 0,e._updateProgress(t.current),e._needToFetchStatus=!1,t.finalized&&(e._needToFetchMetadata=!0),e.completeTransitions_()}),e._errorHandler)}))},e.prototype._continueUpload=function(){var e=this,t=Gi*this._chunkMultiplier,n=new Ui(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((function(i){var o;try{o=Hi(e._ref._location,e._ref.storage,r,e._blob,t,e._mappings,n,e._makeProgressCallback())}catch(s){return e._error=s,void e._transition(Mr.ERROR)}var a=e._ref.storage.makeRequest(o,i);e._request=a,a.getPromise().then((function(t){e._increaseMultiplier(),e._request=void 0,e._updateProgress(t.current),t.finalized?(e._metadata=t.metadata,e._transition(Mr.SUCCESS)):e.completeTransitions_()}),e._errorHandler)}))},e.prototype._increaseMultiplier=function(){var e=Gi*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)},e.prototype._fetchMetadata=function(){var e=this;this._resolveToken((function(t){var n=Ci(e._ref.storage,e._ref._location,e._mappings),r=e._ref.storage.makeRequest(n,t);e._request=r,r.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._transition(Mr.SUCCESS)}),e._metadataErrorHandler)}))},e.prototype._oneShotUpload=function(){var e=this;this._resolveToken((function(t){var n=xi(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),r=e._ref.storage.makeRequest(n,t);e._request=r,r.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._updateProgress(e._blob.size()),e._transition(Mr.SUCCESS)}),e._errorHandler)}))},e.prototype._updateProgress=function(e){var t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()},e.prototype._transition=function(e){if(this._state!==e)switch(e){case Mr.CANCELING:this._state=e,void 0!==this._request&&this._request.cancel();break;case Mr.PAUSING:this._state=e,void 0!==this._request&&this._request.cancel();break;case Mr.RUNNING:var t=this._state===Mr.PAUSED;this._state=e,t&&(this._notifyObservers(),this._start());break;case Mr.PAUSED:this._state=e,this._notifyObservers();break;case Mr.CANCELED:this._error=br(),this._state=e,this._notifyObservers();break;case Mr.ERROR:this._state=e,this._notifyObservers();break;case Mr.SUCCESS:this._state=e,this._notifyObservers();break}},e.prototype.completeTransitions_=function(){switch(this._state){case Mr.PAUSING:this._transition(Mr.PAUSED);break;case Mr.CANCELING:this._transition(Mr.CANCELED);break;case Mr.RUNNING:this._start();break}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=Gr(this._state);return new Vi(this._transferred,this._blob.size(),e,this._metadata,this,this._ref)},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,n,r){var i=this,o=new qi(t,n,r);return this._addObserver(o),function(){i._removeObserver(o)}},e.prototype.then=function(e,t){return this._promise.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype._addObserver=function(e){this._observers.push(e),this._notifyObserver(e)},e.prototype._removeObserver=function(e){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)},e.prototype._notifyObservers=function(){var e=this;this._finishPromise();var t=this._observers.slice();t.forEach((function(t){e._notifyObserver(t)}))},e.prototype._finishPromise=function(){if(void 0!==this._resolve){var e=!0;switch(Gr(this._state)){case Br.SUCCESS:zi(this._resolve.bind(null,this.snapshot))();break;case Br.CANCELED:case Br.ERROR:var t=this._reject;zi(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}},e.prototype._notifyObserver=function(e){var t=Gr(this._state);switch(t){case Br.RUNNING:case Br.PAUSED:e.next&&zi(e.next.bind(e,this.snapshot))();break;case Br.SUCCESS:e.complete&&zi(e.complete.bind(e))();break;case Br.CANCELED:case Br.ERROR:e.error&&zi(e.error.bind(e,this._error))();break;default:e.error&&zi(e.error.bind(e,this._error))()}},e.prototype.resume=function(){var e=this._state===Mr.PAUSED||this._state===Mr.PAUSING;return e&&this._transition(Mr.RUNNING),e},e.prototype.pause=function(){var e=this._state===Mr.RUNNING;return e&&this._transition(Mr.PAUSING),e},e.prototype.cancel=function(){var e=this._state===Mr.RUNNING||this._state===Mr.PAUSING;return e&&this._transition(Mr.CANCELING),e},e}(),Wi=function(){function e(e,t){this._service=e,this._location=t instanceof ti?t:ti.makeFromUrl(t)}return e.prototype.toString=function(){return"gs://"+this._location.bucket+"/"+this._location.path},e.prototype.newRef=function(t,n){return new e(t,n)},Object.defineProperty(e.prototype,"root",{get:function(){var e=new ti(this._location.bucket,"");return this.newRef(this._service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return oi(this._location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this._service},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=ri(this._location.path);if(null===t)return null;var n=new ti(this._location.bucket,t);return new e(this._service,n)},enumerable:!1,configurable:!0}),e.prototype._throwIfRoot=function(e){if(""===this._location.path)throw Ir(e)},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e,t,n){return void 0===n&&(n=null),e._throwIfRoot("uploadBytesResumable"),new Ki(e,new ei(t),n)}function $i(e,t,n,r){void 0===n&&(n=Tr.RAW),e._throwIfRoot("putString");var i=Cr(n,t),o=Object(x["a"])({},r);return null==o["contentType"]&&null!=i.contentType&&(o["contentType"]=i.contentType),new Ki(e,new ei(i.data,!0),o)}function Ji(e){var t={prefixes:[],items:[]};return Yi(e,t).then((function(){return t}))}function Yi(e,t,n){return Object(x["b"])(this,void 0,void 0,(function(){var r,i,o,a;return Object(x["d"])(this,(function(s){switch(s.label){case 0:return r={pageToken:n},[4,Zi(e,r)];case 1:return i=s.sent(),(o=t.prefixes).push.apply(o,i.prefixes),(a=t.items).push.apply(a,i.items),null==i.nextPageToken?[3,3]:[4,Yi(e,t,i.nextPageToken)];case 2:s.sent(),s.label=3;case 3:return[2]}}))}))}function Zi(e,t){return Object(x["b"])(this,void 0,void 0,(function(){var n,r,i;return Object(x["d"])(this,(function(o){switch(o.label){case 0:return null!=t&&"number"===typeof t.maxResults&&Jr("options.maxResults",1,1e3,t.maxResults),[4,e.storage.getAuthToken()];case 1:return n=o.sent(),r=t||{},i=Ni(e.storage,e._location,"/",r.pageToken,r.maxResults),[2,e.storage.makeRequest(i,n).getPromise()]}}))}))}function Qi(e){return Object(x["b"])(this,void 0,void 0,(function(){var t,n;return Object(x["d"])(this,(function(r){switch(r.label){case 0:return e._throwIfRoot("getMetadata"),[4,e.storage.getAuthToken()];case 1:return t=r.sent(),n=Ci(e.storage,e._location,hi()),[2,e.storage.makeRequest(n,t).getPromise()]}}))}))}function eo(e,t){return Object(x["b"])(this,void 0,void 0,(function(){var n,r;return Object(x["d"])(this,(function(i){switch(i.label){case 0:return e._throwIfRoot("updateMetadata"),[4,e.storage.getAuthToken()];case 1:return n=i.sent(),r=Ai(e.storage,e._location,t,hi()),[2,e.storage.makeRequest(r,n).getPromise()]}}))}))}function to(e){return Object(x["b"])(this,void 0,void 0,(function(){var t,n;return Object(x["d"])(this,(function(r){switch(r.label){case 0:return e._throwIfRoot("getDownloadURL"),[4,e.storage.getAuthToken()];case 1:return t=r.sent(),n=ki(e.storage,e._location,hi()),[2,e.storage.makeRequest(n,t).getPromise().then((function(e){if(null===e)throw wr();return e}))]}}))}))}function no(e){return Object(x["b"])(this,void 0,void 0,(function(){var t,n;return Object(x["d"])(this,(function(r){switch(r.label){case 0:return e._throwIfRoot("deleteObject"),[4,e.storage.getAuthToken()];case 1:return t=r.sent(),n=Li(e.storage,e._location),[2,e.storage.makeRequest(n,t).getPromise()]}}))}))}function ro(e,t){var n=ii(e._location.path,t),r=new ti(e._location.bucket,n);return new Wi(e.storage,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var io=function(){function e(e,t,n){this._delegate=e,this.task=t,this.ref=n}return Object.defineProperty(e.prototype,"bytesTransferred",{get:function(){return this._delegate.bytesTransferred},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"metadata",{get:function(){return this._delegate.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._delegate.state},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"totalBytes",{get:function(){return this._delegate.totalBytes},enumerable:!1,configurable:!0}),e}(),oo=function(){function e(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate),this._snapshot=new io(this._delegate.snapshot,this,this._ref)}return Object.defineProperty(e.prototype,"snapshot",{get:function(){return this._snapshot},enumerable:!1,configurable:!0}),e.prototype.then=function(e,t){var n=this;return this._delegate.then((function(t){if(e)return e(new io(t,n,n._ref))}),t)},e.prototype.on=function(e,t,n,r){var i=this,o=void 0;return t&&(o="function"===typeof t?function(e){return t(new io(e,i,i._ref))}:{next:t.next?function(e){return t.next(new io(e,i,i._ref))}:void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,o,n||void 0,r||void 0)},e}(),ao=function(){function e(e,t){this._delegate=e,this._service=t}return Object.defineProperty(e.prototype,"prefixes",{get:function(){var e=this;return this._delegate.prefixes.map((function(t){return new so(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){var e=this;return this._delegate.items.map((function(t){return new so(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextPageToken",{get:function(){return this._delegate.nextPageToken||null},enumerable:!1,configurable:!0}),e}(),so=function(){function e(e,t){this._delegate=e,this.storage=t}return Object.defineProperty(e.prototype,"name",{get:function(){return this._delegate.name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._delegate.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._delegate.fullPath},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return this._delegate.toString()},e.prototype.child=function(t){var n=ro(this._delegate,t);return new e(n,this.storage)},Object.defineProperty(e.prototype,"root",{get:function(){return new e(this._delegate.root,this.storage)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._delegate.parent;return null==t?null:new e(t,this.storage)},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return this._throwIfRoot("put"),new oo(Xi(this._delegate,e,t),this)},e.prototype.putString=function(e,t,n){return void 0===t&&(t=Tr.RAW),this._throwIfRoot("putString"),new oo($i(this._delegate,e,t,n),this)},e.prototype.listAll=function(){var e=this;return Ji(this._delegate).then((function(t){return new ao(t,e.storage)}))},e.prototype.list=function(e){var t=this;return Zi(this._delegate,e).then((function(e){return new ao(e,t.storage)}))},e.prototype.getMetadata=function(){return Qi(this._delegate)},e.prototype.updateMetadata=function(e){return eo(this._delegate,e)},e.prototype.getDownloadURL=function(){return to(this._delegate)},e.prototype.delete=function(){return this._throwIfRoot("delete"),no(this._delegate)},e.prototype._throwIfRoot=function(e){if(""===this._delegate._location.path)throw Ir(e)},e}(),co=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uo(e,t,n){var r=1,i=null,o=!1,a=0;function s(){return 2===a}var c=!1;function u(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];c||(c=!0,t.apply(null,e))}function l(t){i=setTimeout((function(){i=null,e(f,s())}),t)}function f(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!c)if(e)u.call.apply(u,Object(x["g"])([null,e],t));else{var i,f=s()||o;if(f)u.call.apply(u,Object(x["g"])([null,e],t));else r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),l(i)}}var h=!1;function p(e){h||(h=!0,c||(null!==i?(e||(a=2),clearTimeout(i),l(0)):e||(a=1)))}return l(0),setTimeout((function(){o=!0,p(!0)}),n),p}function lo(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fo=function(){function e(e,t,n,r,i,o,a,s,c,u,l){var f=this;this.pendingXhr_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=u,this.timeout_=c,this.pool_=l,this.promise_=new Promise((function(e,t){f.resolve_=e,f.reject_=t,f.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,n){if(n)t(!1,new ho(!1,null,!0));else{var r=e.pool_.createXhrIo();e.pendingXhr_=r,null!==e.progressCallback_&&r.addUploadProgressListener(i),r.send(e.url_,e.method_,e.body_,e.headers_).then((function(n){null!==e.progressCallback_&&n.removeUploadProgressListener(i),e.pendingXhr_=null,n=n;var r=n.getErrorCode()===Ur.NO_ERROR,o=n.getStatus();if(r&&!e.isRetryStatusCode_(o)){var a=-1!==e.successCodes_.indexOf(o);t(!0,new ho(a,n))}else{var s=n.getErrorCode()===Ur.ABORT;t(!1,new ho(!1,null,s))}}))}function i(t){var n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}}function n(t,n){var r=e.resolve_,i=e.reject_,o=n.xhr;if(n.wasSuccessCode)try{var a=e.callback_(o,o.getResponseText());Vr(a)?r(a):r()}catch(c){i(c)}else if(null!==o){var s=ur();s.serverResponse=o.getResponseText(),e.errorCallback_?i(e.errorCallback_(o,s)):i(s)}else if(n.canceled){s=e.appDelete_?Er():br();i(s)}else{s=dr();i(s)}}this.canceled_?n(!1,new ho(!1,null,!0)):this.backoffId_=uo(t,n,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&lo(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||i},e}(),ho=function(){function e(e,t,n){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!n}return e}();function po(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function bo(e){var t="undefined"!==typeof Ae?Ae.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}function vo(e,t){t&&(e["X-Firebase-GMPID"]=t)}function go(e,t,n,r){var i=si(e.urlParams),o=e.url+i,a=Object.assign({},e.headers);return vo(a,t),po(a,n),bo(a),new fo(o,e.method,a,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(e){return/^[A-Za-z]+:\/\//.test(e)}function _o(e,t){return new Wi(e,t)}function yo(e,t){if(e instanceof Eo){var n=e;if(null==n._bucket)throw mr();var r=new Wi(n,n._bucket);return null!=t?yo(r,t):r}if(void 0!==t){if(t.includes(".."))throw Or('`path` param cannot contain ".."');return ro(e,t)}return e}function wo(e,t){if(t&&mo(t)){if(e instanceof Eo)return _o(e,t);throw Or("To use ref(service, url), the first argument must be a Storage instance.")}return yo(e,t)}function Oo(e){var t=null===e||void 0===e?void 0:e[rr];return null==t?null:ti.makeFromBucketSpec(t)}var Eo=function(){function e(e,t,n,r){this.app=e,this._authProvider=t,this._pool=n,this._url=r,this._bucket=null,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ir,this._maxUploadRetryTime=or,this._requests=new Set,this._bucket=null!=r?ti.makeFromBucketSpec(r):Oo(this.app.options)}return Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._maxUploadRetryTime},set:function(e){Jr("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._maxOperationRetryTime},set:function(e){Jr("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e},enumerable:!1,configurable:!0}),e.prototype.getAuthToken=function(){return Object(x["b"])(this,void 0,void 0,(function(){var e,t;return Object(x["d"])(this,(function(n){switch(n.label){case 0:return e=this._authProvider.getImmediate({optional:!0}),e?[4,e.getToken()]:[3,2];case 1:if(t=n.sent(),null!==t)return[2,t.accessToken];n.label=2;case 2:return[2,null]}}))}))},e.prototype._delete=function(){return this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear(),Promise.resolve()},e.prototype.makeStorageReference=function(e){return new Wi(this,e)},e.prototype.makeRequest=function(e,t){var n=this;if(this._deleted)return new co(Er());var r=go(e,this._appId,t,this._pool);return this._requests.add(r),r.getPromise().then((function(){return n._requests.delete(r)}),(function(){return n._requests.delete(r)})),r},e}(),Io=function(){function e(e,t){var n=this;this.app=e,this._delegate=t,this.INTERNAL={delete:function(){return n._delegate._delete()}}}return Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._delegate.maxOperationRetryTime},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._delegate.maxUploadRetryTime},enumerable:!1,configurable:!0}),e.prototype.ref=function(e){if(mo(e))throw Or("ref() expected a child path but got a URL, use refFromURL instead.");return new so(wo(this._delegate,e),this)},e.prototype.refFromURL=function(e){if(!mo(e))throw Or("refFromURL() expected a full URL but got a child path, use ref() instead.");try{ti.makeFromUrl(e)}catch(t){throw Or("refFromUrl() expected a valid full URL but got an invalid one.")}return new so(wo(this._delegate,e),this)},e.prototype.setMaxUploadRetryTime=function(e){this._delegate.maxUploadRetryTime=e},e.prototype.setMaxOperationRetryTime=function(e){this._delegate.maxOperationRetryTime=e},e}(),jo="@firebase/storage",Ro="0.4.2",To="storage";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(e,t){var n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=new Io(n,new Eo(n,r,new qr,t));return i}function Co(e){var t={TaskState:Br,TaskEvent:Fr,StringFormat:Tr,Storage:Eo,Reference:so};e.INTERNAL.registerComponent(new F(To,So,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(jo,Ro)}Co(Ae);const No={apiKey:"AIzaSyAwXQvAvEyb72mSZCNXLB5_abiboWIGFmM",authDomain:"yard-sale-locator-82b72.firebaseapp.com",databaseURL:"https://yard-sale-locator-82b72.firebaseio.com",projectId:"yard-sale-locator-82b72",storageBucket:"yard-sale-locator-82b72.appspot.com",messagingSenderId:"495092526893",appId:"1:495092526893:web:4ac4c1e82a73a59bd16da4",measurementId:"G-WVKHY78DGS"};Ae.initializeApp(No);Ae.analytics();const ko=Ae.storage();var Ao=n("2b20"),Lo=n("632d"),Po=n("6ba1"),Do=n("83fc"),xo=n("8a4e"),Uo={name:"Profile",setup(){Object(r["p"])(async()=>{await Object(Ao["c"])(),await Lo["a"].getGeoLocation(),await Po["a"].getAll()});const e=Object(r["v"])({storageRef:ko.ref(),imgFile:[{name:"Choose file"}],newListing:{address:"",startDate:Date,expireAt:Date,daysOpen:1,tags:Do["a"].searchTags,isOpen:!1,description:"",img:""}});return{state:e,location:Object(r["b"])(()=>Do["a"].userLocation),profile:Object(r["b"])(()=>Do["a"].profile),listings:Object(r["b"])(()=>Do["a"].listings.filter(e=>e.profile.email===Do["a"].profile.email)),async createListing(){await Lo["a"].getCoordinates(e.newListing.address),e.newListing.lat=Do["a"].userLocation.latitude,e.newListing.long=Do["a"].userLocation.longitude,e.newListing.address=Do["a"].userLocation.formattedAddress,e.newListing.startDate=new Date(e.newListing.startDate),e.newListing.startDate.setDate(e.newListing.startDate.getDate()),e.newListing.expireAt=new Date(e.newListing.startDate),e.newListing.expireAt.setHours(0,0,0,0),e.newListing.expireAt.setDate(e.newListing.expireAt.getDate()+e.newListing.daysOpen+1),xo["a"].log(e.newListing),await Po["a"].create(e.newListing),Po["a"].getAll()},async toggleOpen(){this.listings[0].isOpen?(await Po["a"].editListing(this.listings[0].id,{isOpen:!1}),this.listings[0].isOpen=!1):(await Po["a"].editListing(this.listings[0].id,{isOpen:!0}),this.listings[0].isOpen=!0)},async deleteListing(){await Po["a"].deleteListing(this.listings[0].id)},onFileSelected(t){xo["a"].log(t),e.imgFile=t.target.files},async onUpload(){const t=document.getElementById("uploader"),n=await e.storageRef.child("images/"+e.imgFile[0].name);n.put(e.imgFile[0]).on("state_changed",(function(r){const i=r.bytesTransferred/r.totalBytes*100;t.value=i,100===t.value&&setTimeout(async()=>{e.newListing.img=await n.getDownloadURL(),xo["a"].log("img: "+e.newListing.img)},500)}))}}}};n("3261");Uo.render=D,Uo.__scopeId="data-v-703ceb94";t["default"]=Uo},3261:function(e,t,n){"use strict";n("5fe5")},"5fe5":function(e,t,n){},"9ab4":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"h",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return f}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function a(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}function c(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a}function l(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(u(arguments[t]));return e}function f(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}},"9dbb":function(e,t,n){(function(e,n){n(t)})(0,(function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,o=new Promise((function(o,a){i=e[t].apply(e,r),n(i).then(o,a)}));return o.request=i,o}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new l(e,i.request)}))}function o(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function s(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function u(e){this._index=e}function l(e,t){this._cursor=e,this._request=t}function f(e){this._store=e}function h(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function p(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new h(n)}function d(e){this._db=e}function b(e,t,n){var i=r(indexedDB,"open",[e,t]),o=i.request;return o&&(o.onupgradeneeded=function(e){n&&n(new p(o.result,e.oldVersion,o.transaction))}),i.then((function(e){return new d(e)}))}function v(e){return r(indexedDB,"deleteDatabase",[e])}o(u,"_index",["name","keyPath","multiEntry","unique"]),a(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(l,"_cursor",["direction","key","primaryKey","value"]),a(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(l.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new l(e,t._request)}))}))})})),f.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},f.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},o(f,"_store",["name","keyPath","indexNames","autoIncrement"]),a(f,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(f,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(f,"_store",IDBObjectStore,["deleteIndex"]),h.prototype.objectStore=function(){return new f(this._tx.objectStore.apply(this._tx,arguments))},o(h,"_tx",["objectStoreNames","mode"]),s(h,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new f(this._db.createObjectStore.apply(this._db,arguments))},o(p,"_db",["name","version","objectStoreNames"]),s(p,"_db",IDBDatabase,["deleteObjectStore","close"]),d.prototype.transaction=function(){return new h(this._db.transaction.apply(this._db,arguments))},o(d,"_db",["name","version","objectStoreNames"]),s(d,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[f,u].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,o=i[e].apply(i,n.slice(0,-1));o.onsuccess=function(){r(o.result)}})}))})),[u,f].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=b,e.deleteDb=v,Object.defineProperty(e,"__esModule",{value:!0})}))},a8e9:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return N})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return s})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return h})),n.d(t,"l",(function(){return p})),n.d(t,"m",(function(){return l})),n.d(t,"n",(function(){return d}));var r=n("9ab4"),i=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},o=function(e){var t=[],n=0,r=0;while(n<e.length){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){o=e[n++];var a=e[n++],s=e[n++],c=((7&i)<<18|(63&o)<<12|(63&a)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function a(e){return s(void 0,e)}function s(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&c(r)&&(e[r]=s(e[r],t[r]));return e}function c(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"===typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function f(){return"object"===typeof self&&self.self===self}function h(){var e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function p(){return"indexedDB"in self&&null!=indexedDB}function d(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=window.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||window.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(o){t(o)}}))}function b(){return!(!navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v="FirebaseError",g=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name=v,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,m.prototype.create),o}return Object(r["c"])(t,e),t}(Error),m=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?_(o,r):"Error",s=this.serviceName+": "+a+" ("+i+").",c=new g(i,s,r);return c},e}();function _(e,t){return e.replace(y,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var y=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function w(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"===typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,a,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],f=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=l^c&(u^l),a=1518500249):(o=c^u^l,a=1859775393):r<60?(o=c&u|l&(c|u),a=2400959708):(o=c^u^l,a=3395469782);i=(s<<5|s>>>27)+o+f+a+n[r]&4294967295;f=l,l=u,u=4294967295&(c<<30|c>>>2),c=s,s=i}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e}})();function O(e,t){var n=new E(e,t);return n.subscribe.bind(n)}var E=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=I(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=j),void 0===r.error&&(r.error=j),void 0===r.complete&&(r.complete=j);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function I(e,t){if("object"!==typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"===typeof e[i])return!0}return!1}function j(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var R=1e3,T=2,S=144e5,C=.5;function N(e,t,n){void 0===t&&(t=R),void 0===n&&(n=T);var r=t*Math.pow(n,e),i=Math.round(C*r*(Math.random()-.5)*2);return Math.min(S,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}).call(this,n("c8ba"))}}]);