(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Distress\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-button *ngIf=\"!alerting\" color=\"danger\" id=\"center\" (click)=\"GetHelp()\">CALL FOR HELP</ion-button>\r\n\t<ion-card *ngIf=\"alerting\" color=\"success\">\r\n\t  <ion-card-header>\r\n\t    <ion-card-subtitle>{{helperCount}} responders alerted</ion-card-subtitle>\r\n\t    <ion-card-title>Help is on the way!</ion-card-title>\r\n\t  </ion-card-header>\r\n\r\n\t  <ion-card-content>\r\n\t    Here are some \r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#center {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -100px;\n  width: 50%;\n  height: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXFl1YW4gQ2hlblxcTGlmZWxpbmVcXGZyb250ZW5kL3NyY1xcYXBwXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjZW50ZXIgXHJcbntcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdG1hcmdpbi10b3A6IC01MHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRoZWlnaHQ6IDI1JTtcclxufVxyXG4iLCIjY2VudGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/socket.service */ "./src/services/socket.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");





let Tab2Page = class Tab2Page {
    constructor(socket, platform, geolocation) {
        this.socket = socket;
        this.platform = platform;
        this.geolocation = geolocation;
        this.location = {};
        this.alerting = false;
        this.helperCount = 0;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Since ngOnInit() is executed before `deviceready` event,
            // you have to wait the event.
            yield this.platform.ready();
            this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
                this.location = { 'lat': resp.coords.latitude, 'lng': resp.coords.longitude };
                console.log(this.location);
            });
            this.socket.updateDistressSignals()
                .subscribe(signals => {
                console.log("New Update");
                console.log(signals);
                this.alerting = false;
                if (signals.length > 0) {
                    for (var i = 0; i < signals.length; i++) {
                        if (signals[i]['id'] === this.socketId) {
                            this.alerting = true;
                            break;
                        }
                    }
                }
            });
            this.socket.updateAlertStatus()
                .subscribe((data) => {
                this.socketId = data.sessionId;
                this.alerting = data.alerting;
                this.helperCount = data.connectCounter;
            });
        });
    }
    ionViewDidEnter() {
        this.socket.updateDistressSignals();
    }
    GetHelp() {
        this.platform.ready();
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true
        }).then((resp) => {
            this.location = { 'coords': { 'lat': resp.coords.latitude, 'lng': resp.coords.longitude } };
            console.log(this.location);
            this.socket.emit("CreateDistressSignal", this.location);
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map