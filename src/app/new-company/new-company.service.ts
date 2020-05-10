import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { Company, CompanyRole, SeyonResponse, CompanyModel } from './new-company.domain';
import { States } from './new-company.domain';
import { State } from './new-company.domain';
import { OAuthService } from '../app.auth.service';
import { CompanyGlobalVar } from '../globals';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class NewCompanyService {
  constructor(private http: HttpClient,private oauthService:OAuthService,private globalVar:CompanyGlobalVar) {
  }

  save(company: Company): Observable<Company> {
    var url = Urls.getDomain().concat(APIURLS.updatecompany);
    let headers = this.oauthService.getAuthHeaders()
    return this.http.post<Company>(url, company, { headers: headers });
  }

  create(company: CompanyModel): Observable<SeyonResponse> {
    var url = Urls.getDomain().concat(APIURLS.createCompany);
    let headers = this.oauthService.getAuthHeaders("Y")
    return this.http.post<SeyonResponse>(url, company, { headers: headers });
  }

  getCompany(): Observable<Company> {
    var url = Urls.getDomain().concat(APIURLS.getcompany);
    let headers=this.oauthService.getAuthHeaders()
    console.log(headers);
    return this.http.get<Company>(url,{ headers: headers });
  }

  getCompanyForUser(): Observable<CompanyRole[]> {
    var url = Urls.getDomain().concat(APIURLS.getcompanyForUser);
    let headers=this.oauthService.getAuthHeaders("Y");    
    return this.http.get<CompanyRole[]>(url,{ headers: headers });
  }

   getStateCodes(): Observable<any> {
    var url = Urls.getDomain().concat(APIURLS.getStateCode);
    let headers = this.oauthService.getAuthHeaders()
    return this.http.get<any>(url,{ headers: headers });
  }

}