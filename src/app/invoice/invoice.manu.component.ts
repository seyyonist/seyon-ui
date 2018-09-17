import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ClientService } from '../client/client.service';
import { Client } from '../client/client.domain';
import { Particulars, InvoiceData, Invoice, SACCode,ManufacturingInvoice } from './invoice.domain';
import { InvoiceService } from './invoice.service';
import { APIURLS } from '../app.constants';
import { CompanyGlobalVar } from '../globals';

@Component({
  selector: 'app-manu-invoice',
  templateUrl: './invoice.manu.component.html',
  styleUrls: ['./invoice.manu.component.css']
})
export class InvoiceManuComponent implements OnInit {

  clients: Client[] = [];
  error: boolean = false;
  errorMessage: string = "";
  selectedClient: Client = new Client();
  success: boolean = true;
  cgstDisplay: boolean = false;
  sgstDisplay: boolean = false;
  igstDisplay: boolean = false;
  selClientId: number;
  particulars: Array<Particulars> = [];
  invoiceData: InvoiceData = new InvoiceData();
  invoice: Invoice = new Invoice();
  sacCodes: SACCode[] = [];
  selSacId: number;


  manufacturingInvoice:ManufacturingInvoice[]=[];
  totalPerfomaBeforeTax:number=0;

  constructor(private route: ActivatedRoute, private clientService: ClientService
    , private invoiceService: InvoiceService, private companyGlobalVar: CompanyGlobalVar) {
    var invoiceIdParam
    this.route.params.subscribe(params => {
      invoiceIdParam = params['id']
      console.log(invoiceIdParam);
    });
    if (invoiceIdParam != 0) {
      console.log("fetching the invoice for the id :" + invoiceIdParam)
      this.invoiceService.getInvoice(invoiceIdParam).subscribe(
        invoiceData => {
          console.log("invoice Data " + invoiceData);
          this.invoice = invoiceData.invoice;
          this.invoice.url = APIURLS.printIInvoiceUrl.concat(this.invoice.performaId);
          this.invoice.purl = APIURLS.printPInvoiceUrl.concat(this.invoice.performaId);
          this.particulars = invoiceData.particulars;
          this.selClientId = invoiceData.invoice.clientId;
          this.getClients();
          this.loadSelectedClient();
          this.getSacCodes();
          this.particulars.push(new Particulars());
          this.calculateTotal();
        },
        err => {
          console.log(err);
        }
      )
    } else {
      this.manufacturingInvoice=[];
      this.selClientId = null;
      this.getClients();
      this.getSacCodes();
      this.loadSelectedClient();
      this.manufacturingInvoice.push(new ManufacturingInvoice());
    }

  }

  ngOnInit() {

  }

  getInvoice(): void {
    this.invoice.id;
  }
  getClients(): void {
    this.success = false;
    this.error = false;
    this.clientService.getForCompany()
      .subscribe(
      clients => {
        this.clients = clients;
        this.loadSelectedClient();
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }
  getSacCodes(): void {
    this.success = false;
    this.error = false;
    this.invoiceService.getSACCode()
      .subscribe(
      sac => {
        this.sacCodes = sac;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  loadSelectedSac(manuInv:ManufacturingInvoice): void {
    if (this.selectedClient.state == "") {
      alert("please select the client");
      return;
    }
    let selSacCode: SACCode = new SACCode();
    selSacCode = this.sacCodes.find(sac => sac.id === manuInv.sacCodeId);

    if (this.selectedClient.state == this.companyGlobalVar.state) {
      manuInv.cgstPerfomaPercent = selSacCode.cgstPercent;
      manuInv.sgstPerfomaPercent = selSacCode.sgstPercent;
      manuInv.igstPerfomaPercent = 0;
    } else {
      manuInv.cgstPerfomaPercent = 0;
      manuInv.sgstPerfomaPercent = 0;
      manuInv.igstPerfomaPercent = selSacCode.igstPercent;
    }
    manuInv.sacCode = selSacCode.sacCode;
  }

  loadSelectedClient(): void {
    this.selectedClient = this.clients.find(cli => cli.id === this.selClientId);
    if (this.selectedClient != null) {
      console.debug('selectedClient.state' + this.selectedClient.state);
      console.debug('companyGlobalVar.state' + this.companyGlobalVar.state);
      if (this.selectedClient.state == this.companyGlobalVar.state) {
        this.cgstDisplay = true;
        this.sgstDisplay = true;
        this.igstDisplay = false;
      } else {
        this.cgstDisplay = false;
        this.sgstDisplay = false;
        this.igstDisplay = true;
      }
    }else{
      this.selectedClient= new Client();
    }
    this.invoice.clientId = this.selClientId;
  }

  addRow(): void {
    this.manufacturingInvoice.push(new ManufacturingInvoice());
  }


  calculateAmount(field: ManufacturingInvoice): void {
    if (field.itemDescription !== ""){
      let amt =field.performaRate*field.quantity;
      field.cgstPerfoma=Math.round((amt*field.cgstPerfomaPercent/100)*100)/100;
      field.sgstPerfoma=Math.round((amt*field.sgstPerfomaPercent/100)*100)/100;
      field.igstPerfoma=Math.round((amt*field.igstPerfomaPercent/100)*100)/100;
      field.calculatedPerformaAmount = Math.round((amt+field.cgstPerfoma+field.sgstPerfoma+field.igstPerfoma)*100)/100;
      this.calculateTotal()
    }
  }



  calculateTotal(): void {
    var sum = 0
    this.manufacturingInvoice.filter(part => part.itemDescription !== "").forEach(part => {
      sum = sum + part.calculatedPerformaAmount;
    })
    this.totalPerfomaBeforeTax = sum;
  }

  savePerformaInvoice(): void {
    this.success = false;
    this.error = false;
    this.invoiceData.invoice = this.invoice;
    this.invoiceData.particulars = this.particulars.filter(part => part.itemDescription !== "");
    this.invoiceService.savePerforma(this.invoiceData).subscribe(
      invoiceData => {
        this.invoiceData = invoiceData;
        this.invoice = invoiceData.invoice;
        this.particulars = invoiceData.particulars
        this.invoice.url = APIURLS.printIInvoiceUrl.concat(this.invoice.performaId);
        this.invoice.purl = APIURLS.printPInvoiceUrl.concat(this.invoice.performaId);
        this.success = true;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured While saving the Invoice";
      }
    )
  }

  deletRow(particularId: number): void {
    this.success = false;
    this.error = false;
    this.manufacturingInvoice.splice(this.manufacturingInvoice.map(part => part.id).indexOf(particularId), 1);
    this.calculateTotal();
     
  }
}
