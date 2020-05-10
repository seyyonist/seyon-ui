import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Urls, APIURLS } from './app.constants';
import { UserInfo, UserRole } from './users/users.domain';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CompanyGlobalVar } from './globals';
import { Cookie } from './Cookie';
import { OAuthService } from './app.auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AuthGuard implements CanActivate {

  
  userRole: string[];
  permissions: string[];
  constructor(private http: HttpClient, private companyVariable: CompanyGlobalVar,
    public router: Router,private oauthService:OAuthService) {
  }

 

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let path:string=window.location.pathname 
    let JWTCookie=this.oauthService.isAuthenticated()
    console.log(JWTCookie);
    if(!JWTCookie){
      this.router.navigate(['login'], { queryParams:{navTo: path}} );
      return false;
    }
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
      let headers = this.oauthService.getAuthHeaders()
      this.http.get<string[]>(url, { headers:headers})
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
