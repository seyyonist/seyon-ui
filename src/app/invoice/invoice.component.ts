import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ClientService } from '../client/client.service';
import { Client } from '../client/client.domain';
import { Particulars, InvoiceData, Invoice, SACCode } from './invoice.domain';
import { InvoiceService } from './invoice.service';
import { APIURLS } from '../app.constants';
import { CompanyGlobalVar } from '../globals';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

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
  selSacCode: SACCode = new SACCode();
  showSac:boolean=false;
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
      this.invoice = new Invoice();
      this.particulars = [];
      this.selClientId = null;
      this.getClients();
      this.getSacCodes();
      this.loadSelectedClient();
      this.particulars.push(new Particulars());
    }
    if(companyGlobalVar.gstNo!=''){
      this.showSac=true;
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
        //console.log("invoice id-"+this.invoice.id);
        if (this.invoice && this.invoice.id != 0) {
          this.selSacCode = this.sacCodes.find(sc => sc.sacCode === this.invoice.sacCode);
          this.selSacId = this.selSacCode.id
        }
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  loadSelectedSac(): void {
    if (this.selectedClient.state == "") {
      alert("please select the client");
      return;
    }
    this.selSacCode = this.sacCodes.find(sac => sac.id === this.selSacId);

    if (this.selectedClient.state == this.companyGlobalVar.state) {
      this.invoice.cgstPerfomaPercent = this.selSacCode.cgstPercent;
      this.invoice.sgstPerfomaPercent = this.selSacCode.sgstPercent;
      this.invoice.igstPerfomaPercent = 0;
    } else {
      this.invoice.cgstPerfomaPercent = 0;
      this.invoice.sgstPerfomaPercent = 0;
      this.invoice.igstPerfomaPercent = this.selSacCode.igstPercent;
    }
    this.invoice.sacCode = this.selSacCode.sacCode;
  }

  loadSelectedClient(): void {
    this.selectedClient = this.clients.find(cli => cli.id === this.selClientId);
    if (this.selectedClient != null) {
      console.debug('selectedClient.state' + this.selectedClient.state);
      console.debug('companyGlobalVar.state' + this.companyGlobalVar.state);
      if(this.showSac){
      if (this.selectedClient.state == this.companyGlobalVar.state ) {
        this.cgstDisplay = true;
        this.sgstDisplay = true;
        this.igstDisplay = false;
      } else {
        this.cgstDisplay = false;
        this.sgstDisplay = false;
        this.igstDisplay = true;
      }
    }
    }else{
      this.selectedClient= new Client();
    }
    this.invoice.clientId = this.selClientId;
  }

  addRow(): void {
    this.particulars.push(new Particulars());
    console.log(this.particulars);
  }


  calculateAmount(field: Particulars): void {
    if (field.itemDescription !== "")
      field.calculatedPerformaAmount = field.performaRate;
    this.calculateTotal();

  }



  calculateTotal(): void {
    var sum = 0
    this.particulars.filter(part => part.itemDescription !== "").forEach(part => {
      sum = sum + part.calculatedPerformaAmount;
    })
    this.invoice.totalPerfomaBeforeTax = sum;

    //apply Tax
    this.invoice.cgstPerfoma = Math.ceil((this.invoice.cgstPerfomaPercent * this.invoice.totalPerfomaBeforeTax) / 100);
    this.invoice.sgstPerfoma = Math.ceil((this.invoice.sgstPerfomaPercent * this.invoice.totalPerfomaBeforeTax) / 100);
    this.invoice.igstPerfoma = Math.ceil((this.invoice.igstPerfomaPercent * this.invoice.totalPerfomaBeforeTax) / 100);

    this.invoice.totalPerfomaAmount = (this.invoice.totalPerfomaBeforeTax + this.invoice.cgstPerfoma + this.invoice.sgstPerfoma
      + this.invoice.igstPerfoma)
    this.invoice.totalPerfomaAmount=this.invoice.totalPerfomaAmount + this.invoice.reimbPerfomaAmount;
    this.invoice.totalPerfomaAmount.toFixed(2);
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

  cancelInvoice(): void {
    this.success = false;
    this.error = false;
    this.invoiceData.invoice = this.invoice;
    this.invoiceData.particulars = this.particulars;
    this.invoiceService.cancel(this.invoiceData.invoice.id).subscribe(
      invoice => {
        this.invoiceData.invoice = invoice;
        this.success = true;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured While saving the Invoice";
      }
    )
  }

  deletParticulars(particularId: number): void {
    this.success = false;
    this.error = false;
    this.invoiceService.deleteParti(particularId).subscribe(
      str => {
        this.particulars.splice(this.particulars.map(part => part.id).indexOf(particularId), 1);
        this.calculateTotal();
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured While saving the Invoice";
      }
    )
  }
}
