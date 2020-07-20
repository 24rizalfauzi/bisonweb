function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ide-ide-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ide/ide.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ide/ide.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesIdeIdePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Ide\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\">\n        <form #form=\"ngForm\" (ngSubmit)=\"submitNewIde(form)\" method=\"post\" *ngIf=\"user.role=='user' || user.role=='mentor'\">\n          <ion-item>\n            <ion-label position=\"floating\">Judul</ion-label>\n            <ion-input [(ngModel)]=\"judul\" type=\"text\" name=\"judul\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Latar Belakang</ion-label>\n            <ion-textarea [(ngModel)]=\"latarBelakang\" type=\"text\" name=\"latarBelakang\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Tujuan</ion-label>\n            <ion-textarea [(ngModel)]=\"tujuan\" type=\"text\" name=\"tujuan\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Cost Benefit Analysis</ion-label>\n            <!-- <ion-textarea [(ngModel)]=\"costBenefitAnalysis\" type=\"text\" name=\"costBenefitAnalysis\"></ion-textarea>-->\n             <editor apiKey=\"dhs30e4hvg5g89bzll036c4va19fwn7w327cpptq1axk6bso\" (onChange)=\"tinyOnChange($event)\"\n               [init]=\"{\n                 menubar: false,\n                 plugins: [\n                   'advlist autolink lists link image charmap print preview anchor',\n                   'searchreplace visualblocks code fullscreen',\n                   'insertdatetime media table paste code help wordcount'\n                 ],\n                 toolbar:\n                   'undo redo | formatselect | bold italic backcolor | \\\n                   alignleft aligncenter alignright alignjustify | \\\n                   bullist numlist outdent indent | removeformat | help'\n               }\"\n             ></editor>\n          </ion-item>\n          <ion-item>\n            <label class=\"custom-file-upload\">\n              <ion-input [(ngModel)]=\"attachments\" type=\"file\" name=\"attachments\" multiple (change)=\"onChangeAttachments($event)\"></ion-input>\n              Lampiran\n            </label>&nbsp;&nbsp;&nbsp;&nbsp;\n            <div [innerHTML]=\"msgAttachment\"></div>\n          </ion-item>   \n          <br>\n          <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Ajukan IDE Baru</ion-button>\n          <div id=\"msgSubmitNewIde\" [innerHTML]=\"msgSubmitNewIde\">{{msgSubmitNewIde}}</div>\n        </form>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n<!-- List Full Lines -->\n<ion-list *ngFor=\"let aIde of applicantIde\" id=\"applicantIde\" queryParamsHandling=\"preserve\" (click)=\"goToForumIde(aIde.ideId,aIde.status)\">\n  <ion-item style.border-left=\"5px solid {{aIde.border}}\">\n    <img class=\"img-responsive\" src=\"assets/images/lightbulb.png\" width=\"40\" height=\"40\">&nbsp;&nbsp;\n    <ion-label>\n      <br>\n      <b style=\"size: 14px;\">{{aIde.judul}}</b>\n      <br>\n      <ion-text style=\"color:#CACACA\"><img *ngIf=\"aIde.status=='menunggu rso'||aIde.status=='menunggu mentor'\" class=\"img-responsive\" src=\"assets/images/hourglass.png\" width=\"15\" height=\"15\">\n        <img *ngIf=\"aIde.status=='diskusi'\" class=\"img-responsive\" src=\"assets/images/chat.png\" width=\"15\" height=\"15\">\n        {{aIde.status}}\n      </ion-text>\n      <br><br>\n    </ion-label>\n    <ion-text style=\"text-align: right;\"><b>{{aIde.progress}}%</b></ion-text>\n    <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n  </ion-item>\n</ion-list>\n\n\n  <!-- <div style=\"color: #667; padding: 12px\" *ngFor=\"let aIde of applicantIde\" id=\"applicantIde\">\n    <div><b>Judul</b> : <a [ngStyle]=\"{'color': (aIde.status=='diskusi') ? '#3880ff' : '#667'}\" queryParamsHandling=\"preserve\" (click)=\"goToForumIde(aIde.ideId,aIde.status)\">{{aIde.judul}}</a></div>\n    <div><b>Mentor</b> : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:aIde.mentorId}\" style=\"text-decoration: none;\">{{aIde.mentorName}}</a></div>\n    <div><b>Pengaju</b> : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:aIde.applicantId}\" style=\"text-decoration: none;\">{{aIde.applicantName}}</a></div>\n    <div><b>Maksud</b> :{{aIde.maksud}}</div>\n    <div><b>Tujuan</b> :{{aIde.tujuan}}</div>\n    <small *ngFor=\"let attachment of aIde.attachments\" (click)=\"downloadAttachment(attachment)\">\n      <img class=\"img-responsive\" src=\"assets/images/file.png\" width=\"15\" height=\"15\">{{attachment}}<br>\n    </small>\n    <div><b>Status</b> : \n      <img *ngIf=\"aIde.status=='menunggu rso'||aIde.status=='menunggu mentor'\" class=\"img-responsive\" src=\"assets/images/hourglass.png\" width=\"15\" height=\"15\">\n      <img *ngIf=\"aIde.status=='diskusi'\" class=\"img-responsive\" src=\"assets/images/chat.png\" width=\"15\" height=\"15\">\n      {{aIde.status}}\n    </div>\n    <div *ngIf=\"user.role=='mentor'\">\n      <ion-button size=\"small\" type=\"submit\" color=\"danger\" (click)=\"rsoOrForumIde(aIde.ideId,'menunggu rso',null)\">Ke RSO</ion-button>\n      <ion-button size=\"small\" type=\"submit\" color=\"success\" (click)=\"rsoOrForumIde(aIde.ideId,'diskusi',aIde.mentorId)\">Diskusi</ion-button>\n    </div>\n    <div style=\"text-align:right\">{{aIde.createdDate | date:'dd/MM/yyyy HH:mm:ss'}}</div>\n    <form #form=\"ngForm\" (ngSubmit)=\"selectMentorByRso(form)\" method=\"post\" *ngIf=\"user.role=='rso'\">\n      <ion-list>\n        <ion-item>\n          <ion-label>Pilih Mentor</ion-label>\n          <ion-select placeholder=\"Pilih Mentor\" name=\"mentorId\" #C (ionChange)=\"onChangeMentorId(C.value,aIde.ideId)\">\n            <ion-select-option *ngFor=\"let mentor of mentors\" value=\"{{mentor.id}}\">{{mentor.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n      <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Submit</ion-button>\n    </form>\n    <ion-item-divider></ion-item-divider>\n  </div> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/ide/ide-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/ide/ide-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: IdePageRoutingModule */

  /***/
  function srcAppPagesIdeIdeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdePageRoutingModule", function () {
      return IdePageRoutingModule;
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


    var _ide_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ide.page */
    "./src/app/pages/ide/ide.page.ts");

    var routes = [{
      path: '',
      component: _ide_page__WEBPACK_IMPORTED_MODULE_3__["IdePage"]
    }];

    var IdePageRoutingModule = function IdePageRoutingModule() {
      _classCallCheck(this, IdePageRoutingModule);
    };

    IdePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IdePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ide/ide.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/ide/ide.module.ts ***!
    \*****************************************/

  /*! exports provided: IdePageModule */

  /***/
  function srcAppPagesIdeIdeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdePageModule", function () {
      return IdePageModule;
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


    var _ide_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ide-routing.module */
    "./src/app/pages/ide/ide-routing.module.ts");
    /* harmony import */


    var _ide_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ide.page */
    "./src/app/pages/ide/ide.page.ts");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/fesm2015/tinymce-tinymce-angular.js");

    var IdePageModule = function IdePageModule() {
      _classCallCheck(this, IdePageModule);
    };

    IdePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ide_routing_module__WEBPACK_IMPORTED_MODULE_6__["IdePageRoutingModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__["EditorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _ide_page__WEBPACK_IMPORTED_MODULE_7__["IdePage"]
      }])],
      declarations: [_ide_page__WEBPACK_IMPORTED_MODULE_7__["IdePage"]]
    })], IdePageModule);
    /***/
  },

  /***/
  "./src/app/pages/ide/ide.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/pages/ide/ide.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesIdeIdePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lkZS9pZGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/ide/ide.page.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/ide/ide.page.ts ***!
    \***************************************/

  /*! exports provided: IdePage */

  /***/
  function srcAppPagesIdeIdePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdePage", function () {
      return IdePage;
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

    var IdePage = /*#__PURE__*/function () {
      function IdePage(apiService, alertCtrl, router) {
        _classCallCheck(this, IdePage);

        this.apiService = apiService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.costBenefitAnalysis = '';
        this.mentorId = undefined;
        this.ideId = undefined;
        this.user = JSON.parse(localStorage.getItem('user'));
      }

      _createClass(IdePage, [{
        key: "onChangeAttachments",
        value: function onChangeAttachments(attachments) {
          this.attachments = attachments.target.files;
          this.msgAttachment = attachments.target.files.length + " file";
        }
      }, {
        key: "downloadAttachment",
        value: function downloadAttachment(attachment) {
          window.open(this.config.serverUrl + "/api/downloadAttachmentIde/" + attachment, '_self');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPageIde();
        }
      }, {
        key: "getPageIde",
        value: function getPageIde() {
          var _this = this;

          this.apiService.postData('getPageIde', {
            activeUserId: this.user.id,
            userId: this.user.id,
            userRole: this.user.role
          }).subscribe(function (result) {
            if (result.responseCode == true) {
              _this.applicantIde = result.applicantIde;
              _this.mentors = result.mentors;
            }
          }, function (err) {
            _this.apiService.gangguan(err);

            console.log(err);
          });
        }
      }, {
        key: "submitNewIde",
        value: function submitNewIde(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var validInput, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    validInput = true;
                    this.msgSubmitNewIde = '';

                    if (!form.value.judul || form.value.judul == '') {
                      validInput = false;
                      this.msgSubmitNewIde = '<br>Judul harus diisi';
                    }

                    if (!form.value.latarBelakang || form.value.latarBelakang == '') {
                      validInput = false;
                      this.msgSubmitNewIde = this.msgSubmitNewIde + '<br>Latar Belakang harus diisi';
                    }

                    if (!form.value.tujuan || form.value.tujuan == '') {
                      validInput = false;
                      this.msgSubmitNewIde = this.msgSubmitNewIde + '<br>Tujuan harus diisi';
                    }

                    if (this.costBenefitAnalysis == '') {
                      console.log(this.costBenefitAnalysis);
                      validInput = false;
                      this.msgSubmitNewIde = this.msgSubmitNewIde + '<br>Cost Benefit Analysis harus diisi';
                    }

                    document.getElementById('msgSubmitNewIde').style.color = 'red';

                    if (!validInput) {
                      _context.next = 12;
                      break;
                    }

                    _context.next = 10;
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
                          inputData.append('costBenefitAnalysis', _this2.costBenefitAnalysis);
                          inputData.append('applicantId', _this2.user.id);
                          inputData.append('activeUserId', _this2.user.id);

                          _this2.apiService.postData('submitNewIde', inputData).subscribe(function (result) {
                            if (result.responseCode == false) {
                              _this2.msgSubmitNewIde = result.responseMessage;
                              document.getElementById('msgSubmitNewIde').style.color = 'red';
                            } else if (result.responseCode == true) {
                              _this2.msgSubmitNewIde = result.responseMessage;
                              _this2.judul = '';
                              _this2.latarBelakang = '';
                              _this2.tujuan = '';
                              _this2.costBenefitAnalysis = '';
                              _this2.attachments = undefined;
                              _this2.msgAttachment = '';
                              document.getElementById('msgSubmitNewIde').style.color = 'green';

                              _this2.getPageIde();
                            }
                          }, function (err) {
                            _this2.apiService.gangguan(err);

                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 10:
                    alert = _context.sent;
                    alert.present();

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "selectMentorByRso",
        value: function selectMentorByRso(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var validInput, alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    validInput = true;

                    if (this.mentorId == undefined) {
                      validInput = false;
                      this.presentAlert('Info', 'Harus diisi', 'Harus pilih mentor!', 'OK');
                    }

                    if (!validInput) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 5;
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
                            ideId: _this3.ideId,
                            mentorId: _this3.mentorId
                          };

                          _this3.apiService.postData('selectMentorByRso', inputData).subscribe(function (result) {
                            if (result.responseCode == false) {
                              _this3.presentAlert('Info', '', result.responseMessage, 'OK');
                            } else if (result.responseCode == true) {
                              _this3.getPageIde();
                            }
                          }, function (err) {
                            _this3.apiService.gangguan(err);

                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 5:
                    alert = _context2.sent;
                    alert.present();

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, subHeader, message, buttons) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: header,
                      subHeader: subHeader,
                      message: message,
                      buttons: [buttons]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onChangeMentorId",
        value: function onChangeMentorId(mentorId, ideId) {
          this.ideId = ideId;
          this.mentorId = mentorId;
        }
      }, {
        key: "goToForumIde",
        value: function goToForumIde(ideId, status) {
          this.router.navigate(['/tabs/forum-ide'], {
            queryParams: {
              ideId: ideId
            }
          });
        }
      }, {
        key: "rsoOrForumIde",
        value: function rsoOrForumIde(ideId, ideStatus, mentorId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
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
                            activeUserId: _this4.user.id,
                            ideId: ideId,
                            ideStatus: ideStatus,
                            mentorId: mentorId
                          };

                          _this4.apiService.postData('rsoOrForumIde', inputData).subscribe(function (result) {
                            if (result.responseCode == false) {
                              _this4.presentAlert('Info', '', result.responseMessage, 'OK');
                            } else if (result.responseCode == true) {
                              _this4.getPageIde();
                            }
                          }, function (err) {
                            _this4.apiService.gangguan(err);

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
        key: "tinyOnChange",
        value: function tinyOnChange(event) {
          this.costBenefitAnalysis = event.editor.getContent().outerHTML.toString();
          this.costBenefitAnalysis = this.costBenefitAnalysis.replace(/"/g, '\\"');
          this.costBenefitAnalysis = this.costBenefitAnalysis.replace(/'/g, "\\'");
        }
      }]);

      return IdePage;
    }();

    IdePage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    IdePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ide',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ide.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ide/ide.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ide.page.scss */
      "./src/app/pages/ide/ide.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], IdePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-ide-ide-module-es5.js.map