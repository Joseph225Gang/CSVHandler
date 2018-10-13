import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HomeService {
    private SearchApi: string = 'api/HomeApi';
    constructor(
        private http: Http
    ) { };

    asyncCreateCSV(process: Process): Observable<any> {
        let body = JSON.stringify(process);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.SearchApi + `/CreateCSV`, body, options)
            .map((resp: Response) => {
                return resp.json();
            });
    }
}

/**
 * 預算表單
 */
export class BudgetForm{
    //建檔時間
    buildDate: Date;
    //金錢
    amount: number;
    //預算代碼
    budgetCode: string;
    //預算數字
    budgetNumber: string;
    //表單代碼
    formCode: string;
}

/**
 * 出口表單
 */
export class ExportForm{
    //建檔時間
    buildDate: Date;
    //金錢
    amount: number;
    //出口代碼
    exportCode: string;
    //出口數字
    exportNumber: string;
    //表單代碼
    formCode: string;
}

/**
 * 進口表單
 */
export class ImportForm {
    //建檔時間
    buildDate: Date;
    //金錢
    amount: number;
    //進口代碼
    importCode: string;
    //進口數字
    importNumber: string;
    //表單代碼
    formCode: string;
}

export class Process{
    budgetFormFileName: string = 'budgetFormList';
    exportFormFileName: string = 'exportFormList';
    importFormFileName: string = 'importFormList';
    budgetFormList: BudgetForm[] = [];
    exportFormList: ExportForm[] = [];
    importFormList: ImportForm[] = [];
}