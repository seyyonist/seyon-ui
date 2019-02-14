import { Component, OnInit } from '@angular/core';
import { Voucher } from './voucher.domain';
import { VoucherService } from './voucher.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private voucherService: VoucherService,private route: ActivatedRoute) {
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

  saveVoucher(): void{
  
  this.success = false;
    this.error = false;
    this.voucherService.save(this.voucher)
      .subscribe(
      voucher => {
        this.voucher = voucher;
        this.getVoucher();
        this.success = true;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

}
