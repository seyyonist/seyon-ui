import { Component, OnInit } from '@angular/core';
import { CompanyGlobalVar } from '../globals';
import { CompanyService } from '../company/company.service';
import { CompanyRole } from '../company/company.domain';
import { Router } from '@angular/router';
import { OAuthService } from '../app.auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companyRole:CompanyRole[]=[]

  constructor(public companyGlobalVar: CompanyGlobalVar, 
    public companyService: CompanyService,public router: Router,private oauthService:OAuthService) { }

  ngOnInit(): void {
    
    let JWTCookie=this.oauthService.isAuthenticated()
    console.log(JWTCookie);
    if(!JWTCookie){
      this.router.navigate(['login'] );
      return;
    }
    
    this.companyService.getCompanyForUser()
    .subscribe(
      companyRole => {
        this.companyRole=companyRole
      },
      err=>{console.error("Not able to get list of companies");}
    )
  }


  selectedCompany(selectedCompany:CompanyRole){
    if(!selectedCompany.active){
      alert("please contact administrator to activate your company")
      return;
    }
    this.oauthService.setSelectedCompany(selectedCompany.companyId)

    this.companyService.getCompany()
      .subscribe(
        company => {
          this.companyGlobalVar.companyName = company.companyName;
          this.companyGlobalVar.ownerName = company.ownerName;
          this.companyGlobalVar.state = company.state;
          this.companyGlobalVar.pinCode = company.pinCode;
          this.companyGlobalVar.phonePrimary = company.phonePrimary;
          this.companyGlobalVar.tanNo = company.tanNo;
          this.companyGlobalVar.gstNo = company.gstNo;
          this.companyGlobalVar.panNo = company.panNo;
          this.companyGlobalVar.primaryEmail = company.primaryEmail;
          this.router.navigate(['dashboard'] );
        },
        err => {
          console.error("Not able to set companyGlobalVar");
        }
      )
  }

}
