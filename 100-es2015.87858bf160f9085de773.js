(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"/yGZ":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class o{}var u=e("pMnS"),i=e("MKJQ"),r=e("sZkV"),s=e("s7LF"),a=e("H+bZ"),c=e("r4Kj"),d=e("mrSG"),p=e("a3Cf"),b=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return Object(d.c)(n,l),n.prototype.hasPermission=function(){return Object(p.cordova)(this,"hasPermission",{},arguments)},n.prototype.requestPermission=function(){return Object(p.cordova)(this,"requestPermission",{},arguments)},n.prototype.schedule=function(l){return Object(p.cordova)(this,"schedule",{sync:!0},arguments)},n.prototype.update=function(l){return Object(p.cordova)(this,"update",{sync:!0},arguments)},n.prototype.clear=function(l){return Object(p.cordova)(this,"clear",{},arguments)},n.prototype.clearAll=function(){return Object(p.cordova)(this,"clearAll",{},arguments)},n.prototype.cancel=function(l){return Object(p.cordova)(this,"cancel",{},arguments)},n.prototype.cancelAll=function(){return Object(p.cordova)(this,"cancelAll",{},arguments)},n.prototype.isPresent=function(l){return Object(p.cordova)(this,"isPresent",{},arguments)},n.prototype.isScheduled=function(l){return Object(p.cordova)(this,"isScheduled",{},arguments)},n.prototype.isTriggered=function(l){return Object(p.cordova)(this,"isTriggered",{},arguments)},n.prototype.hasType=function(l,n){return Object(p.cordova)(this,"hasType",{},arguments)},n.prototype.getType=function(l){return Object(p.cordova)(this,"getType",{},arguments)},n.prototype.getIds=function(){return Object(p.cordova)(this,"getIds",{},arguments)},n.prototype.getScheduledIds=function(){return Object(p.cordova)(this,"getScheduledIds",{},arguments)},n.prototype.getTriggeredIds=function(){return Object(p.cordova)(this,"getTriggeredIds",{},arguments)},n.prototype.get=function(l){return Object(p.cordova)(this,"get",{},arguments)},n.prototype.getAll=function(){return Object(p.cordova)(this,"getAll",{},arguments)},n.prototype.getScheduled=function(l){return Object(p.cordova)(this,"getScheduled",{},arguments)},n.prototype.getTriggered=function(l){return Object(p.cordova)(this,"getTriggered",{},arguments)},n.prototype.addActions=function(l,n){return Object(p.cordova)(this,"addActions",{},arguments)},n.prototype.removeActions=function(l){return Object(p.cordova)(this,"removeActions",{},arguments)},n.prototype.hasActions=function(l){return Object(p.cordova)(this,"hasActions",{},arguments)},n.prototype.getDefaults=function(){return Object(p.cordova)(this,"getDefaults",{sync:!0},arguments)},n.prototype.setDefaults=function(l){return Object(p.cordova)(this,"setDefaults",{sync:!0},arguments)},n.prototype.getAllScheduled=function(){return Object(p.cordova)(this,"getAllScheduled",{},arguments)},n.prototype.getAllTriggered=function(){return Object(p.cordova)(this,"getAllTriggered",{},arguments)},n.prototype.on=function(l){return Object(p.cordova)(this,"on",{observable:!0,clearFunction:"un",clearWithArgs:!0},arguments)},n.prototype.fireEvent=function(l,n){return Object(p.cordova)(this,"fireEvent",{sync:!0},arguments)},n.prototype.fireQueuedEvents=function(){return Object(p.cordova)(this,"fireQueuedEvents",{},arguments)},n.pluginName="LocalNotifications",n.plugin="cordova-plugin-local-notification",n.pluginRef="cordova.plugins.notification.local",n.repo="https://github.com/katzer/cordova-plugin-local-notifications",n.platforms=["Android","iOS","Windows"],n}(p.IonicNativePlugin);class g{constructor(l,n,e,t){this.apiService=l,this.config=n,this.platform=e,this.localNotifications=t,this.settings=JSON.parse(localStorage.getItem("settings"))}ngOnInit(){this.localNotifications.schedule({id:1,text:"Single ILocalNotification",sound:null,data:{secret:"key"}}),this.localNotifications.schedule([{id:1,text:"Multi ILocalNotification 1",sound:null,data:{secret:"key"}},{id:2,title:"Local ILocalNotification Example",text:"Multi ILocalNotification 2",icon:"http://example.com/icon.png"}]),this.localNotifications.schedule({text:"Delayed ILocalNotification",trigger:{at:new Date((new Date).getTime()+3600)},led:"FF0000",sound:null}),document.getElementById("downloadPwa").style.display="none",document.getElementById("appInstalled").style.display="none",document.getElementById("spinnerDownloadLink").style.display="block",document.getElementById("iphoneMessage").style.display="none",this.platform.is("ios")?(document.getElementById("iphoneMessage").style.display="block",document.getElementById("spinnerDownloadLink").style.display="none"):console.log("!ios"),window.addEventListener("beforeinstallprompt",l=>{l.preventDefault(),this.deferredPrompt=l,document.getElementById("spinnerDownloadLink").style.display="none",document.getElementById("downloadPwa").style.display="block"}),document.getElementById("downloadPwa").addEventListener("click",l=>{document.getElementById("downloadPwa").style.display="none",this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then(l=>{"accepted"===l.outcome?(document.getElementById("appInstalled").innerHTML="You accepted the install prompt",document.getElementById("appInstalled").style.display="block"):(document.getElementById("appInstalled").innerHTML="You dismissed the install prompt",document.getElementById("appInstalled").style.display="block")})}),window.addEventListener("appinstalled",l=>{console.log("Bali Smart Innovation installed")}),window.addEventListener("load",()=>{matchMedia("(display-mode: standalone)").matches?(document.getElementById("appInstalled").innerHTML="Bali Smart Innovation installed on your phone",document.getElementById("appInstalled").style.display="block",console.log("Launched: Installed")):console.log("Launched: Browser Tab")}),this.apiService.getSetToken().subscribe(l=>{null!=l.token?(localStorage.setItem("token",l.token),localStorage.setItem("settings",JSON.stringify(l.settings)),document.querySelector("#content").setAttribute("style","--background: url('"+this.config.serverUrl+"/assets/settings/"+l.settings.background_login+"') no-repeat 0 0/auto 100%;"),null!=localStorage.getItem("user")&&window.open("/tabs","_self")):(console.log(l),this.apiService.gangguan(l))},l=>{this.apiService.gangguan(l),console.log(l)})}login(l){var n=!0;this.errorMessage="",""==l.value.nip&&(this.errorMessage=this.errorMessage+"<br>nip/email harus diisi<br>",n=!1),""==l.value.password&&(this.errorMessage=this.errorMessage+"<br>password harus diisi",n=!1),n&&this.apiService.postData("login",{nip:l.value.nip,password:l.value.password}).subscribe(l=>{console.log(l),0==l.responseCode?this.errorMessage=l.responseMessage:1==l.responseCode&&(localStorage.setItem("user",JSON.stringify(l.user)),window.location.href="/tabs")},l=>{console.log(l),this.apiService.gangguan(l)})}setServerUrl(l){this.apiService.getSetToken().subscribe(l=>{console.log("result token "+l),null!=l.token?localStorage.setItem("token",l.token):(console.log(l),this.apiService.gangguan(l))},l=>{console.log(l),this.apiService.gangguan(l)})}}var h=t.nb({encapsulation:0,styles:[["#errorMessage[_ngcontent-%COMP%]{color:#f2f2f2}"]],data:{}});function m(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,86,"ion-content",[["id","content"]],null,null,null,i.P,i.j)),t.ob(1,49152,null,0,r.t,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,13,"ion-grid",[["style","background-color: #f2f2f2; -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);"]],null,null,null,i.R,i.l)),t.ob(3,49152,null,0,r.z,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(5,0,null,0,10,"ion-row",[],null,null,null,i.bb,i.v)),t.ob(6,49152,null,0,r.fb,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,2,"ion-col",[["align","right"],["size","6"]],null,null,null,i.O,i.i)),t.ob(8,49152,null,0,r.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(9,0,null,0,0,"img",[["class","img-responsive logo-pln-ip"],["src","assets/images/logo-pln-ip.png"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,0,5,"ion-col",[["size","6"]],null,null,null,i.O,i.i)),t.ob(11,49152,null,0,r.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(12,0,null,0,0,"img",[["class","img-responsive logo-bali-smart-innovation"],["src","assets/images/logo-bali-smart-innovation.png"]],null,null,null,null,null)),(l()(),t.pb(13,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(15,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.pb(16,0,null,0,70,"ion-grid",[],null,null,null,i.R,i.l)),t.ob(17,49152,null,0,r.z,[t.h,t.k,t.x],null,null),(l()(),t.pb(18,0,null,0,68,"ion-row",[],null,null,null,i.bb,i.v)),t.ob(19,49152,null,0,r.fb,[t.h,t.k,t.x],null,null),(l()(),t.pb(20,0,null,0,1,"ion-col",[["size","1"]],null,null,null,i.O,i.i)),t.ob(21,49152,null,0,r.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(22,0,null,0,62,"ion-col",[["size","10"]],null,null,null,i.O,i.i)),t.ob(23,49152,null,0,r.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(24,0,null,0,60,"form",[["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,e){var o=!0,u=l.component;return"submit"===n&&(o=!1!==t.Bb(l,26).onSubmit(e)&&o),"reset"===n&&(o=!1!==t.Bb(l,26).onReset()&&o),"ngSubmit"===n&&(o=!1!==u.login(t.Bb(l,26))&&o),o}),null,null)),t.ob(25,16384,null,0,s.m,[],null,null),t.ob(26,4210688,[["form",4]],0,s.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Fb(2048,null,s.a,null,[s.h]),t.ob(28,16384,null,0,s.g,[[4,s.a]],null,null),(l()(),t.pb(29,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,13,"ion-item",[],null,null,null,i.W,i.p)),t.ob(33,49152,null,0,r.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(34,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.X,i.r)),t.ob(35,49152,null,0,r.M,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Ib(-1,0,["NIP/email"])),(l()(),t.pb(37,0,null,0,8,"ion-input",[["name","nip"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0;return"ionBlur"===n&&(o=!1!==t.Bb(l,40)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t.Bb(l,40)._handleInputEvent(e.target)&&o),o}),i.U,i.o)),t.ob(38,16384,null,0,s.j,[],{required:[0,"required"]},null),t.Fb(1024,null,s.c,(function(l){return[l]}),[s.j]),t.ob(40,16384,null,0,r.Jb,[t.k],null,null),t.Fb(1024,null,s.d,(function(l){return[l]}),[r.Jb]),t.ob(42,671744,null,0,s.i,[[2,s.a],[6,s.c],[8,null],[6,s.d]],{name:[0,"name"],model:[1,"model"]},null),t.Fb(2048,null,s.e,null,[s.i]),t.ob(44,16384,null,0,s.f,[[4,s.e]],null,null),t.ob(45,49152,null,0,r.F,[t.h,t.k,t.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),t.pb(46,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(47,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(48,0,null,null,13,"ion-item",[],null,null,null,i.W,i.p)),t.ob(49,49152,null,0,r.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(50,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.X,i.r)),t.ob(51,49152,null,0,r.M,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Ib(-1,0,["Password"])),(l()(),t.pb(53,0,null,0,8,"ion-input",[["name","password"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0;return"ionBlur"===n&&(o=!1!==t.Bb(l,56)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t.Bb(l,56)._handleInputEvent(e.target)&&o),o}),i.U,i.o)),t.ob(54,16384,null,0,s.j,[],{required:[0,"required"]},null),t.Fb(1024,null,s.c,(function(l){return[l]}),[s.j]),t.ob(56,16384,null,0,r.Jb,[t.k],null,null),t.Fb(1024,null,s.d,(function(l){return[l]}),[r.Jb]),t.ob(58,671744,null,0,s.i,[[2,s.a],[6,s.c],[8,null],[6,s.d]],{name:[0,"name"],model:[1,"model"]},null),t.Fb(2048,null,s.e,null,[s.i]),t.ob(60,16384,null,0,s.f,[[4,s.e]],null,null),t.ob(61,49152,null,0,r.F,[t.h,t.k,t.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),t.pb(62,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(63,0,null,null,2,"div",[["id","errorMessage"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.pb(64,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(65,null,["",""])),(l()(),t.pb(66,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(67,0,null,null,2,"ion-button",[["color","primary"],["expand","full"],["size","large"],["type","submit"]],null,null,null,i.K,i.e)),t.ob(68,49152,null,0,r.j,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"],type:[3,"type"]},null),(l()(),t.Ib(-1,0,["Masuk"])),(l()(),t.pb(70,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(71,0,null,null,4,"div",[["align","center"],["id","spinnerDownloadLink"],["style","color: #665; background-color: white; padding: 5px"]],null,null,null,null,null)),(l()(),t.pb(72,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Generate download link for android and windows "])),(l()(),t.pb(74,0,null,null,1,"ion-spinner",[["name","lines"]],null,null,null,i.eb,i.y)),t.ob(75,49152,null,0,r.ob,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(76,0,null,null,2,"ion-button",[["color","primary"],["expand","full"],["id","downloadPwa"],["size","large"]],null,null,null,i.K,i.e)),t.ob(77,49152,null,0,r.j,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),t.Ib(-1,0,["Download APP"])),(l()(),t.pb(79,0,null,null,0,"div",[["align","center"],["id","appInstalled"],["style","color: #665; background-color: white; padding: 5px"]],null,null,null,null,null)),(l()(),t.pb(80,0,null,null,4,"div",[["id","iphoneMessage"],["style","color: #665; background-color: white; padding: 5px"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Install this webapp to your iPhone: tap "])),(l()(),t.pb(82,0,null,null,1,"ion-icon",[["name","share"]],null,null,null,i.T,i.n)),t.ob(83,49152,null,0,r.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.Ib(-1,null,[" and then Add to home screen"])),(l()(),t.pb(85,0,null,0,1,"ion-col",[["size","1"]],null,null,null,i.O,i.i)),t.ob(86,49152,null,0,r.s,[t.h,t.k,t.x],{size:[0,"size"]},null)],(function(l,n){l(n,8,0,"6"),l(n,11,0,"6"),l(n,21,0,"1"),l(n,23,0,"10"),l(n,35,0,"floating"),l(n,38,0,""),l(n,42,0,"nip",""),l(n,45,0,"nip","","text"),l(n,51,0,"floating"),l(n,54,0,""),l(n,58,0,"password",""),l(n,61,0,"password","","password"),l(n,68,0,"primary","full","large","submit"),l(n,75,0,"lines"),l(n,77,0,"primary","full","large"),l(n,83,0,"share"),l(n,86,0,"1")}),(function(l,n){var e=n.component;l(n,24,0,t.Bb(n,28).ngClassUntouched,t.Bb(n,28).ngClassTouched,t.Bb(n,28).ngClassPristine,t.Bb(n,28).ngClassDirty,t.Bb(n,28).ngClassValid,t.Bb(n,28).ngClassInvalid,t.Bb(n,28).ngClassPending),l(n,37,0,t.Bb(n,38).required?"":null,t.Bb(n,44).ngClassUntouched,t.Bb(n,44).ngClassTouched,t.Bb(n,44).ngClassPristine,t.Bb(n,44).ngClassDirty,t.Bb(n,44).ngClassValid,t.Bb(n,44).ngClassInvalid,t.Bb(n,44).ngClassPending),l(n,53,0,t.Bb(n,54).required?"":null,t.Bb(n,60).ngClassUntouched,t.Bb(n,60).ngClassTouched,t.Bb(n,60).ngClassPristine,t.Bb(n,60).ngClassDirty,t.Bb(n,60).ngClassValid,t.Bb(n,60).ngClassInvalid,t.Bb(n,60).ngClassPending),l(n,63,0,e.errorMessage),l(n,65,0,e.errorMessage)}))}function y(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"app-login",[],null,null,null,m,h)),t.ob(1,114688,null,0,g,[a.a,c.a,r.Fb,b],null,null)],(function(l,n){l(n,1,0)}),null)}var f=t.lb("app-login",g,y,{},{},[]),v=e("SVse"),I=e("iInd");class k{}e.d(n,"LoginPageModuleNgFactory",(function(){return B}));var B=t.mb(o,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[u.a,f]],[3,t.j],t.v]),t.zb(4608,v.l,v.k,[t.s,[2,v.t]]),t.zb(4608,s.l,s.l,[]),t.zb(4608,r.b,r.b,[t.x,t.g]),t.zb(4608,r.Db,r.Db,[r.b,t.j,t.p]),t.zb(4608,r.Gb,r.Gb,[r.b,t.j,t.p]),t.zb(1073742336,v.b,v.b,[]),t.zb(1073742336,s.k,s.k,[]),t.zb(1073742336,s.b,s.b,[]),t.zb(1073742336,r.Ab,r.Ab,[]),t.zb(1073742336,I.p,I.p,[[2,I.u],[2,I.m]]),t.zb(1073742336,k,k,[]),t.zb(1073742336,o,o,[]),t.zb(1024,I.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);