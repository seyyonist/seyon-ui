import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { Particulars, InvoiceData, Invoice, SearchInvoice, SearchResult,SACCode, } from './invoice.domain';
import { ManufacturingInvoice } from '../manufacturing-invoice/invoice.manu.domain';
import { OAuthService } from '../app.auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class InvoiceService {
  constructor(private http: HttpClient,private oauthService:OAuthService) {
  }

  savePerforma(invoiceData: InvoiceData): Observable<InvoiceData> {
    var url = Urls.getDomain().concat(APIURLS.invoice).concat("/performa");
    console.log(APIURLS.invoice + "  " + url);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.post<InvoiceData>(url, invoiceData, { headers: headers });
  }

  saveInvoice(invoiceData: InvoiceData): Observable<InvoiceData> {
    var url = Urls.getDomain().concat(APIURLS.invoice);
    console.log(APIURLS.invoice + "  " + url);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.post<InvoiceData>(url, invoiceData, { headers: headers });
  }

  cancel(invoiceId: number): Observable<Invoice> {
    var url = Urls.getDomain().concat(APIURLS.invoice)
      .concat("/cancel")
      .concat("?invoiceId=")
      .concat(invoiceId.toString());
    console.log("Cancel invoice  " + url);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.patch<Invoice>(url, { headers: headers });
  }

  getInvoice(id: number): Observable<InvoiceData> {
    var url = Urls.getDomain().concat(APIURLS.invoice)
      .concat("?invoiceId=")
      .concat(id.toString());
    console.log(APIURLS.invoice + "  " + url);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.get<InvoiceData>(url, { headers: headers });
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
    let headers=this.oauthService.getAuthHeaders()
    return this.http.post<SearchResult>(url, searchInvoice, { headers: headers });
  }


  searchInvoiceReport(searchInvoice: SearchInvoice,category: string): Observable<Invoice[]> {

    var url = Urls.getDomain();
    console.log(url);
    if(category==='SERVICE'){
     url= url.concat(APIURLS.invoice).concat("/getInvoiceReport")
      console.log("SERVICE"+url);
    }
    else if(category==='MANUFACTURING'){
      url=url.concat(APIURLS.manInvoice).concat("/getInvoiceReport")
     console.log(url);
    }
    console.log("Searching : " + url);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.post<Invoice[]>(url, searchInvoice, { headers:headers });
  }


  getSACCode():Observable<SACCode[]>{
    var url = Urls.getDomain().concat(APIURLS.invoice).concat("/sac");
    let headers=this.oauthService.getAuthHeaders()
    return this.http.get<SACCode[]>(url, { headers: headers });
  }

  deleteParti(partiId:number):Observable<string>{
    var url = Urls.getDomain().concat(APIURLS.invoice).concat("/delParticular?particularId=").concat(partiId.toString());
    let headers=this.oauthService.getAuthHeaders()
    let options= {headers:headers, responseType: 'text' as 'json'};
    return this.http.get<string>(url,options)
  }

  saveManufacProformaInvoice(manufacturingInvoice:ManufacturingInvoice[]):Observable<ManufacturingInvoice[]>{
     var url = Urls.getDomain().concat(APIURLS.manInvoice).concat("/performa");
     let headers=this.oauthService.getAuthHeaders()
     return this.http.post<ManufacturingInvoice[]>(url, manufacturingInvoice, { headers: headers });
  }

  getManufacturingInvoice(proformaId:string):Observable<ManufacturingInvoice>{
    var url=Urls.getDomain().concat(APIURLS.manInvoice)
    .concat("?id=")
      .concat(proformaId);
      let headers=this.oauthService.getAuthHeaders()
    return this.http.get<ManufacturingInvoice>(url,{headers:headers})
  }

  saveManufacturingInvoice(manufacturingInvoice:ManufacturingInvoice): Observable<ManufacturingInvoice> {
    var url = Urls.getDomain().concat(APIURLS.manInvoice).concat("/invoice");
    let headers=this.oauthService.getAuthHeaders()
    return this.http.post<ManufacturingInvoice>(url, manufacturingInvoice, { headers: headers });
  }

  getMinProfomaDate():Observable<string>{
     var url = Urls.getDomain().concat(APIURLS.invoice).concat("/minProformaDate");
      //console.log("getMinProfomaDate url : " + url);
      let headers=this.oauthService.getAuthHeaders()
      let options= { headers:headers,responseType: 'text' as 'json'};
    return this.http.get<string>(url, options );
  }

}
