import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { HeadOfAccount } from './head-of-account.domain';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class HeadOfAccountService { 
  constructor(private http: HttpClient) {
  }

  getHeadofAccountForCompany(): Observable<HeadOfAccount[]> {
    var url = Urls.getDomain().concat(APIURLS.headofaccount);
    return this.http.get<HeadOfAccount[]>(url);
  }


  save(headOfAccount:HeadOfAccount): Observable<HeadOfAccount> {
    var url = Urls.getDomain().concat(APIURLS.headofaccount);
    return this.http.post<HeadOfAccount>(url,headOfAccount,{headers:httpOptions.headers});
  }

}