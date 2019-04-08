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
  selectedVendor: Vendor = new Vendor();
  vendors: Vendor[] = [];
  selVendorId: number;

  constructor(private voucherService: VoucherService, private route: ActivatedRoute) {
    var vId;
    this.route.params.subscribe(params => {
      vId = params['id']
      console.log(this.voucher.id);
    });
    if (vId != 0) {
      this.getVoucher(vId);
    }
  }

  ngOnInit() {
    this.success = false;
    this.error = false;
  }

  getVoucher(id: number): void {
    this.voucherService.getVoucher(id).subscribe(
      voucher => {
        this.voucher = voucher;
      },
      err => {
        alert("Error while getting voucher")
      }
    )
  }

  saveVoucher(): void {

    this.success = false;
    this.error = false;
    this.voucherService.save(this.voucher)
      .subscribe(
      voucher => {
        this.voucher = voucher;
        this.getVoucher(this.voucher.id);
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
        this.loadSelectedVendors();
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      );

  }

  loadSelectedVendors(): void {
     this.selectedVendor = this.vendors.find(vendors => vendors.id === this.selVendorId);

  }

}
