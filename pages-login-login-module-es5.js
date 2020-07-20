function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content id=\"content\">\n  <ion-grid style=\"background-color: #f2f2f2; -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);\">\n    <br>\n    <ion-row>\n      <ion-col size=\"6\" align=\"right\">\n        <img class=\"img-responsive logo-pln-ip\" src=\"assets/images/logo-pln-ip.png\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <img class=\"img-responsive logo-bali-smart-innovation\" src=\"assets/images/logo-bali-smart-innovation.png\"><br><br><br>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\">\n        <!-- <form #serverForm=\"ngForm\" (ngSubmit)=\"setServerUrl(serverForm)\" method=\"post\">\n          <br><br><br>\n          <ion-item>\n            <ion-label position=\"floating\">SERVER URL</ion-label>\n            <ion-input [(ngModel)]=\"serverUrl\" type=\"text\" name=\"serverUrl\" required></ion-input>\n          </ion-item>\n          <br><br>\n          <ion-button size=\"large\" type=\"submit\" expand=\"full\" color=\"primary\">SET SERVER</ion-button>\n        </form> -->\n        <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" method=\"post\">\n          <br><br><br>\n          <ion-item>\n            <ion-label position=\"floating\">NIP / Email</ion-label>\n            <ion-input ngModel type=\"text\" name=\"nip\" required></ion-input>\n          </ion-item>\n          <br><br>\n          <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input ngModel type=\"password\" name=\"password\" required></ion-input>\n          </ion-item>\n          <br>\n          <div id=\"errorMessage\" [innerHTML]=\"errorMessage\"><br>{{errorMessage}}</div>\n          <br>\n          <ion-button size=\"large\" type=\"submit\" expand=\"full\" color=\"primary\">Masuk</ion-button><br>\n          <!-- <div id=\"spinnerDownloadLink\" style=\"color: #665; background-color: white; padding: 5px\" align=\"center\"><br>Generate download link for android and windows <ion-spinner name=\"lines\"></ion-spinner></div>\n          <ion-button size=\"large\" id=\"downloadPwa\" expand=\"full\" color=\"primary\">Download APP</ion-button>\n          <div id=\"appInstalled\" style=\"color: #665; background-color: white; padding: 5px\" align=\"center\"></div>\n          <div id=\"iphoneMessage\" style=\"color: #665; background-color: white; padding: 5px\">Install this webapp to your iPhone: tap <ion-icon name=\"share\"></ion-icon> and then Add to home screen</div> -->\n        </form>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#errorMessage {\n  color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXEVQXFxCSVNPTkRPQ1NcXEJhbGlTbWFydElubm92YXRpb24vc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXJyb3JNZXNzYWdle1xyXG5cdGNvbG9yOiAjZjJmMmYyO1xyXG59IiwiI2Vycm9yTWVzc2FnZSB7XG4gIGNvbG9yOiAjZjJmMmYyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/config.service */
    "./src/app/services/config.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(apiService, config, platform) {
        _classCallCheck(this, LoginPage);

        this.apiService = apiService;
        this.config = config;
        this.platform = platform;
        this.settings = JSON.parse(localStorage.getItem('settings'));
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // document.getElementById('downloadPwa').style.display = 'none';  
          // document.getElementById('appInstalled').style.display = 'none';
          // document.getElementById('spinnerDownloadLink').style.display = 'block';
          // document.getElementById('iphoneMessage').style.display = 'none';
          // if(this.platform.is("ios")){
          //   document.getElementById('iphoneMessage').style.display = 'block';
          //   document.getElementById('spinnerDownloadLink').style.display = 'none';
          // } else {
          //   console.log('!ios')
          // }
          // window.addEventListener('beforeinstallprompt', (e) => {
          //   //  Prevent the mini-infobar from appearing on mobile
          //   e.preventDefault();
          //   // Stash the event so it can be triggered later.
          //   this.deferredPrompt = e;
          //   // Update UI notify the user they can install the PWA
          //   document.getElementById('spinnerDownloadLink').style.display = 'none';
          //   document.getElementById('downloadPwa').style.display = 'block';
          // });
          // //button click event to show the promt
          // document.getElementById('downloadPwa').addEventListener('click', (e) => {
          //   // Hide the app provided install promotion
          //   // hideMyInstallPromotion();
          //   document.getElementById('downloadPwa').style.display = 'none';
          //   // Show the install prompt
          //   this.deferredPrompt.prompt();
          //   // Wait for the user to respond to the prompt
          //   this.deferredPrompt.userChoice.then((choiceResult) => {
          //     if (choiceResult.outcome === 'accepted') {
          //       document.getElementById('appInstalled').innerHTML = 'You accepted the install prompt';
          //       document.getElementById('appInstalled').style.display = 'block';
          //     } else {
          //       document.getElementById('appInstalled').innerHTML = 'You dismissed the install prompt';
          //       document.getElementById('appInstalled').style.display = 'block';
          //     }
          //   })
          // });
          // window.addEventListener('appinstalled', (evt) => {
          //   console.log('Bali Smart Innovation installed');
          // });
          // window.addEventListener('load', () => {
          //   if (matchMedia('(display-mode: standalone)').matches) {
          //     document.getElementById('appInstalled').innerHTML = 'Bali Smart Innovation installed on your phone';
          //     document.getElementById('appInstalled').style.display = 'block';
          //     console.log('Launched: Installed');
          //   } else {
          //     console.log('Launched: Browser Tab');
          //   }
          // });
          this.apiService.getSetToken().subscribe(function (result) {
            if (result.token != undefined) {
              localStorage.setItem('token', result.token);
              localStorage.setItem('settings', JSON.stringify(result.settings));
              var elem = document.querySelector('#content');
              elem.setAttribute("style", "--background: url('" + _this.config.serverUrl + "/assets/settings/" + result.settings.background_login + "') no-repeat 0 0/auto 100%;");

              if (localStorage.getItem('user') != undefined) {
                window.open('/tabs', '_self');
              }
            } else {
              console.log(result);

              _this.apiService.gangguan(result);
            }
          }, function (err) {
            _this.apiService.gangguan(err);

            console.log(err);
          });
        }
      }, {
        key: "login",
        value: function login(form) {
          var _this2 = this;

          var isFormValid = true;
          this.errorMessage = '';

          if (form.value.nip == '') {
            this.errorMessage = this.errorMessage + '<br>nip/email harus diisi<br>';
            isFormValid = false;
          }

          if (form.value.password == '') {
            this.errorMessage = this.errorMessage + '<br>password harus diisi';
            isFormValid = false;
          }

          if (isFormValid) {
            var inputData = {
              nip: form.value.nip,
              password: form.value.password
            };
            this.apiService.postData('login', inputData).subscribe(function (result) {
              console.log(result);

              if (result.responseCode == false) {
                _this2.errorMessage = result.responseMessage;
              } else if (result.responseCode == true) {
                localStorage.setItem('user', JSON.stringify(result.user));
                window.location.href = '/tabs';
              }
            }, function (err) {
              console.log(err);

              _this2.apiService.gangguan(err);
            });
          }
        }
      }, {
        key: "setServerUrl",
        value: function setServerUrl(serverForm) {
          var _this3 = this;

          this.apiService.getSetToken().subscribe(function (result) {
            console.log('result token ' + result);

            if (result.token != undefined) {
              localStorage.setItem('token', result.token);
            } else {
              console.log(result);

              _this3.apiService.gangguan(result);
            }
          }, function (err) {
            console.log(err);

            _this3.apiService.gangguan(err);
          });
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map