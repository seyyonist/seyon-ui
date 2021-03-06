import { Component, OnInit } from '@angular/core';
import { Company } from '../company/company.domain';
import { CompanyService } from '../company/company.service';
import { CompanyGlobalVar } from '../globals';
import { UserService } from '../users/users.service';
import { UserCompanies } from '../users/users.domain';
import { APIURLS, Urls } from '../app.constants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OAuthService } from '../app.auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  company: Company = new Company();
  show:boolean=true;
  userRole:string[];
  userCompanies:UserCompanies[]=[];

  constructor(private companyService: CompanyService,public companyGlobalVar: CompanyGlobalVar,
    private userService:UserService,private http: HttpClient,private oauthService:OAuthService) { }

  ngOnInit() {
    console.debug("Inside NavComponent init");
    this.companyService.getCompany()
    .subscribe(
    company => {
      this.company = company;
    },
    err => {
      console.error("Not able to set companyGlobalVar");
    }
    )
    this.userService.getRoles().subscribe(
      resp=>{
        if(resp.length===0)
          alert("No roles defined for this user.\nPlease contact your company adminstrator");
        this.userRole=resp;
      },
      err=>{
        alert("Failed to get the user roles")
      }
    )
    this.getUserCompanies();
  }

  getUserCompanies():void{
    var url = Urls.getDomain().concat(APIURLS.getUserCompanies);
    let headers=this.oauthService.getAuthHeaders()
    this.http.get<UserCompanies[]>(url, { headers:headers })
    .subscribe(
      result=>{
       this.userCompanies=result;
      },
      err=>{
       console.log(err);
       alert("Error retrieving UserCompanies");
      }
    )
  }
}
