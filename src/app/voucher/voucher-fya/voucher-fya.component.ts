import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { trigger, transition, animate, style } from '@angular/animations'

import { VoucherService } from '../voucher.service';
import { SearchVoucher, Voucher, SearchVoucherResult } from '../voucher.domain';
import { Vendor } from '../../vendor/vendor.domain';
import { VendorService } from '../../vendor/vendor.service';
import { ExcelGeneratorService } from '../../excel/excel-generator.service';
import { HeadOfAccount } from '../../head-of-account/head-of-account.domain';
import { HeadOfAccountService } from '../../head-of-account/head-of-account.service';

@Component({
  selector: 'app-voucher-fya',
  templateUrl: './voucher-fya.component.html',
  styleUrls: ['./voucher-fya.component.css']
})
export class VoucherFyaComponent implements OnInit {

  success: boolean = true;
  error: boolean = false;
  errorMessage: string = "";
  vouchers: Voucher[] = [];
  voucher: Voucher = new Voucher();
  visible: boolean = false
  vendors: Vendor[] = [];
  headOfAccounts: HeadOfAccount[] = [];
  searchResult: SearchVoucherResult = new SearchVoucherResult();
  numbers: number[] = [];
  showSearch() {
    if (this.visible)
      this.visible = false
    else
      this.visible = true
  }
  constructor(private excelGenerator: ExcelGeneratorService, private route: ActivatedRoute,
       private voucherService: VoucherService, private vendorService: VendorService, 
       private headOfAccountService: HeadOfAccountService) { }

  ngOnInit() {
    this.getVendors();
    
  }

  submit(pageNo:number=0): void {
    this.voucherService.getFyaVouchers(pageNo)
      .subscribe(
      searchResult => {
        this.searchResult=searchResult
        this.numbers = Array<number>(searchResult.totalPages).fill(1).map((x, i) => i);
        this.vouchers = searchResult.content
        this.vouchers.forEach(voucher => {
          voucher.vendorName = this.vendors.find(ven => ven.id == voucher.vendorId).name;
        })
        this.visible = false;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured While searching Voucher";
        this.visible = false;
      }
      )
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

  deleteVoucher(id: number): void {
    this.voucherService.deleteVoucher(id).subscribe(
      string => {
        alert(string);
        
      },
      err => {
        alert("Error while getting voucher")
      }
    )
  }


  getVendors(): void {
    this.success = false;
    this.error = false;
    this.vendorService.getForCompany()
      .subscribe(
      vendors => {
        this.vendors = vendors;
        this.submit(0);
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

   getHeadOfAccounts(): void {

    this.success = false;
    this.error = false;
    this.headOfAccountService.getHeadofAccountForCompany()
      .subscribe(
      headOfAccounts => {
        this.headOfAccounts = headOfAccounts;
       
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      );
  }
  generateVoucherExcel(): void {
    this.excelGenerator.exportAsExcelFile(this.vouchers,'VoucherReport');
  }

}
