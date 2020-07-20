function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"user.role=='admin'\">\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\">\n        <form (ngSubmit)=\"insertNotif()\" method=\"post\">\n          <ion-item>\n            <ion-label position=\"floating\">Tulis Pesan</ion-label>\n            <ion-textarea [(ngModel)]=\"message\" name=\"message\"></ion-textarea>\n          </ion-item>  \n          <ion-item>\n            <label class=\"custom-file-upload\">\n              <ion-input [(ngModel)]=\"attachments\" type=\"file\" name=\"attachments\" multiple (change)=\"onChangeAttachments($event)\"></ion-input>\n              Lampiran\n            </label>&nbsp;&nbsp;&nbsp;&nbsp;\n            <div [innerHTML]=\"msgAttachment\"></div>\n          </ion-item>\n          <!-- <div *ngFor=\"let attachmentU of attachmentsUpdate\">\n            <div *ngIf=\"attachmentU.split('.').pop()=='jpeg'\">\n              <img class=\"img-responsive\" src=\"{{attachmentUrl}}/{{attachmentU}}\" width=\"100%\">\n            </div>\n            <div *ngIf=\"attachmentU.split('.').pop()!='jpeg'\">\n              <img class=\"img-responsive\" src=\"assets/images/file.png\" width=\"15\" height=\"15\">{{attachmentU|slice:31}}\n            </div>\n            <br>\n          </div> -->\n          <br> \n          <!-- <ion-item>\n            <label class=\"custom-file-upload\">\n              <ion-input [(ngModel)]=\"attachments\" type=\"file\" name=\"attachments\" multiple (change)=\"onChangeAttachments($event)\"></ion-input>\n              Lampiran\n            </label>&nbsp;&nbsp;&nbsp;&nbsp;\n            <div [innerHTML]=\"msgAttachment\"></div>\n          </ion-item>  -->\n          <ion-button type=\"submit\" expand=\"full\" color=\"primary\">{{mode}}</ion-button>\n          <ion-button expand=\"full\" color=\"danger\" (click)=\"modeCreate()\" id=\"cancel\" *ngIf=\"mode=='UPDATE'\">CANCEL</ion-button>\n          <br>\n          <p id=\"stlMsgInsertNotif\">{{msgInsertNotif}}</p>\n        </form>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row> \n  </ion-grid>\n  <ion-item class=\"welcome-card\" *ngFor=\"let notif of notifications\">\n    <ion-text>\n      <br>\n      <ion-icon name=\"notifications\" style=\"color: #3880FF;\"></ion-icon>\n      &nbsp;&nbsp;&nbsp;\n      <img *ngIf=\"user.role=='admin'\" src=\"assets/images/pencil.png\" width=\"15\" (click)=\"modeUpdate(notif.id)\">\n      &nbsp;&nbsp;&nbsp;\n      {{notif.message}}<br><br>\n      <div *ngFor=\"let attachment of notif.attachments\" (click)=\"downloadAttachmentNotif(attachment)\">\n        <div *ngIf=\"attachment.split('.').pop()=='jpeg'\">\n          <img class=\"img-responsive\" src=\"{{attachmentUrl}}/{{attachment}}\" width=\"100%\">\n        </div>\n        <div *ngIf=\"attachment.split('.').pop()!='jpeg'\">\n          <img class=\"img-responsive\" src=\"assets/images/file.png\" width=\"15\" height=\"15\">{{attachment|slice:31}}\n        </div>\n        <br>\n      </div>\n    </ion-text>\n  </ion-item>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
      }])],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9FOlxcRVBcXEJJU09ORE9DU1xcQmFsaVNtYXJ0SW5ub3ZhdGlvbi9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
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

    var Tab2Page = /*#__PURE__*/function () {
      function Tab2Page(apiService, alertCtrl, router, config) {
        _classCallCheck(this, Tab2Page);

        this.apiService = apiService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.config = config;
        this.mode = 'CREATE';
        this.notifId = '';
        this.message = '';
        this.msgInsertNotif = "";
        this.user = JSON.parse(localStorage.getItem('user'));
      }

      _createClass(Tab2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.attachmentUrl = this.config.serverUrl + "/assets/attachments-notif";
          this.getPageNotif();
        }
      }, {
        key: "onChangeAttachments",
        value: function onChangeAttachments(attachments) {
          this.attachments = attachments.target.files;
          this.msgAttachment = attachments.target.files.length + " file";
        }
      }, {
        key: "getPageNotif",
        value: function getPageNotif() {
          var _this = this;

          this.apiService.postData('getPageNotif', {
            activeUserId: this.user.id
          }).subscribe(function (result) {
            console.log(result);

            if (result.responseCode == true) {
              _this.notifications = result.notifications;
            }
          }, function (err) {
            _this.apiService.gangguan(err);

            console.log(err);
          });
        }
      }, {
        key: "downloadAttachmentNotif",
        value: function downloadAttachmentNotif(attachment) {
          window.open(this.config.serverUrl + "/api/downloadAttachmentNotif/" + attachment, '_self');
        }
      }, {
        key: "insertNotif",
        value: function insertNotif() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var validForm, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    validForm = true;

                    if (this.message == '') {
                      validForm = false;
                      this.msgInsertNotif = 'Pesan Harus diisi';
                      document.getElementById('stlMsgInsertNotif').style.color = 'red';
                    }

                    if (!validForm) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 5;
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

                          inputData.append('activeUserId', _this2.user.id);
                          inputData.append('message', _this2.message);

                          if (_this2.mode == 'CREATE') {
                            var endpoint = 'insertNotif';
                          } else {
                            var endpoint = 'updateNotif';
                            inputData.append('id', _this2.notifId);
                          }

                          _this2.apiService.postData(endpoint, inputData).subscribe(function (result) {
                            if (result.responseCode == true) {
                              _this2.message = "";
                              _this2.msgInsertNotif = result.responseMessage;
                              document.getElementById('stlMsgInsertNotif').style.color = 'green';

                              _this2.getPageNotif();
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
        key: "modeUpdate",
        value: function modeUpdate(id) {
          document.querySelector('ion-content').scrollToTop(500);

          for (var i = 0; i < this.notifications.length; i++) {
            if (this.notifications[i].id == id) {
              this.notifId = this.notifications[i].id;
              this.message = this.notifications[i].message;
              this.attachmentsUpdate = this.notifications[i].attachments; //this.attachments = 
            }
          } //var attachmentsUpdate = this.attachmentsUpdate.split(",")
          //console.log(this.attachmentsUpdate)


          this.mode = 'UPDATE';
          this.attachments = undefined;
          this.msgAttachment = this.attachmentsUpdate.length + ' file';
        }
      }, {
        key: "modeCreate",
        value: function modeCreate() {
          document.querySelector('ion-content').scrollToTop(50000);
          this.mode = 'CREATE';
          this.message = '';
          this.attachmentsUpdate = undefined;
          this.msgAttachment = '';
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
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

    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map