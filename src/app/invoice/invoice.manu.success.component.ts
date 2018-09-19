import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ClientService } from '../client/client.service';
import { Client } from '../client/client.domain';
import { Particulars, InvoiceData, Invoice, SACCode, ManufacturingInvoice } from './invoice.domain';
import { InvoiceService } from './invoice.service';
import { APIURLS } from '../app.constants';
import { CompanyGlobalVar } from '../globals';

@Component({
  selector: 'app-manu-invoice-success',
  templateUrl: './invoice.manu.success.component.html',
  styleUrls: ['./invoice.manu.success.component.css']
})
export class InvoiceManuSuccessComponent implements OnInit {
  ids:string[]=[]
  constructor(private route: ActivatedRoute) {
    var invoiceIdParam
    this.route.params.subscribe(params => {
      invoiceIdParam = params['ids']
      this.ids=invoiceIdParam.split(",");
    });
  }

  ngOnInit() {
  }

}
