import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { UserInfo } from './users.domain';
import { UserRole } from './users.domain';
import { OAuthService } from '../app.auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {
  constructor(private http: HttpClient,private oauthService:OAuthService) {
  }

  getUsers(): Observable<UserInfo[]> {
    var url = Urls.getDomain().concat(APIURLS.user);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.get<UserInfo[]>(url,{headers:headers});
  }

  getUserRole(user: UserInfo): Observable<UserRole[]> {
    let param = new HttpParams();
    param = param.append('email', user.email);
    var url = Urls.getDomain().concat(APIURLS.userrole);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.get<UserRole[]>(url, {headers:headers, params: param });
  }

  addUserRole(roleCode: UserRole): Observable<string> {
    let headers=this.oauthService.getAuthHeaders()
    var url = Urls.getDomain().concat(APIURLS.adduserrole)
      .concat("?email=")
      .concat(roleCode.email)
      .concat("&roleCode=")
      .concat(roleCode.roleCode);
      //console.log("url--"+url);
    return this.http.post<string>(url, {headers:headers});
  }

   deleteUserRole(id: number): Observable<string> {
    let headers=this.oauthService.getAuthHeaders()
    var url = Urls.getDomain().concat(APIURLS.userrole)
      .concat("?roleId=")
      .concat(id.toString());
      //console.log("url--"+url);
    return this.http.delete<string>(url,{headers:headers});
  }

  save(user: UserInfo): Observable<UserInfo> {
    var url = Urls.getDomain().concat(APIURLS.user);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.post<UserInfo>(url, user, { headers: headers });
  }

  getRolesP(): Promise<string[]> {
    var url = Urls.getDomain().concat(APIURLS.userrole).concat("/authenticated");
    let headers=this.oauthService.getAuthHeaders()
    return this.http.get<string[]>(url, { headers: headers })
      .toPromise()
  }
  getRoles(): Observable<string[]> {
    var url = Urls.getDomain().concat(APIURLS.userrole).concat("/authenticated");
    let headers=this.oauthService.getAuthHeaders()
    return this.http.get<string[]>(url, { headers: headers })
  }

  getRoleCodes(): Observable<string[]> {
    var url = Urls.getDomain().concat(APIURLS.user).concat("/roleCodes");
    let headers=this.oauthService.getAuthHeaders()
    return this.http.get<string[]>(url, { headers:headers })
  }
}
