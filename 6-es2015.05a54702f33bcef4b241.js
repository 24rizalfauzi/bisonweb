(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1L7e":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var t=u("pMnS"),s=u("sZkV"),o=u("SVse"),a=u("iInd"),r=u("MKJQ"),b=u("s7LF"),c=u("mrSG"),h=u("H+bZ"),g=u("r4Kj");class p{constructor(l,n,u,e){this.apiService=l,this.activatedRoute=n,this.alertController=u,this.config=e,this.user=JSON.parse(localStorage.getItem("user")),this.currentTimestamp=Date.now(),this.isChatActive=!1}ngOnInit(){this.avatarUserUrl=this.config.serverUrl+"/assets/profile-pics/",this.getPageForumSharing();var l=document.getElementsByClassName("ub");for(let n=0;n<l.length;n++)l[n].style.display="none";console.log(this.currentTimestamp),console.log(this.jadwal)}updateMembers(){this.alertUpdateMembers()}addUsersSharing(l){console.log(l.value)}getPageForumSharing(){this.activatedRoute.queryParams.subscribe(l=>{const n=parseInt(l.sharingId);this.sharingId=n,this.apiService.postData("getPageForumSharing",{activeUserId:this.user.id,sharingId:n}).subscribe(l=>{1==l.responseCode&&(this.sharing=l.sharing,this.chatSharing=l.chatSharing,this.usersBiasa=l.usersBiasa,this.members=l.members,this.judul=l.sharing.judul,this.latarBelakang=l.sharing.latarBelakang,this.tujuan=l.sharing.tujuan,this.costBenefitAnalysis=l.sharing.costBenefitAnalysis,this.mentorId=l.sharing.mentorId,this.mentorName=l.sharing.mentorName,this.applicantId=l.sharing.applicantId,this.applicantName=l.sharing.applicantName,this.memberId=l.sharing.memberId,this.memberName=l.sharing.memberName,this.status=l.sharing.status,this.progress=l.sharing.progress,this.jadwal=l.sharing.jadwal,this.attachmentsSharing=l.sharing.attachments,Math.round(new Date(this.jadwal).getTime())<this.currentTimestamp&&(this.isChatActive=!0))},l=>{this.apiService.gangguan(l),console.log(l)})})}updateStatusSharing(l,n){return c.a(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"Konfirmasi",message:"Apakah Anda yakin?",buttons:[{text:"Tidak",role:"cancel",cssClass:"secondary",handler:l=>{}},{text:"Ya",handler:()=>{this.apiService.postData("updateStatusSharing",{activeUserId:this.user.id,sharingId:this.sharingId,mentorId:n,sharingStatus:l}).subscribe(l=>{0==l.responseCode||1==l.responseCode&&this.getPageForumSharing()},l=>{console.log(l)})}}]})).present()}))}submitKomenSharing(){return c.a(this,void 0,void 0,(function*(){var l=!0;if(null==this.komen&&(l=!1,this.msgSubmitKomen="Komentar harus diisi",document.getElementById("stlMsgSubmitKomen").style.color="red"),l){const l=new FormData,n=this.attachments;if(null==n)l.append("attachments",void 0);else for(let u=0;u<n.length;u++)l.append("attachments",n[u],n[u].name);l.append("komen",this.komen),l.append("userId",this.user.id),l.append("activeUserId",this.user.id),l.append("sharingId",this.sharingId),this.apiService.postData("submitKomenSharing",l).subscribe(l=>{console.log(l),0==l.responseCode?(this.msgSubmitKomen=l.responseMessage,document.getElementById("stlMsgSubmitKomen").style.color="red"):1==l.responseCode&&(this.msgSubmitKomen=l.responseMessage,this.komen="",this.attachments=void 0,this.msgAttachment="",document.getElementById("stlMsgSubmitKomen").style.color="green",this.getPageForumSharing())},l=>{console.log(l),this.apiService.gangguan(l)})}}))}downloadAttachmentSharing(l){window.open(this.config.serverUrl+"/api/downloadAttachmentSharing/"+l,"_self")}downloadAttachmentChatSharing(l){window.open(this.config.serverUrl+"/api/downloadAttachmentChatSharing/"+l,"_self")}onChangeAttachments(l){this.attachments=l.target.files,this.msgAttachment=l.target.files.length+" file"}alertUpdateMembers(){return c.a(this,void 0,void 0,(function*(){for(var l=[],n=0;n<this.usersBiasa.length;n++)l.push({name:"checkbox1",type:"checkbox",label:this.usersBiasa[n].name,value:this.usersBiasa[n].id,checked:!1});const u=yield this.alertController.create({header:"Checkbox",inputs:l,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:"Ok",handler:l=>{this.apiService.postData("updateMembersSharing",{activeUserId:this.user.id,sharingId:this.sharingId,applicantId:this.applicantId,mentorId:this.mentorId,membersId:l}).subscribe(l=>{0==l.responseCode||1==l.responseCode&&(console.log(l),this.members=l.members)},l=>{console.log(l)})}}]});yield u.present()}))}presentAlert(l,n,u,e){return c.a(this,void 0,void 0,(function*(){const i=yield this.alertController.create({header:l,subHeader:n,message:u,buttons:[e]});yield i.present()}))}selectJadwalByAdmin(l){return c.a(this,void 0,void 0,(function*(){var l=!0;null==this.jadwal&&(l=!1,this.presentAlert("Info","Harus diisi","Harus pilih Jadwal!","OK")),l&&(yield this.alertController.create({header:"Konfirmasi",message:"Apakah Anda yakin?",buttons:[{text:"Tidak",role:"cancel",cssClass:"secondary",handler:l=>{}},{text:"Ya",handler:()=>{this.apiService.postData("selectJadwalSharingByAdmin",{activeUserId:this.user.id,sharingId:this.sharingId,jadwal:this.jadwal}).subscribe(l=>{0==l.responseCode?this.presentAlert("Info","",l.responseMessage,"OK"):1==l.responseCode&&this.getPageForumSharing()},l=>{console.log(l),this.apiService.gangguan(l)})}}]})).present()}))}onChangeJadwal(l,n){this.sharingId=l,this.jadwal=n,console.log(this.sharingId),console.log(this.jadwal)}showUsersBiasa(){this.presentAlertCheckbox()}presentAlertCheckbox(){return c.a(this,void 0,void 0,(function*(){for(var l=[],n=0;n<this.usersBiasa.length;n++)l.push({name:"checkbox1",type:"checkbox",label:this.usersBiasa[n].name,value:this.usersBiasa[n].id,checked:!1});const u=yield this.alertController.create({header:"Pilih Member Lain",inputs:l,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:"Ok",handler:l=>{this.apiService.postData("updateMembersSharing",{activeUserId:this.user.id,ideId:this.sharingId,applicantId:this.applicantId,mentorId:this.mentorId,membersId:l}).subscribe(l=>{0==l.responseCode||1==l.responseCode&&(console.log(l),this.members=l.members)},l=>{console.log(l)})}}]});yield u.present()}))}}var m=e.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,4,"a",[["style","text-decoration: none;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Bb(l,1).onClick(u)&&i),"click"===n&&(i=!1!==e.Bb(l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&i),i}),null,null)),e.ob(1,737280,null,0,s.Hb,[o.h,s.Eb,e.k,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),e.ob(2,671744,null,0,a.o,[a.m,a.a,o.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e.Db(3,{userId:0}),(l()(),e.Ib(4,null,[" "," , "]))],(function(l,n){l(n,1,0,"root");var u=l(n,3,0,n.context.$implicit.memberId);l(n,2,0,u,"/tabs/profile")}),(function(l,n){l(n,0,0,e.Bb(n,2).target,e.Bb(n,2).href),l(n,4,0,n.context.$implicit.memberName)}))}function f(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,4,"div",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.downloadAttachmentSharing(l.context.$implicit)&&e),e}),null,null)),(l()(),e.pb(1,0,null,null,0,"img",[["class","img-responsive"],["height","15"],["src","assets/images/file.png"],["width","15"]],null,null,null,null,null)),(l()(),e.Ib(2,null,["",""])),e.Cb(0,o.o,[]),(l()(),e.pb(4,0,null,null,0,"br",[],null,null,null,null,null))],null,(function(l,n){l(n,2,0,e.Jb(n,2,0,e.Bb(n,3).transform(n.context.$implicit,33)))}))}function k(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,0,"img",[["class","img-responsive"],["height","15"],["src","assets/images/hourglass.png"],["width","15"]],null,null,null,null,null))],null,null)}function v(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,0,"img",[["class","img-responsive"],["height","15"],["src","assets/images/chat.png"],["width","15"]],null,null,null,null,null))],null,null)}function I(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"ion-col",[["size","8"]],null,null,null,r.N,r.i)),e.ob(1,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,[": Belum ditentukan oleh admin"]))],(function(l,n){l(n,1,0,"8")}),null)}function z(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,3,"ion-col",[["size","8"]],null,null,null,r.N,r.i)),e.ob(1,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(2,0,[": ",""])),e.Eb(3,2)],(function(l,n){l(n,1,0,"8")}),(function(l,n){var u=n.component,i=e.Jb(n,2,0,l(n,3,0,e.Bb(n.parent,0),u.jadwal,"dd/MM/yyyy HH:mm:ss"));l(n,2,0,i)}))}function x(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,3,"div",[["style","float:right"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,2,"ion-button",[["color","danger"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var e=!0,i=l.component;return"click"===n&&(e=!1!==i.updateStatusSharing("ditutup",i.mentorId)&&e),e}),r.J,r.e)),e.ob(2,49152,null,0,s.j,[e.h,e.k,e.x],{color:[0,"color"],size:[1,"size"]},null),(l()(),e.Ib(-1,0,["Tutup"]))],(function(l,n){l(n,2,0,"danger","small")}),null)}function y(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,6,"div",[["style","float:right"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,2,"ion-button",[["color","danger"],["size","small"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateStatusSharing("ditolak",null)&&e),e}),r.J,r.e)),e.ob(2,49152,null,0,s.j,[e.h,e.k,e.x],{color:[0,"color"],size:[1,"size"],type:[2,"type"]},null),(l()(),e.Ib(-1,0,["Tolak"])),(l()(),e.pb(4,0,null,null,2,"ion-button",[["color","success"],["size","small"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var e=!0,i=l.component;return"click"===n&&(e=!1!==i.updateStatusSharing("menunggu jadwal",i.mentorId)&&e),e}),r.J,r.e)),e.ob(5,49152,null,0,s.j,[e.h,e.k,e.x],{color:[0,"color"],size:[1,"size"],type:[2,"type"]},null),(l()(),e.Ib(-1,0,["Setujui"]))],(function(l,n){l(n,2,0,"danger","small","submit"),l(n,5,0,"success","small","submit")}),null)}function C(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,18,"form",[["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0,t=l.component;return"submit"===n&&(i=!1!==e.Bb(l,2).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Bb(l,2).onReset()&&i),"ngSubmit"===n&&(i=!1!==t.selectJadwalByAdmin(e.Bb(l,2))&&i),i}),null,null)),e.ob(1,16384,null,0,b.m,[],null,null),e.ob(2,4210688,[["form",4]],0,b.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Fb(2048,null,b.a,null,[b.h]),e.ob(4,16384,null,0,b.g,[[4,b.a]],null,null),(l()(),e.pb(5,0,null,null,10,"ion-list",[],null,null,null,r.X,r.s)),e.ob(6,49152,null,0,s.N,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,8,"ion-item",[],null,null,null,r.V,r.p)),e.ob(8,49152,null,0,s.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(9,0,null,0,2,"ion-label",[],null,null,null,r.W,r.r)),e.ob(10,49152,null,0,s.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Pilih Tanggal (WITA)"])),(l()(),e.pb(12,0,null,0,3,"ion-datetime",[["displayFormat","DD MMM YYYY HH mm"],["max","2100-08-23"],["placeholder","Select Date"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Bb(l,15)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Bb(l,15)._handleChangeEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.onChangeJadwal(t.sharingId,e.Bb(l,14).value)&&i),i}),r.P,r.k)),e.Fb(5120,null,b.d,(function(l){return[l]}),[s.Ib]),e.ob(14,49152,[["C",4]],0,s.u,[e.h,e.k,e.x],{displayFormat:[0,"displayFormat"],max:[1,"max"],placeholder:[2,"placeholder"]},null),e.ob(15,16384,null,0,s.Ib,[e.k],null,null),(l()(),e.pb(16,0,null,null,2,"ion-button",[["color","primary"],["expand","full"],["type","submit"]],null,null,null,r.J,r.e)),e.ob(17,49152,null,0,s.j,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),e.Ib(-1,0,["Submit"]))],(function(l,n){l(n,14,0,"DD MMM YYYY HH mm","2100-08-23","Select Date"),l(n,17,0,"primary","full","submit")}),(function(l,n){l(n,0,0,e.Bb(n,4).ngClassUntouched,e.Bb(n,4).ngClassTouched,e.Bb(n,4).ngClassPristine,e.Bb(n,4).ngClassDirty,e.Bb(n,4).ngClassValid,e.Bb(n,4).ngClassInvalid,e.Bb(n,4).ngClassPending)}))}function B(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,C)),e.ob(2,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,"admin"==n.component.user.role)}),null)}function S(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,4,"small",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.downloadAttachmentChatSharing(l.context.$implicit)&&e),e}),null,null)),(l()(),e.pb(1,0,null,null,0,"img",[["class","img-responsive"],["height","15"],["src","assets/images/file.png"],["width","15"]],null,null,null,null,null)),(l()(),e.Ib(2,null,["",""])),e.Cb(0,o.o,[]),(l()(),e.pb(4,0,null,null,0,"br",[],null,null,null,null,null))],null,(function(l,n){l(n,2,0,e.Jb(n,2,0,e.Bb(n,3).transform(n.context.$implicit,33)))}))}function w(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,19,"ion-item",[],null,null,null,r.V,r.p)),e.ob(1,49152,null,0,s.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,2,"ion-avatar",[["style","border-color: white"]],null,null,null,r.G,r.b)),e.ob(3,49152,null,0,s.e,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,0,"img",[["class","img-responsive"],["height","15"],["width","15"]],[[8,"src",4]],null,null,null,null)),(l()(),e.Ib(-1,0,["\xa0\xa0\xa0 "])),(l()(),e.pb(6,0,null,0,13,"ion-text",[],null,null,null,r.gb,r.B)),e.ob(7,49152,null,0,s.tb,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(9,0,null,0,5,"div",[],null,null,null,null,null)),(l()(),e.pb(10,0,null,null,4,"a",[["style","text-decoration: none;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Bb(l,11).onClick(u)&&i),"click"===n&&(i=!1!==e.Bb(l,12).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&i),i}),null,null)),e.ob(11,737280,null,0,s.Hb,[o.h,s.Eb,e.k,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),e.ob(12,671744,null,0,a.o,[a.m,a.a,o.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e.Db(13,{userId:0}),(l()(),e.Ib(14,null,["",""])),(l()(),e.pb(15,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e.Ib(16,null,["",""])),(l()(),e.eb(16777216,null,0,1,null,S)),e.ob(18,278528,null,0,o.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(19,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){l(n,11,0,"root");var u=l(n,13,0,n.context.$implicit.userId);l(n,12,0,u,"/tabs/profile"),l(n,18,0,n.context.$implicit.attachments)}),(function(l,n){l(n,4,0,e.tb(1,"",n.component.avatarUserUrl+n.context.$implicit.userPhoto,"")),l(n,10,0,e.Bb(n,12).target,e.Bb(n,12).href),l(n,14,0,n.context.$implicit.userName),l(n,16,0,n.context.$implicit.komen)}))}function K(l){return e.Kb(0,[e.Cb(0,o.d,[e.s]),(l()(),e.pb(1,0,null,null,11,"ion-header",[],null,null,null,r.R,r.m)),e.ob(2,49152,null,0,s.A,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,9,"ion-toolbar",[],null,null,null,r.jb,r.E)),e.ob(4,49152,null,0,s.yb,[e.h,e.k,e.x],null,null),(l()(),e.pb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.K,r.f)),e.ob(6,49152,null,0,s.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,2,"ion-back-button",[["color","light"],["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Bb(l,9).onClick(u)&&i),i}),r.H,r.c)),e.ob(8,49152,null,0,s.f,[e.h,e.k,e.x],{color:[0,"color"],defaultHref:[1,"defaultHref"]},null),e.ob(9,16384,null,0,s.g,[[2,s.eb],s.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(10,0,null,0,2,"ion-title",[],null,null,null,r.ib,r.D)),e.ob(11,49152,null,0,s.wb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Forum Sharing"])),(l()(),e.pb(13,0,null,null,187,"ion-content",[],null,null,null,r.O,r.j)),e.ob(14,49152,null,0,s.t,[e.h,e.k,e.x],null,null),(l()(),e.pb(15,0,null,0,137,"ion-grid",[["style","background-color: #eee; -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%); padding-bottom: 50px;"]],null,null,null,r.Q,r.l)),e.ob(16,49152,null,0,s.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(17,0,null,0,11,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(18,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(19,0,null,0,1,"ion-col",[["size","1"]],null,null,null,r.N,r.i)),e.ob(20,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(21,0,null,0,2,"ion-col",[["align","right"],["size","5"]],null,null,null,r.N,r.i)),e.ob(22,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(23,0,null,0,0,"img",[["class","img-responsive logo-pln-ip"],["src","assets/images/logo-pln-ip.png"]],null,null,null,null,null)),(l()(),e.pb(24,0,null,0,2,"ion-col",[["size","5"]],null,null,null,r.N,r.i)),e.ob(25,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(26,0,null,0,0,"img",[["class","img-responsive logo-bali-smart-innovation"],["src","assets/images/logo-bali-smart-innovation.png"]],null,null,null,null,null)),(l()(),e.pb(27,0,null,0,1,"ion-col",[["size","1"]],null,null,null,r.N,r.i)),e.ob(28,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(29,0,null,0,4,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(30,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(31,0,null,0,2,"ion-col",[["size","12"]],null,null,null,r.N,r.i)),e.ob(32,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(33,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(34,0,null,0,7,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(35,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(36,0,null,0,2,"ion-col",[["size","4"]],null,null,null,r.N,r.i)),e.ob(37,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Judul"])),(l()(),e.pb(39,0,null,0,2,"ion-col",[["size","8"]],null,null,null,r.N,r.i)),e.ob(40,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(41,0,[": ",""])),(l()(),e.pb(42,0,null,0,7,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(43,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(44,0,null,0,2,"ion-col",[["size","4"]],null,null,null,r.N,r.i)),e.ob(45,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Latar Belakang"])),(l()(),e.pb(47,0,null,0,2,"ion-col",[["size","8"]],null,null,null,r.N,r.i)),e.ob(48,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(49,0,[": ",""])),(l()(),e.pb(50,0,null,0,7,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(51,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(52,0,null,0,2,"ion-col",[["size","4"]],null,null,null,r.N,r.i)),e.ob(53,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Tujuan"])),(l()(),e.pb(55,0,null,0,2,"ion-col",[["size","8"]],null,null,null,r.N,r.i)),e.ob(56,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(57,0,[": ",""])),(l()(),e.pb(58,0,null,0,7,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(59,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(60,0,null,0,2,"ion-col",[["size","4"]],null,null,null,r.N,r.i)),e.ob(61,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Cost Benefit Analysis"])),(l()(),e.pb(63,0,null,0,2,"ion-col",[["size","8"]],null,null,null,r.N,r.i)),e.ob(64,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(65,0,[": ",""])),(l()(),e.pb(66,0,null,0,12,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(67,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(68,0,null,0,2,"ion-col",[["size","4"]],null,null,null,r.N,r.i)),e.ob(69,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Mentor"])),(l()(),e.pb(71,0,null,0,7,"ion-col",[["size","8"]],null,null,null,r.N,r.i)),e.ob(72,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,[": "])),(l()(),e.pb(74,0,null,0,4,"a",[["style","text-decoration: none;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Bb(l,75).onClick(u)&&i),"click"===n&&(i=!1!==e.Bb(l,76).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&i),i}),null,null)),e.ob(75,737280,null,0,s.Hb,[o.h,s.Eb,e.k,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),e.ob(76,671744,null,0,a.o,[a.m,a.a,o.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e.Db(77,{userId:0}),(l()(),e.Ib(78,null,["",""])),(l()(),e.pb(79,0,null,0,12,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(80,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(81,0,null,0,2,"ion-col",[["size","4"]],null,null,null,r.N,r.i)),e.ob(82,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Pengaju"])),(l()(),e.pb(84,0,null,0,7,"ion-col",[["size","8"]],null,null,null,r.N,r.i)),e.ob(85,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,[": "])),(l()(),e.pb(87,0,null,0,4,"a",[["style","text-decoration: none;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Bb(l,88).onClick(u)&&i),"click"===n&&(i=!1!==e.Bb(l,89).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&i),i}),null,null)),e.ob(88,737280,null,0,s.Hb,[o.h,s.Eb,e.k,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),e.ob(89,671744,null,0,a.o,[a.m,a.a,o.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e.Db(90,{userId:0}),(l()(),e.Ib(91,null,["",""])),(l()(),e.pb(92,0,null,0,11,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(93,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(94,0,null,0,2,"ion-col",[["size","4"]],null,null,null,r.N,r.i)),e.ob(95,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["User lain"])),(l()(),e.pb(97,0,null,0,6,"ion-col",[["size","8"]],null,null,null,r.N,r.i)),e.ob(98,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,[": "])),(l()(),e.pb(100,0,null,0,0,"img",[["class","img-responsive"],["height","15px"],["src","assets/images/pencil.png"],["width","15px"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showUsersBiasa()&&e),e}),null,null)),(l()(),e.Ib(-1,0,["\xa0\xa0\xa0 "])),(l()(),e.eb(16777216,null,0,1,null,d)),e.ob(103,278528,null,0,o.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(104,0,null,0,8,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(105,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(106,0,null,0,2,"ion-col",[["size","4"]],null,null,null,r.N,r.i)),e.ob(107,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Attachments"])),(l()(),e.pb(109,0,null,0,3,"ion-col",[["size","8"]],null,null,null,r.N,r.i)),e.ob(110,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.eb(16777216,null,0,1,null,f)),e.ob(112,278528,null,0,o.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(113,0,null,0,12,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(114,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(115,0,null,0,2,"ion-col",[["size","4"]],null,null,null,r.N,r.i)),e.ob(116,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Status"])),(l()(),e.pb(118,0,null,0,7,"ion-col",[["size","8"]],null,null,null,r.N,r.i)),e.ob(119,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,[": "])),(l()(),e.eb(16777216,null,0,1,null,k)),e.ob(122,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,0,1,null,v)),e.ob(124,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Ib(125,0,[" "," "])),(l()(),e.pb(126,0,null,0,8,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(127,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(128,0,null,0,2,"ion-col",[["size","4"]],null,null,null,r.N,r.i)),e.ob(129,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(-1,0,["Jadwal"])),(l()(),e.eb(16777216,null,0,1,null,I)),e.ob(132,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,0,1,null,z)),e.ob(134,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(135,0,null,0,5,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(136,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(137,0,null,0,3,"ion-col",[["size","12"]],null,null,null,r.N,r.i)),e.ob(138,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.eb(16777216,null,0,1,null,x)),e.ob(140,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(141,0,null,0,5,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(142,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(143,0,null,0,3,"ion-col",[["size","12"]],null,null,null,r.N,r.i)),e.ob(144,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.eb(16777216,null,0,1,null,y)),e.ob(146,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(147,0,null,0,5,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(148,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(149,0,null,0,3,"ion-col",[["size","12"]],null,null,null,r.N,r.i)),e.ob(150,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.eb(16777216,null,0,1,null,B)),e.ob(152,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(153,0,null,0,45,"ion-grid",[],null,null,null,r.Q,r.l)),e.ob(154,49152,null,0,s.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(155,0,null,0,43,"ion-row",[],null,null,null,r.ab,r.v)),e.ob(156,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(157,0,null,0,1,"ion-col",[["size","1"]],null,null,null,r.N,r.i)),e.ob(158,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(159,0,null,0,37,"ion-col",[["size","10"]],null,null,null,r.N,r.i)),e.ob(160,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(161,0,null,0,35,"form",[["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0,t=l.component;return"submit"===n&&(i=!1!==e.Bb(l,163).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Bb(l,163).onReset()&&i),"ngSubmit"===n&&(i=!1!==t.submitKomenSharing()&&i),i}),null,null)),e.ob(162,16384,null,0,b.m,[],null,null),e.ob(163,4210688,[["form",4]],0,b.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Fb(2048,null,b.a,null,[b.h]),e.ob(165,16384,null,0,b.g,[[4,b.a]],null,null),(l()(),e.pb(166,0,null,null,11,"ion-item",[],null,null,null,r.V,r.p)),e.ob(167,49152,null,0,s.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(168,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.W,r.r)),e.ob(169,49152,null,0,s.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Tulis Komentar"])),(l()(),e.pb(171,0,null,0,6,"ion-textarea",[["name","komen"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Bb(l,172)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Bb(l,172)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.komen=u)&&i),i}),r.hb,r.C)),e.ob(172,16384,null,0,s.Jb,[e.k],null,null),e.Fb(1024,null,b.d,(function(l){return[l]}),[s.Jb]),e.ob(174,671744,null,0,b.i,[[2,b.a],[8,null],[8,null],[6,b.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,b.e,null,[b.i]),e.ob(176,16384,null,0,b.f,[[4,b.e]],null,null),e.ob(177,49152,null,0,s.ub,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(178,0,null,null,12,"ion-item",[],null,null,null,r.V,r.p)),e.ob(179,49152,null,0,s.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(180,0,null,0,8,"label",[["class","custom-file-upload"]],null,null,null,null,null)),(l()(),e.pb(181,0,null,null,6,"ion-input",[["multiple",""],["name","attachments"],["type","file"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Bb(l,182)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Bb(l,182)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.attachments=u)&&i),"change"===n&&(i=!1!==t.onChangeAttachments(u)&&i),i}),r.T,r.o)),e.ob(182,16384,null,0,s.Jb,[e.k],null,null),e.Fb(1024,null,b.d,(function(l){return[l]}),[s.Jb]),e.ob(184,671744,null,0,b.i,[[2,b.a],[8,null],[8,null],[6,b.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,b.e,null,[b.i]),e.ob(186,16384,null,0,b.f,[[4,b.e]],null,null),e.ob(187,49152,null,0,s.F,[e.h,e.k,e.x],{multiple:[0,"multiple"],name:[1,"name"],type:[2,"type"]},null),(l()(),e.Ib(-1,null,[" Lampiran "])),(l()(),e.Ib(-1,0,["\xa0\xa0\xa0\xa0 "])),(l()(),e.pb(190,0,null,0,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e.pb(191,0,null,null,2,"ion-button",[["color","primary"],["expand","full"],["type","submit"]],null,null,null,r.J,r.e)),e.ob(192,49152,null,0,s.j,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),e.Ib(-1,0,["Komentari"])),(l()(),e.pb(194,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(195,0,null,null,1,"p",[["id","stlMsgSubmitKomen"]],null,null,null,null,null)),(l()(),e.Ib(196,null,["",""])),(l()(),e.pb(197,0,null,0,1,"ion-col",[["size","1"]],null,null,null,r.N,r.i)),e.ob(198,49152,null,0,s.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.eb(16777216,null,0,1,null,w)),e.ob(200,278528,null,0,o.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,8,0,"light","/"),l(n,9,0,"/"),l(n,20,0,"1"),l(n,22,0,"5"),l(n,25,0,"5"),l(n,28,0,"1"),l(n,32,0,"12"),l(n,37,0,"4"),l(n,40,0,"8"),l(n,45,0,"4"),l(n,48,0,"8"),l(n,53,0,"4"),l(n,56,0,"8"),l(n,61,0,"4"),l(n,64,0,"8"),l(n,69,0,"4"),l(n,72,0,"8"),l(n,75,0,"root");var e=l(n,77,0,u.mentorId);l(n,76,0,e,"/tabs/profile"),l(n,82,0,"4"),l(n,85,0,"8"),l(n,88,0,"root");var i=l(n,90,0,u.applicantId);l(n,89,0,i,"/tabs/profile"),l(n,95,0,"4"),l(n,98,0,"8"),l(n,103,0,u.members),l(n,107,0,"4"),l(n,110,0,"8"),l(n,112,0,u.attachmentsSharing),l(n,116,0,"4"),l(n,119,0,"8"),l(n,122,0,"menunggu jadwal"==u.status||"menunggu mentor"==u.status),l(n,124,0,"diskusi"==u.status),l(n,129,0,"4"),l(n,132,0,null==u.jadwal),l(n,134,0,null!=u.jadwal),l(n,138,0,"12"),l(n,140,0,"mentor"==u.user.role&&"diskusi"==u.status),l(n,144,0,"12"),l(n,146,0,"mentor"==u.user.role&&"menunggu mentor"==u.status),l(n,150,0,"12"),l(n,152,0,"admin"==u.user.role&&"menunggu jadwal"==u.status),l(n,158,0,"1"),l(n,160,0,"10"),l(n,169,0,"floating"),l(n,174,0,"komen",u.komen),l(n,177,0,"komen"),l(n,184,0,"attachments",u.attachments),l(n,187,0,"","attachments","file"),l(n,192,0,"primary","full","submit"),l(n,198,0,"1"),l(n,200,0,u.chatSharing)}),(function(l,n){var u=n.component;l(n,41,0,u.judul),l(n,49,0,u.latarBelakang),l(n,57,0,u.tujuan),l(n,65,0,u.costBenefitAnalysis),l(n,74,0,e.Bb(n,76).target,e.Bb(n,76).href),l(n,78,0,u.mentorName),l(n,87,0,e.Bb(n,89).target,e.Bb(n,89).href),l(n,91,0,u.applicantName),l(n,125,0,u.status),l(n,161,0,e.Bb(n,165).ngClassUntouched,e.Bb(n,165).ngClassTouched,e.Bb(n,165).ngClassPristine,e.Bb(n,165).ngClassDirty,e.Bb(n,165).ngClassValid,e.Bb(n,165).ngClassInvalid,e.Bb(n,165).ngClassPending),l(n,171,0,e.Bb(n,176).ngClassUntouched,e.Bb(n,176).ngClassTouched,e.Bb(n,176).ngClassPristine,e.Bb(n,176).ngClassDirty,e.Bb(n,176).ngClassValid,e.Bb(n,176).ngClassInvalid,e.Bb(n,176).ngClassPending),l(n,181,0,e.Bb(n,186).ngClassUntouched,e.Bb(n,186).ngClassTouched,e.Bb(n,186).ngClassPristine,e.Bb(n,186).ngClassDirty,e.Bb(n,186).ngClassValid,e.Bb(n,186).ngClassInvalid,e.Bb(n,186).ngClassPending),l(n,190,0,u.msgAttachment),l(n,196,0,u.msgSubmitKomen)}))}function M(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-forum-sharing-session",[],null,null,null,K,m)),e.ob(1,114688,null,0,p,[h.a,a.a,s.a,g.a],null,null)],(function(l,n){l(n,1,0)}),null)}var N=e.lb("app-forum-sharing-session",p,M,{},{},[]);class j{}u.d(n,"ForumSharingSessionPageModuleNgFactory",(function(){return J}));var J=e.mb(i,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[t.a,N]],[3,e.j],e.v]),e.zb(4608,o.l,o.k,[e.s,[2,o.t]]),e.zb(4608,b.l,b.l,[]),e.zb(4608,s.b,s.b,[e.x,e.g]),e.zb(4608,s.Db,s.Db,[s.b,e.j,e.p]),e.zb(4608,s.Gb,s.Gb,[s.b,e.j,e.p]),e.zb(1073742336,o.b,o.b,[]),e.zb(1073742336,b.k,b.k,[]),e.zb(1073742336,b.b,b.b,[]),e.zb(1073742336,s.Ab,s.Ab,[]),e.zb(1073742336,a.p,a.p,[[2,a.u],[2,a.m]]),e.zb(1073742336,j,j,[]),e.zb(1073742336,i,i,[]),e.zb(1024,a.k,(function(){return[[{path:"",component:p}],[{path:"",component:p}]]}),[])])}))}}]);