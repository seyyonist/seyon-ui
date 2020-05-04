import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { Vendor } from './vendor.domain';
import { OAuthService } from '../app.auth.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class VendorService { 
  constructor(private http: HttpClient,private oauthService:OAuthService) {
  }

  getForCompany(): Observable<Vendor[]> {
    var url = Urls.getDomain().concat(APIURLS.vendor);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.get<Vendor[]>(url,{headers:headers});
  }

  save(vendor:Vendor): Observable<Vendor> {
    var url = Urls.getDomain().concat(APIURLS.vendor);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.post<Vendor>(url,vendor,{headers:headers});
  }
}
