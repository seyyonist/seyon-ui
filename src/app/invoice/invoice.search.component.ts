import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { trigger, transition, animate, style } from '@angular/animations'

import { InvoiceService } from './invoice.service';
import { SearchInvoice, Invoice, SearchResult } from './invoice.domain';
import { Client } from '../client/client.domain';
import { ClientService } from '../client/client.service';
import { APIURLS } from '../app.constants';
import { CompanyGlobalVar } from '../globals';

@Component({
  selector: 'app-invoice-search',
  templateUrl: './invoice.search.component.html',
  styleUrls: ['./invoice.search.component.css'],
  animations:[
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class InvoiceSearchComponent implements OnInit {

  success: boolean = true;
  error: boolean = false;
  errorMessage: string = "";
  searchInvoice: SearchInvoice = new SearchInvoice();
  clients: Client[] = [];
  invoices: Invoice[] = [];
  searchResult: SearchResult = new SearchResult();
  numbers: number[] = [];
  visible:boolean=false

  showSearch(){
    if(this.visible)
      this.visible=false
    else
      this.visible=true
  }

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService,
     private clientService: ClientService,public companyGlobalVar:CompanyGlobalVar) {
  }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.success = false;
    this.error = false;
    this.clientService.getForCompany()
      .subscribe(
      clients => {
        this.clients = clients;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  clearResult():void{
    this.searchResult = new SearchResult();
    this.invoices=[];
  }

  submit(pageNumber: number = 0): void {
    console.log(this.searchInvoice)
    if (this.searchInvoice.category!=="") {
      console.log("category :"+this.searchInvoice.category)
      this.invoiceService.searchInvoice(this.searchInvoice,this.searchInvoice.category, pageNumber)
        .subscribe(
        searchResult => {
          this.searchResult = searchResult;
          this.numbers = Array<number>(searchResult.totalPages).fill(1).map((x, i) => i);
          console.log(this.numbers);
          this.invoices = searchResult.content
          this.invoices.forEach(
            invoice => {
              invoice.clientName = this.clients.find(client => client.id == invoice.clientId).name;
              if(this.searchInvoice.category=='MANUFACTURING'){
                invoice.url = APIURLS.printManIInvoiceUrl.concat(invoice.proFormaId);
                invoice.purl = APIURLS.printManPInvoiceUrl.concat(invoice.proFormaId);
              }else{
                invoice.url = APIURLS.printIInvoiceUrl.concat(invoice.performaId);
                invoice.purl = APIURLS.printPInvoiceUrl.concat(invoice.performaId);
              }
              
            }
          );
          this.visible=false;
        },
        err => {
          this.error = true;
          this.errorMessage = "Error occured While searching the Invoice";
          this.visible=false;
        }
        )
    } else {
      alert("Please select the category");
      return;
    }
  }
}