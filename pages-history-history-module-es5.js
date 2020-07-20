function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<br>\n    <ion-row>\n      <ion-col size=\"6\" align=\"center\" (click)=\"showIdeas()\">\n        <img class=\"img-responsive\" src=\"assets/images/lightbulb.png\" width=\"25\" height=\"25\"> Ide\n      </ion-col>\n      <ion-col size=\"6\" align=\"center\" (click)=\"showSharings()\">\n        <img class=\"img-responsive\" src=\"assets/images/presentation.png\" width=\"25\" height=\"25\"> Sharing\n      </ion-col>\n    </ion-row>\n    <ion-item-divider></ion-item-divider>\n\t<ion-item class=\"welcome-card\" *ngFor=\"let ide of ideas\" id=\"ide\">\n\t    <img class=\"img-responsive\" src=\"assets/images/lightbulb.png\" width=\"20\" height=\"20\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t    <div>\n\t\t\t<br>\n\t\t\t<div>Mentor : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:ide.mentorId}\" style=\"text-decoration: none;\">{{ide.mentorName}}</a></div>\n\t\t\t<div>Pengaju : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:ide.applicantId}\" style=\"text-decoration: none;\">{{ide.applicantName}}</a></div>\n\t\t\t<div>Judul : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/forum-ide'\" [queryParams]=\"{ideId:ide.ideId}\" style=\"text-decoration: none;\">{{ide.judul}}</a></div>\n\t\t\t<div>Status : {{ide.status}}</div>\n\t\t\t<div style=\"text-align:right\">{{ide.createdDate | date:'dd/MM/yyyy HH:mm:ss'}}</div>\n\t\t    <br>\n\t    </div>\n  \t</ion-item>\n\t<ion-item class=\"welcome-card\" *ngFor=\"let sharing of sharings\" id=\"sharing\" style=\"display:none\">\n\t    <img class=\"img-responsive\" src=\"assets/images/presentation.png\" width=\"20\" height=\"20\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t    <div>\n\t\t\t<br>\n\t\t\t<div>Mentor : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:sharing.mentorId}\" style=\"text-decoration: none;\">{{sharing.mentorName}}</a></div>\n\t\t\t<div>Pengaju : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:sharing.applicantId}\" style=\"text-decoration: none;\">{{sharing.applicantName}}</a></div>\n\t\t\t<div>Judul : <a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/forum-sharing-session'\" [queryParams]=\"{sharingId:sharing.sharingId}\" style=\"text-decoration: none;\">{{sharing.judul}}</a></div>\n\t\t\t<div>Status : {{sharing.status}}</div>\n\t\t\t<div style=\"text-align:right\">{{sharing.createdDate | date:'dd/MM/yyyy HH:mm:ss'}}</div>\n\t\t\t<br>\n\t    </div>\n  \t</ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/history/history-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/history/history-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: HistoryPageRoutingModule */

  /***/
  function srcAppPagesHistoryHistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function () {
      return HistoryPageRoutingModule;
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


    var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/pages/history/history.page.ts");

    var routes = [{
      path: '',
      component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }];

    var HistoryPageRoutingModule = function HistoryPageRoutingModule() {
      _classCallCheck(this, HistoryPageRoutingModule);
    };

    HistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HistoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/history/history.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/history/history.module.ts ***!
    \*************************************************/

  /*! exports provided: HistoryPageModule */

  /***/
  function srcAppPagesHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
      return HistoryPageModule;
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


    var _history_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./history-routing.module */
    "./src/app/pages/history/history-routing.module.ts");
    /* harmony import */


    var _history_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/pages/history/history.page.ts");

    var HistoryPageModule = function HistoryPageModule() {
      _classCallCheck(this, HistoryPageModule);
    };

    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _history_routing_module__WEBPACK_IMPORTED_MODULE_6__["HistoryPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_7__["HistoryPage"]
      }])],
      declarations: [_history_page__WEBPACK_IMPORTED_MODULE_7__["HistoryPage"]]
    })], HistoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/history/history.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/history/history.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/history/history.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/history/history.page.ts ***!
    \***********************************************/

  /*! exports provided: HistoryPage */

  /***/
  function srcAppPagesHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
      return HistoryPage;
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

    var HistoryPage = /*#__PURE__*/function () {
      function HistoryPage(apiService) {
        _classCallCheck(this, HistoryPage);

        this.apiService = apiService;
        this.user = JSON.parse(localStorage.getItem('user'));
      }

      _createClass(HistoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPageHistoryIde();
        }
      }, {
        key: "getPageHistoryIde",
        value: function getPageHistoryIde() {
          var _this = this;

          this.apiService.postData('getPageHistoryIde', {
            activeUserId: this.user.id,
            userId: this.user.id,
            userRole: this.user.role
          }).subscribe(function (result) {
            if (result.responseCode == true) {
              _this.ideas = result.ideas;
              _this.sharings = result.sharings;
            }
          }, function (err) {
            _this.apiService.gangguan(err);

            console.log(err);
          });
        }
      }, {
        key: "showIdeas",
        value: function showIdeas() {
          document.getElementById('sharing').style.display = 'none';
          document.getElementById('ide').style.display = 'inline';
        }
      }, {
        key: "showSharings",
        value: function showSharings() {
          document.getElementById('sharing').style.display = 'inline';
          document.getElementById('ide').style.display = 'none';
        }
      }]);

      return HistoryPage;
    }();

    HistoryPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.page.scss */
      "./src/app/pages/history/history.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], HistoryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-history-history-module-es5.js.map