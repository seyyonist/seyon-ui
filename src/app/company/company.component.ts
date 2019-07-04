import { Component, OnInit } from '@angular/core';
import { Company } from './company.domain';
import { CompanyService } from './company.service';
import { CompanyGlobalVar } from '../globals';
import { States } from './company.domain';
import { State } from './company.domain';

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
  states: State[] = [];
  selectedStateDistricts: String[] = [];
  selectedStateCode: string = "";
  selectedStateName: string = "";
  selectedState: State = new State();
  selectedCity : String = "";

  constructor(private companyService: CompanyService,private companyGlobalVar: CompanyGlobalVar) { }

  ngOnInit() {
    this.getStates();
    this.getCompany();
   
  }

  getCompany(): void {
    this.success = false;
    this.error = false;
    this.companyService.getCompany()
      .subscribe(
      company => {
        this.company = company;
        if(company){
          this.selectedStateCode= company.stateCode;
          this.selectedCity = company.city;
          //this.loadSelectedStates();
        }
       
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

    this.company.state= this.selectedState.state;
    this.company.stateCode= this.selectedStateCode;
    this.company.city=this.selectedCity;
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


  getStates(): void {
    this.success = false;
    this.error = false;
    this.companyService.getStateCodes()
      .subscribe(
      resp => {
        this.states = resp.states;
        console.log(this.states);
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )

  }

  loadSelectedStates(): void {
   let selectedState = this.states.find(states => states.state === this.selectedStateName);
   
   console.log(selectedState);
   if(selectedState){
     this.selectedStateCode = selectedState.code;
    this.selectedStateDistricts=selectedState.districts;
    //selectedDistrict = this.selectedStateDistricts.find(district => district === this.selectedCity)
    //this.selectedCity=selectedDistrict;
   }
   
   
  }

}
