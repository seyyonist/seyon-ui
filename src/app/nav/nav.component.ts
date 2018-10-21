import { Component, OnInit } from '@angular/core';
import { Company } from '../company/company.domain';
import { CompanyService } from '../company/company.service';
import { CompanyGlobalVar } from '../globals';
import { UserService } from '../users/users.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  company: Company = new Company();
  show:boolean=true;
  userRole:string[];

  constructor(private companyService: CompanyService,private companyGlobalVar: CompanyGlobalVar,private userService:UserService) { }

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
  }
}
