import { Component, OnInit } from '@angular/core';
import { Vendor } from './vendor.domain';
import { VendorService } from './vendor.service';
import { State } from '../company/company.domain';
import { CompanyService } from '../company/company.service';
import { CompanyGlobalVar } from '../globals';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendors: Vendor[] = [];
  filterVendors: Vendor[] = [];
  error: boolean = false;
  errorMessage: string = "";
  vendor: Vendor = new Vendor();
  tempClient: Vendor = new Vendor();
  success: boolean = true;

  //state Code logic - begin
  states: State[] = [];
  selectedStateDistricts: String[] = [];
  selectedStateCode: string = "";
  selectedStateName: string = "";
  selectedState: State = new State();
  selectedCity: String = "";
  //state Code logic - end

  constructor(private vendorService: VendorService, private companyService: CompanyService,public companyGlobalVar:CompanyGlobalVar) { }

  ngOnInit() {
      //state Code logic - begin
    this.getStates();
    //state Code logic - end
    this.getVendors()
  }

  getVendors(): void {
    this.success = false;
    this.error = false;
    this.vendorService.getForCompany()
      .subscribe(
        vendors => {
        this.vendors = vendors;
        this.filterVendors = vendors;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  edit(vendor: Vendor): void {
    this.vendor = vendor;
    this.tempClient=vendor;
    //State Code logic - begin
        if (vendor) {
          this.selectedStateName = vendor.state;
          if (vendor.state) {
            this.selectedState = this.states.find(states => states.state === vendor.state);
            this.selectedStateDistricts = this.selectedState.districts;
            this.selectedStateCode = this.selectedState.code;
            this.selectedCity = vendor.city;
          }
        }
        //state Code logic - end
  }

  new(): void {
    this.success = false;
    this.error = false;
    this.vendor = new Vendor();
    this.tempClient=new Vendor();
  }
  submit(): void {
    this.success = false;
    this.error = false;
    //state Code logic - begin
    this.vendor.state = this.selectedStateName;
    this.vendor.stateCode = this.selectedStateCode;
    this.vendor.city = this.selectedCity;
    //state Code logic - end
    this.vendorService.save(this.vendor)
      .subscribe(
        vendor => {
        this.vendor = vendor
        this.getVendors();
        this.success = true;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  onSearchChange(searchValue: string): void {
    this.filterVendors = this.vendors.filter(cl => cl.name.toLowerCase().includes(searchValue.toLowerCase()));
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
