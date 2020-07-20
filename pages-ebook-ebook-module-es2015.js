(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ebook-ebook-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ebook/ebook.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ebook/ebook.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      E-Book\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<ion-card class=\"welcome-card\">\n\t    <ion-card-content>\n\t\t\t<form #form=\"ngForm\" (ngSubmit)=\"uploadEbook(form)\" method=\"post\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label>Folder</ion-label>\n\t\t\t\t\t<ion-select placeholder=\"Pilih Folder\" name=\"folder\" [(ngModel)]=\"folder\">\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let fld of folderEbook\" value=\"{{fld}}\">{{fld}}</ion-select-option>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t    <ion-item lines=\"none\">\n\t\t\t\t\t<label class=\"custom-file-upload\">\n\t\t\t\t\t\t<ion-input [(ngModel)]=\"attachments\" type=\"file\" name=\"attachments\" multiple (change)=\"onChangeAttachments($event)\"></ion-input>\n\t\t\t\t\t\tPilih E-book\n\t\t\t\t\t</label>&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t<div [innerHTML]=\"msgAttachment\"></div>\n\t\t\t\t</ion-item>\n\t\t\t\t<p id=\"stlMsgUploadEbook\" [innerHTML]=\"msgUploadEbook\"></p><br>\n\t\t\t\t<ion-button type=\"submit\" expand=\"full\" color=\"primary\">Upload E-Book</ion-button>\n\t\t\t</form>\n\t    </ion-card-content>\n\t</ion-card>\n\t<ion-item>\n\t\t<ion-label>List Ebook : </ion-label>\n\t</ion-item>\n\t<ion-item>\n\t\t<ion-label>Pilih Folder</ion-label>\n\t\t<ion-select #C (ionChange)=\"onChangeFolderList(C.value)\">\n\t\t\t<ion-select-option *ngFor=\"let fld of folderEbook\" value=\"{{fld}}\">{{fld}}</ion-select-option>\n\t\t</ion-select>\n\t</ion-item>\n\t<ion-item *ngFor=\"let ebook of showEbooks\">\n\t    <ion-avatar style=\"border-color: white\">\n\t      <img class=\"img-responsive\" src=\"assets/images/book.png\" width=\"15\" height=\"15\">\n\t    </ion-avatar>&nbsp;&nbsp;&nbsp;\n\t    <ion-label>\n\t      <p><a [routerDirection]=\"'root'\" [routerLink]=\"'/tabs/profile'\" [queryParams]=\"{userId:ebook.uploaderId}\" style=\"text-decoration: none;\">{{ebook.uploaderName}}</a></p>\n\t      <!-- <h2 (click)=\"downloadEbook(ebook.ebookName)\">{{ebook.ebookName}}</h2> -->\n\t      <h2 *ngFor=\"let attachment of ebook.attachments\" (click)=\"downloadAttachment(attachment)\">{{attachment|slice:31}}<br>\n\t      </h2>\n\t      <p style=\"text-align:right\">{{ebook.createdDate | date:'dd/MM/yyyy HH:mm:ss'}}</p>\n\t    </ion-label>\n\t  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/ebook/ebook-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/ebook/ebook-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EbookPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbookPageRoutingModule", function() { return EbookPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ebook_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ebook.page */ "./src/app/pages/ebook/ebook.page.ts");




const routes = [
    {
        path: '',
        component: _ebook_page__WEBPACK_IMPORTED_MODULE_3__["EbookPage"]
    }
];
let EbookPageRoutingModule = class EbookPageRoutingModule {
};
EbookPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EbookPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ebook/ebook.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/ebook/ebook.module.ts ***!
  \*********************************************/
/*! exports provided: EbookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbookPageModule", function() { return EbookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ebook_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ebook-routing.module */ "./src/app/pages/ebook/ebook-routing.module.ts");
/* harmony import */ var _ebook_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ebook.page */ "./src/app/pages/ebook/ebook.page.ts");








