function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pegawai-pegawai-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pegawai/pegawai.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pegawai/pegawai.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPegawaiPegawaiPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>pegawai</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"user.role=='admin'\">\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\">\n        <form #form=\"ngForm\" (ngSubmit)=\"submitCreateUser(form)\" method=\"post\">\n        <ion-item>\n          <ion-label position=\"floating\">NIP</ion-label>\n          <ion-input [(ngModel)]=\"userNip\" type=\"text\" name=\"userNip\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input [(ngModel)]=\"userPassword\" type=\"text\" name=\"userPassword\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Nama</ion-label>\n          <ion-input [(ngModel)]=\"userName\" type=\"text\" name=\"userName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input [(ngModel)]=\"userEmail\" type=\"text\" name=\"userEmail\"></ion-input>\n        </ion-item>\n        <ion-list>\n          <ion-item>\n            <ion-label>Role</ion-label>\n            <ion-select placeholder=\"Select One\" name=\"userRole\" [(ngModel)]=\"userRole\">\n              <ion-select-option value=\"admin\">Admin</ion-select-option>\n              <ion-select-option value=\"user\">User</ion-select-option>\n              <ion-select-option value=\"rso\">RSO</ion-select-option>\n              <ion-select-option value=\"mentor\">Mentor</ion-select-option>\n              <ion-select-option value=\"manager\">Manager</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        <!-- <ion-item>\n          <ion-label position=\"floating\">Status</ion-label>\n          <ion-textarea [(ngModel)]=\"userStatus\" name=\"userStatus\" rows=\"5\"></ion-textarea>\n        </ion-item> -->\n        <br>\n        <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Tambah Pegawai</ion-button>\n        <div id=\"msgSubmitCreateUser\" [innerHTML]=\"msgSubmitCreateUser\">{{msgSubmitCreateUser}}</div>\n        <br>\n        </form>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-item *ngFor=\"let peg of pegawai\">\n    <ion-avatar style=\"border-color: white\">\n      <img class=\"img-responsive\" src=\"{{photoUrl}}/{{peg.photo}}\" width=\"15\" height=\"15\">\n    </ion-avatar>&nbsp;&nbsp;&nbsp;\n    <ion-label>\n      <p><a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:peg.id}\" style=\"text-decoration: none;\">{{peg.name}}</a></p>\n    </ion-label>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/pegawai/pegawai-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/pegawai/pegawai-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PegawaiPageRoutingModule */

  /***/
  function srcAppPagesPegawaiPegawaiRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PegawaiPageRoutingModule", function () {
      return PegawaiPageRoutingModule;
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


    var _pegawai_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pegawai.page */
    "./src/app/pages/pegawai/pegawai.page.ts");

    var routes = [{
      path: '',
      component: _pegawai_page__WEBPACK_IMPORTED_MODULE_3__["PegawaiPage"]
    }];

    var PegawaiPageRoutingModule = function PegawaiPageRoutingModule() {
      _classCallCheck(this, PegawaiPageRoutingModule);
    };

    PegawaiPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PegawaiPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pegawai/pegawai.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/pegawai/pegawai.module.ts ***!
    \*************************************************/

  /*! exports provided: PegawaiPageModule */

  /***/
  function srcAppPagesPegawaiPegawaiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PegawaiPageModule", function () {
      return PegawaiPageModule;
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


    var _pegawai_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pegawai-routing.module */
    "./src/app/pages/pegawai/pegawai-routing.module.ts");
    /* harmony import */


    var _pegawai_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pegawai.page */
    "./src/app/pages/pegawai/pegawai.page.ts");

    var PegawaiPageModule = function PegawaiPageModule() {
      _classCallCheck(this, PegawaiPageModule);
    };

    PegawaiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pegawai_routing_module__WEBPACK_IMPORTED_MODULE_5__["PegawaiPageRoutingModule"]],
      declarations: [_pegawai_page__WEBPACK_IMPORTED_MODULE_6__["PegawaiPage"]]
    })], PegawaiPageModule);
    /***/
  },

  /***/
  "./src/app/pages/pegawai/pegawai.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/pegawai/pegawai.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPegawaiPegawaiPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlZ2F3YWkvcGVnYXdhaS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/pegawai/pegawai.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/pegawai/pegawai.page.ts ***!
    \***********************************************/

  /*! exports provided: PegawaiPage */

  /***/
  function srcAppPagesPegawaiPegawaiPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PegawaiPage", function () {
      return PegawaiPage;
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

    var PegawaiPage = /*#__PURE__*/function () {
      function PegawaiPage(apiService, activatedRoute, alertController, config) {
        _classCallCheck(this, PegawaiPage);

        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.config = config;
        this.userNip = '';
        this.userPassword = '';
        this.userName = '';
        this.userRole = '';
        this.userEmail = '';
        this.msgSubmitCreateUser = '';
        this.user = JSON.parse(localStorage.getItem('user'));
      }

      _createClass(PegawaiPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photoUrl = this.config.serverUrl + "/assets/profile-pics";
          this.getPagePegawai();
        }
      }, {
        key: "getPagePegawai",
        value: function getPagePegawai() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            var inputData = {
              activeUserId: _this.user.id
            };

            _this.apiService.postData('getPagePegawai', inputData).subscribe(function (result) {
              if (result.responseCode == true) {
                _this.pegawai = result.pegawai;
              }
            }, function (err) {
              _this.apiService.gangguan(err);

              console.log(err);
            });
          });
        }
      }, {
        key: "submitCreateUser",
        value: function submitCreateUser(form) {
          var _this2 = this;

          var validInput = true;
          this.msgSubmitCreateUser = '';

          if (!form.value.userNip || form.value.userNip == '') {
            validInput = false;
            this.msgSubmitCreateUser = '<br>NIP harus diisi';
          }

          if (!form.value.userRole || form.value.userRole == '') {
            validInput = false;
            this.msgSubmitCreateUser = this.msgSubmitCreateUser + '<br>Role harus diisi';
          }

          if (!form.value.userPassword || form.value.userPassword == '') {
            validInput = false;
            this.msgSubmitCreateUser = this.msgSubmitCreateUser + '<br>Password harus diisi';
          }

          if (!form.value.userName || form.value.userName == '') {
            validInput = false;
            this.msgSubmitCreateUser = this.msgSubmitCreateUser + '<br>Nama harus diisi';
          }

          if (!form.value.userEmail || form.value.userEmail == '') {
            validInput = false;
            this.msgSubmitCreateUser = this.msgSubmitCreateUser + '<br>Email harus diisi';
          }

          document.getElementById('msgSubmitCreateUser').style.color = 'red';

          if (validInput) {
            var profileForm = {
              activeUserId: this.user.id,
              nip: form.value.userNip,
              role: form.value.userRole,
              password: form.value.userPassword,
              name: form.value.userName,
              email: form.value.userEmail
            };
            this.apiService.postData('createUser', profileForm).subscribe(function (result) {
              if (result.responseCode == false) {
                console.log(result);
              } else if (result.responseCode == true) {
                _this2.msgSubmitCreateUser = 'Sukses';
                document.getElementById('msgSubmitCreateUser').style.color = 'green';

                _this2.getPagePegawai();
              }
            }, function (err) {
              _this2.apiService.gangguan(err);
            });
          }
        }
      }]);

      return PegawaiPage;
    }();

    PegawaiPage.ctorParameters = function () {
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

    PegawaiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pegawai',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pegawai.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pegawai/pegawai.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pegawai.page.scss */
      "./src/app/pages/pegawai/pegawai.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])], PegawaiPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-pegawai-pegawai-module-es5.js.map