import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { InvoiceService } from '../invoice/invoice.service';
import { Particulars, InvoiceData, Invoice, SACCode, ManufacturingInvoice } from './invoice.manu.domain';
import { Client } from '../client/client.domain';
import { ClientService } from '../client/client.service';
import {APIURLS} from '../app.constants'
import { CompanyGlobalVar } from '../globals';

@Component({
  selector: 'app-manufacturing-invoice',
  templateUrl: './manufacturing-invoice.component.html',
  styleUrls: ['./manufacturing-invoice.component.css']
})
export class ManufacturingInvoiceComponent implements OnInit {

  proformaId: string = "";
  manufacturingInvoice: ManufacturingInvoice = new ManufacturingInvoice();
  selectedClient: Client = new Client();
  clients: Client[] = [];
  sacCodes: SACCode[] = [];
  selSacCode: SACCode = new SACCode();
  selSacId: number;
  showSac:boolean=false;

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService, public companyGlobalVar: CompanyGlobalVar
    , private clientService: ClientService) {
    this.route.params.subscribe(params => {
      this.proformaId = params['proformaId']
      //get the bill details for that particular proforma id.
      if (this.proformaId === "") {
        return;
      }
  
      this.invoiceService.getManufacturingInvoice(this.proformaId).subscribe(
        suc => {
          this.manufacturingInvoice = suc
          this.manufacturingInvoice.purl=APIURLS.printManPInvoiceUrl.concat(suc.proFormaId)
          this.getClients();
          this.getSacCodes();
        },
        err => {
          alert("Error while retrieveing the manufacturing invoice");
          console.log("Error :" + err);
        }
      )
    });

    if(companyGlobalVar.gstNo!=''){
      this.showSac=true;
    }
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
  }

  getSacCodes(): void {
    this.invoiceService.getSACCode()
      .subscribe(
      sac => {
        this.sacCodes = sac;
        if (this.manufacturingInvoice && this.manufacturingInvoice.id != 0) {
          this.selSacCode = this.sacCodes.find(sc => sc.sacCode === this.manufacturingInvoice.sacCode);
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
    this.invoiceService.saveManufacturingInvoice(this.manufacturingInvoice).subscribe(
      succ=>{
        this.manufacturingInvoice=succ;
        alert("Invoice saved ")
    },
    err=>{
       alert("Error while Saving the invoice");
        console.log("Error :" + err);
      }
    );
  }


  loadSelectedSac(manufacturingInvoice: ManufacturingInvoice): void {

  }
  calculateAmount(): void {
    let field: ManufacturingInvoice=this.manufacturingInvoice
     if (field.itemDescription !== ""){
      let amt =field.performaRate*field.quantity;
      field.cgstPerfoma=Math.round((amt*field.cgstPerfomaPercent/100)*100)/100;
      field.sgstPerfoma=Math.round((amt*field.sgstPerfomaPercent/100)*100)/100;
      field.igstPerfoma=Math.round((amt*field.igstPerfomaPercent/100)*100)/100;
      field.calculatedPerformaAmount = Math.round((amt+field.cgstPerfoma+field.sgstPerfoma+field.igstPerfoma)*100)/100;
    }
  }

}
