function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forum-sharing-session-forum-sharing-session-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forum-sharing-session/forum-sharing-session.page.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forum-sharing-session/forum-sharing-session.page.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForumSharingSessionForumSharingSessionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Forum Sharing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"background-color: #eee; -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%); padding-bottom: 50px;\">\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"5\" align=\"right\">\n        <img class=\"img-responsive logo-pln-ip\" src=\"assets/images/logo-pln-ip.png\">\n      </ion-col>\n      <ion-col size=\"5\">\n        <img class=\"img-responsive logo-bali-smart-innovation\" src=\"assets/images/logo-bali-smart-innovation.png\">\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row> \n    <ion-row>\n      <ion-col size=\"12\"><br></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Judul</ion-col>\n      <ion-col size=\"8\">: {{judul}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Latar Belakang</ion-col>\n      <ion-col size=\"8\">: {{latarBelakang}}</ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col size=\"4\">Tujuan</ion-col>\n      <ion-col size=\"8\">: {{tujuan}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Cost Benefit Analysis</ion-col>\n      <ion-col size=\"8\">: {{costBenefitAnalysis}}</ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col size=\"4\">Mentor</ion-col>\n      <ion-col size=\"8\">: <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:mentorId}\" style=\"text-decoration: none;\">{{mentorName}}</a></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Pengaju</ion-col>\n      <ion-col size=\"8\">: <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:applicantId}\" style=\"text-decoration: none;\">{{applicantName}}</a></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">User lain</ion-col>\n      <!-- <ion-col size=\"8\">: <img class=\"img-responsive\" src=\"assets/images/pencil.png\" height=\"15px\" width=\"15px\" (click)=\"showUsersBiasa()\">&nbsp;&nbsp;&nbsp; -->\n      <ion-col size=\"8\">: <img class=\"img-responsive\" src=\"assets/images/pencil.png\" height=\"15px\" width=\"15px\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/modal-add-users'\" [queryParams]=\"{modalName:'Add User Sharing', userfor:'sharing', id:sharingId}\">&nbsp;&nbsp;&nbsp;\n        <a *ngFor=\"let member of members\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:member.memberId}\" style=\"text-decoration: none;\">\n          {{member.memberName}} ,\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Attachments</ion-col>\n      <ion-col size=\"8\">\n        <div *ngFor=\"let attachment of attachmentsSharing\" (click)=\"downloadAttachmentSharing(attachment)\">\n          <img class=\"img-responsive\" src=\"assets/images/file.png\" width=\"15\" height=\"15\">{{attachment|slice:33}}<br>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Status</ion-col>\n      <ion-col size=\"8\">: <img *ngIf=\"status=='menunggu jadwal'||status=='menunggu mentor'\" class=\"img-responsive\" src=\"assets/images/hourglass.png\" width=\"15\" height=\"15\">\n          <img *ngIf=\"status=='diskusi'\" class=\"img-responsive\" src=\"assets/images/chat.png\" width=\"15\" height=\"15\">\n          {{status}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Jadwal</ion-col>\n      <ion-col size=\"8\" *ngIf=\"jadwal==null\">: Belum ditentukan oleh admin</ion-col>\n      <ion-col size=\"8\" *ngIf=\"jadwal!=null\">: {{jadwal | date:'dd/MM/yyyy HH:mm:ss'}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">Progress</ion-col>\n      <ion-col size=\"8\">: {{progress}}%</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-range min=\"0\" max=\"100\" step=\"10\" snaps=\"true\" color=\"secondary\" [(ngModel)]=\"progress\" (click)=\"onChangeProgress($event)\">\n          <ion-label slot=\"start\">0%</ion-label>\n          <ion-label slot=\"end\">100%</ion-label>\n        </ion-range>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div style=\"float:right\" *ngIf=\"user.role=='mentor' && status=='diskusi'\">\n          <ion-button size=\"small\" color=\"danger\" (click)=\"updateStatusSharing('ditutup', mentorId)\">Tutup</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div style=\"float:right\" *ngIf=\"user.role=='mentor' && status=='menunggu mentor'\">\n          <ion-button size=\"small\" type=\"submit\" color=\"danger\" (click)=\"updateStatusSharing('ditolak', null)\">Tolak</ion-button>\n          <ion-button size=\"small\" type=\"submit\" color=\"success\" (click)=\"updateStatusSharing('menunggu jadwal', mentorId)\">Setujui</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div *ngIf=\"user.role=='admin' && status=='menunggu jadwal'\">\n          <form #form=\"ngForm\" (ngSubmit)=\"selectJadwalByAdmin(form)\" method=\"post\" *ngIf=\"user.role=='admin'\">\n            <ion-list>\n              <ion-item>\n                <ion-label>Pilih Tanggal (WITA)</ion-label>\n                <ion-datetime #C (ionChange)=\"onChangeJadwal(sharingId,C.value)\" displayFormat=\"DD MMM YYYY HH mm\" placeholder=\"Select Date\" max=\"2100-08-23\"></ion-datetime>\n              </ion-item>\n            </ion-list>\n            <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Submit</ion-button>\n          </form>\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <div>Judul : {{judul}}</div>\n        <div>Mentor : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:mentorId}\" style=\"text-decoration: none;\">{{mentorName}}</a></div>\n        <div>Pengaju : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:applicantId}\" style=\"text-decoration: none;\">{{applicantName}}</a></div>\n        <div>\n          User lain : \n          <img class=\"img-responsive\" src=\"assets/images/pencil.png\" height=\"15px\" width=\"15px\" (click)=\"updateMembers()\">&nbsp;&nbsp;&nbsp;\n          <a *ngFor=\"let member of members\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:member.memberId}\" style=\"text-decoration: none;\">\n            {{member.memberName}} ,\n          </a>\n        </div>\n        <div>Status : \n          <img *ngIf=\"status=='menunggu rso'||status=='menunggu mentor'\" class=\"img-responsive\" src=\"assets/images/hourglass.png\" width=\"15\" height=\"15\">\n          <img *ngIf=\"status=='diskusi'\" class=\"img-responsive\" src=\"assets/images/chat.png\" width=\"15\" height=\"15\">\n          {{status}}\n        </div>\n        <div align=\"right\" *ngIf=\"user.role=='mentor' && status=='diskusi'\">\n          <ion-button size=\"small\" color=\"success\" (click)=\"updateStatusSharing('ditutup')\">Tutup</ion-button>\n        </div>\n        <br><br><br>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row> -->\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\">\n        <form #form=\"ngForm\" (ngSubmit)=\"submitKomenSharing()\" method=\"post\">\n          <ion-item>\n            <ion-label position=\"floating\">Tulis Komentar</ion-label>\n            <ion-textarea [(ngModel)]=\"komen\" name=\"komen\"></ion-textarea>\n          </ion-item>   \n          <ion-item>\n            <label class=\"custom-file-upload\">\n              <ion-input [(ngModel)]=\"attachments\" type=\"file\" name=\"attachments\" multiple (change)=\"onChangeAttachments($event)\"></ion-input>\n              Lampiran\n            </label>&nbsp;&nbsp;&nbsp;&nbsp;\n            <div [innerHTML]=\"msgAttachment\"></div>\n          </ion-item> \n          <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Komentari</ion-button>\n          <br>\n          <p id=\"stlMsgSubmitKomen\">{{msgSubmitKomen}}</p>\n        </form>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row> \n  </ion-grid>\n  <ion-item *ngFor=\"let chat of chatSharing\">\n    <ion-avatar style=\"border-color: white\">\n      <img class=\"img-responsive\" src=\"{{avatarUserUrl+chat.userPhoto}}\" width=\"15\" height=\"15\">\n    </ion-avatar>&nbsp;&nbsp;&nbsp;\n    <ion-text>\n      <br>\n      <div><a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:chat.userId}\" style=\"text-decoration: none;\">{{chat.userName}}</a></div>\n      <div>{{chat.komen}}</div>\n      <small *ngFor=\"let attachment of chat.attachments\" (click)=\"downloadAttachmentChatSharing(attachment)\">\n        <img class=\"img-responsive\" src=\"assets/images/file.png\" width=\"15\" height=\"15\">{{attachment|slice:33}}<br>\n      </small>\n      <!-- <div style=\"text-align:right!important;\"><small>{{chat.createdDate | date:'dd/MM/yyyy HH:mm:ss'}}</small></div> -->\n      <br>\n    </ion-text>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/forum-sharing-session/forum-sharing-session-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/forum-sharing-session/forum-sharing-session-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ForumSharingSessionPageRoutingModule */

  /***/
  function srcAppPagesForumSharingSessionForumSharingSessionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForumSharingSessionPageRoutingModule", function () {
      return ForumSharingSessionPageRoutingModule;
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


    var _forum_sharing_session_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forum-sharing-session.page */
    "./src/app/pages/forum-sharing-session/forum-sharing-session.page.ts");

    var routes = [{
      path: '',
      component: _forum_sharing_session_page__WEBPACK_IMPORTED_MODULE_3__["ForumSharingSessionPage"]
    }];

    var ForumSharingSessionPageRoutingModule = function ForumSharingSessionPageRoutingModule() {
      _classCallCheck(this, ForumSharingSessionPageRoutingModule);
    };

    ForumSharingSessionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForumSharingSessionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/forum-sharing-session/forum-sharing-session.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/forum-sharing-session/forum-sharing-session.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ForumSharingSessionPageModule */

  /***/
  function srcAppPagesForumSharingSessionForumSharingSessionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForumSharingSessionPageModule", function () {
      return ForumSharingSessionPageModule;
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


    var _forum_sharing_session_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forum-sharing-session-routing.module */
    "./src/app/pages/forum-sharing-session/forum-sharing-session-routing.module.ts");
    /* harmony import */


    var _forum_sharing_session_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./forum-sharing-session.page */
    "./src/app/pages/forum-sharing-session/forum-sharing-session.page.ts");
    /* harmony import */


    var _modal_add_users_modal_add_users_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../modal-add-users/modal-add-users.module */
    "./src/app/pages/modal-add-users/modal-add-users.module.ts");

    var ForumSharingSessionPageModule = function ForumSharingSessionPageModule() {
      _classCallCheck(this, ForumSharingSessionPageModule);
    };

    ForumSharingSessionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forum_sharing_session_routing_module__WEBPACK_IMPORTED_MODULE_6__["ForumSharingSessionPageRoutingModule"], _modal_add_users_modal_add_users_module__WEBPACK_IMPORTED_MODULE_8__["ModalAddUsersPageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _forum_sharing_session_page__WEBPACK_IMPORTED_MODULE_7__["ForumSharingSessionPage"]
      }])],
      declarations: [_forum_sharing_session_page__WEBPACK_IMPORTED_MODULE_7__["ForumSharingSessionPage"]]
    })], ForumSharingSessionPageModule);
    /***/
  },

  /***/
  "./src/app/pages/forum-sharing-session/forum-sharing-session.page.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/forum-sharing-session/forum-sharing-session.page.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForumSharingSessionForumSharingSessionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcnVtLXNoYXJpbmctc2Vzc2lvbi9mb3J1bS1zaGFyaW5nLXNlc3Npb24ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/forum-sharing-session/forum-sharing-session.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/forum-sharing-session/forum-sharing-session.page.ts ***!
    \***************************************************************************/

  /*! exports provided: ForumSharingSessionPage */

  /***/
  function srcAppPagesForumSharingSessionForumSharingSessionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForumSharingSessionPage", function () {
      return ForumSharingSessionPage;
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

    var ForumSharingSessionPage = /*#__PURE__*/function () {
      function ForumSharingSessionPage(apiService, activatedRoute, alertController, modalController, config) {
        _classCallCheck(this, ForumSharingSessionPage);

        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.modalController = modalController;
        this.config = config;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.currentTimestamp = Date.now();
        this.isChatActive = false;
      }

      _createClass(ForumSharingSessionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.avatarUserUrl = this.config.serverUrl + "/assets/profile-pics/";
          this.getPageForumSharing();
          var items = document.getElementsByClassName('ub');

          for (var i = 0; i < items.length; i++) {
            var element = items[i];
            element.style.display = 'none';
          }
        }
      }, {
        key: "updateMembers",
        value: function updateMembers() {
          this.alertUpdateMembers();
        }
      }, {
        key: "addUsersSharing",
        value: function addUsersSharing(form) {
          console.log(form.value);
        }
      }, {
        key: "getPageForumSharing",
        value: function getPageForumSharing() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            var sharingId = parseInt(params['sharingId']);
            _this.sharingId = sharingId;
            var inputData = {
              activeUserId: _this.user.id,
              sharingId: sharingId
            };

            _this.apiService.postData('getPageForumSharing', inputData).subscribe(function (result) {
              if (result.responseCode == true) {
                _this.sharing = result.sharing;
                _this.chatSharing = result.chatSharing;
                _this.usersBiasa = result.usersBiasa;
                _this.members = result.members;
                _this.judul = result.sharing.judul;
                _this.latarBelakang = result.sharing.latarBelakang;
                _this.tujuan = result.sharing.tujuan;
                _this.costBenefitAnalysis = result.sharing.costBenefitAnalysis;
                _this.mentorId = result.sharing.mentorId;
                _this.mentorName = result.sharing.mentorName;
                _this.applicantId = result.sharing.applicantId;
                _this.applicantName = result.sharing.applicantName;
                _this.memberId = result.sharing.memberId;
                _this.memberName = result.sharing.memberName;
                _this.status = result.sharing.status;
                _this.progress = result.sharing.progress;
                _this.jadwal = result.sharing.jadwal;
                _this.attachmentsSharing = result.sharing.attachments;

                if (Math.round(new Date(_this.jadwal).getTime()) < _this.currentTimestamp) {
                  _this.isChatActive = true;
                }
              }
            }, function (err) {
              _this.apiService.gangguan(err);

              console.log(err);
            });
          });
        }
      }, {
        key: "updateStatusSharing",
        value: function updateStatusSharing(sharingStatus, mentorId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
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
                            sharingId: _this2.sharingId,
                            mentorId: mentorId,
                            sharingStatus: sharingStatus
                          };

                          _this2.apiService.postData('updateStatusSharing', inputData).subscribe(function (result) {
                            if (result.responseCode == false) {} else if (result.responseCode == true) {
                              _this2.getPageForumSharing();
                            }
                          }, function (err) {
                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "submitKomenSharing",
        value: function submitKomenSharing() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var validInput, inputData, files, i;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
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
                      inputData.append('userId', this.user.id);
                      inputData.append('activeUserId', this.user.id);
                      inputData.append('sharingId', this.sharingId);
                      this.apiService.postData('submitKomenSharing', inputData).subscribe(function (result) {
                        console.log(result);

                        if (result.responseCode == false) {
                          _this3.msgSubmitKomen = result.responseMessage;
                          document.getElementById('stlMsgSubmitKomen').style.color = 'red';
                        } else if (result.responseCode == true) {
                          _this3.msgSubmitKomen = result.responseMessage;
                          _this3.komen = '';
                          _this3.attachments = undefined;
                          _this3.msgAttachment = '';
                          document.getElementById('stlMsgSubmitKomen').style.color = 'green';

                          _this3.getPageForumSharing();
                        }
                      }, function (err) {
                        console.log(err);

                        _this3.apiService.gangguan(err);
                      });
                    }

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onChangeProgress",
        value: function onChangeProgress(event) {
          var inputData = {
            activeUserId: this.user.id,
            sharingId: this.sharingId,
            sharingProgress: event.target.value
          };
          this.apiService.postData('changeProgressSharing', inputData).subscribe(function (result) {
            if (result.responseCode == false) {} else if (result.responseCode == true) {}
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "downloadAttachmentSharing",
        value: function downloadAttachmentSharing(attachment) {
          window.open(this.config.serverUrl + "/api/downloadAttachmentSharing/" + attachment, '_self');
        }
      }, {
        key: "downloadAttachmentChatSharing",
        value: function downloadAttachmentChatSharing(attachment) {
          window.open(this.config.serverUrl + "/api/downloadAttachmentChatSharing/" + attachment, '_self');
        }
      }, {
        key: "onChangeAttachments",
        value: function onChangeAttachments(attachments) {
          this.attachments = attachments.target.files;
          this.msgAttachment = attachments.target.files.length + " file";
        }
      }, {
        key: "alertUpdateMembers",
        value: function alertUpdateMembers() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var inputs, i, alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
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

                    _context3.next = 4;
                    return this.alertController.create({
                      header: 'Checkbox',
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
                            activeUserId: _this4.user.id,
                            sharingId: _this4.sharingId,
                            applicantId: _this4.applicantId,
                            mentorId: _this4.mentorId,
                            membersId: data
                          };

                          _this4.apiService.postData('updateMembersSharing', inputData).subscribe(function (result) {
                            if (result.responseCode == false) {} else if (result.responseCode == true) {
                              console.log(result);
                              _this4.members = result.members;
                            }
                          }, function (err) {
                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 4:
                    alert = _context3.sent;
                    _context3.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, subHeader, message, buttons) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: header,
                      subHeader: subHeader,
                      message: message,
                      buttons: [buttons]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "selectJadwalByAdmin",
        value: function selectJadwalByAdmin(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var validInput, alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    validInput = true;

                    if (this.jadwal == undefined) {
                      validInput = false;
                      this.presentAlert('Info', 'Harus diisi', 'Harus pilih Jadwal!', 'OK');
                    }

                    if (!validInput) {
                      _context5.next = 7;
                      break;
                    }

                    _context5.next = 5;
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
                            activeUserId: _this5.user.id,
                            sharingId: _this5.sharingId,
                            jadwal: _this5.jadwal
                          };

                          _this5.apiService.postData('selectJadwalSharingByAdmin', inputData).subscribe(function (result) {
                            if (result.responseCode == false) {
                              _this5.presentAlert('Info', '', result.responseMessage, 'OK');
                            } else if (result.responseCode == true) {
                              _this5.getPageForumSharing();
                            }
                          }, function (err) {
                            console.log(err);

                            _this5.apiService.gangguan(err);
                          });
                        }
                      }]
                    });

                  case 5:
                    alert = _context5.sent;
                    alert.present();

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "onChangeJadwal",
        value: function onChangeJadwal(sharingId, jadwal) {
          this.sharingId = sharingId;
          this.jadwal = jadwal;
        }
      }, {
        key: "showUsersBiasa",
        value: function showUsersBiasa() {//this.presentAlertCheckbox()    
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
                            ideId: _this6.sharingId,
                            applicantId: _this6.applicantId,
                            mentorId: _this6.mentorId,
                            membersId: data
                          };

                          _this6.apiService.postData('updateMembersSharing', inputData).subscribe(function (result) {
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

      return ForumSharingSessionPage;
    }();

    ForumSharingSessionPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
      }];
    };

    ForumSharingSessionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forum-sharing-session',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forum-sharing-session.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forum-sharing-session/forum-sharing-session.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forum-sharing-session.page.scss */
      "./src/app/pages/forum-sharing-session/forum-sharing-session.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])], ForumSharingSessionPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-forum-sharing-session-forum-sharing-session-module-es5.js.map