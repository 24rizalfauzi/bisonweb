function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"background\">\n  <div class=\"profile\" class=\"ion-text-uppercase\">\n    <br><br><br>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" align=\"center\">\n          <ion-avatar style=\"border-color: white\">\n            <img src=\"{{userPhoto}}\">\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"2\"></ion-col>\n        <ion-col size=\"6\">\n          <div id=\"userNip\">{{userNip}}</div>\n          <div id=\"userName\">{{userName}}</div>\n          <div id=\"userEmail\">{{userEmail}}</div>\n          <div id=\"roleName\">{{roleName}}</div>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"status\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\" align=\"center\">\n          <br><br><br><br><br><br><br>\n          <div>\n            <i style=\"font-size:20px\">\"{{userStatus}}\"</i>\n            <br><br>\n            <img *ngIf=\"user.role=='admin' || user.id==userId\" src=\"assets/images/pencil.png\" width=\"30px\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/modal'\" [queryParams]=\"{modalName:'Update User', userId:userId}\">\n          </div>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/profile/profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");
    /* harmony import */


    var _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../modal/modal.module */
    "./src/app/pages/modal/modal.module.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfilePageRoutingModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["ModalPageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]
      }])],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (max-width: 629px) {\n  ion-content {\n    --background: url(\"/assets/images/background-slanted.jpeg\") 0 0/100% auto no-repeat;\n  }\n\n  #userNip {\n    color: white;\n    font-size: 12px;\n  }\n\n  #userName {\n    color: white;\n    font-size: 14px;\n  }\n\n  #userEmail {\n    color: white;\n    font-size: 10px;\n  }\n\n  #roleName {\n    color: white;\n    font-size: 10px;\n  }\n}\nion-avatar {\n  position: absolute;\n  width: 90px !important;\n  height: 90px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9FOlxcRVBcXEJJU09ORE9DU1xcQmFsaVNtYXJ0SW5ub3ZhdGlvbi9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0c7SUFDRSxtRkFBQTtFQ0NIOztFRENEO0lBQ0MsWUFBQTtJQUFjLGVBQUE7RUNHZDs7RURERDtJQUNDLFlBQUE7SUFBYyxlQUFBO0VDS2Q7O0VESEQ7SUFDQyxZQUFBO0lBQWMsZUFBQTtFQ09kOztFRExEO0lBQ0MsWUFBQTtJQUFjLGVBQUE7RUNTZDtBQUNGO0FETkE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYyOXB4KSB7XHJcbiAgXHRpb24tY29udGVudCB7XHJcbiAgICBcdC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLXNsYW50ZWQuanBlZycpIDAgMC8xMDAlIGF1dG8gbm8tcmVwZWF0O1xyXG5cdH1cclxuXHQjdXNlck5pcHtcclxuXHRcdGNvbG9yOiB3aGl0ZTsgZm9udC1zaXplOjEycHhcclxuXHR9XHJcblx0I3VzZXJOYW1le1xyXG5cdFx0Y29sb3I6IHdoaXRlOyBmb250LXNpemU6MTRweFxyXG5cdH1cclxuXHQjdXNlckVtYWlse1xyXG5cdFx0Y29sb3I6IHdoaXRlOyBmb250LXNpemU6MTBweFxyXG5cdH1cclxuXHQjcm9sZU5hbWV7XHJcblx0XHRjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZToxMHB4XHJcblx0fVxyXG59XHJcblxyXG5pb24tYXZhdGFyICB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTBweCAhaW1wb3J0YW50OyAgXHJcbiAgICBoZWlnaHQgOiA5MHB4ICFpbXBvcnRhbnQ7ICBcclxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyOXB4KSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtc2xhbnRlZC5qcGVnXCIpIDAgMC8xMDAlIGF1dG8gbm8tcmVwZWF0O1xuICB9XG5cbiAgI3VzZXJOaXAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAjdXNlck5hbWUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAjdXNlckVtYWlsIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgI3JvbGVOYW1lIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5pb24tYXZhdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(apiService, activatedRoute, modalController, config) {
        _classCallCheck(this, ProfilePage);

        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.modalController = modalController;
        this.config = config;
        this.user = JSON.parse(localStorage.getItem('user'));
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            var userId = params['userId'];
            _this.userId = userId;
            var inputData = {
              activeUserId: _this.user.id,
              userId: userId
            };

            _this.apiService.postData('getUserById', inputData).subscribe(function (result) {
              if (result.responseCode == false) {
                _this.apiService.gangguan(result);
              } else if (result.responseCode == true) {
                _this.userNip = result.user.nip;
                _this.userName = result.user.name;
                _this.roleName = result.user.role;
                _this.userStatus = result.user.status;
                _this.userEmail = result.user.email;
                _this.userPhoto = _this.config.serverUrl + "/assets/profile-pics/" + result.user.photo;
              }
            }, function (err) {
              _this.apiService.gangguan(err);
            });
          });
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
      }];
    };

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map