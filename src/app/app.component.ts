import { Component } from '@angular/core';
import { Company } from './company/company.domain';
import { CompanyService } from './company/company.service';
import { CompanyGlobalVar } from './globals';
import { OAuthService } from './app.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  company: Company = new Company();
  companyGlobalVar:CompanyGlobalVar;

  constructor(private companyService: CompanyService,private companyGVar: CompanyGlobalVar,private oauthService:OAuthService){
    this.companyGlobalVar=companyGVar;
  }

  ngOnInit() {
    if(!this.oauthService.isAuthenticated()){
      return false;
    }
    console.debug("Inside NavComponent init");
    this.companyService.getCompany()
    .subscribe(
    company => {
      this.company = company;
      this.companyGlobalVar.companyName=company.companyName;
      this.companyGlobalVar.ownerName=company.ownerName;
      this.companyGlobalVar.state=company.state;
      this.companyGlobalVar.pinCode=company.pinCode;
      this.companyGlobalVar.phonePrimary=company.phonePrimary;
      this.companyGlobalVar.tanNo=company.tanNo;
      this.companyGlobalVar.gstNo=company.gstNo;
      this.companyGlobalVar.panNo=company.panNo;
      this.companyGlobalVar.primaryEmail=company.primaryEmail;
    },
    err => {
      console.error("Not able to set companyGlobalVar");
    }
    )
  }

}
