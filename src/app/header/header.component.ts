import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import {UserInfo,UserRole, UserCompanies} from '../users/users.domain';
import { OAuthService } from '../app.auth.service';
import { CompanyGlobalVar } from '../globals';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imagePath:string=""
  user:UserInfo=new UserInfo();
  userRole:UserRole[]=[];
  userCompanies:UserCompanies[]=[];

  constructor(private http: HttpClient,private oauthService:OAuthService,public companyGlobalVar:CompanyGlobalVar) {
   
   }

  ngOnInit() {
    console.log("header component")
    if(!this.oauthService.isAuthenticated()){
      return false;
    }
    this.getUser();
    this.imagePath=this.oauthService.getLoggedInUser().picture
  }


  getUser(): void {
    var url = Urls.getDomain().concat(APIURLS.user).concat("/authenticated");
    let headers=this.oauthService.getAuthHeaders()
     this.http.get<UserInfo>(url, { headers: headers })
     .subscribe(
       user=>{
        this.user=user;
         this.getRoles(user.email);
       },
       err=>{
        console.log(err);
        alert("Error retrieving user");
       }
     )
  }

  getRoles(email:string): void {
    var url = Urls.getDomain().concat(APIURLS.userrole).concat("?email=").concat(email);
    let headers=this.oauthService.getAuthHeaders()
     this.http.get<UserRole[]>(url, { headers: headers })
     .subscribe(
       userRole=>{
        this.userRole=userRole;
       },
       err=>{
        console.log(err);
        alert("Error retrieving userRole");
       }
     )
  }

  
}
