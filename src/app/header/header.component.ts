import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import {UserInfo,UserRole, UserCompanies} from '../users/users.domain';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:UserInfo=new UserInfo();
  userRole:UserRole[]=[];
  userCompanies:UserCompanies[]=[];

  constructor(private http: HttpClient) {
    this.getUser();
   
   }

  ngOnInit() {
  }


  getUser(): void {
    var url = Urls.getDomain().concat(APIURLS.user).concat("/authenticated");
     this.http.get<UserInfo>(url, { headers: httpOptions.headers })
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
     this.http.get<UserRole[]>(url, { headers: httpOptions.headers })
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
