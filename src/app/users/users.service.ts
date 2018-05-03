import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import {UserInfo} from './users.domain';
import {UserRole} from './users.domain';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService { 
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserInfo[]> {
    var url = Urls.getDomain().concat(APIURLS.user);
    return this.http.get<UserInfo[]>(url);
  }

   getUserRole(user: UserInfo): Observable<UserRole[]> {
     let param = new HttpParams();
     param = param.append('email', user.email);
    var url = Urls.getDomain().concat(APIURLS.userrole);
    return this.http.get<UserRole[]>(url,{ params: param });
  }

  save(user:UserInfo): Observable<UserInfo> {
    var url = Urls.getDomain().concat(APIURLS.user);
    return this.http.post<UserInfo>(url,user,{headers:httpOptions.headers});
  }
}
