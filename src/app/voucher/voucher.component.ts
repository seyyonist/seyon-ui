import { Component, OnInit } from '@angular/core';
import { Voucher } from './voucher.domain';
import { VoucherService } from './voucher.service';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from './voucher.domain';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})

export class VoucherComponent implements OnInit {

  error: boolean = false;
  errorMessage: string = "";
  success: boolean = true;
  voucher: Voucher = new Voucher();
  selectedVendorId: number;
  vendors: Vendor[] = [];
  selVendorId: number;
  curDate: string = "";
  nowDate: Date = new Date();

  constructor(private voucherService: VoucherService, private route: ActivatedRoute) {
    var vId;
    this.route.params.subscribe(params => {
      vId = params['id']
    });
    if (vId != 0) {
      console.log(this.voucher.id);
      this.getVoucher(vId);
    }

  }

  createNewVoucher() {
    this.success = false;
    this.error = false;
    this.voucher=new Voucher();
    this.voucher.createdDate = new Date();
  }

  ngOnInit() {
    this.success = false;
    this.error = false;
    this.curDate = this.getNowDate();
    this.getVendors();
    if (!this.voucher.voucherId) {
      this.voucher.createdDate = new Date();
    }
  }

  getVoucher(id: number): void {
    this.voucherService.getVoucher(id).subscribe(
      voucher => {
        this.voucher = voucher;
         this.selectedVendorId=this.voucher.vendorId;
         //this.selectedVendor.id=this.voucher.vendorId;
      },
      err => {
        alert("Error while getting voucher")
      }
    )
  }

  saveVoucher(): void {

    this.success = false;
    this.error = false;
    this.calculateVoucherTotal();
    this.voucher.vendorId=this.selectedVendorId;
   
    this.voucherService.save(this.voucher)
      .subscribe(
      voucher => {
        this.voucher = voucher;
        //this.getVoucher(this.voucher.id);
        this.success = true;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  getVendors(): void {

    this.success = false;
    this.error = false;
    this.voucherService.getVendors()
      .subscribe(
      vendors1 => {
        this.vendors = vendors1;
        // console.log("vendors-"+vendors1);
        //this.loadSelectedVendors();
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      );

  }

  loadSelectedVendors(): void {
   let selectedVendor = this.vendors.find(vendors => vendors.id === this.selectedVendorId);
   this.selectedVendorId=selectedVendor.id;

  }

  calculateVoucherTotal(): void {
    let totalNetAmount = +this.voucher.totalNetAmount;
    let netAmount = +this.voucher.netAmount;
    let igstAmount = +this.voucher.igstAmount;
    let sgstAmount = +this.voucher.sgstAmount;
    let cgstAmount = +this.voucher.cgstAmount;
    let totalAmount = +this.voucher.totalAmount;
    let others = +this.voucher.others;
    let tdsAmount = +this.voucher.tdsAmount;

    totalNetAmount = (netAmount + igstAmount + sgstAmount + cgstAmount);
    // console.log(totalNetAmount);
    totalAmount = ((totalNetAmount) - (tdsAmount + others));
    // console.log(totalAmount);

    this.voucher.totalNetAmount = totalNetAmount;
    this.voucher.totalAmount = totalAmount;
    //this.voucher.totalAmount = +((this.voucher.totalNetAmount) - (this.voucher.tdsAmount+this.voucher.others));
    //this.voucher.totalNetAmount.toFixed(2);
    //this.voucher.totalAmount.toFixed(2);
  }

  getNowDate(): string {
    let returnDate = "";
    let today = new Date();
    //split
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //because January is 0! 
    let yyyy = today.getFullYear();
    //Interpolation date

    returnDate += yyyy;
    if (mm < 10) {
      returnDate += `-0${mm}-`;
    } else {
      returnDate += `-${mm}-`;
    }

    if (dd < 10) {
      returnDate += `0${dd}`;
    } else {
      returnDate += `${dd}`;
    }
    return returnDate;
  }

}
