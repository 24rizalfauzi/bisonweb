function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forum-ide-forum-ide-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forum-ide/forum-ide.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forum-ide/forum-ide.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForumIdeForumIdePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Forum Ide\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"background-color: #eee; -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%); padding-bottom: 50px;\">\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"5\" align=\"right\">\n        <img class=\"img-responsive logo-pln-ip\" src=\"assets/images/logo-pln-ip.png\">\n      </ion-col>\n      <ion-col size=\"5\">\n        <img class=\"img-responsive logo-bali-smart-innovation\" src=\"assets/images/logo-bali-smart-innovation.png\">\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row> \n    <ion-row>\n      <ion-col size=\"12\"><br></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Judul</ion-col>\n      <ion-col size=\"8\">: {{judul}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Latar Belakang</ion-col>\n      <ion-col size=\"8\">: {{latarBelakang}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Tujuan</ion-col>\n      <ion-col size=\"8\">: {{tujuan}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Cost Benefit Analysis</ion-col>\n      <ion-col size=\"8\"><editor apiKey=\"dhs30e4hvg5g89bzll036c4va19fwn7w327cpptq1axk6bso\"\n        initialValue=\"{{costBenefitAnalysis}}\"\n             [disabled]=\"true\"\n             [init]=\"{\n               menubar: false,\n               toolbar: ''\n             }\"\n           ></editor></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Mentor</ion-col>\n      <ion-col size=\"8\">: <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:mentorId}\" style=\"text-decoration: none;\">{{mentorName}}</a></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Pengaju</ion-col>\n      <ion-col size=\"8\">: <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:applicantId}\" style=\"text-decoration: none;\">{{applicantName}}</a></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">User lain</ion-col>\n      <!-- <ion-col size=\"8\">: <img class=\"img-responsive\" src=\"assets/images/pencil.png\" height=\"15px\" width=\"15px\" (click)=\"showUsersBiasa()\">&nbsp;&nbsp;&nbsp; -->\n      <ion-col size=\"8\">: <img class=\"img-responsive\" src=\"assets/images/pencil.png\" height=\"15px\" width=\"15px\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/modal-add-users'\" [queryParams]=\"{modalName:'Add User Sharing', userfor:'ide', id:ideId}\">&nbsp;&nbsp;&nbsp;\n        <a *ngFor=\"let member of members\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:member.memberId}\" style=\"text-decoration: none;\">\n          {{member.memberName}} ,\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Attachments</ion-col>\n      <ion-col size=\"8\">\n        <div *ngFor=\"let attachment of attachmentsIde\" (click)=\"downloadAttachmentIde(attachment)\">\n          <img class=\"img-responsive\" src=\"assets/images/file.png\" width=\"15\" height=\"15\">{{attachment|slice:29}}<br>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Status</ion-col>\n      <ion-col size=\"8\">: <img *ngIf=\"status=='menunggu rso'||status=='menunggu mentor'\" class=\"img-responsive\" src=\"assets/images/hourglass.png\" width=\"15\" height=\"15\">\n          <img *ngIf=\"status=='diskusi'\" class=\"img-responsive\" src=\"assets/images/chat.png\" width=\"15\" height=\"15\">\n          {{status}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Progress</ion-col>\n      <ion-col size=\"8\">: {{progress}}%</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-range *ngIf=\"status=='diskusi'\" min=\"0\" max=\"100\" step=\"10\" snaps=\"true\" color=\"secondary\" [(ngModel)]=\"progress\" (click)=\"onChangeProgress($event)\">\n          <ion-label slot=\"start\">0%</ion-label>\n          <ion-label slot=\"end\">100%</ion-label>\n        </ion-range>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div style=\"float:right\" *ngIf=\"user.role=='mentor' && status=='diskusi'\">\n          <ion-button *ngIf=\"progress==100\" size=\"small\" color=\"success\" (click)=\"updateStatusIde('disetujui')\">Setujui</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div style=\"float:right\" *ngIf=\"user.role=='mentor' && status=='menunggu mentor'\">\n          <ion-button size=\"small\" type=\"submit\" color=\"danger\" (click)=\"rsoOrForumIde(ideId,'menunggu rso',null)\">Ke RSO</ion-button>\n          <ion-button size=\"small\" type=\"submit\" color=\"success\" (click)=\"rsoOrForumIde(ideId,'diskusi',mentorId)\">Diskusi</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div *ngIf=\"user.role=='rso' && status=='menunggu rso'\">\n          <ion-button style=\"float: right;\" size=\"small\" type=\"submit\" color=\"danger\" (click)=\"rsoOrForumIde(ideId,'ditolak',null)\">TOLAK</ion-button>\n          <br><br>\n          <div class=\"separator\">atau</div>\n          <br>\n          <form #form=\"ngForm\" (ngSubmit)=\"selectMentorByRso(form)\" method=\"post\" *ngIf=\"user.role=='rso'\">\n              <ion-item>\n                <ion-label>Pilih Mentor</ion-label>\n                <ion-select placeholder=\"Pilih Mentor\" name=\"mentorId\" #C (ionChange)=\"onChangeMentorId(C.value,ideId)\">\n                  <ion-select-option *ngFor=\"let mentor of mentors\" value=\"{{mentor.id}}\">{{mentor.name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n            <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Submit</ion-button>\n          </form>\n        </div>\n      </ion-col>\n    </ion-row>\n        <!-- <div>Judul : {{judul}}</div>\n        <div>Latar Belakang : {{latarBelakang}}</div>\n        <div>Tujuan : {{tujuan}}</div>\n        <div>Cost Benefit Analysis : {{costBenefitAnalysis}}</div>\n        <div>Mentor : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:mentorId}\" style=\"text-decoration: none;\">{{mentorName}}</a></div>\n        <div>Pengaju : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:applicantId}\" style=\"text-decoration: none;\">{{applicantName}}</a></div>\n        <div>\n          User lain : \n          <img class=\"img-responsive\" src=\"assets/images/pencil.png\" height=\"15px\" width=\"15px\" (click)=\"showUsersBiasa()\">&nbsp;&nbsp;&nbsp;\n          <a *ngFor=\"let member of members\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:member.memberId}\" style=\"text-decoration: none;\">\n            {{member.memberName}} ,\n          </a>\n        </div> -->\n        <!-- <div>Attachments :\n          <small *ngFor=\"let attachment of attachmentsIde\" (click)=\"downloadAttachmentIde(attachment)\">\n            <img class=\"img-responsive\" src=\"assets/images/file.png\" width=\"15\" height=\"15\">{{attachment}}<br>\n          </small>\n        </div>\n        <div>Status : \n          <img *ngIf=\"status=='menunggu rso'||status=='menunggu mentor'\" class=\"img-responsive\" src=\"assets/images/hourglass.png\" width=\"15\" height=\"15\">\n          <img *ngIf=\"status=='diskusi'\" class=\"img-responsive\" src=\"assets/images/chat.png\" width=\"15\" height=\"15\">\n          {{status}}\n        </div>\n        <div>Progress : {{progress}}%</div>\n        <ion-range *ngIf=\"status=='diskusi'\" min=\"0\" max=\"100\" step=\"10\" snaps=\"true\" color=\"secondary\" [(ngModel)]=\"progress\" (click)=\"onChangeProgress($event)\">\n          <ion-label slot=\"start\">0%</ion-label>\n          <ion-label slot=\"end\">100%</ion-label>\n        </ion-range>\n        <div style=\"float:right\" *ngIf=\"user.role=='mentor' && status=='diskusi'\">\n          <ion-button *ngIf=\"progress==100\" size=\"small\" color=\"success\" (click)=\"updateStatusIde('disetujui')\">Setujui</ion-button>\n        </div>\n        <div style=\"float:right\" *ngIf=\"user.role=='mentor' && status=='menunggu mentor'\">\n          <ion-button size=\"small\" type=\"submit\" color=\"danger\" (click)=\"rsoOrForumIde(ideId,'menunggu rso',null)\">Ke RSO</ion-button>\n          <ion-button size=\"small\" type=\"submit\" color=\"success\" (click)=\"rsoOrForumIde(ideId,'diskusi',mentorId)\">Diskusi</ion-button>\n        </div>\n        <div *ngIf=\"user.role=='rso' && status=='menunggu rso'\">\n          <ion-button style=\"float: right;\" size=\"small\" type=\"submit\" color=\"danger\" (click)=\"rsoOrForumIde(ideId,'ditolak',null)\">TOLAK</ion-button>\n          <br><br>\n          <div class=\"separator\">atau</div>\n          <br>\n          <form #form=\"ngForm\" (ngSubmit)=\"selectMentorByRso(form)\" method=\"post\" *ngIf=\"user.role=='rso'\">\n              <ion-item>\n                <ion-label>Pilih Mentor</ion-label>\n                <ion-select placeholder=\"Pilih Mentor\" name=\"mentorId\" #C (ionChange)=\"onChangeMentorId(C.value,ideId)\">\n                  <ion-select-option *ngFor=\"let mentor of mentors\" value=\"{{mentor.id}}\">{{mentor.name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n            <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Submit</ion-button>\n          </form>\n        </div>\n        <br><br><br>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row> -->\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\">\n        <form #form=\"ngForm\" (ngSubmit)=\"submitKomenIde()\" method=\"post\">\n          <ion-item>\n            <ion-label position=\"floating\">Tulis Komentar</ion-label>\n            <ion-textarea [(ngModel)]=\"komen\" name=\"komen\"></ion-textarea>\n          </ion-item>   \n          <ion-item>\n            <label class=\"custom-file-upload\">\n              <ion-input [(ngModel)]=\"attachments\" type=\"file\" name=\"attachments\" multiple (change)=\"onChangeAttachments($event)\"></ion-input>\n              Lampiran\n            </label>&nbsp;&nbsp;&nbsp;&nbsp;\n            <div [innerHTML]=\"msgAttachment\"></div>\n          </ion-item>   \n          <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Komentari</ion-button>\n          <br>\n          <p id=\"stlMsgSubmitKomen\">{{msgSubmitKomen}}</p>\n        </form>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row> \n  </ion-grid>\n  <ion-item *ngFor=\"let chat of chatIde\">\n    <ion-avatar style=\"border-color: white\">\n      <img class=\"img-responsive\" src=\"{{avatarUserUrl+chat.userPhoto}}\" width=\"15\" height=\"15\">\n    </ion-avatar>&nbsp;&nbsp;&nbsp;\n    <ion-text>\n      <br>\n      <div><a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:chat.userId}\" style=\"text-decoration: none;\">{{chat.userName}}</a></div>\n      <div>{{chat.komen}}</div>\n      <small *ngFor=\"let attachment of chat.attachments\" (click)=\"downloadAttachment(attachment)\">\n        <img class=\"img-responsive\" src=\"assets/images/file.png\" width=\"15\" height=\"15\">{{attachment|slice:29}}<br>\n      </small>\n      <!-- <div style=\"text-align:right!important;\"><small>{{chat.createdDate | date:'dd/MM/yyyy HH:mm:ss'}}</small></div> -->\n      <br>\n    </ion-text>\n  </ion-item>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/forum-ide/forum-ide-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/forum-ide/forum-ide-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ForumIdePageRoutingModule */

  /***/
  function srcAppPagesForumIdeForumIdeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForumIdePageRoutingModule", function () {
      return ForumIdePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _forum_ide_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forum-ide.page */
    "./src/app/pages/forum-ide/forum-ide.page.ts");

    var routes = [{
      path: '',
      component: _forum_ide_page__WEBPACK_IMPORTED_MODULE_3__["ForumIdePage"]
    }];

    var ForumIdePageRoutingModule = function ForumIdePageRoutingModule() {
      _classCallCheck(this, ForumIdePageRoutingModule);
    };

    ForumIdePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForumIdePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/forum-ide/forum-ide.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/forum-ide/forum-ide.module.ts ***!
    \*****************************************************/

  /*! exports provided: ForumIdePageModule */

  /***/
  function srcAppPagesForumIdeForumIdeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForumIdePageModule", function () {
      return ForumIdePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _forum_ide_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forum-ide-routing.module */
    "./src/app/pages/forum-ide/forum-ide-routing.module.ts");
    /* harmony import */


    var _forum_ide_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./forum-ide.page */
    "./src/app/pages/forum-ide/forum-ide.page.ts");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/fesm2015/tinymce-tinymce-angular.js");

    var ForumIdePageModule = function ForumIdePageModule() {
      _classCallCheck(this, ForumIdePageModule);
    };

    ForumIdePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forum_ide_routing_module__WEBPACK_IMPORTED_MODULE_6__["ForumIdePageRoutingModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__["EditorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _forum_ide_page__WEBPACK_IMPORTED_MODULE_7__["ForumIdePage"]
      }])],
      declarations: [_forum_ide_page__WEBPACK_IMPORTED_MODULE_7__["ForumIdePage"]]
    })], ForumIdePageModule);
    /***/
  },

  /***/
  "./src/app/pages/forum-ide/forum-ide.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/forum-ide/forum-ide.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForumIdeForumIdePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".separator {\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n.separator::before, .separator::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 1px solid #777;\n}\n\n.separator::before {\n  margin-right: 0.25em;\n}\n\n.separator::after {\n  margin-left: 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ydW0taWRlL0U6XFxFUFxcQklTT05ET0NTXFxCYWxpU21hcnRJbm5vdmF0aW9uL3NyY1xcYXBwXFxwYWdlc1xcZm9ydW0taWRlXFxmb3J1bS1pZGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb3J1bS1pZGUvZm9ydW0taWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcnVtLWlkZS9mb3J1bS1pZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcGFyYXRvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2VwYXJhdG9yOjpiZWZvcmUsIC5zZXBhcmF0b3I6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZmxleDogMTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzc3O1xyXG59XHJcbi5zZXBhcmF0b3I6OmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC4yNWVtO1xyXG59XHJcbi5zZXBhcmF0b3I6OmFmdGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAuMjVlbTtcclxufSIsIi5zZXBhcmF0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZXBhcmF0b3I6OmJlZm9yZSwgLnNlcGFyYXRvcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmbGV4OiAxO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc3Nztcbn1cblxuLnNlcGFyYXRvcjo6YmVmb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XG59XG5cbi5zZXBhcmF0b3I6OmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/forum-ide/forum-ide.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/forum-ide/forum-ide.page.ts ***!
    \***************************************************/

  /*! exports provided: ForumIdePage */

  /***/
  function srcAppPagesForumIdeForumIdePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForumIdePage", function () {
      return ForumIdePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/config.service */
    "./src/app/services/config.service.ts");

    var ForumIdePage = /*#__PURE__*/function () {
      function ForumIdePage(apiService, activatedRoute, alertController, config) {
        _classCallCheck(this, ForumIdePage);

        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.config = config;
        this.user = JSON.parse(localStorage.getItem('user'));
      }

      _createClass(ForumIdePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.avatarUserUrl = this.config.serverUrl + "/assets/profile-pics/";
          this.getPageForumIde();
          var items = document.getElementsByClassName('ub');

          for (var i = 0; i < items.length; i++) {
            var element = items[i];
            element.style.display = 'none';
          }
        }
      }, {
        key: "showUsersBiasa",
        value: function showUsersBiasa() {
          this.presentAlertCheckbox();
        }
      }, {
        key: "addUsersIde",
        value: function addUsersIde(form) {
          console.log(form.value);
        }
      }, {
        key: "getPageForumIde",
        value: function getPageForumIde() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            var ideId = parseInt(params['ideId']);
            _this.ideId = ideId;
            var inputData = {
              activeUserId: _this.user.id,
              ideId: ideId
            };

            _this.apiService.postData('getPageForumIde', inputData).subscribe(function (result) {
              if (result.responseCode == true) {
                _this.ide = result.ide;
                _this.chatIde = result.chatIde;
                _this.usersBiasa = result.usersBiasa;
                _this.members = result.members;
                _this.mentors = result.mentors;
                _this.judul = result.ide.judul;
                _this.latarBelakang = result.ide.latar_belakang;
                _this.tujuan = result.ide.tujuan;
                _this.costBenefitAnalysis = result.ide.costBenefitAnalysis;
                _this.mentorId = result.ide.mentorId;
                _this.mentorName = result.ide.mentorName;
                _this.applicantId = result.ide.applicantId;
                _this.applicantName = result.ide.applicantName;
                _this.memberId = result.ide.memberId;
                _this.memberName = result.ide.memberName;
                _this.status = result.ide.status;
                _this.progress = result.ide.progress;
                _this.attachmentsIde = result.ide.attachments;
              }
            }, function (err) {
              _this.apiService.gangguan(err);

              console.log(err);
            });
          });
        }
      }, {
        key: "downloadAttachmentIde",
        value: function downloadAttachmentIde(attachment) {
          window.open(this.config.serverUrl + "/api/downloadAttachmentIde/" + attachment, '_self');
        }
      }, {
        key: "onChangeMentorId",
        value: function onChangeMentorId(mentorId, ideId) {
          this.ideId = ideId;
          this.mentorId = mentorId;
        }
      }, {
        key: "selectMentorByRso",
        value: function selectMentorByRso(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var validInput, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    validInput = true;

                    if (this.mentorId == undefined) {
                      validInput = false;
                      this.presentAlert('Info', 'Harus diisi', 'Harus pilih mentor!', 'OK');
                    }

                    if (!validInput) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 5;
                    return this.alertController.create({
                      header: 'Konfirmasi',
                      message: 'Apakah Anda yakin?',
                      buttons: [{
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Ya',
                        handler: function handler() {
                          var inputData = {
                            activeUserId: _this2.user.id,
                            ideId: _this2.ideId,
                            mentorId: _this2.mentorId
                          };

                          _this2.apiService.postData('selectMentorByRso', inputData).subscribe(function (result) {
                            if (result.responseCode == false) {
                              _this2.presentAlert('Info', '', result.responseMessage, 'OK');
                            } else if (result.responseCode == true) {
                              _this2.getPageForumIde();
                            }
                          }, function (err) {
                            _this2.apiService.gangguan(err);

                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 5:
                    alert = _context.sent;
                    alert.present();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, subHeader, message, buttons) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: header,
                      subHeader: subHeader,
                      message: message,
                      buttons: [buttons]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "rsoOrForumIde",
        value: function rsoOrForumIde(ideId, ideStatus, mentorId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Konfirmasi',
                      message: 'Apakah Anda yakin?',
                      buttons: [{
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Ya',
                        handler: function handler() {
                          var inputData = {
                            activeUserId: _this3.user.id,
                            ideId: ideId,
                            ideStatus: ideStatus,
                            mentorId: mentorId
                          };

                          _this3.apiService.postData('rsoOrForumIde', inputData).subscribe(function (result) {
                            if (result.responseCode == false) {
                              _this3.presentAlert('Info', '', result.responseMessage, 'OK');
                            } else if (result.responseCode == true) {
                              _this3.getPageForumIde();
                            }
                          }, function (err) {
                            _this3.apiService.gangguan(err);

                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "updateStatusIde",
        value: function updateStatusIde(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Konfirmasi',
                      message: 'Apakah Anda yakin?',
                      buttons: [{
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Ya',
                        handler: function handler() {
                          var inputData = {
                            activeUserId: _this4.user.id,
                            ideId: _this4.ideId,
                            ideStatus: value,
                            mentorId: _this4.mentorId
                          };

                          _this4.apiService.postData('updateStatusIde', inputData).subscribe(function (result) {
                            if (result.responseCode == false) {} else if (result.responseCode == true) {
                              _this4.getPageForumIde();
                            }
                          }, function (err) {
                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "submitKomenIde",
        value: function submitKomenIde() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var validInput, inputData, files, i;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    validInput = true;

                    if (this.komen == undefined) {
                      validInput = false;
                      this.msgSubmitKomen = 'Komentar harus diisi';
                      document.getElementById('stlMsgSubmitKomen').style.color = 'red';
                    }

                    if (validInput) {
                      inputData = new FormData();
                      files = this.attachments;

                      if (files == undefined) {
                        inputData.append("attachments", undefined);
                      } else {
                        for (i = 0; i < files.length; i++) {
                          inputData.append("attachments", files[i], files[i]['name']);
                        }
                      }

                      inputData.append('komen', this.komen);
                      inputData.append('activeUserId', this.user.id);
                      inputData.append('userId', this.user.id);
                      inputData.append('ideId', this.ideId);
                      this.apiService.postData('submitKomenIde', inputData).subscribe(function (result) {
                        console.log(result);

                        if (result.responseCode == false) {
                          _this5.msgSubmitKomen = result.responseMessage;
                          document.getElementById('stlMsgSubmitKomen').style.color = 'red';
                        } else if (result.responseCode == true) {
                          _this5.msgSubmitKomen = result.responseMessage;
                          _this5.komen = '';
                          _this5.attachments = undefined;
                          _this5.msgAttachment = '';
                          document.getElementById('stlMsgSubmitKomen').style.color = 'green';

                          _this5.getPageForumIde();
                        }
                      }, function (err) {
                        console.log(err);

                        _this5.apiService.gangguan(err);
                      });
                    }

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "downloadAttachment",
        value: function downloadAttachment(attachment) {
          window.open(this.config.serverUrl + "/api/downloadAttachmentChatIde/" + attachment, '_self');
        }
      }, {
        key: "onChangeAttachments",
        value: function onChangeAttachments(attachments) {
          this.attachments = attachments.target.files;
          this.msgAttachment = attachments.target.files.length + " file";
        }
      }, {
        key: "onChangeProgress",
        value: function onChangeProgress(event) {
          var inputData = {
            activeUserId: this.user.id,
            ideId: this.ideId,
            ideProgress: event.target.value
          };
          this.apiService.postData('changeProgressIde', inputData).subscribe(function (result) {
            if (result.responseCode == false) {} else if (result.responseCode == true) {}
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "presentAlertCheckbox",
        value: function presentAlertCheckbox() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            var inputs, i, alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    inputs = [];

                    for (i = 0; i < this.usersBiasa.length; i++) {
                      inputs.push({
                        name: 'checkbox1',
                        type: 'checkbox',
                        label: this.usersBiasa[i].name,
                        value: this.usersBiasa[i].id,
                        checked: false
                      });
                    }

                    _context6.next = 4;
                    return this.alertController.create({
                      header: 'Pilih Member Lain',
                      inputs: inputs,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler(data) {
                          var inputData = {
                            activeUserId: _this6.user.id,
                            ideId: _this6.ideId,
                            applicantId: _this6.applicantId,
                            mentorId: _this6.mentorId,
                            membersId: data
                          };

                          _this6.apiService.postData('updateMembersIde', inputData).subscribe(function (result) {
                            if (result.responseCode == false) {} else if (result.responseCode == true) {
                              console.log(result);
                              _this6.members = result.members;
                            }
                          }, function (err) {
                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 4:
                    alert = _context6.sent;
                    _context6.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return ForumIdePage;
    }();

    ForumIdePage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
      }];
    };

    ForumIdePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forum-ide',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forum-ide.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forum-ide/forum-ide.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forum-ide.page.scss */
      "./src/app/pages/forum-ide/forum-ide.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])], ForumIdePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-forum-ide-forum-ide-module-es5.js.map