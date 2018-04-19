import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import {Client} from './client.domain';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ClientService { 
  constructor(private http: HttpClient) {
  }

  getForCompany(): Observable<Client[]> {
    var url = Urls.getDomain().concat(APIURLS.client);
    return this.http.get<Client[]>(url);
  }

  save(client:Client): Observable<Client> {
    var url = Urls.getDomain().concat(APIURLS.client);
    return this.http.post<Client>(url,client,{headers:httpOptions.headers});
  }
}
