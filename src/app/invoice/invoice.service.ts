import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { Particulars, InvoiceData, Invoice, SearchInvoice, SearchResult,SACCode } from './invoice.domain';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class InvoiceService {
  constructor(private http: HttpClient) {
  }

  savePerforma(invoiceData: InvoiceData): Observable<InvoiceData> {
    var url = Urls.getDomain().concat(APIURLS.invoice).concat("/performa");
    console.log(APIURLS.invoice + "  " + url);
    return this.http.post<InvoiceData>(url, invoiceData, { headers: httpOptions.headers });
  }

  saveInvoice(invoiceData: InvoiceData): Observable<InvoiceData> {
    var url = Urls.getDomain().concat(APIURLS.invoice);
    console.log(APIURLS.invoice + "  " + url);
    return this.http.post<InvoiceData>(url, invoiceData, { headers: httpOptions.headers });
  }

  cancel(invoiceId: number): Observable<Invoice> {
    var url = Urls.getDomain().concat(APIURLS.invoice)
      .concat("/cancel")
      .concat("?invoiceId=")
      .concat(invoiceId.toString());
    console.log("Cancel invoice  " + url);
    return this.http.patch<Invoice>(url, { headers: httpOptions.headers });
  }

  getInvoice(id: number): Observable<InvoiceData> {
    var url = Urls.getDomain().concat(APIURLS.invoice)
      .concat("?invoiceId=")
      .concat(id.toString());
    console.log(APIURLS.invoice + "  " + url);
    return this.http.get<InvoiceData>(url, { headers: httpOptions.headers });
  }

  searchInvoice(searchInvoice: SearchInvoice,category: string, pageNo: number = 0): Observable<SearchResult> {

    var url = Urls.getDomain();
    console.log(url);
    if(category==='SERVICE'){
     url= url.concat(APIURLS.invoice).concat("/search")
      console.log("SERVICE"+url);
    }
    else if(category==='MANUFACTURING'){
      url=url.concat(APIURLS.manInvoice).concat("/search")
     console.log(url);
    }

    url=url.concat("?pageNumber=")
      .concat(pageNo.toString())
    console.log("Searching : " + url);
    return this.http.post<SearchResult>(url, searchInvoice, { headers: httpOptions.headers });
  }

  getSACCode():Observable<SACCode[]>{
    var url = Urls.getDomain().concat(APIURLS.invoice).concat("/sac");
    return this.http.get<SACCode[]>(url, { headers: httpOptions.headers });
  }

  deleteParti(partiId:number):Observable<string>{
    var url = Urls.getDomain().concat(APIURLS.invoice).concat("/delParticular?particularId=").concat(partiId.toString());
    let options= { responseType: 'text' as 'json'};
    return this.http.get<string>(url,options)
  }

}
