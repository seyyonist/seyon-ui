import { Component, OnInit } from '@angular/core';
import { Voucher } from './voucher.domain';
import { VoucherService } from './voucher.service';

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

  constructor(private voucherService: VoucherService) { }

  ngOnInit() {
    this.success = false;
    this.error = false;
  }

  getVoucher():void{
    this.voucher.id;
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
