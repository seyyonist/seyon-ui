import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { InvoiceService } from '../invoice/invoice.service';
import { Particulars, InvoiceData, Invoice, SACCode, ManufacturingInvoice } from './invoice.manu.domain';
import { Client } from '../client/client.domain';
import { ClientService } from '../client/client.service';
import {APIURLS} from '../app.constants'

@Component({
  selector: 'app-manufacturing-gen-invoice',
  templateUrl: './manufacturing-gen-invoice.component.html',
  styleUrls: ['./manufacturing-gen-invoice.component.css']
})
export class ManufacturingGenInvoiceComponent implements OnInit {

  proformaId: string = "";
  manufacturingInvoice: ManufacturingInvoice = new ManufacturingInvoice();
  selectedClient: Client = new Client();
  clients: Client[] = [];
  sacCodes: SACCode[] = [];
  selSacCode: SACCode = new SACCode();
  selSacId: number;

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService, private clientService: ClientService) {

    this.route.params.subscribe(params => {
      this.proformaId = params['proformaId']
      //get the bill details for that particular proforma id.
      if (this.proformaId === "") {
        return;
      }

      this.invoiceService.getManufacturingInvoice(this.proformaId).subscribe(
        suc => {
          this.manufacturingInvoice = suc
          if (!this.manufacturingInvoice.cgstInvoice)
            this.manufacturingInvoice.cgstInvoice = suc.cgstPerfoma
          if (!this.manufacturingInvoice.sgstInvoice)
            this.manufacturingInvoice.sgstInvoice = suc.sgstPerfoma
          if (!this.manufacturingInvoice.igstInvoice) 
            this.manufacturingInvoice.igstInvoice = suc.igstPerfoma
          if (!this.manufacturingInvoice.igstInvoicePercent) 
            this.manufacturingInvoice.igstInvoicePercent = suc.igstPerfomaPercent
          if (!this.manufacturingInvoice.sgstInvoicePercent) 
            this.manufacturingInvoice.sgstInvoicePercent = suc.sgstPerfomaPercent
          if (!this.manufacturingInvoice.cgstInvoicePercent) 
            this.manufacturingInvoice.cgstInvoicePercent = suc.cgstPerfomaPercent
          if (this.manufacturingInvoice.invoiceRate==0) 
            this.manufacturingInvoice.invoiceRate = suc.performaRate
          if (!this.manufacturingInvoice.totalInvoiceAmount) 
            this.manufacturingInvoice.totalInvoiceAmount = suc.totalPerfomaAmount
        if (!this.manufacturingInvoice.grossInvoiceAmount) 
            this.manufacturingInvoice.grossInvoiceAmount = suc.grossPerformaAmount
         if (!this.manufacturingInvoice.calculatedInvoiceAmount) 
            this.manufacturingInvoice.calculatedInvoiceAmount = suc.calculatedPerformaAmount
          if(this.manufacturingInvoice.invoiceId=='')
            this.manufacturingInvoice.invoiceId=suc.proFormaId.replace("PI","IN");
          this.manufacturingInvoice.url=APIURLS.printManIInvoiceUrl.concat(suc.proFormaId)
          this.getClients();
          this.getSacCodes();
        },
        err => {
          alert("Error while retrieveing the manufacturing invoice");
          console.log("Error :" + err);
        }
      )
    });
  }

  ngOnInit() {
  }

  getClients(): void {
    this.clientService.getForCompany()
      .subscribe(
      clients => {
        this.clients = clients;
        this.loadSelectedClient();
      },
      err => {
        alert("Error while retrieveing the clients");
        console.log("Error :" + err);
      }
      )
  }

  loadSelectedClient(): void {
    this.selectedClient = this.clients.find(cli => cli.id === this.manufacturingInvoice.clientId);
    console.log(this.clients);
  }

  getSacCodes(): void {
    this.invoiceService.getSACCode()
      .subscribe(
      sac => {
        this.sacCodes = sac;
        if (this.manufacturingInvoice && this.manufacturingInvoice.id != 0) {
          this.selSacCode = this.sacCodes.find(sc => sc.sacCode === this.manufacturingInvoice.sacCode);
          if(this.selSacCode)
            this.selSacId = this.selSacCode.id
        }
      },
      err => {
        alert("Error while retrieveing the SAC Code");
        console.log("Error :" + err);
      }
      )
  }

  calculateTotal(): void {
  }

  save(): void {
    this.manufacturingInvoice.type="INVOICE";
    this.invoiceService.saveManufacturingInvoice(this.manufacturingInvoice).subscribe(
      succ => {
        this.manufacturingInvoice = succ;
        alert("Invoice Generated ")
      },
      err => {
        alert("Error while Saving the invoice");
        console.log("Error :" + err);
      }
    );
  }


  loadSelectedSac(manufacturingInvoice: ManufacturingInvoice): void {

  }
  calculateAmount(): void {
    let field: ManufacturingInvoice = this.manufacturingInvoice
    if (field.itemDescription !== "") {
      let amt = field.invoiceRate * field.quantity;
      field.calculatedInvoiceAmount=amt;
      field.cgstInvoice = Math.round((amt * field.cgstInvoicePercent / 100) * 100) / 100;
      field.sgstInvoice = Math.round((amt * field.sgstInvoicePercent / 100) * 100) / 100;
      field.igstInvoice = Math.round((amt * field.igstInvoicePercent / 100) * 100) / 100;
      field.calculatedInvoiceAmount = Math.round((amt + field.cgstInvoice + field.sgstInvoice + field.igstInvoice) * 100) / 100;
    }
  }

}
