import { Component, OnInit } from '@angular/core';
import { Company } from '../company/company.domain';
import { CompanyService } from '../company/company.service';
import { CompanyGlobalVar } from '../globals';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  company: Company = new Company();
  show:boolean=true;

  constructor(private companyService: CompanyService,private companyGlobalVar: CompanyGlobalVar) { }

  ngOnInit() {

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
