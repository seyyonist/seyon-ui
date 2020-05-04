import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import {Client} from './client.domain';
import { OAuthService } from '../app.auth.service';
import { CompanyGlobalVar } from '../globals';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ClientService { 
  headers:HttpHeaders = new HttpHeaders()
  constructor(private http: HttpClient,private oauthService:OAuthService,private globalVar:CompanyGlobalVar) {
  }

  getForCompany(): Observable<Client[]> {
    var url = Urls.getDomain().concat(APIURLS.client);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.get<Client[]>(url,{headers:headers});
  }

  save(client:Client): Observable<Client> {
    var url = Urls.getDomain().concat(APIURLS.client);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.post<Client>(url,client,{headers:headers});
  }
}
