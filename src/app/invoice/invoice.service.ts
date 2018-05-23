import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { Particulars,InvoiceData,Invoice,SearchInvoice,SearchResult } from './invoice.domain';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class InvoiceService { 
  constructor(private http: HttpClient) {
  }

  save(invoiceData:InvoiceData): Observable<InvoiceData> {
    var url = Urls.getDomain().concat(APIURLS.invoice);
    console.log(APIURLS.invoice+"  "+url);
    return this.http.post<InvoiceData>(url,invoiceData,{headers:httpOptions.headers});
  }

  getInvoice(id:number):Observable<InvoiceData>{
    var url = Urls.getDomain().concat(APIURLS.invoice)
    .concat("?invoiceId=")
    .concat(id.toString());
    console.log(APIURLS.invoice+"  "+url);
    return this.http.get<InvoiceData>(url,{headers:httpOptions.headers});
  }

  searchInvoice(searchInvoice:SearchInvoice,pageNo:number=0):Observable<SearchResult>{
    var url = Urls.getDomain().concat(APIURLS.invoice).concat("/search")
    .concat("?pageNumber=")
    .concat(pageNo.toString())
    console.log("Searching : "+url);
    return this.http.post<SearchResult>(url,searchInvoice,{headers:httpOptions.headers});
  }
}
