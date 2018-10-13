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
var home_service_1 = require("./home.service");
var HomeComponent = (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
        this.levelCount = 0;
        this.currentProcess = new home_service_1.Process();
    }
    HomeComponent.prototype.generateForms = function () {
        this.levelCount = parseInt($('#setLevel').val().toString());
        this.generateBudgetFormList();
        this.generateExportFormList();
        this.generateImportFormList();
    };
    HomeComponent.prototype.generateBudgetFormList = function () {
        this.currentProcess.budgetFormList = [];
        for (var count = 0; count < this.levelCount; count++) {
            var item = new home_service_1.BudgetForm();
            item.amount = this.getRandomNumberFromOneToAHundred();
            item.budgetCode = this.getRandomNumberFromOneToAHundred().toString();
            item.budgetNumber = this.getRandomNumberFromOneToAHundred().toString();
            item.buildDate = new Date();
            item.formCode = this.getRandomNumberFromOneToAHundred().toString();
            this.currentProcess.budgetFormList.push(item);
        }
    };
    HomeComponent.prototype.generateExportFormList = function () {
        this.currentProcess.exportFormList = [];
        for (var count = 0; count < this.levelCount; count++) {
            var item = new home_service_1.ExportForm();
            item.amount = this.getRandomNumberFromOneToAHundred();
            item.buildDate = new Date();
            item.exportCode = this.getRandomNumberFromOneToAHundred().toString();
            item.exportNumber = this.getRandomNumberFromOneToAHundred().toString();
            item.formCode = this.getRandomNumberFromOneToAHundred().toString();
            this.currentProcess.exportFormList.push(item);
        }
    };
    HomeComponent.prototype.generateImportFormList = function () {
        this.currentProcess.importFormList = [];
        for (var count = 0; count < this.levelCount; count++) {
            var item = new home_service_1.ImportForm();
            item.amount = this.getRandomNumberFromOneToAHundred();
            item.buildDate = new Date();
            item.formCode = this.getRandomNumberFromOneToAHundred().toString();
            item.importCode = this.getRandomNumberFromOneToAHundred().toString();
            item.importNumber = this.getRandomNumberFromOneToAHundred().toString();
            this.currentProcess.importFormList.push(item);
        }
    };
    HomeComponent.prototype.getRandomNumberFromOneToAHundred = function () {
        return Math.floor((Math.random() * 100) + 1);
    };
    HomeComponent.prototype.generateCSVFile = function () {
        this.homeService.asyncCreateCSV(this.currentProcess).subscribe(function (resp) {
            alert("成功");
        }, function (error) {
            alert(error);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'homeComponent',
            templateUrl: './app/home/home.html',
            providers: [home_service_1.HomeService]
        }),
        __metadata("design:paramtypes", [home_service_1.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map