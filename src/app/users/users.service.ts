import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { UserInfo } from './users.domain';
import { UserRole } from './users.domain';

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
    return this.http.get<UserRole[]>(url, { params: param });
  }

  addUserRole(roleCode: UserRole): Observable<string> {

    var url = Urls.getDomain().concat(APIURLS.adduserrole)
      .concat("?email=")
      .concat(roleCode.email)
      .concat("&roleCode=")
      .concat(roleCode.roleCode);
      //console.log("url--"+url);
    return this.http.post<string>(url, "");
  }

   deleteUserRole(id: number): Observable<string> {

    var url = Urls.getDomain().concat(APIURLS.userrole)
      .concat("?roleId=")
      .concat(id.toString());
      //console.log("url--"+url);
    return this.http.delete<string>(url);
  }

  save(user: UserInfo): Observable<UserInfo> {
    var url = Urls.getDomain().concat(APIURLS.user);
    return this.http.post<UserInfo>(url, user, { headers: httpOptions.headers });
  }
}
