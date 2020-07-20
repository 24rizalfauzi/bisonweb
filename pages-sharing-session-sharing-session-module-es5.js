function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sharing-session-sharing-session-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharing-session/sharing-session.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharing-session/sharing-session.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSharingSessionSharingSessionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Sharing Session\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\">\n        <form #form=\"ngForm\" (ngSubmit)=\"submitNewSharingSession(form)\" method=\"post\" *ngIf=\"user.role=='user' || user.role=='mentor'\">\n          <ion-item>\n            <ion-label position=\"floating\">Materi</ion-label>\n            <ion-input [(ngModel)]=\"judul\" type=\"text\" name=\"judul\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Lingkup Pembahasan</ion-label>\n            <ion-textarea [(ngModel)]=\"latarBelakang\" type=\"text\" name=\"latarBelakang\"></ion-textarea>\n          </ion-item>\n          <!-- <ion-item>\n            <ion-label position=\"floating\">Tujuan</ion-label>\n            <ion-textarea [(ngModel)]=\"tujuan\" type=\"text\" name=\"tujuan\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Cost Benefit Analysis</ion-label>\n            <ion-textarea [(ngModel)]=\"costBenefitAnalysis\" type=\"text\" name=\"costBenefitAnalysis\"></ion-textarea>\n          </ion-item> -->\n          <ion-item>\n            <label class=\"custom-file-upload\">\n              <ion-input type=\"file\" name=\"attachments\" multiple (change)=\"onChangeAttachments($event)\"></ion-input>\n              Lampiran\n            </label>&nbsp;&nbsp;&nbsp;&nbsp;\n            <div [innerHTML]=\"msgAttachment\"></div>\n          </ion-item> \n          <ion-item>\n            <ion-label>Mentor</ion-label>\n            <ion-select placeholder=\"Pilih Mentor\" name=\"mentorId\" [(ngModel)]=\"mentorId\">\n              <ion-select-option *ngFor=\"let mentor of mentors\" value=\"{{mentor.id}}\">{{mentor.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <br>\n          <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Ajukan Sharing Session Baru</ion-button>\n          <div id=\"msgSubmitNewSharingSession\" [innerHTML]=\"msgSubmitNewSharingSession\">{{msgSubmitNewSharingSession}}</div>\n        </form>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- List Full Lines -->\n  <ion-list *ngFor=\"let aSharing of applicantSharing\" id=\"applicantIde\" queryParamsHandling=\"preserve\" (click)=\"goToForumSharingSession(aSharing.sharingId)\">\n    <ion-item style.border-left=\"5px solid {{aSharing.border}}\">\n      <img class=\"img-responsive\" src=\"assets/images/presentation.png\" width=\"40\" height=\"40\">&nbsp;&nbsp;\n      <ion-label>\n        <br>\n        <b style=\"size: 14px;\">{{aSharing.judul}}</b>\n        <br>\n        <ion-text style=\"color:#CACACA\"><img *ngIf=\"aSharing.status=='menunggu jadwal'||aSharing.status=='menunggu mentor'\" class=\"img-responsive\" src=\"assets/images/hourglass.png\" width=\"15\" height=\"15\">\n          <img *ngIf=\"aSharing.status=='diskusi'\" class=\"img-responsive\" src=\"assets/images/chat.png\" width=\"15\" height=\"15\">\n          {{aSharing.status}}\n        </ion-text>\n        <br><br>\n      </ion-label>\n      <ion-text style=\"text-align: right;\"><b>{{aSharing.progress}}%</b></ion-text>\n      <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n\n  <!-- <div *ngFor=\"let ss of applicantSharing\" id=\"applicantSharing\" style=\"color: #667; padding: 12px\">\n    <div>Judul : <a [ngStyle]=\"{'color': (ss.status=='diskusi') ? '#3880ff!important' : '#667!important'}\" queryParamsHandling=\"preserve\" (click)=\"goToForumSharingSession(ss.sharingId,ss.status,ss.jadwal)\">{{ss.judul}}</a></div>\n    <div>Mentor : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:ss.mentorId}\" style=\"text-decoration: none;\">{{ss.mentorName}}</a></div>\n    <small *ngFor=\"let attachment of ss.attachments\" (click)=\"downloadAttachment(attachment)\">\n      <img class=\"img-responsive\" src=\"assets/images/file.png\" width=\"15\" height=\"15\">{{attachment}}<br>\n    </small>\n    <div>Pengaju : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:ss.applicantId}\" style=\"text-decoration: none;\">{{ss.applicantName}}</a></div>\n    <div>Jadwal : {{ss.jadwal | date:'dd/MM/yyyy HH:mm:ss'}}</div>\n    <div>Status : \n      <img *ngIf=\"ss.status=='menunggu jadwal'\" class=\"img-responsive\" src=\"assets/images/hourglass.png\" width=\"15\" height=\"15\">\n      <img *ngIf=\"ss.status=='diskusi'\" class=\"img-responsive\" src=\"assets/images/chat.png\" width=\"15\" height=\"15\">\n      {{ss.status}}\n    </div>\n    <div style=\"text-align:right\">{{ss.createdDate | date:'dd/MM/yyyy HH:mm:ss'}}</div>\n    <form #form=\"ngForm\" (ngSubmit)=\"selectJadwalByAdmin(form)\" method=\"post\" *ngIf=\"user.role=='admin'\">\n      <ion-list>\n        <ion-item>\n          <ion-label>Pilih Tanggal (WITA)</ion-label>\n          <ion-datetime #C (ionChange)=\"onChangeJadwal(ss.sharingId,C.value)\" displayFormat=\"DD MMM YYYY HH mm\" placeholder=\"Select Date\" max=\"2100-08-23\"></ion-datetime>\n        </ion-item>\n      </ion-list>\n      <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Submit</ion-button>\n    </form>\n    <ion-item-divider></ion-item-divider>\n  </div> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/sharing-session/sharing-session-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/sharing-session/sharing-session-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: SharingSessionPageRoutingModule */

  /***/
  function srcAppPagesSharingSessionSharingSessionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharingSessionPageRoutingModule", function () {
      return SharingSessionPageRoutingModule;
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


    var _sharing_session_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sharing-session.page */
    "./src/app/pages/sharing-session/sharing-session.page.ts");

    var routes = [{
      path: '',
      component: _sharing_session_page__WEBPACK_IMPORTED_MODULE_3__["SharingSessionPage"]
    }];

    var SharingSessionPageRoutingModule = function SharingSessionPageRoutingModule() {
      _classCallCheck(this, SharingSessionPageRoutingModule);
    };

    SharingSessionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SharingSessionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/sharing-session/sharing-session.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/sharing-session/sharing-session.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SharingSessionPageModule */

  /***/
  function srcAppPagesSharingSessionSharingSessionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharingSessionPageModule", function () {
      return SharingSessionPageModule;
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


    var _sharing_session_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sharing-session-routing.module */
    "./src/app/pages/sharing-session/sharing-session-routing.module.ts");
    /* harmony import */


    var _sharing_session_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sharing-session.page */
    "./src/app/pages/sharing-session/sharing-session.page.ts");

    var SharingSessionPageModule = function SharingSessionPageModule() {
      _classCallCheck(this, SharingSessionPageModule);
    };

    SharingSessionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sharing_session_routing_module__WEBPACK_IMPORTED_MODULE_6__["SharingSessionPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _sharing_session_page__WEBPACK_IMPORTED_MODULE_7__["SharingSessionPage"]
      }])],
      declarations: [_sharing_session_page__WEBPACK_IMPORTED_MODULE_7__["SharingSessionPage"]]
    })], SharingSessionPageModule);
    /***/
  },

  /***/
  "./src/app/pages/sharing-session/sharing-session.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/sharing-session/sharing-session.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSharingSessionSharingSessionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input[type=file] {\n  display: none;\n}\n\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.list-md {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hhcmluZy1zZXNzaW9uL0U6XFxFUFxcQklTT05ET0NTXFxCYWxpU21hcnRJbm5vdmF0aW9uL3NyY1xcYXBwXFxwYWdlc1xcc2hhcmluZy1zZXNzaW9uXFxzaGFyaW5nLXNlc3Npb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaGFyaW5nLXNlc3Npb24vc2hhcmluZy1zZXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJpbmctc2Vzc2lvbi9zaGFyaW5nLXNlc3Npb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlzdC1tZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufSIsImlvbi1pbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpc3QtbWQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/sharing-session/sharing-session.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/sharing-session/sharing-session.page.ts ***!
    \***************************************************************/

  /*! exports provided: SharingSessionPage */

  /***/
  function srcAppPagesSharingSessionSharingSessionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharingSessionPage", function () {
      return SharingSessionPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/config.service */
    "./src/app/services/config.service.ts");

    var SharingSessionPage = /*#__PURE__*/function () {
      function SharingSessionPage(apiService, alertCtrl, router, config) {
        _classCallCheck(this, SharingSessionPage);

        this.apiService = apiService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.config = config;
        this.msgSubmitNewSharingSession = '';
        this.mentorId = undefined;
        this.sharingId = undefined;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.currentTimestamp = Date.now();
      }

      _createClass(SharingSessionPage, [{
        key: "onChangeAttachments",
        value: function onChangeAttachments(attachments) {
          this.attachments = attachments.target.files;
          this.msgAttachment = attachments.target.files.length + " file";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPageSharing();
        }
      }, {
        key: "downloadAttachment",
        value: function downloadAttachment(attachment) {
          window.open(this.config.serverUrl + "/api/downloadAttachmentChatSharing/" + attachment, '_self');
        }
      }, {
        key: "getPageSharing",
        value: function getPageSharing() {
          var _this = this;

          this.apiService.postData('getPageSharing', {
            activeUserId: this.user.id,
            userId: this.user.id,
            userRole: this.user.role
          }).subscribe(function (result) {
            if (result.responseCode == true) {
              _this.applicantSharing = result.applicantSharing;
              _this.mentors = result.mentors;
            }
          }, function (err) {
            _this.apiService.gangguan(err);

            console.log(err);
          });
        }
      }, {
        key: "submitNewSharingSession",
        value: function submitNewSharingSession(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var isFormValid, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    isFormValid = true;
                    console.log(form.value);

                    if (!form.value.judul || form.value.judul == '') {
                      isFormValid = false;
                      this.msgSubmitNewSharingSession = 'Judul harus diisi';
                    }

                    if (!form.value.mentorId || form.value.mentorId == '') {
                      this.msgSubmitNewSharingSession = this.msgSubmitNewSharingSession + '<br>Mentor harus diisi';
                      isFormValid = false;
                    }

                    if (!form.value.latarBelakang || form.value.latarBelakang == '') {
                      isFormValid = false;
                      this.msgSubmitNewSharingSession = this.msgSubmitNewSharingSession + '<br>Latar Belakang harus diisi';
                    } // if(!form.value.tujuan||form.value.tujuan=='') {
                    //   isFormValid = false
                    //   this.msgSubmitNewSharingSession = this.msgSubmitNewSharingSession+'<br>Tujuan harus diisi';
                    // }
                    // if(!form.value.costBenefitAnalysis||form.value.costBenefitAnalysis=='') {
                    //   isFormValid = false
                    //   this.msgSubmitNewSharingSession = this.msgSubmitNewSharingSession+'<br>Cost Benefit Analysis harus diisi';
                    // }


                    document.getElementById('msgSubmitNewSharingSession').style.color = 'red';

                    if (!isFormValid) {
                      _context.next = 11;
                      break;
                    }

                    _context.next = 9;
                    return this.alertCtrl.create({
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
                          var inputData = new FormData();
                          var files = _this2.attachments;

                          if (files == undefined) {
                            inputData.append("attachments", undefined);
                          } else {
                            for (var i = 0; i < files.length; i++) {
                              inputData.append("attachments", files[i], files[i]['name']);
                            }
                          }

                          inputData.append('judul', form.value.judul);
                          inputData.append('latarBelakang', form.value.latarBelakang);
                          inputData.append('tujuan', form.value.tujuan);
                          inputData.append('costBenefitAnalysis', form.value.costBenefitAnalysis);
                          inputData.append('mentorId', form.value.mentorId);
                          inputData.append('applicantId', _this2.user.id);
                          inputData.append('activeUserId', _this2.user.id);

                          _this2.apiService.postData('submitNewSharing', inputData).subscribe(function (result) {
                            if (result.responseCode == false) {
                              _this2.msgSubmitNewSharingSession = result.responseMessage;
                              document.getElementById('msgSubmitNewSharingSession').style.color = 'red';
                            } else if (result.responseCode == true) {
                              _this2.msgSubmitNewSharingSession = result.responseMessage;
                              _this2.judul = '';
                              _this2.latarBelakang = '';
                              _this2.tujuan = '';
                              _this2.costBenefitAnalysis = '';
                              _this2.attachments = undefined;
                              _this2.msgAttachment = '';
                              _this2.mentorId = undefined;
                              document.getElementById('msgSubmitNewSharingSession').style.color = 'green';

                              _this2.getPageSharing();
                            }
                          }, function (err) {
                            _this2.apiService.gangguan(err);

                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 9:
                    alert = _context.sent;
                    alert.present();

                  case 11:
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
                    return this.alertCtrl.create({
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
        key: "goToForumSharingSession",
        value: function goToForumSharingSession(sharingId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.router.navigate(['/tabs/forum-sharing-session'], {
                      queryParams: {
                        sharingId: sharingId
                      }
                    });

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "selectJadwalByAdmin",
        value: function selectJadwalByAdmin(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var validInput, alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    validInput = true;

                    if (this.jadwal == undefined) {
                      validInput = false;
                      this.presentAlert('Info', 'Harus diisi', 'Harus pilih Jadwal!', 'OK');
                    }

                    if (!validInput) {
                      _context4.next = 7;
                      break;
                    }

                    _context4.next = 5;
                    return this.alertCtrl.create({
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
                            sharingId: _this3.sharingId,
                            jadwal: _this3.jadwal
                          };

                          _this3.apiService.postData('selectJadwalSharingByAdmin', inputData).subscribe(function (result) {
                            if (result.responseCode == false) {
                              _this3.presentAlert('Info', '', result.responseMessage, 'OK');
                            } else if (result.responseCode == true) {
                              _this3.getPageSharing();
                            }
                          }, function (err) {
                            console.log(err);

                            _this3.apiService.gangguan(err);
                          });
                        }
                      }]
                    });

                  case 5:
                    alert = _context4.sent;
                    alert.present();

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "onChangeJadwal",
        value: function onChangeJadwal(sharingId, jadwal) {
          this.sharingId = sharingId;
          this.jadwal = jadwal;
          console.log(this.sharingId);
          console.log(this.jadwal);
        }
      }]);

      return SharingSessionPage;
    }();

    SharingSessionPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
      }];
    };

    SharingSessionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sharing-session',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sharing-session.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sharing-session/sharing-session.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sharing-session.page.scss */
      "./src/app/pages/sharing-session/sharing-session.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])], SharingSessionPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-sharing-session-sharing-session-module-es5.js.map