import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { Particulars, InvoiceData, Invoice, SearchInvoice, SearchResult,SACCode } from '../invoice/invoice.domain';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class GenInvoiceService {
  constructor(private http: HttpClient) {
  }


  saveInvoice(invoiceData: InvoiceData): Observable<InvoiceData> {
    var url = Urls.getDomain().concat(APIURLS.invoice).concat("/invoice");
    console.log("Accessing "+url);
    return this.http.post<InvoiceData>(url, invoiceData, { headers: httpOptions.headers });
  }
  
  getInvoice(id: number): Observable<InvoiceData> {
    var url = Urls.getDomain().concat(APIURLS.invoice)
      .concat("?invoiceId=")
      .concat(id.toString());
    console.log(APIURLS.invoice + "  " + url);
    return this.http.get<InvoiceData>(url, { headers: httpOptions.headers });
  }

 getMinInvoiceDate():Observable<string>{
     var url = Urls.getDomain().concat(APIURLS.invoice).concat("/minInvoiceDate");
      //console.log("getMinInvoiceDate url : " + url);
      let options= { responseType: 'text' as 'json'};
    return this.http.get<string>(url, options );
  }
}
