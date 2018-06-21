import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Particulars, InvoiceData, Invoice, SACCode } from '../invoice/invoice.domain';
import { GenInvoiceService } from './gen-invoice.service';
import { ClientService } from '../client/client.service';
import { Client } from '../client/client.domain';

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
  client: Client;

  constructor(private route: ActivatedRoute, private genInvoiceService: GenInvoiceService,
    private clientService: ClientService) {
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
    this.error = false;
    this.success = false;
    this.genInvoiceService.getInvoice(invoiceId).subscribe(
      invoiceData => {
        this.invoice = invoiceData.invoice;
        this.particulars = invoiceData.particulars;
        if (this.invoice.type != 'INVOICE') {
          this.particulars.forEach(par => {
            par.calculatedInvoiceAmount = par.calculatedPerformaAmount;
            par.invoiceRate = par.performaRate
          });
          this.invoice.cgstInvoicePercent = this.invoice.cgstPerfomaPercent;
          this.invoice.sgstInvoicePercent = this.invoice.sgstPerfomaPercent;
          this.invoice.igstInvoicePercent = this.invoice.igstPerfomaPercent;
          this.invoice.invoiceDate = this.invoice.performaDate;
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
    this.invoice.cgstInvoice = (this.invoice.cgstInvoicePercent * this.invoice.totalInvoiceBeforeTax) / 100
    this.invoice.sgstInvoice = (this.invoice.sgstInvoicePercent * this.invoice.totalInvoiceBeforeTax) / 100
    this.invoice.igstInvoice = (this.invoice.igstInvoicePercent * this.invoice.totalInvoiceBeforeTax) / 100

    this.invoice.totalInvoiceAmount = (this.invoice.totalInvoiceBeforeTax + this.invoice.cgstInvoice + this.invoice.sgstInvoice
      + this.invoice.igstInvoice)
    this.invoice.totalInvoiceAmount.toFixed(2);
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
        this.particulars = invoiceData.particulars
        this.success = true;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured While saving the Invoice";
      }
    )
  }
}
