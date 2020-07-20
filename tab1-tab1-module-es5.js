function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Beranda\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<img class=\"img-responsive slant-bottom hide-in-browser\" src=\"assets/images/background-home.jpeg\" width=\"100%\">\n  <ion-grid>\n    <ion-row>\n      <ion-col no-padding size=\"4\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:user.id}\">\n        <ion-card>\n          <ion-card-content align=\"center\">\n            <img class=\"img-responsive\" src=\"assets/images/account.png\" width=\"40\" height=\"40\">\n            <p class=\"page-text-grid\">Profile</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col no-padding size=\"4\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/ide'\">\n        <ion-card>\n          <ion-card-content align=\"center\">\n            <img class=\"img-responsive\" src=\"assets/images/lightbulb.png\" width=\"40\" height=\"40\">\n            <p class=\"page-text-grid\">Ide</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col no-padding size=\"4\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/sharing-session'\">\n        <ion-card>\n          <ion-card-content align=\"center\">\n            <img class=\"img-responsive\" src=\"assets/images/presentation.png\" width=\"40\" height=\"40\">\n            <p class=\"page-text-grid\">Sharing</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col no-padding size=\"4\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/ebook'\">\n        <ion-card>\n          <ion-card-content align=\"center\">\n            <img class=\"img-responsive\" src=\"assets/images/book.png\" width=\"40\" height=\"40\">\n            <p class=\"page-text-grid\">Ebook</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col no-padding size=\"4\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/history'\">\n        <ion-card>\n          <ion-card-content align=\"center\">\n            <img class=\"img-responsive\" src=\"assets/images/clipboard.png\" width=\"40\" height=\"40\">\n            <p class=\"page-text-grid\">History</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngIf=\"user.role=='admin'\" no-padding size=\"4\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/settings'\">\n        <ion-card>\n          <ion-card-content align=\"center\">\n            <img class=\"img-responsive\" src=\"assets/images/settings.png\" width=\"40\" height=\"40\">\n            <p class=\"page-text-grid\">Settings</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col no-padding size=\"4\" [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/pegawai'\">\n        <ion-card>\n          <ion-card-content align=\"center\">\n            <img class=\"img-responsive\" src=\"assets/images/group.png\" width=\"40\" height=\"40\">\n            <p class=\"page-text-grid\">Pegawai</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
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


    var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
      }])],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.page-text-grid {\n  font-size: 12px;\n}\n\nion-card {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n  margin-left: 5px !important;\n  margin-right: 5px !important;\n}\n\nion-icon {\n  font-size: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9FOlxcRVBcXEJJU09ORE9DU1xcQmFsaVNtYXJ0SW5ub3ZhdGlvbi9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0MsZUFBQTtBQ0VEOztBREFBO0VBQ0MsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNHRDs7QURBQTtFQUNDLDBCQUFBO0FDR0QiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4ud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucGFnZS10ZXh0LWdyaWQge1xuXHRmb250LXNpemU6IDEycHhcbn1cbmlvbi1jYXJkIHtcblx0bWFyZ2luLXRvcDogNXB4ICAhaW1wb3J0YW50O1xuXHRtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcblx0bWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuXHRtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbiB7XG5cdGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xufSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFnZS10ZXh0LWdyaWQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(alertController) {
        _classCallCheck(this, Tab1Page);

        this.alertController = alertController;
        this.user = JSON.parse(localStorage.getItem('user'));
      }

      _createClass(Tab1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map