(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"/yGZ":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var o=u("pMnS"),s=u("MKJQ"),r=u("sZkV"),t=u("s7LF"),b=u("H+bZ"),a=u("r4Kj");class g{constructor(l,n,u){this.apiService=l,this.config=n,this.platform=u,this.settings=JSON.parse(localStorage.getItem("settings"))}ngOnInit(){this.apiService.getSetToken().subscribe(l=>{null!=l.token?(localStorage.setItem("token",l.token),localStorage.setItem("settings",JSON.stringify(l.settings)),document.querySelector("#content").setAttribute("style","--background: url('"+this.config.serverUrl+"/assets/settings/"+l.settings.background_login+"') no-repeat 0 0/auto 100%;"),null!=localStorage.getItem("user")&&window.open("/tabs","_self")):(console.log(l),this.apiService.gangguan(l))},l=>{this.apiService.gangguan(l),console.log(l)})}login(l){var n=!0;this.errorMessage="",""==l.value.nip&&(this.errorMessage=this.errorMessage+"<br>nip/email harus diisi<br>",n=!1),""==l.value.password&&(this.errorMessage=this.errorMessage+"<br>password harus diisi",n=!1),n&&this.apiService.postData("login",{nip:l.value.nip,password:l.value.password}).subscribe(l=>{console.log(l),0==l.responseCode?this.errorMessage=l.responseMessage:1==l.responseCode&&(localStorage.setItem("user",JSON.stringify(l.user)),window.location.href="/tabs")},l=>{console.log(l),this.apiService.gangguan(l)})}setServerUrl(l){this.apiService.getSetToken().subscribe(l=>{console.log("result token "+l),null!=l.token?localStorage.setItem("token",l.token):(console.log(l),this.apiService.gangguan(l))},l=>{console.log(l),this.apiService.gangguan(l)})}}var p=e.nb({encapsulation:0,styles:[["#errorMessage[_ngcontent-%COMP%]{color:#f2f2f2}"]],data:{}});function c(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,72,"ion-content",[["id","content"]],null,null,null,s.O,s.j)),e.ob(1,49152,null,0,r.t,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,13,"ion-grid",[["style","background-color: #f2f2f2; -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);"]],null,null,null,s.Q,s.l)),e.ob(3,49152,null,0,r.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(5,0,null,0,10,"ion-row",[],null,null,null,s.ab,s.v)),e.ob(6,49152,null,0,r.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,2,"ion-col",[["align","right"],["size","6"]],null,null,null,s.N,s.i)),e.ob(8,49152,null,0,r.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(9,0,null,0,0,"img",[["class","img-responsive logo-pln-ip"],["src","assets/images/logo-pln-ip.png"]],null,null,null,null,null)),(l()(),e.pb(10,0,null,0,5,"ion-col",[["size","6"]],null,null,null,s.N,s.i)),e.ob(11,49152,null,0,r.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(12,0,null,0,0,"img",[["class","img-responsive logo-bali-smart-innovation"],["src","assets/images/logo-bali-smart-innovation.png"]],null,null,null,null,null)),(l()(),e.pb(13,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(15,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(16,0,null,0,56,"ion-grid",[],null,null,null,s.Q,s.l)),e.ob(17,49152,null,0,r.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(18,0,null,0,54,"ion-row",[],null,null,null,s.ab,s.v)),e.ob(19,49152,null,0,r.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(20,0,null,0,1,"ion-col",[["size","1"]],null,null,null,s.N,s.i)),e.ob(21,49152,null,0,r.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(22,0,null,0,48,"ion-col",[["size","10"]],null,null,null,s.N,s.i)),e.ob(23,49152,null,0,r.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(24,0,null,0,46,"form",[["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0,o=l.component;return"submit"===n&&(i=!1!==e.Bb(l,26).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Bb(l,26).onReset()&&i),"ngSubmit"===n&&(i=!1!==o.login(e.Bb(l,26))&&i),i}),null,null)),e.ob(25,16384,null,0,t.m,[],null,null),e.ob(26,4210688,[["form",4]],0,t.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Fb(2048,null,t.a,null,[t.h]),e.ob(28,16384,null,0,t.g,[[4,t.a]],null,null),(l()(),e.pb(29,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(32,0,null,null,13,"ion-item",[],null,null,null,s.V,s.p)),e.ob(33,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(34,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,s.W,s.r)),e.ob(35,49152,null,0,r.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["NIP / Email"])),(l()(),e.pb(37,0,null,0,8,"ion-input",[["name","nip"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Bb(l,40)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Bb(l,40)._handleInputEvent(u.target)&&i),i}),s.T,s.o)),e.ob(38,16384,null,0,t.j,[],{required:[0,"required"]},null),e.Fb(1024,null,t.c,(function(l){return[l]}),[t.j]),e.ob(40,16384,null,0,r.Jb,[e.k],null,null),e.Fb(1024,null,t.d,(function(l){return[l]}),[r.Jb]),e.ob(42,671744,null,0,t.i,[[2,t.a],[6,t.c],[8,null],[6,t.d]],{name:[0,"name"],model:[1,"model"]},null),e.Fb(2048,null,t.e,null,[t.i]),e.ob(44,16384,null,0,t.f,[[4,t.e]],null,null),e.ob(45,49152,null,0,r.F,[e.h,e.k,e.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.pb(46,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(47,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(48,0,null,null,13,"ion-item",[],null,null,null,s.V,s.p)),e.ob(49,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(50,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,s.W,s.r)),e.ob(51,49152,null,0,r.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Password"])),(l()(),e.pb(53,0,null,0,8,"ion-input",[["name","password"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Bb(l,56)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Bb(l,56)._handleInputEvent(u.target)&&i),i}),s.T,s.o)),e.ob(54,16384,null,0,t.j,[],{required:[0,"required"]},null),e.Fb(1024,null,t.c,(function(l){return[l]}),[t.j]),e.ob(56,16384,null,0,r.Jb,[e.k],null,null),e.Fb(1024,null,t.d,(function(l){return[l]}),[r.Jb]),e.ob(58,671744,null,0,t.i,[[2,t.a],[6,t.c],[8,null],[6,t.d]],{name:[0,"name"],model:[1,"model"]},null),e.Fb(2048,null,t.e,null,[t.i]),e.ob(60,16384,null,0,t.f,[[4,t.e]],null,null),e.ob(61,49152,null,0,r.F,[e.h,e.k,e.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.pb(62,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(63,0,null,null,2,"div",[["id","errorMessage"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e.pb(64,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(65,null,["",""])),(l()(),e.pb(66,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(67,0,null,null,2,"ion-button",[["color","primary"],["expand","full"],["size","large"],["type","submit"]],null,null,null,s.J,s.e)),e.ob(68,49152,null,0,r.j,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"],type:[3,"type"]},null),(l()(),e.Ib(-1,0,["Masuk"])),(l()(),e.pb(70,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(71,0,null,0,1,"ion-col",[["size","1"]],null,null,null,s.N,s.i)),e.ob(72,49152,null,0,r.s,[e.h,e.k,e.x],{size:[0,"size"]},null)],(function(l,n){l(n,8,0,"6"),l(n,11,0,"6"),l(n,21,0,"1"),l(n,23,0,"10"),l(n,35,0,"floating"),l(n,38,0,""),l(n,42,0,"nip",""),l(n,45,0,"nip","","text"),l(n,51,0,"floating"),l(n,54,0,""),l(n,58,0,"password",""),l(n,61,0,"password","","password"),l(n,68,0,"primary","full","large","submit"),l(n,72,0,"1")}),(function(l,n){var u=n.component;l(n,24,0,e.Bb(n,28).ngClassUntouched,e.Bb(n,28).ngClassTouched,e.Bb(n,28).ngClassPristine,e.Bb(n,28).ngClassDirty,e.Bb(n,28).ngClassValid,e.Bb(n,28).ngClassInvalid,e.Bb(n,28).ngClassPending),l(n,37,0,e.Bb(n,38).required?"":null,e.Bb(n,44).ngClassUntouched,e.Bb(n,44).ngClassTouched,e.Bb(n,44).ngClassPristine,e.Bb(n,44).ngClassDirty,e.Bb(n,44).ngClassValid,e.Bb(n,44).ngClassInvalid,e.Bb(n,44).ngClassPending),l(n,53,0,e.Bb(n,54).required?"":null,e.Bb(n,60).ngClassUntouched,e.Bb(n,60).ngClassTouched,e.Bb(n,60).ngClassPristine,e.Bb(n,60).ngClassDirty,e.Bb(n,60).ngClassValid,e.Bb(n,60).ngClassInvalid,e.Bb(n,60).ngClassPending),l(n,63,0,u.errorMessage),l(n,65,0,u.errorMessage)}))}function d(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-login",[],null,null,null,c,p)),e.ob(1,114688,null,0,g,[b.a,a.a,r.Fb],null,null)],(function(l,n){l(n,1,0)}),null)}var h=e.lb("app-login",g,d,{},{},[]),m=u("SVse"),v=u("iInd");class f{}u.d(n,"LoginPageModuleNgFactory",(function(){return k}));var k=e.mb(i,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[o.a,h]],[3,e.j],e.v]),e.zb(4608,m.l,m.k,[e.s,[2,m.t]]),e.zb(4608,t.l,t.l,[]),e.zb(4608,r.b,r.b,[e.x,e.g]),e.zb(4608,r.Db,r.Db,[r.b,e.j,e.p]),e.zb(4608,r.Gb,r.Gb,[r.b,e.j,e.p]),e.zb(1073742336,m.b,m.b,[]),e.zb(1073742336,t.k,t.k,[]),e.zb(1073742336,t.b,t.b,[]),e.zb(1073742336,r.Ab,r.Ab,[]),e.zb(1073742336,v.p,v.p,[[2,v.u],[2,v.m]]),e.zb(1073742336,f,f,[]),e.zb(1073742336,i,i,[]),e.zb(1024,v.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);