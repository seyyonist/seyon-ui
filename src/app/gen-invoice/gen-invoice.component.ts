import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Particulars, InvoiceData, Invoice, SACCode } from '../invoice/invoice.domain';
import { GenInvoiceService } from './gen-invoice.service';
import { ClientService } from '../client/client.service';
import { Client } from '../client/client.domain';
import {APIURLS } from '../app.constants';
import { CompanyGlobalVar } from '../globals';

@Component({
  selector: 'app-gen-invoice',
  templateUrl: './gen-invoice.component.html',
  styleUrls: ['./gen-invoice.component.css']
})
export class GenInvoiceComponent implements OnInit {

  performaIds: string[] = [];
  errorMessage: string = "";
  successMessage: string = "";
  success: boolean = false;
  error: boolean = false;
  particulars: Array<Particulars> = [];
  invoiceData: InvoiceData = new InvoiceData();
  invoice: Invoice = new Invoice();
  clients: Client[] = [];
  client: Client=new Client();
  minInvoiceDate: string = "";
  curDate:string = "";
  date:Date=new Date();
  constructor(private route: ActivatedRoute, private genInvoiceService: GenInvoiceService,
    private clientService: ClientService,public companyGlobalVar:CompanyGlobalVar) {
    var invoiceIdParam
    this.route.params.subscribe(params => {
      invoiceIdParam = params['id']
      console.log(invoiceIdParam);
    });

    if (invoiceIdParam) {
      this.loadSelectedPerformAInvoice(invoiceIdParam);
    }
  }

  ngOnInit() {
  }

  loadSac(): void {
    alert("Loading SAC Code");
  }
  loadSelectedPerformAInvoice(invoiceId: number): void {
    console.log("inside loadSelectedPerformAInvoice");
    this.error = false;
    this.success = false;
    this.minInvoiceDate="";
    this.genInvoiceService.getInvoice(invoiceId).subscribe(
      invoiceData => {
        this.invoice = invoiceData.invoice;
        this.invoice.url=APIURLS.printIInvoiceUrl.concat(this.invoice.performaId);
        this.invoice.purl=APIURLS.printPInvoiceUrl.concat(this.invoice.performaId);
        this.particulars = invoiceData.particulars;
         //console.log("invoice type "+this.invoice.type);
        if (this.invoice.type != 'INVOICE') {
          this.particulars.forEach(par => {
            par.calculatedInvoiceAmount = par.calculatedPerformaAmount;
            par.invoiceRate = par.performaRate
          });
          //console.log("invoice setting "+this.invoice.cgstInvoicePercent+this.invoice.sgstInvoicePercent);
          if(!this.invoice.cgstInvoicePercent)
            this.invoice.cgstInvoicePercent = this.invoice.cgstPerfomaPercent;
          if(!this.invoice.sgstInvoicePercent)
            this.invoice.sgstInvoicePercent = this.invoice.sgstPerfomaPercent;
          if(!this.invoice.igstInvoicePercent)
             this.invoice.igstInvoicePercent = this.invoice.igstPerfomaPercent;
          if(!this.invoice.invoiceDate)
            this.invoice.invoiceDate = this.invoice.performaDate;
          if(!this.invoice.reimbInvoiceAmount)
            this.invoice.reimbInvoiceAmount=this.invoice.reimbPerfomaAmount
        }
        this.getClients();
        this.calculateTotal();
      },
      err => {
        this.error = false;
        this.errorMessage = "Error occured while getting the invoice details";
        console.log(err);
      }
    )
    this.getMinInvoiceDate();

  }

  calculateAmount(field: Particulars): void {
    field.calculatedInvoiceAmount = field.quantity * field.invoiceRate;
    this.calculateTotal();
  }

  calculateTotal(): void {
    var sum = 0
    this.particulars.forEach(part => {
      sum = sum + part.calculatedInvoiceAmount;
    })
    this.invoice.totalInvoiceBeforeTax = sum;

    //apply Tax
    this.invoice.cgstInvoice = Math.ceil((this.invoice.cgstInvoicePercent * this.invoice.totalInvoiceBeforeTax) / 100);
    this.invoice.sgstInvoice = Math.ceil((this.invoice.sgstInvoicePercent * this.invoice.totalInvoiceBeforeTax) / 100);
    this.invoice.igstInvoice = Math.ceil((this.invoice.igstInvoicePercent * this.invoice.totalInvoiceBeforeTax) / 100);

    this.invoice.totalInvoiceAmount = (this.invoice.totalInvoiceBeforeTax + this.invoice.cgstInvoice + this.invoice.sgstInvoice
      + this.invoice.igstInvoice)
    this.invoice.totalInvoiceAmount.toFixed(2);
    this.includeReimbursement();
  }

  includeReimbursement(){
    this.invoice.totalInvoiceAmount=this.invoice.totalInvoiceAmount + this.invoice.reimbInvoiceAmount;
  }

  getClients(): void {
    this.success = false;
    this.error = false;
    this.clientService.getForCompany()
      .subscribe(
      clients => {
        this.clients = clients;
        this.client = this.clients.find(cli => cli.id === this.invoice.clientId);
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  generateInvoice(): void {
    this.success = false;
    this.error = false;
    this.invoiceData.invoice = this.invoice;
    this.invoiceData.particulars = this.particulars;
    this.genInvoiceService.saveInvoice(this.invoiceData).subscribe(
      invoiceData => {
        this.invoiceData = invoiceData;
        this.invoice = invoiceData.invoice;
        this.particulars = invoiceData.particulars;
        this.invoice.url=APIURLS.printIInvoiceUrl.concat(invoiceData.invoice.performaId);
        this.invoice.purl=APIURLS.printPInvoiceUrl.concat(invoiceData.invoice.performaId);
       
        this.success = true;
        this.successMessage = "Invoice successfully generated with id:" + this.invoice.invoiceId;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured While saving the Invoice";
      }
    )
  }


   getMinInvoiceDate(): void {
    this.success = false;
    this.error = false;
    this.curDate=this.getNowDate();
    console.log("curDate-" + this.curDate);
    this.genInvoiceService.getMinInvoiceDate().subscribe(
      str => {
        this.minInvoiceDate = str;
        console.log("minInvoiceDate-" + this.minInvoiceDate);
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured in getMinInvoiceDate please contact administrator";
        //console.log("err getMinProfomaDate-"+ err);
      }
    )

  }

  getNowDate(): string {
    let returnDate = "";
    let today = new Date();
    //split
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //because January is 0! 
    let yyyy = today.getFullYear();
    //Interpolation date
  
    returnDate += yyyy;
     if (mm < 10) {
      returnDate += `-0${mm}-`;
    } else {
      returnDate += `-${mm}-`;
    }

      if (dd < 10) {
      returnDate += `0${dd}`;
    } else {
      returnDate += `${dd}`;
    }
    return returnDate;
  }


}
