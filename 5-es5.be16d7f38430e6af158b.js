function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{u2QP:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},o=u("pMnS"),i=u("sZkV"),s=u("SVse"),r=u("iInd"),a=u("MKJQ"),b=u("s7LF"),c=u("mrSG"),p=u("H+bZ"),d=u("r4Kj"),m=function(){function l(n,u,e,t){_classCallCheck(this,l),this.apiService=n,this.activatedRoute=u,this.alertController=e,this.config=t,this.user=JSON.parse(localStorage.getItem("user"))}return _createClass(l,[{key:"ngOnInit",value:function(){this.avatarUserUrl=this.config.serverUrl+"/assets/profile-pics/",this.getPageForumIde();for(var l=document.getElementsByClassName("ub"),n=0;n<l.length;n++)l[n].style.display="none"}},{key:"showUsersBiasa",value:function(){this.presentAlertCheckbox()}},{key:"addUsersIde",value:function(l){console.log(l.value)}},{key:"getPageForumIde",value:function(){var l=this;this.activatedRoute.queryParams.subscribe((function(n){var u=parseInt(n.ideId);l.ideId=u,l.apiService.postData("getPageForumIde",{activeUserId:l.user.id,ideId:u}).subscribe((function(n){1==n.responseCode&&(l.ide=n.ide,l.chatIde=n.chatIde,l.usersBiasa=n.usersBiasa,l.members=n.members,l.mentors=n.mentors,l.judul=n.ide.judul,l.latarBelakang=n.ide.latar_belakang,l.tujuan=n.ide.tujuan,l.costBenefitAnalysis=n.ide.costBenefitAnalysis,l.mentorId=n.ide.mentorId,l.mentorName=n.ide.mentorName,l.applicantId=n.ide.applicantId,l.applicantName=n.ide.applicantName,l.memberId=n.ide.memberId,l.memberName=n.ide.memberName,l.status=n.ide.status,l.progress=n.ide.progress,l.attachmentsIde=n.ide.attachments)}),(function(n){l.apiService.gangguan(n),console.log(n)}))}))}},{key:"downloadAttachmentIde",value:function(l){window.open(this.config.serverUrl+"/api/downloadAttachmentIde/"+l,"_self")}},{key:"onChangeMentorId",value:function(l,n){this.ideId=n,this.mentorId=l}},{key:"selectMentorByRso",value:function(l){return c.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n,u=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(n=!0,null==this.mentorId&&(n=!1,this.presentAlert("Info","Harus diisi","Harus pilih mentor!","OK")),l.t0=n,!l.t0){l.next=7;break}return l.next=6,this.alertController.create({header:"Konfirmasi",message:"Apakah Anda yakin?",buttons:[{text:"Tidak",role:"cancel",cssClass:"secondary",handler:function(l){}},{text:"Ya",handler:function(){u.apiService.postData("selectMentorByRso",{activeUserId:u.user.id,ideId:u.ideId,mentorId:u.mentorId}).subscribe((function(l){0==l.responseCode?u.presentAlert("Info","",l.responseMessage,"OK"):1==l.responseCode&&u.getPageForumIde()}),(function(l){u.apiService.gangguan(l),console.log(l)}))}}]});case 6:l.sent.present();case 7:case"end":return l.stop()}}),l,this)})))}},{key:"presentAlert",value:function(l,n,u,e){return c.a(this,void 0,void 0,regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:l,subHeader:n,message:u,buttons:[e]});case 2:return o=t.sent,t.next=5,o.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"rsoOrForumIde",value:function(l,n,u){return c.a(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"Konfirmasi",message:"Apakah Anda yakin?",buttons:[{text:"Tidak",role:"cancel",cssClass:"secondary",handler:function(l){}},{text:"Ya",handler:function(){t.apiService.postData("rsoOrForumIde",{activeUserId:t.user.id,ideId:l,ideStatus:n,mentorId:u}).subscribe((function(l){0==l.responseCode?t.presentAlert("Info","",l.responseMessage,"OK"):1==l.responseCode&&t.getPageForumIde()}),(function(l){t.apiService.gangguan(l),console.log(l)}))}}]});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"updateStatusIde",value:function(l){return c.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var u=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"Konfirmasi",message:"Apakah Anda yakin?",buttons:[{text:"Tidak",role:"cancel",cssClass:"secondary",handler:function(l){}},{text:"Ya",handler:function(){u.apiService.postData("updateStatusIde",{activeUserId:u.user.id,ideId:u.ideId,ideStatus:l,mentorId:u.mentorId}).subscribe((function(l){0==l.responseCode||1==l.responseCode&&u.getPageForumIde()}),(function(l){console.log(l)}))}}]});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"submitKomenIde",value:function(){return c.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n,u,e,t,o=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(n=!0,null==this.komen&&(n=!1,this.msgSubmitKomen="Komentar harus diisi",document.getElementById("stlMsgSubmitKomen").style.color="red"),n){if(u=new FormData,null==(e=this.attachments))u.append("attachments",void 0);else for(t=0;t<e.length;t++)u.append("attachments",e[t],e[t].name);u.append("komen",this.komen),u.append("activeUserId",this.user.id),u.append("userId",this.user.id),u.append("ideId",this.ideId),this.apiService.postData("submitKomenIde",u).subscribe((function(l){console.log(l),0==l.responseCode?(o.msgSubmitKomen=l.responseMessage,document.getElementById("stlMsgSubmitKomen").style.color="red"):1==l.responseCode&&(o.msgSubmitKomen=l.responseMessage,o.komen="",o.attachments=void 0,o.msgAttachment="",document.getElementById("stlMsgSubmitKomen").style.color="green",o.getPageForumIde())}),(function(l){console.log(l),o.apiService.gangguan(l)}))}case 2:case"end":return l.stop()}}),l,this)})))}},{key:"downloadAttachment",value:function(l){window.open(this.config.serverUrl+"/api/downloadAttachmentChatIde/"+l,"_self")}},{key:"onChangeAttachments",value:function(l){this.attachments=l.target.files,this.msgAttachment=l.target.files.length+" file"}},{key:"onChangeProgress",value:function(l){this.apiService.postData("changeProgressIde",{activeUserId:this.user.id,ideId:this.ideId,ideProgress:l.target.value}).subscribe((function(l){}),(function(l){console.log(l)}))}},{key:"presentAlertCheckbox",value:function(){return c.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n,u,e,t=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:for(n=[],u=0;u<this.usersBiasa.length;u++)n.push({name:"checkbox1",type:"checkbox",label:this.usersBiasa[u].name,value:this.usersBiasa[u].id,checked:!1});return l.next=3,this.alertController.create({header:"Pilih Member Lain",inputs:n,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:"Ok",handler:function(l){t.apiService.postData("updateMembersIde",{activeUserId:t.user.id,ideId:t.ideId,applicantId:t.applicantId,mentorId:t.mentorId,membersId:l}).subscribe((function(l){0==l.responseCode||1==l.responseCode&&(console.log(l),t.members=l.members)}),(function(l){console.log(l)}))}}]});case 3:return e=l.sent,l.next=6,e.present();case 6:case"end":return l.stop()}}),l,this)})))}}]),l}(),g=e.nb({encapsulation:0,styles:[['.separator[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center}.separator[_ngcontent-%COMP%]::after, .separator[_ngcontent-%COMP%]::before{content:"";flex:1;border-bottom:1px solid #777}.separator[_ngcontent-%COMP%]::before{margin-right:.25em}.separator[_ngcontent-%COMP%]::after{margin-left:.25em}']],data:{}});function h(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,4,"a",[["style","text-decoration: none;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,1).onClick(u)&&t),"click"===n&&(t=!1!==e.Bb(l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ob(1,737280,null,0,i.Hb,[s.h,i.Eb,e.k,r.m,[2,r.n]],{routerDirection:[0,"routerDirection"]},null),e.ob(2,671744,null,0,r.o,[r.m,r.a,s.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e.Db(3,{userId:0}),(l()(),e.Ib(4,null,[" "," , "]))],(function(l,n){l(n,1,0,"root");var u=l(n,3,0,n.context.$implicit.memberId);l(n,2,0,u,"/tabs/profile")}),(function(l,n){l(n,0,0,e.Bb(n,2).target,e.Bb(n,2).href),l(n,4,0,n.context.$implicit.memberName)}))}function f(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,4,"div",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.downloadAttachmentIde(l.context.$implicit)&&e),e}),null,null)),(l()(),e.pb(1,0,null,null,0,"img",[["class","img-responsive"],["height","15"],["src","assets/images/file.png"],["width","15"]],null,null,null,null,null)),(l()(),e.Ib(2,null,["",""])),e.Cb(0,s.o,[]),(l()(),e.pb(4,0,null,null,0,"br",[],null,null,null,null,null))],null,(function(l,n){l(n,2,0,e.Jb(n,2,0,e.Bb(n,3).transform(n.context.$implicit,29)))}))}function k(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,0,"img",[["class","img-responsive"],["height","15"],["src","assets/images/hourglass.png"],["width","15"]],null,null,null,null,null))],null,null)}function I(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,0,"img",[["class","img-responsive"],["height","15"],["src","assets/images/chat.png"],["width","15"]],null,null,null,null,null))],null,null)}function v(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,12,"ion-range",[["color","secondary"],["max","100"],["min","0"],["snaps","true"],["step","10"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,1)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,1)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.progress=u)&&t),"click"===n&&(t=!1!==o.onChangeProgress(u)&&t),t}),a.Z,a.u)),e.ob(1,16384,null,0,i.Ib,[e.k],null,null),e.Fb(1024,null,b.d,(function(l){return[l]}),[i.Ib]),e.ob(3,671744,null,0,b.i,[[8,null],[8,null],[8,null],[6,b.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,b.e,null,[b.i]),e.ob(5,16384,null,0,b.f,[[4,b.e]],null,null),e.ob(6,49152,null,0,i.Y,[e.h,e.k,e.x],{color:[0,"color"],max:[1,"max"],min:[2,"min"],snaps:[3,"snaps"],step:[4,"step"]},null),(l()(),e.pb(7,0,null,0,2,"ion-label",[["slot","start"]],null,null,null,a.W,a.r)),e.ob(8,49152,null,0,i.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["0%"])),(l()(),e.pb(10,0,null,0,2,"ion-label",[["slot","end"]],null,null,null,a.W,a.r)),e.ob(11,49152,null,0,i.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["100%"]))],(function(l,n){l(n,3,0,n.component.progress),l(n,6,0,"secondary","100","0","true","10")}),(function(l,n){l(n,0,0,e.Bb(n,5).ngClassUntouched,e.Bb(n,5).ngClassTouched,e.Bb(n,5).ngClassPristine,e.Bb(n,5).ngClassDirty,e.Bb(n,5).ngClassValid,e.Bb(n,5).ngClassInvalid,e.Bb(n,5).ngClassPending)}))}function x(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"ion-button",[["color","success"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateStatusIde("disetujui")&&e),e}),a.J,a.e)),e.ob(1,49152,null,0,i.j,[e.h,e.k,e.x],{color:[0,"color"],size:[1,"size"]},null),(l()(),e.Ib(-1,0,["Setujui"]))],(function(l,n){l(n,1,0,"success","small")}),null)}function z(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"div",[["style","float:right"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,x)),e.ob(2,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,100==n.component.progress)}),null)}function C(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,6,"div",[["style","float:right"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,2,"ion-button",[["color","danger"],["size","small"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.rsoOrForumIde(t.ideId,"menunggu rso",null)&&e),e}),a.J,a.e)),e.ob(2,49152,null,0,i.j,[e.h,e.k,e.x],{color:[0,"color"],size:[1,"size"],type:[2,"type"]},null),(l()(),e.Ib(-1,0,["Ke RSO"])),(l()(),e.pb(4,0,null,null,2,"ion-button",[["color","success"],["size","small"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.rsoOrForumIde(t.ideId,"diskusi",t.mentorId)&&e),e}),a.J,a.e)),e.ob(5,49152,null,0,i.j,[e.h,e.k,e.x],{color:[0,"color"],size:[1,"size"],type:[2,"type"]},null),(l()(),e.Ib(-1,0,["Diskusi"]))],(function(l,n){l(n,2,0,"danger","small","submit"),l(n,5,0,"success","small","submit")}),null)}function y(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,a.bb,a.x)),e.ob(1,49152,null,0,i.kb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Ib(2,0,["",""]))],(function(l,n){l(n,1,0,e.tb(1,"",n.context.$implicit.id,""))}),(function(l,n){l(n,2,0,n.context.$implicit.name)}))}function B(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,18,"form",[["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e.Bb(l,2).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Bb(l,2).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.selectMentorByRso(e.Bb(l,2))&&t),t}),null,null)),e.ob(1,16384,null,0,b.m,[],null,null),e.ob(2,4210688,[["form",4]],0,b.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Fb(2048,null,b.a,null,[b.h]),e.ob(4,16384,null,0,b.g,[[4,b.a]],null,null),(l()(),e.pb(5,0,null,null,10,"ion-item",[],null,null,null,a.V,a.p)),e.ob(6,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,2,"ion-label",[],null,null,null,a.W,a.r)),e.ob(8,49152,null,0,i.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Pilih Mentor"])),(l()(),e.pb(10,0,null,0,5,"ion-select",[["name","mentorId"],["placeholder","Pilih Mentor"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,13)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,13)._handleChangeEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.onChangeMentorId(e.Bb(l,12).value,o.ideId)&&t),t}),a.cb,a.w)),e.Fb(5120,null,b.d,(function(l){return[l]}),[i.Ib]),e.ob(12,49152,[["C",4]],0,i.jb,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"]},null),e.ob(13,16384,null,0,i.Ib,[e.k],null,null),(l()(),e.eb(16777216,null,0,1,null,y)),e.ob(15,278528,null,0,s.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(16,0,null,null,2,"ion-button",[["color","primary"],["expand","full"],["type","submit"]],null,null,null,a.J,a.e)),e.ob(17,49152,null,0,i.j,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),e.Ib(-1,0,["Submit"]))],(function(l,n){var u=n.component;l(n,12,0,"mentorId","Pilih Mentor"),l(n,15,0,u.mentors),l(n,17,0,"primary","full","submit")}),(function(l,n){l(n,0,0,e.Bb(n,4).ngClassUntouched,e.Bb(n,4).ngClassTouched,e.Bb(n,4).ngClassPristine,e.Bb(n,4).ngClassDirty,e.Bb(n,4).ngClassValid,e.Bb(n,4).ngClassInvalid,e.Bb(n,4).ngClassPending)}))}function w(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,2,"ion-button",[["color","danger"],["size","small"],["style","float: right;"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.rsoOrForumIde(t.ideId,"ditolak",null)&&e),e}),a.J,a.e)),e.ob(2,49152,null,0,i.j,[e.h,e.k,e.x],{color:[0,"color"],size:[1,"size"],type:[2,"type"]},null),(l()(),e.Ib(-1,0,["TOLAK"])),(l()(),e.pb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(6,0,null,null,1,"div",[["class","separator"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["atau"])),(l()(),e.pb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,B)),e.ob(10,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"danger","small","submit"),l(n,10,0,"rso"==u.user.role)}),null)}function M(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,4,"small",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.downloadAttachment(l.context.$implicit)&&e),e}),null,null)),(l()(),e.pb(1,0,null,null,0,"img",[["class","img-responsive"],["height","15"],["src","assets/images/file.png"],["width","15"]],null,null,null,null,null)),(l()(),e.Ib(2,null,["",""])),e.Cb(0,s.o,[]),(l()(),e.pb(4,0,null,null,0,"br",[],null,null,null,null,null))],null,(function(l,n){l(n,2,0,e.Jb(n,2,0,e.Bb(n,3).transform(n.context.$implicit,29)))}))}function K(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,19,"ion-item",[],null,null,null,a.V,a.p)),e.ob(1,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,2,"ion-avatar",[["style","border-color: white"]],null,null,null,a.G,a.b)),e.ob(3,49152,null,0,i.e,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,0,"img",[["class","img-responsive"],["height","15"],["width","15"]],[[8,"src",4]],null,null,null,null)),(l()(),e.Ib(-1,0,["\xa0\xa0\xa0 "])),(l()(),e.pb(6,0,null,0,13,"ion-text",[],null,null,null,a.gb,a.B)),e.ob(7,49152,null,0,i.tb,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(9,0,null,0,5,"div",[],null,null,null,null,null)),(l()(),e.pb(10,0,null,null,4,"a",[["style","text-decoration: none;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,11).onClick(u)&&t),"click"===n&&(t=!1!==e.Bb(l,12).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ob(11,737280,null,0,i.Hb,[s.h,i.Eb,e.k,r.m,[2,r.n]],{routerDirection:[0,"routerDirection"]},null),e.ob(12,671744,null,0,r.o,[r.m,r.a,s.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e.Db(13,{userId:0}),(l()(),e.Ib(14,null,["",""])),(l()(),e.pb(15,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e.Ib(16,null,["",""])),(l()(),e.eb(16777216,null,0,1,null,M)),e.ob(18,278528,null,0,s.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(19,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){l(n,11,0,"root");var u=l(n,13,0,n.context.$implicit.userId);l(n,12,0,u,"/tabs/profile"),l(n,18,0,n.context.$implicit.attachments)}),(function(l,n){l(n,4,0,e.tb(1,"",n.component.avatarUserUrl+n.context.$implicit.userPhoto,"")),l(n,10,0,e.Bb(n,12).target,e.Bb(n,12).href),l(n,14,0,n.context.$implicit.userName),l(n,16,0,n.context.$implicit.komen)}))}function P(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,15,"ion-header",[],null,null,null,a.R,a.m)),e.ob(1,49152,null,0,i.A,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,a.jb,a.E)),e.ob(3,49152,null,0,i.yb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.K,a.f)),e.ob(5,49152,null,0,i.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[["color","light"],["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,8).onClick(u)&&t),t}),a.H,a.c)),e.ob(7,49152,null,0,i.f,[e.h,e.k,e.x],{color:[0,"color"],defaultHref:[1,"defaultHref"]},null),e.ob(8,16384,null,0,i.g,[[2,i.eb],i.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(9,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.K,a.f)),e.ob(10,49152,null,0,i.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(11,0,null,0,1,"ion-menu-button",[],null,null,null,a.Y,a.t)),e.ob(12,49152,null,0,i.Q,[e.h,e.k,e.x],null,null),(l()(),e.pb(13,0,null,0,2,"ion-title",[],null,null,null,a.ib,a.D)),e.ob(14,49152,null,0,i.wb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,[" Forum Ide "])),(l()(),e.pb(16,0,null,null,192,"ion-content",[],null,null,null,a.O,a.j)),e.ob(17,49152,null,0,i.t,[e.h,e.k,e.x],null,null),(l()(),e.pb(18,0,null,0,142,"ion-grid",[["style","background-color: #eee; -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%); padding-bottom: 50px;"]],null,null,null,a.Q,a.l)),e.ob(19,49152,null,0,i.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(20,0,null,0,11,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(21,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(22,0,null,0,1,"ion-col",[["size","1"]],null,null,null,a.N,a.i)),e.ob(23,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(24,0,null,0,2,"ion-col",[["align","right"],["size","5"]],null,null,null,a.N,a.i)),e.ob(25,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(26,0,null,0,0,"img",[["class","img-responsive logo-pln-ip"],["src","assets/images/logo-pln-ip.png"]],null,null,null,null,null)),(l()(),e.pb(27,0,null,0,2,"ion-col",[["size","5"]],null,null,null,a.N,a.i)),e.ob(28,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(29,0,null,0,0,"img",[["class","img-responsive logo-bali-smart-innovation"],["src","assets/images/logo-bali-smart-innovation.png"]],null,null,null,null,null)),(l()(),e.pb(30,0,null,0,1,"ion-col",[["size","1"]],null,null,null,a.N,a.i)),e.ob(31,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(32,0,null,0,4,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(33,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(34,0,null,0,2,"ion-col",[["size","12"]],null,null,null,a.N,a.i)),e.ob(35,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(36,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(37,0,null,0,7,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(38,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(39,0,null,0,2,"ion-col",[["size","4"]],null,null,null,a.N,a.i)),e.ob(40,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Judul"])),(l()(),e.pb(42,0,null,0,2,"ion-col",[["size","8"]],null,null,null,a.N,a.i)),e.ob(43,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(44,0,[": ",""])),(l()(),e.pb(45,0,null,0,7,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(46,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(47,0,null,0,2,"ion-col",[["size","4"]],null,null,null,a.N,a.i)),e.ob(48,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Latar Belakang"])),(l()(),e.pb(50,0,null,0,2,"ion-col",[["size","8"]],null,null,null,a.N,a.i)),e.ob(51,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(52,0,[": ",""])),(l()(),e.pb(53,0,null,0,7,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(54,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(55,0,null,0,2,"ion-col",[["size","4"]],null,null,null,a.N,a.i)),e.ob(56,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Tujuan"])),(l()(),e.pb(58,0,null,0,2,"ion-col",[["size","8"]],null,null,null,a.N,a.i)),e.ob(59,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(60,0,[": ",""])),(l()(),e.pb(61,0,null,0,7,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(62,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(63,0,null,0,2,"ion-col",[["size","4"]],null,null,null,a.N,a.i)),e.ob(64,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Cost Benefit Analysis"])),(l()(),e.pb(66,0,null,0,2,"ion-col",[["size","8"]],null,null,null,a.N,a.i)),e.ob(67,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(68,0,[": ",""])),(l()(),e.pb(69,0,null,0,12,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(70,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(71,0,null,0,2,"ion-col",[["size","4"]],null,null,null,a.N,a.i)),e.ob(72,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Mentor"])),(l()(),e.pb(74,0,null,0,7,"ion-col",[["size","8"]],null,null,null,a.N,a.i)),e.ob(75,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,[": "])),(l()(),e.pb(77,0,null,0,4,"a",[["style","text-decoration: none;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,78).onClick(u)&&t),"click"===n&&(t=!1!==e.Bb(l,79).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ob(78,737280,null,0,i.Hb,[s.h,i.Eb,e.k,r.m,[2,r.n]],{routerDirection:[0,"routerDirection"]},null),e.ob(79,671744,null,0,r.o,[r.m,r.a,s.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e.Db(80,{userId:0}),(l()(),e.Ib(81,null,["",""])),(l()(),e.pb(82,0,null,0,12,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(83,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(84,0,null,0,2,"ion-col",[["size","4"]],null,null,null,a.N,a.i)),e.ob(85,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Pengaju"])),(l()(),e.pb(87,0,null,0,7,"ion-col",[["size","8"]],null,null,null,a.N,a.i)),e.ob(88,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,[": "])),(l()(),e.pb(90,0,null,0,4,"a",[["style","text-decoration: none;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,91).onClick(u)&&t),"click"===n&&(t=!1!==e.Bb(l,92).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ob(91,737280,null,0,i.Hb,[s.h,i.Eb,e.k,r.m,[2,r.n]],{routerDirection:[0,"routerDirection"]},null),e.ob(92,671744,null,0,r.o,[r.m,r.a,s.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e.Db(93,{userId:0}),(l()(),e.Ib(94,null,["",""])),(l()(),e.pb(95,0,null,0,11,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(96,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(97,0,null,0,2,"ion-col",[["size","4"]],null,null,null,a.N,a.i)),e.ob(98,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["User lain"])),(l()(),e.pb(100,0,null,0,6,"ion-col",[["size","8"]],null,null,null,a.N,a.i)),e.ob(101,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,[": "])),(l()(),e.pb(103,0,null,0,0,"img",[["class","img-responsive"],["height","15px"],["src","assets/images/pencil.png"],["width","15px"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showUsersBiasa()&&e),e}),null,null)),(l()(),e.Ib(-1,0,["\xa0\xa0\xa0 "])),(l()(),e.eb(16777216,null,0,1,null,h)),e.ob(106,278528,null,0,s.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(107,0,null,0,8,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(108,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(109,0,null,0,2,"ion-col",[["size","4"]],null,null,null,a.N,a.i)),e.ob(110,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Attachments"])),(l()(),e.pb(112,0,null,0,3,"ion-col",[["size","8"]],null,null,null,a.N,a.i)),e.ob(113,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.eb(16777216,null,0,1,null,f)),e.ob(115,278528,null,0,s.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(116,0,null,0,12,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(117,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(118,0,null,0,2,"ion-col",[["size","4"]],null,null,null,a.N,a.i)),e.ob(119,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Status"])),(l()(),e.pb(121,0,null,0,7,"ion-col",[["size","8"]],null,null,null,a.N,a.i)),e.ob(122,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,[": "])),(l()(),e.eb(16777216,null,0,1,null,k)),e.ob(125,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,0,1,null,I)),e.ob(127,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Ib(128,0,[" "," "])),(l()(),e.pb(129,0,null,0,7,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(130,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(131,0,null,0,2,"ion-col",[["size","4"]],null,null,null,a.N,a.i)),e.ob(132,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Progress"])),(l()(),e.pb(134,0,null,0,2,"ion-col",[["size","8"]],null,null,null,a.N,a.i)),e.ob(135,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(136,0,[": ","%"])),(l()(),e.pb(137,0,null,0,5,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(138,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(139,0,null,0,3,"ion-col",[["size","12"]],null,null,null,a.N,a.i)),e.ob(140,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.eb(16777216,null,0,1,null,v)),e.ob(142,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(143,0,null,0,5,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(144,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(145,0,null,0,3,"ion-col",[["size","12"]],null,null,null,a.N,a.i)),e.ob(146,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.eb(16777216,null,0,1,null,z)),e.ob(148,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(149,0,null,0,5,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(150,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(151,0,null,0,3,"ion-col",[["size","12"]],null,null,null,a.N,a.i)),e.ob(152,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.eb(16777216,null,0,1,null,C)),e.ob(154,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(155,0,null,0,5,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(156,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(157,0,null,0,3,"ion-col",[["size","12"]],null,null,null,a.N,a.i)),e.ob(158,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.eb(16777216,null,0,1,null,w)),e.ob(160,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(161,0,null,0,45,"ion-grid",[],null,null,null,a.Q,a.l)),e.ob(162,49152,null,0,i.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(163,0,null,0,43,"ion-row",[],null,null,null,a.ab,a.v)),e.ob(164,49152,null,0,i.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(165,0,null,0,1,"ion-col",[["size","1"]],null,null,null,a.N,a.i)),e.ob(166,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(167,0,null,0,37,"ion-col",[["size","10"]],null,null,null,a.N,a.i)),e.ob(168,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(169,0,null,0,35,"form",[["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e.Bb(l,171).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Bb(l,171).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.submitKomenIde()&&t),t}),null,null)),e.ob(170,16384,null,0,b.m,[],null,null),e.ob(171,4210688,[["form",4]],0,b.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Fb(2048,null,b.a,null,[b.h]),e.ob(173,16384,null,0,b.g,[[4,b.a]],null,null),(l()(),e.pb(174,0,null,null,11,"ion-item",[],null,null,null,a.V,a.p)),e.ob(175,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(176,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.W,a.r)),e.ob(177,49152,null,0,i.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Tulis Komentar"])),(l()(),e.pb(179,0,null,0,6,"ion-textarea",[["name","komen"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,180)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,180)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.komen=u)&&t),t}),a.hb,a.C)),e.ob(180,16384,null,0,i.Jb,[e.k],null,null),e.Fb(1024,null,b.d,(function(l){return[l]}),[i.Jb]),e.ob(182,671744,null,0,b.i,[[2,b.a],[8,null],[8,null],[6,b.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,b.e,null,[b.i]),e.ob(184,16384,null,0,b.f,[[4,b.e]],null,null),e.ob(185,49152,null,0,i.ub,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(186,0,null,null,12,"ion-item",[],null,null,null,a.V,a.p)),e.ob(187,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(188,0,null,0,8,"label",[["class","custom-file-upload"]],null,null,null,null,null)),(l()(),e.pb(189,0,null,null,6,"ion-input",[["multiple",""],["name","attachments"],["type","file"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,190)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,190)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.attachments=u)&&t),"change"===n&&(t=!1!==o.onChangeAttachments(u)&&t),t}),a.T,a.o)),e.ob(190,16384,null,0,i.Jb,[e.k],null,null),e.Fb(1024,null,b.d,(function(l){return[l]}),[i.Jb]),e.ob(192,671744,null,0,b.i,[[2,b.a],[8,null],[8,null],[6,b.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,b.e,null,[b.i]),e.ob(194,16384,null,0,b.f,[[4,b.e]],null,null),e.ob(195,49152,null,0,i.F,[e.h,e.k,e.x],{multiple:[0,"multiple"],name:[1,"name"],type:[2,"type"]},null),(l()(),e.Ib(-1,null,[" Lampiran "])),(l()(),e.Ib(-1,0,["\xa0\xa0\xa0\xa0 "])),(l()(),e.pb(198,0,null,0,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e.pb(199,0,null,null,2,"ion-button",[["color","primary"],["expand","full"],["type","submit"]],null,null,null,a.J,a.e)),e.ob(200,49152,null,0,i.j,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),e.Ib(-1,0,["Komentari"])),(l()(),e.pb(202,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(203,0,null,null,1,"p",[["id","stlMsgSubmitKomen"]],null,null,null,null,null)),(l()(),e.Ib(204,null,["",""])),(l()(),e.pb(205,0,null,0,1,"ion-col",[["size","1"]],null,null,null,a.N,a.i)),e.ob(206,49152,null,0,i.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.eb(16777216,null,0,1,null,K)),e.ob(208,278528,null,0,s.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"light","/"),l(n,8,0,"/"),l(n,23,0,"1"),l(n,25,0,"5"),l(n,28,0,"5"),l(n,31,0,"1"),l(n,35,0,"12"),l(n,40,0,"4"),l(n,43,0,"8"),l(n,48,0,"4"),l(n,51,0,"8"),l(n,56,0,"4"),l(n,59,0,"8"),l(n,64,0,"4"),l(n,67,0,"8"),l(n,72,0,"4"),l(n,75,0,"8"),l(n,78,0,"root");var e=l(n,80,0,u.mentorId);l(n,79,0,e,"/tabs/profile"),l(n,85,0,"4"),l(n,88,0,"8"),l(n,91,0,"root");var t=l(n,93,0,u.applicantId);l(n,92,0,t,"/tabs/profile"),l(n,98,0,"4"),l(n,101,0,"8"),l(n,106,0,u.members),l(n,110,0,"4"),l(n,113,0,"8"),l(n,115,0,u.attachmentsIde),l(n,119,0,"4"),l(n,122,0,"8"),l(n,125,0,"menunggu rso"==u.status||"menunggu mentor"==u.status),l(n,127,0,"diskusi"==u.status),l(n,132,0,"4"),l(n,135,0,"8"),l(n,140,0,"12"),l(n,142,0,"diskusi"==u.status),l(n,146,0,"12"),l(n,148,0,"mentor"==u.user.role&&"diskusi"==u.status),l(n,152,0,"12"),l(n,154,0,"mentor"==u.user.role&&"menunggu mentor"==u.status),l(n,158,0,"12"),l(n,160,0,"rso"==u.user.role&&"menunggu rso"==u.status),l(n,166,0,"1"),l(n,168,0,"10"),l(n,177,0,"floating"),l(n,182,0,"komen",u.komen),l(n,185,0,"komen"),l(n,192,0,"attachments",u.attachments),l(n,195,0,"","attachments","file"),l(n,200,0,"primary","full","submit"),l(n,206,0,"1"),l(n,208,0,u.chatIde)}),(function(l,n){var u=n.component;l(n,44,0,u.judul),l(n,52,0,u.latarBelakang),l(n,60,0,u.tujuan),l(n,68,0,u.costBenefitAnalysis),l(n,77,0,e.Bb(n,79).target,e.Bb(n,79).href),l(n,81,0,u.mentorName),l(n,90,0,e.Bb(n,92).target,e.Bb(n,92).href),l(n,94,0,u.applicantName),l(n,128,0,u.status),l(n,136,0,u.progress),l(n,169,0,e.Bb(n,173).ngClassUntouched,e.Bb(n,173).ngClassTouched,e.Bb(n,173).ngClassPristine,e.Bb(n,173).ngClassDirty,e.Bb(n,173).ngClassValid,e.Bb(n,173).ngClassInvalid,e.Bb(n,173).ngClassPending),l(n,179,0,e.Bb(n,184).ngClassUntouched,e.Bb(n,184).ngClassTouched,e.Bb(n,184).ngClassPristine,e.Bb(n,184).ngClassDirty,e.Bb(n,184).ngClassValid,e.Bb(n,184).ngClassInvalid,e.Bb(n,184).ngClassPending),l(n,189,0,e.Bb(n,194).ngClassUntouched,e.Bb(n,194).ngClassTouched,e.Bb(n,194).ngClassPristine,e.Bb(n,194).ngClassDirty,e.Bb(n,194).ngClassValid,e.Bb(n,194).ngClassInvalid,e.Bb(n,194).ngClassPending),l(n,198,0,u.msgAttachment),l(n,204,0,u.msgSubmitKomen)}))}var N=e.lb("app-forum-ide",m,(function(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-forum-ide",[],null,null,null,P,g)),e.ob(1,114688,null,0,m,[p.a,r.a,i.a,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),S=function l(){_classCallCheck(this,l)};u.d(n,"ForumIdePageModuleNgFactory",(function(){return F}));var F=e.mb(t,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[o.a,N]],[3,e.j],e.v]),e.zb(4608,s.l,s.k,[e.s,[2,s.t]]),e.zb(4608,b.l,b.l,[]),e.zb(4608,i.b,i.b,[e.x,e.g]),e.zb(4608,i.Db,i.Db,[i.b,e.j,e.p]),e.zb(4608,i.Gb,i.Gb,[i.b,e.j,e.p]),e.zb(1073742336,s.b,s.b,[]),e.zb(1073742336,b.k,b.k,[]),e.zb(1073742336,b.b,b.b,[]),e.zb(1073742336,i.Ab,i.Ab,[]),e.zb(1073742336,r.p,r.p,[[2,r.u],[2,r.m]]),e.zb(1073742336,S,S,[]),e.zb(1073742336,t,t,[]),e.zb(1024,r.k,(function(){return[[{path:"",component:m}],[{path:"",component:m}]]}),[])])}))}}]);