import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VoucherService } from './voucher.service';
import {SearchVoucher,Voucher} from './voucher.domain';

@Component({
  selector: 'app-voucher.search',
  templateUrl: './voucher.search.component.html',
  styleUrls: ['./voucher.search.component.css']
})
export class VoucherSearchComponent implements OnInit {

    success: boolean = true;
    error: boolean = false;
    errorMessage: string = "";
    searchVoucher: SearchVoucher=new SearchVoucher();
    vouchers:Voucher[]=[];
    voucher:Voucher=new Voucher();
  constructor(private route: ActivatedRoute, private voucherService: VoucherService) { }
 
  ngOnInit() {
  }

  getVoucher(id:number):void{
    this.voucherService.getVoucher(id).subscribe(
      voucher=>{
        this.voucher=voucher;
      },
      err=>{
        alert("Error while getting voucher")
      }
    )
  }

  deleteVoucher(id:number):void{
    this.voucherService.deleteVoucher(id).subscribe(
      string=>{
        alert(string);
      },
      err=>{
        alert("Error while getting voucher")
      }
    )
  }

   submit(): void {
    console.log(this.searchVoucher)
    if(this.searchVoucher.vendorName=="")
      this.searchVoucher.vendorName=null;
      if(this.searchVoucher.voucherId=="")
      this.searchVoucher.voucherId=null;
    this.voucherService.searchVoucher(this.searchVoucher)
    .subscribe(
      searchResult=>{
        this.vouchers=searchResult.content
        },
      err=>{
        this.error=true;
        this.errorMessage = "Error occured While searching Voucher";
      }
    )
  }


}
