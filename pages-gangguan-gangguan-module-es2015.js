(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gangguan-gangguan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gangguan/gangguan.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gangguan/gangguan.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Gangguan\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div style=\"margin:10px\">\n      <div align=\"center\"><img class=\"img-responsive\" src=\"assets/images/problem.png\" height=\"100\" width=\"100\"></div>\n      <p>\n        Terjadi Kesalahan.\n        Pastikan koneksi internet Anda terhubung ke jaringan kantor.\n        Tanyakan kepada teknisi apakah server sedang down?\n        Atau hubungi administrator.\n      </p>\n      <ion-button expand=\"full\" color=\"primary\" (click)=\"tryAgain()\">Coba Lagi</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/gangguan/gangguan-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/gangguan/gangguan-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GangguanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GangguanPageRoutingModule", function() { return GangguanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gangguan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gangguan.page */ "./src/app/pages/gangguan/gangguan.page.ts");




const routes = [
    {
        path: '',
        component: _gangguan_page__WEBPACK_IMPORTED_MODULE_3__["GangguanPage"]
    }
];
let GangguanPageRoutingModule = class GangguanPageRoutingModule {
};
GangguanPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GangguanPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gangguan/gangguan.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/gangguan/gangguan.module.ts ***!
  \***************************************************/
/*! exports provided: GangguanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GangguanPageModule", function() { return GangguanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _gangguan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gangguan-routing.module */ "./src/app/pages/gangguan/gangguan-routing.module.ts");
/* harmony import */ var _gangguan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gangguan.page */ "./src/app/pages/gangguan/gangguan.page.ts");







let GangguanPageModule = class GangguanPageModule {
};
GangguanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gangguan_routing_module__WEBPACK_IMPORTED_MODULE_5__["GangguanPageRoutingModule"]
        ],
        declarations: [_gangguan_page__WEBPACK_IMPORTED_MODULE_6__["GangguanPage"]]
    })
], GangguanPageModule);



/***/ }),

/***/ "./src/app/pages/gangguan/gangguan.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/gangguan/gangguan.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbmdndWFuL2dhbmdndWFuLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/gangguan/gangguan.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/gangguan/gangguan.page.ts ***!
  \*************************************************/
/*! exports provided: GangguanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GangguanPage", function() { return GangguanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GangguanPage = class GangguanPage {
    constructor() { }
    ngOnInit() {
    }
    tryAgain() {
        window.open('/tabs', '_self');
    }
};
GangguanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gangguan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gangguan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gangguan/gangguan.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gangguan.page.scss */ "./src/app/pages/gangguan/gangguan.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GangguanPage);



/***/ })

}]);
//# sourceMappingURL=pages-gangguan-gangguan-module-es2015.js.map