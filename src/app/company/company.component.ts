import { Component, OnInit } from '@angular/core';
import { Company } from './company.domain';
import { CompanyService } from './company.service';
import { CompanyGlobalVar } from '../globals';

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

  constructor(private companyService: CompanyService,private companyGlobalVar: CompanyGlobalVar) { }

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
        if(this.company.gstNo!=""){
          this.companyGlobalVar.gstNo=this.company.gstNo;
        }else{
          this.companyGlobalVar.gstNo="";
        }
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )

  }


  submitCompany(): void {

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


  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    var fileContents: string = "";
    let self = this;
    myReader.readAsDataURL(file);
    myReader.onloadend = function (e) {
      self.company.logoImg = myReader.result;
    }
  }

  onFileChange($event): void {
    this.readThis($event.target);
  }

}
