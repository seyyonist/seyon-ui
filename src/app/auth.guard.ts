import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Urls, APIURLS } from './app.constants';
import { UserInfo, UserRole } from './users/users.domain';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { promise } from 'protractor';
import { CompanyGlobalVar } from './globals';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AuthGuard implements CanActivate {

  userRole: string[];
  permissions: string[];
  constructor(private http: HttpClient, private companyVariable: CompanyGlobalVar) {

  }



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let allow = false;
    //  console.log("Verifying the URL to access ", state.url);
    this.permissions = next.data.role
    //  console.log("Allowed Roles" + this.permissions)
    return this.process();
  }


  canActivate1(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let allow = false;
    //  console.log("Verifying the URL to access ", state.url);
    this.permissions = next.data.role
    //  console.log("Allowed Roles" + this.permissions)
    for (const checkPermission of this.permissions) {
      const permissionFound = this.companyVariable.userRoles.find(x => x.toUpperCase() === checkPermission.toUpperCase());
      // console.log("searching and finding permission" + permissionFound);
      if (permissionFound) {
        //console.log("returning true")
        return true;
      }
    }
    //console.log("returning false")
    return false;
  }

  process(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      var url = Urls.getDomain().concat(APIURLS.userrole).concat("/authenticated");
      // console.log("getting user role in Authguard")
      this.http.get<string[]>(url, { headers: httpOptions.headers })
        .subscribe(resp => {
          for (const checkPermission of this.permissions) {
            const permissionFound = resp.find(x => x.toUpperCase() === checkPermission.toUpperCase());
            //console.log("searching and finding permission" + permissionFound);
            if (permissionFound) {
              // console.log("returning true")
              resolve(true)
            }
          }
          resolve(false)
        }, err => {
          reject(err)
        });
    });
  }
}