let EbookPageModule = class EbookPageModule {
};
EbookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ebook_routing_module__WEBPACK_IMPORTED_MODULE_6__["EbookPageRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _ebook_page__WEBPACK_IMPORTED_MODULE_7__["EbookPage"] }])
        ],
        declarations: [_ebook_page__WEBPACK_IMPORTED_MODULE_7__["EbookPage"]]
    })
], EbookPageModule);



/***/ }),

/***/ "./src/app/pages/ebook/ebook.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/ebook/ebook.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vib29rL2Vib29rLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/ebook/ebook.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/ebook/ebook.page.ts ***!
  \*******************************************/
/*! exports provided: EbookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbookPage", function() { return EbookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");





let EbookPage = class EbookPage {
    constructor(http, apiService, config) {
        this.http = http;
        this.apiService = apiService;
        this.config = config;
        this.msgAttachment = "";
        this.msgUploadEbook = "";
        this.user = JSON.parse(localStorage.getItem('user'));
        this.settings = JSON.parse(localStorage.getItem('settings'));
        this.folder = undefined;
    }
    ngOnInit() {
        this.folderEbook = this.settings.folder_ebook.split(",");
        this.getPageEbook();
    }
    getPageEbook() {
        this.apiService.postData('getPageEbook', { activeUserId: this.user.id }).subscribe((result) => {
            if (result.responseCode == true) {
                this.ebooks = result.ebooks;
                console.log(result.ebooks);
            }
        }, (err) => {
            console.log(err);
            this.apiService.gangguan(err);
        });
    }
    downloadAttachment(ebookName) {
        window.open(this.config.serverUrl + `/api/downloadEbook/` + ebookName, '_self');
    }
    uploadEbook(form) {
        console.log(this.attachments);
        console.log(this.folder);
        var validForm = true;
        if (this.folder == undefined) {
            this.msgUploadEbook = '<br>Folder harus dipilih';
            document.getElementById('stlMsgUploadEbook').style.color = 'red';
            validForm = false;
        }
        if (this.attachments == undefined) {
            this.msgUploadEbook = this.msgUploadEbook + '<br>Ebook harus di attach';
            document.getElementById('stlMsgUploadEbook').style.color = 'red';
            validForm = false;
        }
        if (validForm) {
            const inputData = new FormData();
            const files = this.attachments;
            if (files == undefined) {
                inputData.append("attachments", undefined);
            }
            else {
                for (let i = 0; i < files.length; i++) {
                    inputData.append("attachments", files[i], files[i]['name']);
                }
            }
            inputData.append("activeUserId", this.user.id);
            inputData.append("uploaderId", this.user.id);
            inputData.append("folder", this.folder);
            this.apiService.postData('uploadEbook', inputData).subscribe((result) => {
                console.log(result);
                if (result.responseCode == false) {
                    this.msgUploadEbook = result.responseMessage;
                    document.getElementById('stlMsgUploadEbook').style.color = 'red';
                }
                else if (result.responseCode == true) {
                    this.attachments = undefined;
                    this.folder = undefined;
                    this.msgAttachment = '';
                    this.msgUploadEbook = result.responseMessage;
                    document.getElementById('stlMsgUploadEbook').style.color = 'green';
                    this.getPageEbook();
                }
            }, (err) => {
                console.log(err);
                this.apiService.gangguan(err);
            });
        }
    }
    onChangeAttachments(attachments) {
        this.attachments = attachments.target.files;
        this.msgAttachment = attachments.target.files.length + " file";
    }
    onChangeFolderList(folderName) {
        this.showEbooks = this.ebooks[folderName];
    }
};
EbookPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
EbookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ebook',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ebook.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ebook/ebook.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ebook.page.scss */ "./src/app/pages/ebook/ebook.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
], EbookPage);



/***/ })

}]);
//# sourceMappingURL=pages-ebook-ebook-module-es2015.js.map