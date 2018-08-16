webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n    <div class=\"app\" id=\"app\">\n        <app-header></app-header>\n        <app-nav></app-nav>\n        <article class=\"content\" style=\"padding: 70px 10px 85px 20px;\">\n            <router-outlet></router-outlet>\n        </article>\n        <footer class=\"footer\">\n            <div class=\"footer-block buttons\">\n                \n            </div>\n            <div class=\"footer-block author\">\n                <ul>\n               <!--     <li> created by\n                        <a href=\"https://github.com/modularcode\">ModularCode</a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/modularcode/modular-admin-html#get-in-touch\">get in touch</a>\n                    </li>\n                    -->\n                </ul>\n            </div>\n        </footer>\n    </div>\n</div>\n<!-- Reference block for JS -->\n<div class=\"ref\" id=\"ref\">\n    <div class=\"color-primary\"></div>\n    <div class=\"chart\">\n        <div class=\"color-primary\"></div>\n        <div class=\"color-secondary\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Urls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIURLS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");

var URLS = {
    local: "",
    prod: ""
};
var Urls = /** @class */ (function () {
    function Urls() {
    }
    Urls.getDomain = function () {
        if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].production) {
            return URLS.prod;
        }
        return URLS.local;
    };
    return Urls;
}());

var APIURLS = {
    client: "/api/client",
    invoice: "/api/invoice",
    user: "/api/user",
    userrole: "/api/userrole",
    adduserrole: "/api/userrole/adduserrole",
    getcompany: "/api/company/getCompany",
    updatecompany: "/api/company/updateCompany",
    savevoucher: "/api/voucher/saveVoucher",
    voucher: "/api/voucher",
    printIInvoiceUrl: "/api/invoice/IhtmlReport?performaId=",
    printPInvoiceUrl: "/api/invoice/PhtmlReport?performaId="
};


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__client_client_component__ = __webpack_require__("./src/app/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_users_service__ = __webpack_require__("./src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__invoice_invoice_component__ = __webpack_require__("./src/app/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__invoice_invoice_search_component__ = __webpack_require__("./src/app/invoice/invoice.search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__invoice_invoice_service__ = __webpack_require__("./src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__company_company_component__ = __webpack_require__("./src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__company_company_service__ = __webpack_require__("./src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__voucher_voucher_component__ = __webpack_require__("./src/app/voucher/voucher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__voucher_voucher_search_component__ = __webpack_require__("./src/app/voucher/voucher.search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__voucher_voucher_service__ = __webpack_require__("./src/app/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__gen_invoice_gen_invoice_component__ = __webpack_require__("./src/app/gen-invoice/gen-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__gen_invoice_gen_invoice_service__ = __webpack_require__("./src/app/gen-invoice/gen-invoice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'client', component: __WEBPACK_IMPORTED_MODULE_10__client_client_component__["a" /* ClientComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_12__users_users_component__["a" /* UsersComponent */] },
    { path: 'performaView/:id', component: __WEBPACK_IMPORTED_MODULE_14__invoice_invoice_component__["a" /* InvoiceComponent */] },
    { path: 'invoiceNew/:id', component: __WEBPACK_IMPORTED_MODULE_14__invoice_invoice_component__["a" /* InvoiceComponent */] },
    { path: 'invoice-search', component: __WEBPACK_IMPORTED_MODULE_15__invoice_invoice_search_component__["a" /* InvoiceSearchComponent */] },
    { path: 'generate-invoice/:id', component: __WEBPACK_IMPORTED_MODULE_22__gen_invoice_gen_invoice_component__["a" /* GenInvoiceComponent */] },
    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_17__company_company_component__["a" /* CompanyComponent */] },
    { path: 'voucherNew/:id', component: __WEBPACK_IMPORTED_MODULE_19__voucher_voucher_component__["a" /* VoucherComponent */] },
    { path: 'voucher-search', component: __WEBPACK_IMPORTED_MODULE_20__voucher_voucher_search_component__["a" /* VoucherSearchComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__client_client_component__["a" /* ClientComponent */],
                __WEBPACK_IMPORTED_MODULE_12__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_14__invoice_invoice_component__["a" /* InvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_15__invoice_invoice_search_component__["a" /* InvoiceSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_22__gen_invoice_gen_invoice_component__["a" /* GenInvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_17__company_company_component__["a" /* CompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_19__voucher_voucher_component__["a" /* VoucherComponent */],
                __WEBPACK_IMPORTED_MODULE_20__voucher_voucher_search_component__["a" /* VoucherSearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__client_client_service__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_13__users_users_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_16__invoice_invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_18__company_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_21__voucher_voucher_service__["a" /* VoucherService */], __WEBPACK_IMPORTED_MODULE_23__gen_invoice_gen_invoice_service__["a" /* GenInvoiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/client/client.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Manage Clients</h3>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n  Successfully Saved\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <div class=\"card-header\" style=\"padding-left:5px;\">\n        <div class=\"input-group mb-3\">\n          <input type=\"text\" class=\"form-control underlined\" placeholder=\"search\" (input)=\"onSearchChange($event.target.value)\"/>\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"new()\">\n              <i class=\"fa fa-plus-square\"></i> &nbsp;Add New</button>\n          </div>\n        </div>\n      </div>\n      <div style=\"overflow:auto;height:400px;background-color:white;\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngFor=\"let client of filterClients\" class=\"list-group-item\" (click)=\"edit(client)\" style=\"cursor: pointer;\">\n            {{client.name}}\n            <span class=\"float-right\">\n              <i class=\"fa fa-arrow-right\"></i>\n            </span>\n          </li>\n        </ul>\n        <div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-8\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form (ngSubmit)=\"submit()\" name=\"clientForm\" ngNativeValidate>\n          Client Id:{{client.id}}\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <label for=\"name\">Name *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"name\" id=\"name\" required=\"true\" [(ngModel)]=\"client.name\" pattern=\".{3,}\" title=\"3 characters minimum\"/>\n                <small>minimum 3 character</small>\n              </div>\n              <div class=\"col-md-4\">\n                <label for=\"active\">Status *</label>\n                <select id=\"active\" name=\"active \" class=\"form-control underlined\" required=\"true\" [(ngModel)]=\"client.active\">\n                  <option value=\"true\" selected>Active </option>\n                  <option value=\"false\">InActive </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label for=\"phonePrimary\">Primary Phone *</label>\n                <input type=\"tel\" class=\"form-control underlined\" pattern=\".{10,12}\" title=\"min 10, max 12 characters\"\n                name=\"phonePrimary\" id=\"phonePrimary\" required=\"true\" [(ngModel)]=\"client.phonePrimary\"\n                />\n                <small>min 10, max 12 characters</small>\n              </div>\n              <div class=\"col-md-6\">\n                <label for=\"email\">Primary Email *</label>\n                <input type=\"email\" class=\"form-control underlined\" name=\"email\" id=\"email\" required=\"true\" [(ngModel)]=\"client.email\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label for=\"name\">Secondary Phone</label>\n                <input type=\"tel\" class=\"form-control underlined\" name=\"phoneSecondary\" id=\"phoneSecondary\" required=\"false\" [(ngModel)]=\"client.phoneSecondary\"\n                />\n              </div>\n              <div class=\"col-md-6\">\n                <label for=\"faxNo\">Fax</label>\n                <input type=\"tel\" class=\"form-control underlined\" name=\"faxNo\" id=\"faxNo\" required=\"false\" [(ngModel)]=\"client.faxNo\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label for=\"pan\">PAN *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"pan\" id=\"pan\"  pattern=\".{10,}\" title=\"min 10 characters\" required=\"true\" [(ngModel)]=\"client.pan\" />\n                <small>min 10 characters</small>\n              </div>\n              \n              <div class=\"col-md-6\">\n                <label for=\"gstin\">GSTIN *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"gstin\" id=\"gstin\" pattern=\".{15,20}\" title=\"min 15,max 20 characters\" required=\"true\" [(ngModel)]=\"client.gstin\" />\n                <small>min 15,Max 20 characters</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label for=\"addrLine1\">Address line 1 *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"addrLine1\" pattern=\".{3,}\" title=\"min 3 characters\" id=\"addrLine1\" required=\"true\" [(ngModel)]=\"client.addrLine1\"/>\n                <small>min 3 characters</small>\n              </div>\n              <div class=\"col-md-6\">\n                <label for=\"addrLine2\">Address line 2 </label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"addrLine2\" id=\"addrLine2\" required=\"false\" [(ngModel)]=\"client.addrLine2\"\n                />\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <label for=\"city\">City *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"city\" pattern=\".{3,}\" title=\"min 3 characters\" id=\"city\" required=\"true\" [(ngModel)]=\"client.city\" />\n                <small>min 3 characters</small>\n              </div>\n              <div class=\"col-md-4\">\n                <label for=\"state\">State *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"state\" pattern=\".{2,}\" title=\"min 2 characters\" id=\"state\" required=\"true\" [(ngModel)]=\"client.state\" />\n                <small>min 2 characters</small>\n              </div>\n              <div class=\"col-md-4\">\n                <label for=\"pinCode\">PinCode *</label>\n                <input type=\"text\" class=\"form-control underlined\" pattern=\".{6,6}\" title=\"min 6,max 6 characters\" name=\"pincode\" id=\"pincode\" required=\"true\" [(ngModel)]=\"client.pincode\"\n                />\n                <small>6 characters</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label for=\"ServiceTaxRegNo\">Service Tax Reg No</label>\n                <input type=\"text\" class=\"form-control underlined\" pattern=\".{15,20}\" title=\"min 15,max 20 characters\" name=\"ServiceTaxRegNo\" id=\"ServiceTaxRegNo\" required=\"false\" [(ngModel)]=\"client.serviceTaxRegNo\"\n                />\n                <small>min 15, max 20 characters</small>\n              </div>\n              <div class=\"col-md-6\">\n                <label for=\"accountingType\">Accounting Type </label>\n                <input type=\"text\" class=\"form-control underlined\" pattern=\".{3,}\" title=\"min 3 characters\" name=\"accountingType\" id=\"accountingType\" required=\"false\" [(ngModel)]=\"client.accountingType\"\n                />\n                <small>min 3 characters</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <label for=\"logoImg\">Logo</label>\n                <input type=\"file\" name=\"file-logo\" id=\"file-logo\" (change)=\"changeListener($event)\" />\n              </div>\n              <div class=\"col-sm-6\">\n                <img height=\"75\" id=\"logoImg\" name=\"logoImg\" src=\"{{client.logoImg}}\" />\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn bg-primary float-right\"><i class=\"fa fa-save\"></i>&nbsp;Save Client</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_domain__ = __webpack_require__("./src/app/client/client.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_service__ = __webpack_require__("./src/app/client/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientComponent = /** @class */ (function () {
    function ClientComponent(clientService) {
        this.clientService = clientService;
        this.clients = [];
        this.filterClients = [];
        this.error = false;
        this.errorMessage = "";
        this.client = new __WEBPACK_IMPORTED_MODULE_1__client_domain__["a" /* Client */]();
        this.success = true;
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    ClientComponent.prototype.getClients = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.clientService.getForCompany()
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.filterClients = clients;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    ClientComponent.prototype.edit = function (client) {
        this.client = client;
    };
    ClientComponent.prototype.new = function () {
        this.success = false;
        this.error = false;
        this.client = new __WEBPACK_IMPORTED_MODULE_1__client_domain__["a" /* Client */]();
    };
    ClientComponent.prototype.submit = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.clientService.save(this.client)
            .subscribe(function (client) {
            _this.client = client;
            _this.getClients();
            _this.success = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    ClientComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    ClientComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        if (inputValue.files.length === 0) {
            return;
        }
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.client.logoImg = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    ClientComponent.prototype.onSearchChange = function (searchValue) {
        this.filterClients = this.clients.filter(function (cl) { return cl.name.toLowerCase().includes(searchValue.toLowerCase()); });
    };
    ClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client',
            template: __webpack_require__("./src/app/client/client.component.html"),
            styles: [__webpack_require__("./src/app/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__client_service__["a" /* ClientService */]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/client/client.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/client/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
    }
    ClientService.prototype.getForCompany = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].client);
        return this.http.get(url);
    };
    ClientService.prototype.save = function (client) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].client);
        return this.http.post(url, client, { headers: httpOptions.headers });
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n    {{errorMessage}}\n  </div>\n  <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n    Successfully Saved\n  </div>\n\n  <div class=\"card-header\" style=\"padding-left:20px;\">\n    <label for=\"companyName\">Company Name : </label>\n    <h5>{{company.companyName}}</h5>\n  </div>\n\n  <div class=\"card-body\">\n    <form (ngSubmit)=\"submitCompany()\" name=\"companyForm\" ngNativeValidate>\n\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <label for=\"email\">Owner Name</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"ownerName\" id=\"ownerName\" [(ngModel)]=\"company.ownerName\" />\n          </div>\n\n          <div class=\"col-sm-4\">\n            <label for=\"email\">Secondary Email</label>\n            <input type=\"email\" class=\"form-control underlined\" name=\"secondaryEmail\" id=\"secondaryEmail\" placeholder=\"Enter Secondary email address\"\n              [(ngModel)]=\"company.secondaryEmail\" />\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label for=\"firstname\">Address Line 1</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"addressLine1\" id=\"addressLine1\" [(ngModel)]=\"company.addressLine1\">\n          </div>\n          <div class=\"col-sm-6\">\n            <label for=\"firstname\">Address Line 2</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"addressLine2\" id=\"addressLine2\" [(ngModel)]=\"company.addressLine2\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <label for=\"firstname\">City</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"city\" id=\"city\" [(ngModel)]=\"company.city\" />\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"firstname\">State</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"state\" id=\"state\" [(ngModel)]=\"company.state\" />\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"firstname\">Pincode *</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"pinCode\" id=\"pinCode\" [(ngModel)]=\"company.pinCode\" />\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <label for=\"email\">Fax No</label>\n            <input type=\"tel\" class=\"form-control underlined\" name=\"fax\" id=\"fax\" [(ngModel)]=\"company.faxNo\" />\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"email\">Primary Phone</label>\n            <input type=\"tel\" class=\"form-control underlined\" name=\"pphone\" id=\"pphone\" [(ngModel)]=\"company.phonePrimary\" />\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"email\">Secondary Phone</label>\n            <input type=\"tel\" class=\"form-control underlined\" name=\"sphone\" id=\"sphone\" [(ngModel)]=\"company.phoneSecondary\" />\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <label for=\"email\">Bank Name</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"name\" id=\"name\" [(ngModel)]=\"company.bankName\" />\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"email\">IFSC Code</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"name\" id=\"name\" [(ngModel)]=\"company.branchIFSCCode\" />\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"email\">Branch</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"name\" id=\"name\" [(ngModel)]=\"company.branch\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <label for=\"email\">Account Number</label> <input type=\"text\" class=\"form-control underlined\" name=\"accountNo\"\n              id=\"accountNo\" [(ngModel)]=\"company.accountNo\" />\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"email\">Account Name</label> <input type=\"text\" class=\"form-control underlined\" name=\"accountName\"\n              id=\"accountName\" [(ngModel)]=\"company.accountName\" />\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"email\">Account Type</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"accountType\" id=\"accountType\" [(ngModel)]=\"company.accountType\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <label for=\"firstname\">Tan Number</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"tanNo\" id=\"tanNo\" [(ngModel)]=\"company.tanNo\" />\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"firstname\">GST Number</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"gstNo\" id=\"gstNo\" [(ngModel)]=\"company.gstNo\" />\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"firstname\">PAN Number</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"panNo\" id=\"panNo\" [(ngModel)]=\"company.panNo\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <label for=\"firstname\">Service TAX Reg number</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"serviceTaxRegNo\" id=\"serviceTaxRegNo\" [(ngModel)]=\"company.serviceTaxRegNo\"\n            />\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"firstname\">Accounting Type</label> <input type=\"text\" class=\"form-control underlined\" name=\"accountingType\"\n              id=\"accountingType\" [(ngModel)]=\"company.accountingType\" />\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"firstname\">Swift Code</label> <input type=\"text\" class=\"form-control underlined\" name=\"panNo\" id=\"panNo\"\n              [(ngModel)]=\"company.swiftCode\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label for=\"file-logo\">Logo</label> <input type=\"file\" id=\"file-logo\" />\n            <input type=\"hidden\" name=\"logo\" id=\"logo\" [(ngModel)]=\"company.logoImg\" />\n          </div>\n          <div class=\"col-sm-6\">\n            <img height=\"100\" id=\"img-logo\" [src]=\"company.logoImg\" />\n          </div>\n        </div>\n      </div>\n\n\n      <button class=\"btn btn-success pull-right\" type=\"submit\">Save</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_domain__ = __webpack_require__("./src/app/company/company.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/company/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(companyService) {
        this.companyService = companyService;
        this.error = false;
        this.errorMessage = "";
        this.success = true;
        this.company = new __WEBPACK_IMPORTED_MODULE_1__company_domain__["a" /* Company */]();
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.getCompany();
    };
    CompanyComponent.prototype.getCompany = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.companyService.getCompany()
            .subscribe(function (company) {
            _this.company = company;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    CompanyComponent.prototype.submitCompany = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.companyService.save(this.company)
            .subscribe(function (company) {
            _this.company = company;
            _this.getCompany();
            _this.success = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    CompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company',
            template: __webpack_require__("./src/app/company/company.component.html"),
            styles: [__webpack_require__("./src/app/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/company/company.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = "";
        this.ownerName = "";
        this.addressLine1 = "";
        this.addressLine2 = "";
        this.city = "";
        this.state = "";
        this.pinCode = "";
        this.phonePrimary = "";
        this.phoneSecondary = "";
        this.faxNo = "";
        this.tanNo = "";
        this.gstNo = "";
        this.panNo = "";
        this.serviceTaxRegNo = "";
        this.accountingType = "";
        this.logoImg = "";
        this.signatureImg = "";
        this.primaryEmail = "";
        this.secondaryEmail = "";
        this.bankName = "";
        this.branch = "";
        this.branchIFSCCode = "";
        this.accountNo = "";
        this.accountName = "";
        this.accountType = "";
        this.swiftCode = "";
        this.termsAndCondns = "";
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/company/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
    }
    CompanyService.prototype.save = function (company) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].updatecompany);
        return this.http.post(url, company, { headers: httpOptions.headers });
    };
    CompanyService.prototype.getCompany = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].getcompany);
        return this.http.get(url);
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"section\">\n  <div class=\"row sameheight-container\">\n    <div class=\"col col-12 col-sm-12 col-md-6 col-xl-5 stats-col\">\n      <div class=\"card sameheight-item stats\" data-exclude=\"xs\">\n        <div class=\"card-block\">\n          <div class=\"title-block\">\n            <h4 class=\"title\"> Stats </h4>\n            <p class=\"title-description\"> Website metrics for\n              <a href=\"http://modularteam.github.io/modularity-free-admin-dashboard-theme-html/\"> your awesome project </a>\n            </p>\n          </div>\n          <div class=\"row row-sm stats-container\">\n            <div class=\"col-12 col-sm-6 stat-col\">\n              <div class=\"stat-icon\">\n                <i class=\"fa fa-rocket\"></i>\n              </div>\n              <div class=\"stat\">\n                <div class=\"value\"> 5407 </div>\n                <div class=\"name\"> Active items </div>\n              </div>\n              <div class=\"progress stat-progress\">\n                <div class=\"progress-bar\" style=\"width: 75%;\"></div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 stat-col\">\n              <div class=\"stat-icon\">\n                <i class=\"fa fa-shopping-cart\"></i>\n              </div>\n              <div class=\"stat\">\n                <div class=\"value\"> 78464 </div>\n                <div class=\"name\"> Items sold </div>\n              </div>\n              <div class=\"progress stat-progress\">\n                <div class=\"progress-bar\" style=\"width: 25%;\"></div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6  stat-col\">\n              <div class=\"stat-icon\">\n                <i class=\"fa fa-line-chart\"></i>\n              </div>\n              <div class=\"stat\">\n                <div class=\"value\"> $80.560 </div>\n                <div class=\"name\"> Monthly income </div>\n              </div>\n              <div class=\"progress stat-progress\">\n                <div class=\"progress-bar\" style=\"width: 60%;\"></div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6  stat-col\">\n              <div class=\"stat-icon\">\n                <i class=\"fa fa-users\"></i>\n              </div>\n              <div class=\"stat\">\n                <div class=\"value\"> 359 </div>\n                <div class=\"name\"> Total users </div>\n              </div>\n              <div class=\"progress stat-progress\">\n                <div class=\"progress-bar\" style=\"width: 34%;\"></div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6  stat-col\">\n              <div class=\"stat-icon\">\n                <i class=\"fa fa-list-alt\"></i>\n              </div>\n              <div class=\"stat\">\n                <div class=\"value\"> 59 </div>\n                <div class=\"name\"> Tickets closed </div>\n              </div>\n              <div class=\"progress stat-progress\">\n                <div class=\"progress-bar\" style=\"width: 49%;\"></div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 stat-col\">\n              <div class=\"stat-icon\">\n                <i class=\"fa fa-dollar\"></i>\n              </div>\n              <div class=\"stat\">\n                <div class=\"value\"> $780.064 </div>\n                <div class=\"name\"> Total income </div>\n              </div>\n              <div class=\"progress stat-progress\">\n                <div class=\"progress-bar\" style=\"width: 15%;\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-12 col-sm-12 col-md-6 col-xl-7 history-col\">\n      <div class=\"card sameheight-item\" data-exclude=\"xs\" id=\"dashboard-history\">\n        <div class=\"card-header card-header-sm bordered\">\n          <div class=\"header-block\">\n            <h3 class=\"title\">History</h3>\n          </div>\n          <ul class=\"nav nav-tabs pull-right\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" href=\"#visits\" role=\"tab\" data-toggle=\"tab\">Visits</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#downloads\" role=\"tab\" data-toggle=\"tab\">Downloads</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"tab-content\">\n            <div role=\"tabpanel\" class=\"tab-pane active fade show\" id=\"visits\">\n              <p class=\"title-description\"> Number of unique visits last 30 days </p>\n              <div id=\"dashboard-visits-chart\"></div>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"downloads\">\n              <p class=\"title-description\"> Number of downloads last 30 days </p>\n              <div id=\"dashboard-downloads-chart\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"row sameheight-container\">\n    <div class=\"col-xl-8\">\n      <div class=\"card sameheight-item items\" data-exclude=\"xs,sm,lg\">\n        <div class=\"card-header bordered\">\n          <div class=\"header-block\">\n            <h3 class=\"title\"> Items </h3>\n            <a href=\"item-editor.html\" class=\"btn btn-primary btn-sm\"> Add new </a>\n          </div>\n          <div class=\"header-block pull-right\">\n            <label class=\"search\">\n                                                <input class=\"search-input\" placeholder=\"search...\">\n                                                <i class=\"fa fa-search search-icon\"></i>\n                                            </label>\n            <div class=\"pagination\">\n              <a href=\"\" class=\"btn btn-primary btn-sm\">\n                                                    <i class=\"fa fa-angle-up\"></i>\n                                                </a>\n              <a href=\"\" class=\"btn btn-primary btn-sm\">\n                                                    <i class=\"fa fa-angle-down\"></i>\n                                                </a>\n            </div>\n          </div>\n        </div>\n        <ul class=\"item-list striped\">\n          <li class=\"item item-list-header\">\n            <div class=\"item-row\">\n              <div class=\"item-col item-col-header fixed item-col-img xs\"></div>\n              <div class=\"item-col item-col-header item-col-title\">\n                <div>\n                  <span>Name</span>\n                </div>\n              </div>\n              <div class=\"item-col item-col-header item-col-sales\">\n                <div>\n                  <span>Sales</span>\n                </div>\n              </div>\n              <div class=\"item-col item-col-header item-col-stats\">\n                <div class=\"no-overflow\">\n                  <span>Stats</span>\n                </div>\n              </div>\n              <div class=\"item-col item-col-header item-col-date\">\n                <div>\n                  <span>Published</span>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"item\">\n            <div class=\"item-row\">\n              <div class=\"item-col fixed item-col-img xs\">\n                <a href=\"\">\n                  <div class=\"item-img xs rounded\" style=\"background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg)\"></div>\n                </a>\n              </div>\n              <div class=\"item-col item-col-title no-overflow\">\n                <div>\n                  <a href=\"\" class=\"\">\n                    <h4 class=\"item-title no-wrap\"> 12 Myths Uncovered About IT &amp; Software </h4>\n                  </a>\n                </div>\n              </div>\n              <div class=\"item-col item-col-sales\">\n                <div class=\"item-heading\">Sales</div>\n                <div> 4958 </div>\n              </div>\n              <div class=\"item-col item-col-stats\">\n                <div class=\"item-heading\">Stats</div>\n                <div class=\"no-overflow\">\n                  <div class=\"item-stats sparkline\" data-type=\"bar\"></div>\n                </div>\n              </div>\n              <div class=\"item-col item-col-date\">\n                <div class=\"item-heading\">Published</div>\n                <div> 21 SEP 10:45 </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"item\">\n            <div class=\"item-row\">\n              <div class=\"item-col fixed item-col-img xs\">\n                <a href=\"\">\n                  <div class=\"item-img xs rounded\" style=\"background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/128.jpg)\"></div>\n                </a>\n              </div>\n              <div class=\"item-col item-col-title no-overflow\">\n                <div>\n                  <a href=\"\" class=\"\">\n                    <h4 class=\"item-title no-wrap\"> 50% of things doesn&#x27;t really belongs to you </h4>\n                  </a>\n                </div>\n              </div>\n              <div class=\"item-col item-col-sales\">\n                <div class=\"item-heading\">Sales</div>\n                <div> 192 </div>\n              </div>\n              <div class=\"item-col item-col-stats\">\n                <div class=\"item-heading\">Stats</div>\n                <div class=\"no-overflow\">\n                  <div class=\"item-stats sparkline\" data-type=\"bar\"></div>\n                </div>\n              </div>\n              <div class=\"item-col item-col-date\">\n                <div class=\"item-heading\">Published</div>\n                <div> 21 SEP 10:45 </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"item\">\n            <div class=\"item-row\">\n              <div class=\"item-col fixed item-col-img xs\">\n                <a href=\"\">\n                  <div class=\"item-img xs rounded\" style=\"background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/eduardo_olv/128.jpg)\"></div>\n                </a>\n              </div>\n              <div class=\"item-col item-col-title no-overflow\">\n                <div>\n                  <a href=\"\" class=\"\">\n                    <h4 class=\"item-title no-wrap\"> Vestibulum tincidunt amet laoreet mauris sit sem aliquam cras maecenas vel aliquam. </h4>\n                  </a>\n                </div>\n              </div>\n              <div class=\"item-col item-col-sales\">\n                <div class=\"item-heading\">Sales</div>\n                <div> 2143 </div>\n              </div>\n              <div class=\"item-col item-col-stats\">\n                <div class=\"item-heading\">Stats</div>\n                <div class=\"no-overflow\">\n                  <div class=\"item-stats sparkline\" data-type=\"bar\"></div>\n                </div>\n              </div>\n              <div class=\"item-col item-col-date\">\n                <div class=\"item-heading\">Published</div>\n                <div> 21 SEP 10:45 </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"item\">\n            <div class=\"item-row\">\n              <div class=\"item-col fixed item-col-img xs\">\n                <a href=\"\">\n                  <div class=\"item-img xs rounded\" style=\"background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/why_this/128.jpg)\"></div>\n                </a>\n              </div>\n              <div class=\"item-col item-col-title no-overflow\">\n                <div>\n                  <a href=\"\" class=\"\">\n                    <h4 class=\"item-title no-wrap\"> 10 tips of Object Oriented Design </h4>\n                  </a>\n                </div>\n              </div>\n              <div class=\"item-col item-col-sales\">\n                <div class=\"item-heading\">Sales</div>\n                <div> 124 </div>\n              </div>\n              <div class=\"item-col item-col-stats\">\n                <div class=\"item-heading\">Stats</div>\n                <div class=\"no-overflow\">\n                  <div class=\"item-stats sparkline\" data-type=\"bar\"></div>\n                </div>\n              </div>\n              <div class=\"item-col item-col-date\">\n                <div class=\"item-heading\">Published</div>\n                <div> 21 SEP 10:45 </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"item\">\n            <div class=\"item-row\">\n              <div class=\"item-col fixed item-col-img xs\">\n                <a href=\"\">\n                  <div class=\"item-img xs rounded\" style=\"background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/w7download/128.jpg)\"></div>\n                </a>\n              </div>\n              <div class=\"item-col item-col-title no-overflow\">\n                <div>\n                  <a href=\"\" class=\"\">\n                    <h4 class=\"item-title no-wrap\"> Sometimes friend tells it is cold </h4>\n                  </a>\n                </div>\n              </div>\n              <div class=\"item-col item-col-sales\">\n                <div class=\"item-heading\">Sales</div>\n                <div> 10214 </div>\n              </div>\n              <div class=\"item-col item-col-stats\">\n                <div class=\"item-heading\">Stats</div>\n                <div class=\"no-overflow\">\n                  <div class=\"item-stats sparkline\" data-type=\"bar\"></div>\n                </div>\n              </div>\n              <div class=\"item-col item-col-date\">\n                <div class=\"item-heading\">Published</div>\n                <div> 21 SEP 10:45 </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"item\">\n            <div class=\"item-row\">\n              <div class=\"item-col fixed item-col-img xs\">\n                <a href=\"\">\n                  <div class=\"item-img xs rounded\" style=\"background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/pankogut/128.jpg)\"></div>\n                </a>\n              </div>\n              <div class=\"item-col item-col-title no-overflow\">\n                <div>\n                  <a href=\"\" class=\"\">\n                    <h4 class=\"item-title no-wrap\"> New ways of conceptual thinking </h4>\n                  </a>\n                </div>\n              </div>\n              <div class=\"item-col item-col-sales\">\n                <div class=\"item-heading\">Sales</div>\n                <div> 3217 </div>\n              </div>\n              <div class=\"item-col item-col-stats\">\n                <div class=\"item-heading\">Stats</div>\n                <div class=\"no-overflow\">\n                  <div class=\"item-stats sparkline\" data-type=\"bar\"></div>\n                </div>\n              </div>\n              <div class=\"item-col item-col-date\">\n                <div class=\"item-heading\">Published</div>\n                <div> 21 SEP 10:45 </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-xl-4\">\n      <div class=\"card sameheight-item sales-breakdown\" data-exclude=\"xs,sm,lg\">\n        <div class=\"card-header\">\n          <div class=\"header-block\">\n            <h3 class=\"title\"> Sales breakdown </h3>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"dashboard-sales-breakdown-chart\" id=\"dashboard-sales-breakdown-chart\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section map-tasks\">\n  <div class=\"row sameheight-container\">\n    <div class=\"col-md-8\">\n      <div class=\"card sameheight-item\" data-exclude=\"xs,sm\">\n        <div class=\"card-header\">\n          <div class=\"header-block\">\n            <h3 class=\"title\"> Sales by countries </h3>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <div id=\"dashboard-sales-map\" style=\"width: 100%; height: 400px;\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card tasks sameheight-item\" data-exclude=\"xs,sm\">\n        <div class=\"card-header bordered\">\n          <div class=\"header-block\">\n            <h3 class=\"title\"> Tasks </h3>\n          </div>\n          <div class=\"header-block pull-right\">\n            <a href=\"\" class=\"btn btn-primary btn-sm rounded pull-right\"> Add new </a>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"tasks-block\">\n            <ul class=\"item-list\">\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\" checked=\"checked\">\n                                                                <span>Meeting with embassador</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\" checked=\"checked\">\n                                                                <span>Confession</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Time to start building an ark</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Beer time with dudes</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\" checked=\"checked\">\n                                                                <span>Meeting new girls</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Remember damned home address</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Get home before you got sleep</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\" checked=\"checked\">\n                                                                <span>Meeting with embassador</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\" checked=\"checked\">\n                                                                <span>Confession</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Time to start building an ark</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Beer time with dudes</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\" checked=\"checked\">\n                                                                <span>Meeting new girls</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Remember damned home address</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n-->"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/gen-invoice/gen-invoice.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gen-invoice/gen-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Invoice Details</h3>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n  {{successMessage}}\n</div>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <table width=\"100%\">\n      <thead>\n        <tr>\n          <th>PerformA Id</th>\n          <th>Invoice Id</th>\n          <th>Invoice Date</th>\n          <th>Print</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>{{invoice.performaId}}</td>\n          <td>{{invoice.invoiceId}}</td>\n          <td><input type=\"date\" class=\"form-control underlined\" name=\"invoiceDate\" id=\"invoiceDate\" required=\"true\" [ngModel]=\"invoice.invoiceDate | date:'yyyy-MM-dd'\"\n              [disabled]=\"invoice.type==='INVOICE'\" />\n          </td>\n          <td>\n            <a target=\"_blank\" style=\"color:white;background-color:#432fb5\" class=\"btn\" [href]=\"invoice.url\">\n                  <i class=\"fa fa-print\"></i>\n             </a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<br/>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <table width=\"100%\" border=\"1\" style=\"border-collapse:collapse;border:#f2f2f2 solid 1px;\">\n      <thead>\n        <tr>\n          <th>Client Name</th>\n          <th colspan=\"3\">Address</th>\n          <th>GSTIN</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr valign=\"top\" >\n          <td>{{client.name}}</td>\n          <td colspan=\"3\">{{client.addrLine1}},\n            {{client.addrLine2}},<br/>\n            {{client.city}}, {{client.state}}<br/>\n            {{client.pincode}}<br/>\n            {{client.phonePrimary}},{{client.email}}\n            </td>\n          <td>{{client.gstin}}</td>\n        </tr>\n        <tr valign=\"top\">\n         <th colspan=\"5\">Particulars</th>\n        </tr>\n        <tr valign=\"top\">\n         <th>Item Description</th>\n         <th>Sac Code</th>\n         <th>Quantity</th>\n         <th>Rate</th>\n         <th>Amount</th>\n        </tr>\n        <tr valign=\"top\" *ngFor=\"let field of particulars;let i=index\">\n         <td >{{field.itemDescription}}</td>\n         <td>{{invoice.sacCode}}</td>\n         <td  align=\"right\">{{field.quantity}}</td>\n         <td  align=\"right\"><input [disabled]=\"invoice.type==='INVOICE'\" class=\"form-control\" style=\"width:100px;\" (change)=\"calculateAmount(field)\" type=\"number\" [(ngModel)]=\"field.invoiceRate\"/></td>\n         <td  align=\"right\">{{field.calculatedInvoiceAmount}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"4\" align=\"right\"><b>Sum</b></td>\n          <td align=\"right\">{{invoice.totalInvoiceBeforeTax}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"3\" align=\"right\">\n            CGST\n          </td>\n          <td  align=\"right\">{{invoice.cgstInvoicePercent}}</td>\n          <td  align=\"right\">{{invoice.cgstInvoice}}</td>\n        </tr>\n         <tr>\n          <td colspan=\"3\" align=\"right\">\n            SGST\n          </td>\n          <td align=\"right\">{{invoice.sgstInvoicePercent}}</td>\n          <td  align=\"right\">{{invoice.sgstInvoice}}</td>\n        </tr>\n         <tr>\n          <td colspan=\"3\" align=\"right\">\n            IGST\n          </td>\n          <td  align=\"right\">{{invoice.igstInvoicePercent}}</td>\n          <td  align=\"right\">{{invoice.igstInvoice}}</td>\n        </tr>\n         <tr>\n          <td colspan=\"4\" align=\"right\"><b>Total</b></td>\n          <td align=\"right\"><b>{{invoice.totalInvoiceAmount}}</b></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <button class=\"btn btn-primary float-right\" [disabled]=\"invoice.type==='INVOICE'\" (click)=\"generateInvoice()\">Generate Invoice</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/gen-invoice/gen-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_invoice_domain__ = __webpack_require__("./src/app/invoice/invoice.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gen_invoice_service__ = __webpack_require__("./src/app/gen-invoice/gen-invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_client_domain__ = __webpack_require__("./src/app/client/client.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GenInvoiceComponent = /** @class */ (function () {
    function GenInvoiceComponent(route, genInvoiceService, clientService) {
        this.route = route;
        this.genInvoiceService = genInvoiceService;
        this.clientService = clientService;
        this.performaIds = [];
        this.errorMessage = "";
        this.successMessage = "";
        this.success = false;
        this.error = false;
        this.particulars = [];
        this.invoiceData = new __WEBPACK_IMPORTED_MODULE_2__invoice_invoice_domain__["b" /* InvoiceData */]();
        this.invoice = new __WEBPACK_IMPORTED_MODULE_2__invoice_invoice_domain__["a" /* Invoice */]();
        this.clients = [];
        this.client = new __WEBPACK_IMPORTED_MODULE_5__client_client_domain__["a" /* Client */]();
        var invoiceIdParam;
        this.route.params.subscribe(function (params) {
            invoiceIdParam = params['id'];
            console.log(invoiceIdParam);
        });
        if (invoiceIdParam) {
            this.loadSelectedPerformAInvoice(invoiceIdParam);
        }
    }
    GenInvoiceComponent.prototype.ngOnInit = function () {
    };
    GenInvoiceComponent.prototype.loadSac = function () {
        alert("Loading SAC Code");
    };
    GenInvoiceComponent.prototype.loadSelectedPerformAInvoice = function (invoiceId) {
        var _this = this;
        this.error = false;
        this.success = false;
        this.genInvoiceService.getInvoice(invoiceId).subscribe(function (invoiceData) {
            _this.invoice = invoiceData.invoice;
            _this.invoice.url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printIInvoiceUrl.concat(_this.invoice.performaId);
            _this.invoice.purl = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printPInvoiceUrl.concat(_this.invoice.performaId);
            _this.particulars = invoiceData.particulars;
            if (_this.invoice.type != 'INVOICE') {
                _this.particulars.forEach(function (par) {
                    par.calculatedInvoiceAmount = par.calculatedPerformaAmount;
                    par.invoiceRate = par.performaRate;
                });
                _this.invoice.cgstInvoicePercent = _this.invoice.cgstPerfomaPercent;
                _this.invoice.sgstInvoicePercent = _this.invoice.sgstPerfomaPercent;
                _this.invoice.igstInvoicePercent = _this.invoice.igstPerfomaPercent;
                _this.invoice.invoiceDate = _this.invoice.performaDate;
            }
            _this.getClients();
            _this.calculateTotal();
        }, function (err) {
            _this.error = false;
            _this.errorMessage = "Error occured while getting the invoice details";
            console.log(err);
        });
    };
    GenInvoiceComponent.prototype.calculateAmount = function (field) {
        field.calculatedInvoiceAmount = field.quantity * field.invoiceRate;
        this.calculateTotal();
    };
    GenInvoiceComponent.prototype.calculateTotal = function () {
        var sum = 0;
        this.particulars.forEach(function (part) {
            sum = sum + part.calculatedInvoiceAmount;
        });
        this.invoice.totalInvoiceBeforeTax = sum;
        //apply Tax
        this.invoice.cgstInvoice = (this.invoice.cgstInvoicePercent * this.invoice.totalInvoiceBeforeTax) / 100;
        this.invoice.sgstInvoice = (this.invoice.sgstInvoicePercent * this.invoice.totalInvoiceBeforeTax) / 100;
        this.invoice.igstInvoice = (this.invoice.igstInvoicePercent * this.invoice.totalInvoiceBeforeTax) / 100;
        this.invoice.totalInvoiceAmount = (this.invoice.totalInvoiceBeforeTax + this.invoice.cgstInvoice + this.invoice.sgstInvoice
            + this.invoice.igstInvoice);
        this.invoice.totalInvoiceAmount.toFixed(2);
    };
    GenInvoiceComponent.prototype.getClients = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.clientService.getForCompany()
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.client = _this.clients.find(function (cli) { return cli.id === _this.invoice.clientId; });
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    GenInvoiceComponent.prototype.generateInvoice = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.invoiceData.invoice = this.invoice;
        this.invoiceData.particulars = this.particulars;
        this.genInvoiceService.saveInvoice(this.invoiceData).subscribe(function (invoiceData) {
            _this.invoiceData = invoiceData;
            _this.invoice = invoiceData.invoice;
            _this.particulars = invoiceData.particulars;
            _this.success = true;
            _this.successMessage = "Invoice successfully generated with id:" + _this.invoice.invoiceId;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured While saving the Invoice";
        });
    };
    GenInvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gen-invoice',
            template: __webpack_require__("./src/app/gen-invoice/gen-invoice.component.html"),
            styles: [__webpack_require__("./src/app/gen-invoice/gen-invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__gen_invoice_service__["a" /* GenInvoiceService */],
            __WEBPACK_IMPORTED_MODULE_4__client_client_service__["a" /* ClientService */]])
    ], GenInvoiceComponent);
    return GenInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/gen-invoice/gen-invoice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenInvoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var GenInvoiceService = /** @class */ (function () {
    function GenInvoiceService(http) {
        this.http = http;
    }
    GenInvoiceService.prototype.saveInvoice = function (invoiceData) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/invoice");
        console.log("Accessing " + url);
        return this.http.post(url, invoiceData, { headers: httpOptions.headers });
    };
    GenInvoiceService.prototype.getInvoice = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice)
            .concat("?invoiceId=")
            .concat(id.toString());
        console.log(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice + "  " + url);
        return this.http.get(url, { headers: httpOptions.headers });
    };
    GenInvoiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GenInvoiceService);
    return GenInvoiceService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\" style=\"height:40px;\">\n  <div class=\"header-block header-block-collapse d-lg-none d-xl-none\">\n    <button class=\"collapse-btn\" id=\"sidebar-collapse-btn\">\n                            <i class=\"fa fa-bars\"></i>\n                        </button>\n  </div>\n  <div class=\"header-block header-block-search\">\n\n  </div>\n  <div class=\"header-block header-block-nav\">\n    <ul class=\"nav-profile\">\n      <!-- <li class=\"notifications new\">\n        <a href=\"\" data-toggle=\"dropdown\">\n          <i class=\"fa fa-bell-o\"></i>\n            <sup>\n             <span class=\"counter\">8</span>\n            </sup>\n        </a>\n        <div class=\"dropdown-menu notifications-dropdown-menu\">\n          <ul class=\"notifications-container\">\n            <li>\n              <a href=\"\" class=\"notification-item\">\n                <div class=\"img-col\">\n                  <div class=\"img\" style=\"background-image: url('assets/faces/3.jpg')\"></div>\n                </div>\n                <div class=\"body-col\">\n                  <p>\n                    <span class=\"accent\">Zack Alien</span> pushed new commit:\n                    <span class=\"accent\">Fix page load performance issue</span>. </p>\n                </div>\n              </a>\n            </li>\n            <li>\n              <a href=\"\" class=\"notification-item\">\n                <div class=\"img-col\">\n                  <div class=\"img\" style=\"background-image: url('assets/faces/5.jpg')\"></div>\n                </div>\n                <div class=\"body-col\">\n                  <p>\n                    <span class=\"accent\">Amaya Hatsumi</span> started new task:\n                    <span class=\"accent\">Dashboard UI design.</span>. </p>\n                </div>\n              </a>\n            </li>\n            <li>\n              <a href=\"\" class=\"notification-item\">\n                <div class=\"img-col\">\n                  <div class=\"img\" style=\"background-image: url('assets/faces/8.jpg')\"></div>\n                </div>\n                <div class=\"body-col\">\n                  <p>\n                    <span class=\"accent\">Andy Nouman</span> deployed new version of\n                    <span class=\"accent\">NodeJS REST Api V3</span>\n                  </p>\n                </div>\n              </a>\n            </li>\n            \n          </ul>\n          <footer>\n            <ul>\n              <li>\n                <a href=\"\"> View All </a>\n              </li>\n            </ul>\n          </footer>\n        </div>\n      </li> -->\n      <li class=\"notifications new\">\n        <a href=\"\" data-toggle=\"dropdown\">\n          Roles:\n        </a>\n        <div class=\"dropdown-menu notifications-dropdown-menu\">\n          <ul class=\"notifications-container\">\n            <li *ngFor=\"let role of userRole\">\n              <div class=\"body-col\">\n                <p>\n                  <span>{{role.roleCode}}</span>\n                </p>\n              </div>\n            </li>\n          </ul>\n\n        </div>\n      </li>\n      <li class=\"profile dropdown\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <div class=\"img\" style=\"font-size:18px;\"><i class=\"fa fa-user\"></i> </div>\n          <span class=\"name\"> {{user.name}} </span>\n        </a>\n        <div class=\"dropdown-menu profile-dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n          <a class=\"dropdown-item\" href=\"/logout\">\n            <i class=\"fa fa-power-off icon\"></i> Logout </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_domain__ = __webpack_require__("./src/app/users/users.domain.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(http) {
        this.http = http;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__users_users_domain__["a" /* UserInfo */]();
        this.userRole = [];
        this.getUser();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.getUser = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].user).concat("/authenticated");
        this.http.get(url, { headers: httpOptions.headers })
            .subscribe(function (user) {
            _this.user = user;
            _this.getRoles(user.email);
        }, function (err) {
            console.log(err);
            alert("Error retrieving user");
        });
    };
    HeaderComponent.prototype.getRoles = function (email) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].userrole).concat("?email=").concat(email);
        this.http.get(url, { headers: httpOptions.headers })
            .subscribe(function (userRole) {
            _this.userRole = userRole;
        }, function (err) {
            console.log(err);
            alert("Error retrieving userRole");
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>PerformA Invoice Details</h3>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n  Successfully Saved\n</div>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-1 \"><b>Client</b></div>\n      <div class=\"col-md-2\">\n        <select (change)=\"loadSelectedClient()\" class=\"form-control underlined\" [(ngModel)]=\"selClientId\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">\n        <option></option>\n        <option *ngFor=\"let cli of clients\" [ngValue]=\"cli.id\" [selected]=\"cli.id === selClientId\">{{cli.name}}</option>\n         </select>\n      </div>\n      <div class=\"col-md-2\"><b>Performa Id : </b></div>\n      <div class=\"col-md-3\">{{invoice.performaId}}</div>\n      <div class=\"col-md-2\"><b>SAC code: </b></div>\n      <div class=\"col-md-2\">\n        <select (change)=\"loadSelectedSac()\" class=\"form-control underlined\" [(ngModel)]=\"selSacId\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">\n        <option></option>\n        <option *ngFor=\"let sac of sacCodes\" [ngValue]=\"sac.id\" [selected]=\"sac.id === selSacId\">{{sac.sacCode}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-1\"><b>Status : </b></div>\n      <div class=\"col-md-2\">{{invoice.status}}</div>\n      <div class=\"col-md-2\"><b>GSTIN : </b></div>\n      <div class=\"col-md-3\">{{selectedClient.gstin}}</div>\n      <div class=\"col-md-1\"><b>Date : </b></div>\n      <div class=\"col-md-3\">{{invoice.performaDate | date:\"dd MMM yyyy HH:mm\"}}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-1\"><b>Name : </b></div>\n      <div class=\"col-md-2\">{{selectedClient.name}}</div>\n      <div class=\"col-md-2\"><b>Address : </b></div>\n      <div class=\"col-md-4\">\n        {{selectedClient.addrLine1}} {{selectedClient.addrLine2}},\n        <br/> {{selectedClient.city}}, {{selectedClient.state}},\n        <br/>        {{selectedClient.pincode}}.\n        <br/>\n        <i>Phone : </i> {{selectedClient.phonePrimary}}.\n        <br/>\n        <i>Email : </i> {{selectedClient.email}}.\n        <br/>\n      </div>\n    </div>\n    <table class=\"table\">\n      <tr>\n        <th colspan=\"7\">Particulars</th>\n        <th><button class=\"btn btn-success\" (click)=\"addRow()\" *ngIf=\"!(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">AddRow</button></th>\n      </tr>\n      <tr>\n        <th colspan=\"5\">Item Description</th>\n        <th>Quantity</th>\n        <th>Rate</th>\n        <th>Amount</th>\n      </tr>\n      <tr *ngFor=\"let field of particulars;let i=index\">\n\n        <td><button class=\"btn btn-sm btn-danger\" (click)=\"deletParticulars(field.id)\" *ngIf=\"field.id && !(invoice.status=='CANCELED' || invoice.type=='INVOICE')\"><i class=\"fa fa-trash\"></i></button></td>\n\n        <td colspan=\"4\" WIDTH=\"70%\">\n          <textarea type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"field.itemDescription\" (change)=\"calculateAmount(field)\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">\n          </textarea>\n        </td>\n        <td WIDTH=\"10%\">\n          <input type=\"number\" class=\"form-control\" required=\"false\" min=\"0\" size=\"3\" [(ngModel)]=\"field.quantity\"  (change)=\"calculateAmount(field)\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\"/>\n        </td>\n        <td WIDTH=\"10%\"><input type=\"number\" class=\"form-control\" required=\"false\" min=\"0\"  [(ngModel)]=\"field.performaRate\" (change)=\"calculateAmount(field)\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\"/>\n        </td>\n        <td WIDTH=\"10%\">\n          <input type=\"number\" readoly class=\"form-control\" required=\"true\" readonly [(ngModel)]=\"field.calculatedPerformaAmount\"/>\n        </td>\n      </tr>\n      <tfoot>\n        <tr>\n          <td colspan=\"6\">\n          </td>\n          <th>\n            SUM =\n          </th>\n          <td>{{invoice.totalPerfomaBeforeTax}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"5\">\n          </td>\n          <th>\n            CGST =\n          </th>\n          <td>{{invoice.cgstPerfomaPercent}}</td>\n          <td>{{invoice.cgstPerfoma}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"5\">\n          </td>\n          <th>\n            SGST =\n          </th>\n          <td>{{invoice.sgstPerfomaPercent}}</td>\n          <td>{{invoice.sgstPerfoma}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"5\">\n          </td>\n          <th>\n            IGST =\n          </th>\n          <td>{{invoice.igstPerfomaPercent}}</td>\n          <td>{{invoice.igstPerfoma}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"6\">\n          </td>\n          <th>\n            Total =\n          </th>\n          <th>{{invoice.totalPerfomaAmount}}</th>\n        </tr>\n        <tr>\n          <td colspan=\"4\">\n          </td>\n          <td colspan=\"1\" align=\"right\">\n            <a target=\"_blank\" style=\"color:white;background-color:#432fb5\" class=\"btn\" [href]=\"invoice.purl\" *ngIf=\"invoice.purl\">\n                  <i class=\"fa fa-print\"></i>\n                  Print View\n             </a>\n          </td>\n          <td colspan=\"1\">\n            <button class=\"btn btn-secondary\" (click)=\"calculateTotal()\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">Calculate Total</button>\n          </td>\n          <td colspan=\"1\">\n            <button class=\"btn btn-primary\" (click)=\"savePerformaInvoice()\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">Save Invoice</button>\n          </td>\n          <td colspan=\"1\">\n            <button class=\"btn btn-warning\" (click)=\"cancelInvoice()\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">Cancel Invoice</button>\n          </td>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_client_domain__ = __webpack_require__("./src/app/client/client.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoice_domain__ = __webpack_require__("./src/app/invoice/invoice.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoice_service__ = __webpack_require__("./src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(route, clientService, invoiceService) {
        var _this = this;
        this.route = route;
        this.clientService = clientService;
        this.invoiceService = invoiceService;
        this.clients = [];
        this.error = false;
        this.errorMessage = "";
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_3__client_client_domain__["a" /* Client */]();
        this.success = true;
        this.particulars = [];
        this.invoiceData = new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["b" /* InvoiceData */]();
        this.invoice = new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["a" /* Invoice */]();
        this.sacCodes = [];
        this.selSacCode = new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["d" /* SACCode */]();
        var invoiceIdParam;
        this.route.params.subscribe(function (params) {
            invoiceIdParam = params['id'];
            console.log(invoiceIdParam);
        });
        if (invoiceIdParam != 0) {
            console.log("fetching the invoice for the id :" + invoiceIdParam);
            this.invoiceService.getInvoice(invoiceIdParam).subscribe(function (invoiceData) {
                console.log("invoice Data " + invoiceData);
                _this.invoice = invoiceData.invoice;
                _this.invoice.url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printIInvoiceUrl.concat(_this.invoice.performaId);
                _this.invoice.purl = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printPInvoiceUrl.concat(_this.invoice.performaId);
                _this.particulars = invoiceData.particulars;
                _this.selClientId = invoiceData.invoice.clientId;
                _this.getClients();
                _this.loadSelectedClient();
                _this.getSacCodes();
                _this.particulars.push(new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["c" /* Particulars */]());
                _this.calculateTotal();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.invoice = new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["a" /* Invoice */]();
            this.particulars = [];
            this.selClientId = null;
            this.getClients();
            this.getSacCodes();
            this.loadSelectedClient();
            this.particulars.push(new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["c" /* Particulars */]());
        }
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent.prototype.getInvoice = function () {
        this.invoice.id;
    };
    InvoiceComponent.prototype.getClients = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.clientService.getForCompany()
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.loadSelectedClient();
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    InvoiceComponent.prototype.getSacCodes = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.invoiceService.getSACCode()
            .subscribe(function (sac) {
            _this.sacCodes = sac;
            if (_this.invoice && _this.invoice.id != 0) {
                _this.selSacCode = _this.sacCodes.find(function (sc) { return sc.sacCode === _this.invoice.sacCode; });
                _this.selSacId = _this.selSacCode.id;
            }
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    InvoiceComponent.prototype.loadSelectedSac = function () {
        var _this = this;
        this.selSacCode = this.sacCodes.find(function (sac) { return sac.id === _this.selSacId; });
        this.invoice.cgstPerfomaPercent = this.selSacCode.cgstPercent;
        this.invoice.sgstPerfomaPercent = this.selSacCode.sgstPercent;
        this.invoice.igstPerfomaPercent = this.selSacCode.igstPercent;
        this.invoice.sacCode = this.selSacCode.sacCode;
    };
    InvoiceComponent.prototype.loadSelectedClient = function () {
        var _this = this;
        this.selectedClient = this.clients.find(function (cli) { return cli.id === _this.selClientId; });
        this.invoice.clientId = this.selClientId;
    };
    InvoiceComponent.prototype.addRow = function () {
        this.particulars.push(new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["c" /* Particulars */]());
        console.log(this.particulars);
    };
    InvoiceComponent.prototype.calculateAmount = function (field) {
        if (field.itemDescription !== "")
            field.calculatedPerformaAmount = field.quantity * field.performaRate;
        this.calculateTotal();
    };
    InvoiceComponent.prototype.calculateTotal = function () {
        var sum = 0;
        this.particulars.filter(function (part) { return part.itemDescription !== ""; }).forEach(function (part) {
            sum = sum + part.calculatedPerformaAmount;
        });
        this.invoice.totalPerfomaBeforeTax = sum;
        //apply Tax
        this.invoice.cgstPerfoma = (this.invoice.cgstPerfomaPercent * this.invoice.totalPerfomaBeforeTax) / 100;
        this.invoice.sgstPerfoma = (this.invoice.sgstPerfomaPercent * this.invoice.totalPerfomaBeforeTax) / 100;
        this.invoice.igstPerfoma = (this.invoice.igstPerfomaPercent * this.invoice.totalPerfomaBeforeTax) / 100;
        this.invoice.totalPerfomaAmount = (this.invoice.totalPerfomaBeforeTax + this.invoice.cgstPerfoma + this.invoice.sgstPerfoma
            + this.invoice.igstPerfoma);
        this.invoice.totalPerfomaAmount.toFixed(2);
    };
    InvoiceComponent.prototype.savePerformaInvoice = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.invoiceData.invoice = this.invoice;
        this.invoiceData.particulars = this.particulars.filter(function (part) { return part.itemDescription !== ""; });
        this.invoiceService.savePerforma(this.invoiceData).subscribe(function (invoiceData) {
            _this.invoiceData = invoiceData;
            _this.invoice = invoiceData.invoice;
            _this.particulars = invoiceData.particulars;
            _this.invoice.url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printIInvoiceUrl.concat(_this.invoice.performaId);
            _this.invoice.purl = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printPInvoiceUrl.concat(_this.invoice.performaId);
            _this.success = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured While saving the Invoice";
        });
    };
    InvoiceComponent.prototype.cancelInvoice = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.invoiceData.invoice = this.invoice;
        this.invoiceData.particulars = this.particulars;
        this.invoiceService.cancel(this.invoiceData.invoice.id).subscribe(function (invoice) {
            _this.invoiceData.invoice = invoice;
            _this.success = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured While saving the Invoice";
        });
    };
    InvoiceComponent.prototype.deletParticulars = function (particularId) {
        var _this = this;
        this.success = false;
        this.error = false;
        this.invoiceService.deleteParti(particularId).subscribe(function (str) {
            _this.particulars.splice(_this.particulars.map(function (part) { return part.id; }).indexOf(particularId), 1);
            _this.calculateTotal();
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured While saving the Invoice";
        });
    };
    InvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice',
            template: __webpack_require__("./src/app/invoice/invoice.component.html"),
            styles: [__webpack_require__("./src/app/invoice/invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__client_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_5__invoice_service__["a" /* InvoiceService */]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Particulars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Invoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InvoiceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SearchInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SearchResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SACCode; });
var Particulars = /** @class */ (function () {
    function Particulars() {
        this.index = "";
        this.itemDescription = "";
        this.quantity = 1;
        this.performaRate = 0;
        this.invoiceRate = 0;
    }
    return Particulars;
}());

var Invoice = /** @class */ (function () {
    function Invoice() {
        this.invoiceId = "";
        this.performaId = "";
        this.sacCode = "";
        this.cgstPerfomaPercent = 0;
        this.sgstPerfomaPercent = 0;
        this.igstPerfomaPercent = 0;
        this.cgstInvoicePercent = 0;
        this.sgstInvoicePercent = 0;
        this.igstInvoicePercent = 0;
        this.totalPerfomaAmount = 0;
        this.totalInvoiceAmount = 0;
        this.totalPerfomaBeforeTax = 0;
        this.totalInvoiceBeforeTax = 0;
        this.cgstPerfoma = 0;
        this.sgstPerfoma = 0;
        this.igstPerfoma = 0;
        this.cgstInvoice = 0;
        this.sgstInvoice = 0;
        this.igstInvoice = 0;
        this.createdBy = "";
        this.clientName = "";
        this.type = "";
        this.status = "NEW";
        this.url = "/api/invoice/IhtmlReport?performaId=";
        this.purl = "/api/invoice/PhtmlReport?performaId=";
    }
    return Invoice;
}());

var InvoiceData = /** @class */ (function () {
    function InvoiceData() {
        this.invoice = new Invoice();
        this.particulars = [];
    }
    return InvoiceData;
}());

var SearchInvoice = /** @class */ (function () {
    function SearchInvoice() {
        this.pageNumber = 0;
        this.type = "";
        this.invoiceId = "";
        this.performaId = "";
    }
    return SearchInvoice;
}());

var SearchResult = /** @class */ (function () {
    function SearchResult() {
    }
    return SearchResult;
}());

var SACCode = /** @class */ (function () {
    function SACCode() {
        this.sacCode = "";
    }
    return SACCode;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/invoice/invoice.search.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Search Invoice </h3>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form (ngSubmit)=\"submit()\" name=\"searchForm\" ngNativeValidate>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <label for=\"name\">Performa Id </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"performa Id\" id=\"performaId\" required=\"false\" [(ngModel)]=\"searchInvoice.performaId\"\n            />\n          </div>\n          <div class=\"col-md-3\">\n            <label for=\"name\">Invoice Id </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"invoiceId\" id=\"invoiceId\" required=\"false\" [(ngModel)]=\"searchInvoice.invoiceId\"\n            />\n          </div>\n          <div class=\"col-md-3\">\n            <label for=\"status\">Status </label>\n            <select id=\"status\" name=\"status \" class=\"form-control underlined\" required=\"false\" [(ngModel)]=\"searchInvoice.status\">\n                <option></option>   \n                  <option value=\"NEW\">NEW </option>\n                  <option value=\"CANCELED\">CANCELED </option>                  \n                </select>\n          </div>\n          <div class=\"col-md-3\">\n            <label for=\"client\">Client </label>\n            <select id=\"client\" name=\"client \" class=\"form-control underlined\" required=\"false\" [(ngModel)]=\"searchInvoice.clientId\">\n              <option></option>\n              <option *ngFor=\"let cli of clients\" [ngValue]=\"cli.id\">{{cli.name}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <label for=\"startDt\">Performa/Invoice </label>\n            <select id=\"status\" name=\"status \" class=\"form-control underlined\" required=\"false\" [(ngModel)]=\"searchInvoice.type\">\n                  <option></option>\n                  <option value=\"PERFORMA\">PERFORMA </option>\n                  <option value=\"INVOICE\">INVOICE </option>               \n                </select>\n          </div>\n          <div class=\"col-md-4\">\n            <label for=\"startDt\">Start Date </label>\n            <input type=\"date\" class=\"form-control underlined\" name=\"startDt\" id=\"startDt\" required=\"false\" [(ngModel)]=\"searchInvoice.invoiceStDate\"\n            />\n          </div>\n          <div class=\"col-md-4\">\n            <label for=\"endDt\">End Date</label>\n            <input type=\"date\" class=\"form-control underlined\" name=\"endDt\" id=\"endDt\" required=\"false\" [(ngModel)]=\"searchInvoice.invoiceEdDate\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <button type=\"submit\" class=\"btn btn-primary\">\n              <i class=\"fa fa-search\">&nbsp;</i>\n              Search</button>\n            <button type=\"reset\" class=\"btn btn-secondary\">\n              <i class=\"fa fa-refresh\">&nbsp;</i>\n              Reset</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <small style=\"color:#432fb5\">Displaying {{searchResult.numberOfElements}}/{{searchResult.totalElements}} items in this page</small>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Invoice Id</th>\n          <th>Performa Id</th>\n          <th>Client</th>\n          <th>Performa Date</th>\n          <th>Invoice Date</th>\n          <th>Performa Amount</th>\n          <th>Invoice Amount</th>\n          <th>Type</th>\n          <th>Status</th>\n          <th>Print</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let invoice of invoices\">\n          <td>\n            <a routerLink=\"/generate-invoice/{{invoice.id}}\" *ngIf=\"invoice.invoiceId\">{{invoice.invoiceId}}</a>\n            <a routerLink=\"/generate-invoice/{{invoice.id}}\" *ngIf=\"!invoice.invoiceId\" class=\"btn btn-success\">Generate Invoice</a>\n          </td>\n          <td>\n            <a routerLink=\"/performaView/{{invoice.id}}\" *ngIf=\"invoice.performaId\">{{invoice.performaId}}</a>\n          </td>\n          <td>{{invoice.clientName}}</td>\n          <td>{{invoice.performaDate | date:'yyyy-MM-dd'}}</td>\n          <td>{{invoice.invoiceDate | date:'yyyy-MM-dd'}}</td>\n          <td>{{invoice.totalPerfomaAmount}}</td>\n          <td>{{invoice.totalInvoiceAmount}}</td>\n          <td>{{invoice.type}}</td>\n          <td>{{invoice.status}}</td>\n          <td>\n              <div class=\"btn-group\">\n              <a target=\"_blank\" style=\"color:white;background-color:#432fb5;border:white solid 1px;\" class=\"btn btn-sm\" [href]=\"invoice.purl\">\n                  P\n              </a>\n              <a target=\"_blank\" *ngIf=\"invoice.invoiceId\" style=\"color:white;background-color:#3c3c3c;border:white solid 1px;\" class=\"btn btn-sm\" [href]=\"invoice.url\">\n                 I\n              </a>\n              </div>\n            </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <!--Table runat=\"server\" ID=\"tblPrint\" width=\"595px\" heigh=\"842px\" Border=\"1\" />-->\n    <nav aria-label=\"Page navigation example\">\n      <ul class=\"pagination\">\n        <li class=\"page-item\"><button class=\"btn btn-info\" [disabled]=\"searchResult.first\" (click)=\"submit(0)\">First</button></li>\n        <li class=\"page-item\" *ngFor=\"let pageNo of numbers\">\n          <button class=\"btn btn-info\" (click)=\"submit(pageNo)\">{{pageNo+1}}</button>\n        </li>\n        <li class=\"page-item\"><button class=\"btn btn-info\" [disabled]=\"searchResult.last\" (click)=\"submit(searchResult.totalElements-1)\">Last</button></li>\n      </ul>\n    </nav>\n    <small style=\"color:#432fb5\">Page Size is {{searchResult.size}}.</small>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/invoice/invoice.search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_service__ = __webpack_require__("./src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_domain__ = __webpack_require__("./src/app/invoice/invoice.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvoiceSearchComponent = /** @class */ (function () {
    function InvoiceSearchComponent(route, invoiceService, clientService) {
        this.route = route;
        this.invoiceService = invoiceService;
        this.clientService = clientService;
        this.success = true;
        this.error = false;
        this.errorMessage = "";
        this.searchInvoice = new __WEBPACK_IMPORTED_MODULE_3__invoice_domain__["e" /* SearchInvoice */]();
        this.clients = [];
        this.invoices = [];
        this.searchResult = new __WEBPACK_IMPORTED_MODULE_3__invoice_domain__["f" /* SearchResult */]();
        this.numbers = [];
    }
    InvoiceSearchComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    InvoiceSearchComponent.prototype.getClients = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.clientService.getForCompany()
            .subscribe(function (clients) {
            _this.clients = clients;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    InvoiceSearchComponent.prototype.submit = function (pageNumber) {
        var _this = this;
        if (pageNumber === void 0) { pageNumber = 0; }
        console.log(this.searchInvoice);
        this.invoiceService.searchInvoice(this.searchInvoice, pageNumber)
            .subscribe(function (searchResult) {
            _this.searchResult = searchResult;
            _this.numbers = Array(searchResult.totalPages).fill(1).map(function (x, i) { return i; });
            console.log(_this.numbers);
            _this.invoices = searchResult.content;
            _this.invoices.forEach(function (invoice) {
                invoice.clientName = _this.clients.find(function (client) { return client.id == invoice.clientId; }).name;
                invoice.url = __WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* APIURLS */].printIInvoiceUrl.concat(invoice.performaId);
                invoice.purl = __WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* APIURLS */].printPInvoiceUrl.concat(invoice.performaId);
            });
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured While searching the Invoice";
        });
    };
    InvoiceSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice-search',
            template: __webpack_require__("./src/app/invoice/invoice.search.component.html"),
            styles: [__webpack_require__("./src/app/invoice/invoice.search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_4__client_client_service__["a" /* ClientService */]])
    ], InvoiceSearchComponent);
    return InvoiceSearchComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var InvoiceService = /** @class */ (function () {
    function InvoiceService(http) {
        this.http = http;
    }
    InvoiceService.prototype.savePerforma = function (invoiceData) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/performa");
        console.log(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice + "  " + url);
        return this.http.post(url, invoiceData, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.saveInvoice = function (invoiceData) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice);
        console.log(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice + "  " + url);
        return this.http.post(url, invoiceData, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.cancel = function (invoiceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice)
            .concat("/cancel")
            .concat("?invoiceId=")
            .concat(invoiceId.toString());
        console.log("Cancel invoice  " + url);
        return this.http.patch(url, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.getInvoice = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice)
            .concat("?invoiceId=")
            .concat(id.toString());
        console.log(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice + "  " + url);
        return this.http.get(url, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.searchInvoice = function (searchInvoice, pageNo) {
        if (pageNo === void 0) { pageNo = 0; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/search")
            .concat("?pageNumber=")
            .concat(pageNo.toString());
        console.log("Searching : " + url);
        return this.http.post(url, searchInvoice, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.getSACCode = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/sac");
        return this.http.get(url, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.deleteParti = function (partiId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/delParticular?particularId=").concat(partiId.toString());
        var options = { responseType: 'text' };
        return this.http.get(url, options);
    };
    InvoiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"sidebar\">\n  <div class=\"sidebar-container\">\n    <div class=\"sidebar-header\">\n      <div class=\"brand\">\n        <img src=\"assets/g313.png\"/>\n    \n      </div>\n    </div>\n    <nav class=\"menu\">\n      <ul class=\"sidebar-menu metismenu\" id=\"sidebar-menu\">\n        <li>\n          <a routerLink=\"/dashboard\" routerLinkActive=\"active\">\n           <i class=\"fa fa-home\"></i> Dashboard </a>\n        </li>\n        <li>\n          <a routerLink=\"/client\" routerLinkActive=\"active\">\n           <i class=\"fa fa-group\"></i> Manage Clients </a>\n        </li>\n        <li>\n          <a routerLink=\"/users\" routerLinkActive=\"active\">\n           <i class=\"fa fa-user\"></i> Manage Users </a>\n        </li>\n        <li>\n          <a href=\"\">\n            <i class=\"fa fa-file-text\"></i> Invoice\n            <i class=\"fa arrow\"></i>\n           </a>\n          <ul class=\"sidebar-nav\">\n            <li>\n              <a routerLink=\"/invoiceNew/0\" routerLinkActive=\"active\">New PerformA</a>\n            </li>\n            <li>\n              <a routerLink=\"/invoice-search\"> Search </a>\n            </li>\n          </ul>\n        </li>\n          <li>\n          <a href=\"\">\n            <i class=\"fa fa-book\"></i> Voucher\n            <i class=\"fa arrow\"></i>\n           </a>\n          <ul class=\"sidebar-nav\">\n            <li>\n              <a routerLink=\"/voucherNew/0\" routerLinkActive=\"active\">New</a>\n            </li>\n            <li>\n              <a routerLink=\"/voucher-search\"> Search </a>\n            </li>\n          </ul>\n        </li>\n\n\n        <!-- <li class=\"active\">\n          <a href=\"\">\n          <i class=\"fa fa-th-large\"></i> test Sub menu\n          <i class=\"fa arrow\"></i>\n          </a>\n          <ul class=\"sidebar-nav\">\n            <li >\n              <a routerLink=\"/dashboard\" routerLinkActive=\"active\"> Items List </a>\n            </li>\n            <li>\n              <a routerLink=\"/dashboard\" routerLinkActive=\"active\"> Item Editor </a>\n            </li>\n             <li>\n              <a routerLink=\"/dashboard\" routerLinkActive=\"active\"> Item Editor </a>\n            </li>\n          </ul>\n        </li>-->\n      </ul>\n    </nav>\n  </div>\n  <footer class=\"sidebar-footer\">\n    <ul class=\"sidebar-menu metismenu\" id=\"customize-menu\">\n      <li>\n        <ul>\n          <li class=\"customize\">\n            <a routerLink=\"/company\" routerLinkActive=\"active\">Edit</a>\n          </li>\n        </ul>\n        <a href=\"\">\n         <i class=\"fa fa-cog\"></i> Company </a>\n      </li>\n    </ul>\n  </footer>\n</aside>\n<div class=\"sidebar-overlay\" id=\"sidebar-overlay\"></div>\n<div class=\"sidebar-mobile-menu-handle\" id=\"sidebar-mobile-menu-handle\"></div>\n<div class=\"mobile-menu-handle\"></div>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Manage Users</h3>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n  Successfully Saved\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <div class=\"card-header\" style=\"padding-left:5px;\">\n        <div class=\"input-group mb-3\">\n          <input type=\"text\" class=\"form-control underlined\" placeholder=\"search\" />\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"new()\">Add New</button>\n          </div>\n        </div>\n      </div>\n      <div style=\"overflow:auto;height:400px;background-color:white;\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngFor=\"let user of users\" class=\"list-group-item\" (click)=\"edit(user)\">{{user.name}}</li>\n        </ul>\n        <div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-8\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form (ngSubmit)=\"submit()\" name=\"userForm\" ngNativeValidate>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <label for=\"name\">User Name</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"name\" id=\"name\" required=\"true\" [(ngModel)]=\"user.name\" />\n              </div>\n              <div class=\"col-md-4\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"email\" id=\"email\" required=\"true\" [(ngModel)]=\"user.email\" />\n              </div>\n              <div class=\"col-md-4\">\n                <label for=\"active\">Active</label>\n                <select id=\"active\" name=\"active \" class=\"form-control underlined\" required=\"true\" [(ngModel)]=\"user.active\">\n                  <option value=\"true\" selected>Active </option>\n                  <option value=\"false\">InActive </option>\n                </select>\n              </div>\n            </div>\n            <br>\n            <div *ngIf=\"showRoles\">\n                <b>User Roles:</b>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <select id=\"RoleSelect\" name=\"roleSelect \" class=\"form-control underlined\" [(ngModel)]=\"userRole.roleCode\">\n                    <option value=\"ADMIN\" selected>ADMIN</option>\n                    <option value=\"USER\">USER</option>\n                    <option value=\"CLIENT\">CLIENT</option>\n                  </select>\n                </div>\n                <div class=\"col-md-4\">\n                  <button type=\"button\" name=\"addRole\" (click)=\"adduserRole(userRole.roleCode)\" class=\"btn btn-success\">Add Role</button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <ul class=\"list-group list-group-flush\">\n                    <li *ngFor=\"let userRole of userRoles\" class=\"list-group-item\" style=\"cursor: pointer;\">\n                      {{userRole.roleCode}}\n                      <span class=\"float-right\">\n                        <i (click)=\"deleteUserRole(userRole.id)\" class=\"fa fa-trash\"></i>\n                      </span>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <hr/>\n            <div class=\"row\">\n              <br/>\n              <div class=\"col-md-2\">\n                <label for=\"password\">Password</label>\n              </div>\n              <div class=\"col-md-5\">\n                <input type=\"password\" class=\"form-control underlined\" name=\"password\" id=\"password\" placeholder=\"Enter password\" required=\"true\"\n                  [(ngModel)]=\"user.password\"> </div>\n              <div class=\"col-md-5\">\n                <input type=\"password\" class=\"form-control underlined\" name=\"retype_password\" id=\"retype_password\" placeholder=\"Re-type password\"\n                  required=\"\"> </div>\n\n            </div>\n\n          </div>\n          <button type=\"submit\" class=\"btn btn-success float-right\">Save</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_domain__ = __webpack_require__("./src/app/users/users.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("./src/app/users/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.userRoles = [];
        this.filterUsers = [];
        this.error = false;
        this.errorMessage = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_1__users_domain__["a" /* UserInfo */]();
        this.userRole = new __WEBPACK_IMPORTED_MODULE_1__users_domain__["b" /* UserRole */]();
        this.success = true;
        this.showRoles = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            _this.filterUsers = users;
            _this.showRoles = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    UsersComponent.prototype.edit = function (user) {
        this.user = user;
        this.user.password = "";
        this.getuserRole(user);
    };
    UsersComponent.prototype.getuserRole = function (user) {
        var _this = this;
        this.userService.getUserRole(user)
            .subscribe(function (userRoles) {
            _this.userRoles = userRoles;
            _this.showRoles = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured while fetching roles contact administrator";
        });
    };
    UsersComponent.prototype.adduserRole = function (roleCode) {
        var _this = this;
        //this.userRole = new UserRole();
        this.userRole.email = this.user.email;
        this.userRole.roleCode = roleCode;
        console.log("userRole --" + this.userRole.roleCode);
        this.userService.addUserRole(this.userRole)
            .subscribe(function (resp) {
            console.log("adduserRole resp" + resp);
            _this.success = true;
            _this.getuserRole(_this.user);
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    UsersComponent.prototype.deleteUserRole = function (id) {
        var _this = this;
        console.log("id --" + id);
        this.userService.deleteUserRole(id)
            .subscribe(function (resp) {
            console.log("deleteUserRole resp" + resp);
            _this.success = true;
            _this.getuserRole(_this.user);
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    UsersComponent.prototype.submit = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.userService.save(this.user)
            .subscribe(function (user) {
            _this.user = user;
            _this.getUsers();
            _this.success = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    UsersComponent.prototype.new = function () {
        this.success = false;
        this.error = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__users_domain__["a" /* UserInfo */]();
        this.userRole = new __WEBPACK_IMPORTED_MODULE_1__users_domain__["b" /* UserRole */]();
        this.userRoles = [];
        this.showRoles = false;
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users.component.html"),
            styles: [__webpack_require__("./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UserService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/users.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserRole; });
/* unused harmony export UserDetails */
var UserInfo = /** @class */ (function () {
    function UserInfo() {
        this.email = "";
        this.name = "";
        this.active = "";
        this.password = "";
    }
    return UserInfo;
}());

var UserRole = /** @class */ (function () {
    function UserRole() {
        this.email = "";
        this.roleCode = "";
    }
    return UserRole;
}());

var UserDetails = /** @class */ (function () {
    function UserDetails() {
        this.userInfo = new UserInfo();
        this.userRole = new UserRole();
    }
    return UserDetails;
}());



/***/ }),

/***/ "./src/app/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].user);
        return this.http.get(url);
    };
    UserService.prototype.getUserRole = function (user) {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        param = param.append('email', user.email);
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].userrole);
        return this.http.get(url, { params: param });
    };
    UserService.prototype.addUserRole = function (roleCode) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].adduserrole)
            .concat("?email=")
            .concat(roleCode.email)
            .concat("&roleCode=")
            .concat(roleCode.roleCode);
        //console.log("url--"+url);
        return this.http.post(url, "");
    };
    UserService.prototype.deleteUserRole = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].userrole)
            .concat("?roleId=")
            .concat(id.toString());
        //console.log("url--"+url);
        return this.http.delete(url);
    };
    UserService.prototype.save = function (user) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].user);
        return this.http.post(url, user, { headers: httpOptions.headers });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/voucher/voucher.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/voucher/voucher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n    {{errorMessage}}\n  </div>\n  <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n    Successfully Saved\n  </div>\n\n  <div class=\"card-header\" style=\"padding-left:20px;\">\n    <label for=\"vendorName\">Voucher Entry </label>\n\n  </div>\n\n  <div class=\"card-body\">\n    <form (ngSubmit)=\"saveVoucher()\" name=\"voucherForm\" ngNativeValidate>\n\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <label for=\"vendorName\">Vendor Name : </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"vendorName\" id=\"vendorName\" placeholder=\"Enter vendorName\" [(ngModel)]=\"voucher.vendorName\"\n            />\n          </div>\n\n          <div class=\"col-sm-4\">\n            <label for=\"voucherId\">Voucher Id </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"voucherId\" id=\"voucherId\" placeholder=\"Enter voucherId\" [(ngModel)]=\"voucher.voucherId\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <label for=\"particulars\">Particulars : </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"particulars\" id=\"particulars\" placeholder=\"Enter particulars\" [(ngModel)]=\"voucher.particulars\"\n            />\n          </div>\n        </div>\n      </div>\n       <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <label for=\"totalAmount\">Total Amount : </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"totalAmount\" id=\"totalAmount\" placeholder=\"Enter totalAmount\" [(ngModel)]=\"voucher.totalAmount\"\n            />\n          </div>\n\n          <div class=\"col-sm-4\">\n            <label for=\"voucherDate\">Voucher Date </label>\n            <input type=\"date\" class=\"form-control underlined\" name=\"voucherDate\" id=\"voucherDate\" placeholder=\"Enter voucherDate\" [(ngModel)]=\"voucher.voucherDate\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <button class=\"btn btn-success pull-right\" type=\"submit\">Save</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/voucher/voucher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voucher_domain__ = __webpack_require__("./src/app/voucher/voucher.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voucher_service__ = __webpack_require__("./src/app/voucher/voucher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VoucherComponent = /** @class */ (function () {
    function VoucherComponent(voucherService) {
        this.voucherService = voucherService;
        this.error = false;
        this.errorMessage = "";
        this.success = true;
        this.voucher = new __WEBPACK_IMPORTED_MODULE_1__voucher_domain__["b" /* Voucher */]();
    }
    VoucherComponent.prototype.ngOnInit = function () {
        this.success = false;
        this.error = false;
    };
    VoucherComponent.prototype.getVoucher = function () {
        this.voucher.id;
    };
    VoucherComponent.prototype.saveVoucher = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.voucherService.save(this.voucher)
            .subscribe(function (voucher) {
            _this.voucher = voucher;
            _this.getVoucher();
            _this.success = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    VoucherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-voucher',
            template: __webpack_require__("./src/app/voucher/voucher.component.html"),
            styles: [__webpack_require__("./src/app/voucher/voucher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__voucher_service__["a" /* VoucherService */]])
    ], VoucherComponent);
    return VoucherComponent;
}());



/***/ }),

/***/ "./src/app/voucher/voucher.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Voucher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchVoucher; });
/* unused harmony export SearchVoucherResult */
var Voucher = /** @class */ (function () {
    function Voucher() {
        this.vendorName = "";
        this.voucherId = "";
        this.particulars = "";
        this.totalAmount = "";
        this.createdBy = "";
    }
    return Voucher;
}());

var SearchVoucher = /** @class */ (function () {
    function SearchVoucher() {
        this.pageNumber = 0;
        this.voucherId = "";
        this.vendorName = "";
    }
    return SearchVoucher;
}());

var SearchVoucherResult = /** @class */ (function () {
    function SearchVoucherResult() {
    }
    return SearchVoucherResult;
}());



/***/ }),

/***/ "./src/app/voucher/voucher.search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/voucher/voucher.search.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Search Voucher </h3>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form (ngSubmit)=\"submit()\" name=\"searchForm\">\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <label for=\"name\">Voucher Id </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"voucherId\" id=\"voucherId\" required=\"false\" [(ngModel)]=\"searchVoucher.voucherId\"/>\n          </div>\n          \n           <div class=\"col-md-4\">\n            <label for=\"name\">Vendor Name </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"vendorName\" id=\"vendorName\" required=\"false\" [(ngModel)]=\"searchVoucher.vendorName\"/>\n          </div>\n        </div>\n      </div>\n\n       <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <label for=\"startDt\">Start Date </label>\n            <input type=\"date\" class=\"form-control underlined\" name=\"startDate\" id=\"startDate\" required=\"false\" [(ngModel)]=\"searchVoucher.startDate\"/>\n          </div>\n          <div class=\"col-md-6\">\n            <label for=\"endDt\">End Date</label>\n            <input type=\"date\"  class=\"form-control underlined\" name=\"endDate\" id=\"endDate\" required=\"false\" [(ngModel)]=\"searchVoucher.endDate\"/>\n          </div>\n        </div>\n      </div>\n       <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <button type=\"submit\" class=\"btn btn-primary\">\n              <i class=\"fa fa-search\">&nbsp;</i>\n              Search</button>\n          </div>\n        </div>\n       </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <td>Id</td>\n        <td>Voucher Id</td>\n        <td>Vendor Name</td>\n        <td>Particulars</td>\n        <td>Total Amount</td>\n        <td>Voucher Date</td>\n      </tr>\n      </thead>\n    <tbody>\n      <tr *ngFor=\"let voucher of vouchers\">\n        <td>{{voucher.id}}</td>\n        <td>{{voucher.voucherId}}</td>\n        <td>{{voucher.vendorName}}</td>\n        <td>{{voucher.particulars}}</td>\n        <td>{{voucher.totalAmount}}</td>\n        <td>{{voucher.voucherDate | date:'yyyy-MM-dd hh:mm aa'}}</td>\n     \n      </tr>\n    </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/voucher/voucher.search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voucher_service__ = __webpack_require__("./src/app/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voucher_domain__ = __webpack_require__("./src/app/voucher/voucher.domain.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VoucherSearchComponent = /** @class */ (function () {
    function VoucherSearchComponent(route, voucherService) {
        this.route = route;
        this.voucherService = voucherService;
        this.success = true;
        this.error = false;
        this.errorMessage = "";
        this.searchVoucher = new __WEBPACK_IMPORTED_MODULE_3__voucher_domain__["a" /* SearchVoucher */]();
        this.vouchers = [];
    }
    VoucherSearchComponent.prototype.ngOnInit = function () {
    };
    VoucherSearchComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.searchVoucher);
        if (this.searchVoucher.vendorName == "")
            this.searchVoucher.vendorName = null;
        if (this.searchVoucher.voucherId == "")
            this.searchVoucher.voucherId = null;
        this.voucherService.searchVoucher(this.searchVoucher)
            .subscribe(function (searchResult) {
            _this.vouchers = searchResult.content;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured While searching Voucher";
        });
    };
    VoucherSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-voucher.search',
            template: __webpack_require__("./src/app/voucher/voucher.search.component.html"),
            styles: [__webpack_require__("./src/app/voucher/voucher.search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__voucher_service__["a" /* VoucherService */]])
    ], VoucherSearchComponent);
    return VoucherSearchComponent;
}());



/***/ }),

/***/ "./src/app/voucher/voucher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var VoucherService = /** @class */ (function () {
    function VoucherService(http) {
        this.http = http;
    }
    VoucherService.prototype.save = function (voucher) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].savevoucher);
        return this.http.post(url, voucher, { headers: httpOptions.headers });
    };
    VoucherService.prototype.searchVoucher = function (searchVoucher, pageNo) {
        if (pageNo === void 0) { pageNo = 0; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].voucher).concat("/search")
            .concat("?pageNumber=")
            .concat(pageNo.toString());
        console.log("Searching : " + url);
        return this.http.post(url, searchVoucher, { headers: httpOptions.headers });
    };
    VoucherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VoucherService);
    return VoucherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map