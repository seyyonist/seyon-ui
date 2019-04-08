import { Component, OnInit } from '@angular/core';
import { Vendor } from './vendor.domain';
import { VendorService } from './vendor.service';

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

  constructor(private vendorService: VendorService) { }



  ngOnInit() {
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
}
