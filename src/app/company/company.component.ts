import { Component, OnInit } from '@angular/core';
import { Company } from './company.domain';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {


  error: boolean = false;
  errorMessage: string = "";
  success: boolean = true;
  company: Company = new Company();


  constructor(private companyService: CompanyService) { }

ngOnInit() {
  this.getCompany();
}

getCompany(): void {
  this.success = false;
  this.error = false;
  this.companyService.getCompany()
    .subscribe(
    company => {
      this.company = company;

    },
    err => {
      this.error = true;
      this.errorMessage = "Error occured please contact administrator";
    }
    )

}


submitCompany(): void{
  
  this.success = false;
    this.error = false;
    this.companyService.save(this.company)
      .subscribe(
      company => {
        this.company = company;
        this.getCompany();
        this.success = true;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }


}
