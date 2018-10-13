"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.SearchApi = 'api/HomeApi';
    }
    ;
    HomeService.prototype.asyncCreateCSV = function (process) {
        var body = JSON.stringify(process);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.SearchApi + "/CreateCSV", body, options)
            .map(function (resp) {
            return resp.json();
        });
    };
    HomeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
/**
 * 預算表單
 */
var BudgetForm = (function () {
    function BudgetForm() {
    }
    return BudgetForm;
}());
exports.BudgetForm = BudgetForm;
/**
 * 出口表單
 */
var ExportForm = (function () {
    function ExportForm() {
    }
    return ExportForm;
}());
exports.ExportForm = ExportForm;
/**
 * 進口表單
 */
var ImportForm = (function () {
    function ImportForm() {
    }
    return ImportForm;
}());
exports.ImportForm = ImportForm;
var Process = (function () {
    function Process() {
        this.budgetFormFileName = 'budgetFormList';
        this.exportFormFileName = 'exportFormList';
        this.importFormFileName = 'importFormList';
        this.budgetFormList = [];
        this.exportFormList = [];
        this.importFormList = [];
    }
    return Process;
}());
exports.Process = Process;
//# sourceMappingURL=home.service.js.map