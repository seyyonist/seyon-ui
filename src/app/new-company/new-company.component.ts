import { Component, OnInit } from '@angular/core';
import { Company, CompanyModel } from './new-company.domain';
import { NewCompanyService } from './new-company.service';
import { CompanyGlobalVar, OauthUserJwt } from '../globals';
import { State } from './new-company.domain';
import { city_state } from '../city_state';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService } from '../app.auth.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {


  error: boolean = false;
  errorMessage: string = "";
  success: boolean = true;
  company: Company = new Company();

  //state Code logic - begin
  states: any[] = [];
  selectedStateDistricts: String[] = [];
  selectedStateCode: string = "";
  selectedStateName: string = "";
  selectedState: State = new State();
  selectedCity: String = "";
  //state Code logic - end
  newCompany: string = ""

  companyModel:CompanyModel= new CompanyModel()

  constructor(private router: Router, private companyService: NewCompanyService,
    public companyGlobalVar: CompanyGlobalVar,private oauthService:OAuthService) {
  }

  ngOnInit() {
    let JWTCookie=this.oauthService.isAuthenticated()
    console.log(JWTCookie);
    if(!JWTCookie){
      this.router.navigate(['login'] );
      return;
    }
    this.states = city_state.states;
    this.success = false;
    this.error = false;
    this.company.ownerName=this.oauthService.getLoggedInUser().name
    this.company.primaryEmail=this.oauthService.getLoggedInUser().email
  }

  getCompany(): void {
    this.success = false;
    this.error = false;
    this.companyService.getCompany()
      .subscribe(
        company => {
          this.company = company;
          //State Code logic - begin
          if (company) {
            this.selectedStateName = company.state;
            if (company.state) {
              this.selectedState = this.states.find(states => states.state === company.state);
              this.selectedStateDistricts = this.selectedState.districts;
            }
            this.selectedStateCode = company.stateCode;
            this.selectedCity = company.city;
          }
          //state Code logic - end

          if (this.company.gstNo != "") {
            this.companyGlobalVar.gstNo = this.company.gstNo;
          } else {
            this.companyGlobalVar.gstNo = "";
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
    this.company.state = this.selectedStateName;
    this.company.stateCode = this.selectedStateCode;
    this.company.city = this.selectedCity;
    let userinfo=new OauthUserJwt();

    userinfo.email=this.company.primaryEmail
    userinfo.name=this.company.ownerName
    this.companyModel.company=this.company
    this.companyModel.userInfo=userinfo
    this.companyService.create(this.companyModel)
      .subscribe(
        response => {
          this.success = true;
          console.log(response.message);
          this.router.navigate([''])
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
      self.company.logoImg = myReader.result as string;
    }
  }

  onFileChange($event): void {
    this.readThis($event.target);
  }


  //state Code logic
  getStates(): void {
    this.success = false;
    this.error = false;
    this.companyService.getStateCodes()
      .subscribe(
        resp => {
          this.states = resp.states;
          //console.log(this.states);
        },
        err => {
          this.error = true;
          this.errorMessage = "Error occured please contact administrator";
        }
      )

  }

  //state Code logic
  loadSelectedStates(): void {
    let selectedState;
    //console.log(this.selectedStateName);
    selectedState = this.states.find(states => states.state === this.selectedStateName);
    //console.log(selectedState);
    if (selectedState) {
      this.selectedState = selectedState;
      this.selectedStateCode = selectedState.code;
      this.selectedStateDistricts = selectedState.districts;
    }

  }


}
