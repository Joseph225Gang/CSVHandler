import { Component } from '@angular/core';
import { HomeService, BudgetForm, ImportForm, ExportForm, Process } from './home.service';

@Component({
    selector: 'homeComponent',
    templateUrl: './app/home/home.html',
    providers: [HomeService]
})

export class HomeComponent {
    levelCount: number = 0;
    currentProcess: Process = new Process();

    constructor(private homeService: HomeService) { }

    generateForms(): void {
        this.levelCount = parseInt($('#setLevel').val().toString());
        this.generateBudgetFormList();
        this.generateExportFormList();
        this.generateImportFormList();
    }

    generateBudgetFormList(): void {
        this.currentProcess.budgetFormList = [];
        for (let count = 0; count < this.levelCount; count++) {
            let item = new BudgetForm();
            item.amount = this.getRandomNumberFromOneToAHundred();
            item.budgetCode = this.getRandomNumberFromOneToAHundred().toString();
            item.budgetNumber = this.getRandomNumberFromOneToAHundred().toString();
            item.buildDate = new Date();
            item.formCode = this.getRandomNumberFromOneToAHundred().toString();
            this.currentProcess.budgetFormList.push(item);
        }
    }

    generateExportFormList() {
        this.currentProcess.exportFormList = [];
        for (let count = 0; count < this.levelCount; count++) {
            let item = new ExportForm();
            item.amount = this.getRandomNumberFromOneToAHundred();
            item.buildDate = new Date();
            item.exportCode = this.getRandomNumberFromOneToAHundred().toString();
            item.exportNumber = this.getRandomNumberFromOneToAHundred().toString();
            item.formCode = this.getRandomNumberFromOneToAHundred().toString();
            this.currentProcess.exportFormList.push(item);
        }
    }

    generateImportFormList() {
        this.currentProcess.importFormList = [];
        for (let count = 0; count < this.levelCount; count++) {
            let item = new ImportForm();
            item.amount = this.getRandomNumberFromOneToAHundred();
            item.buildDate = new Date();
            item.formCode = this.getRandomNumberFromOneToAHundred().toString();
            item.importCode = this.getRandomNumberFromOneToAHundred().toString();
            item.importNumber = this.getRandomNumberFromOneToAHundred().toString();
            this.currentProcess.importFormList.push(item);
        }
    }

    getRandomNumberFromOneToAHundred(): number {
        return Math.floor((Math.random() * 100) + 1);
    }

    generateCSVFile(): void {
        this.homeService.asyncCreateCSV(this.currentProcess).subscribe
            (
            resp => {
                alert("成功");
            },
            error => {
                alert(error);
            }
            )
    }
}