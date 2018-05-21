import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { InvoiceService } from './invoice.service';
import {SearchInvoice} from './invoice.domain';
import { Client } from '../client/client.domain';
import { ClientService } from '../client/client.service';

@Component({
    selector: 'app-invoice-search',
    templateUrl: './invoice.search.component.html',
    styleUrls: ['./invoice.search.component.css']
})
export class InvoiceSearchComponent implements OnInit {

    success: boolean = true;
    error: boolean = false;
    errorMessage: string = "";
    searchInvoice:SearchInvoice=new SearchInvoice();
    clients: Client[] = [];
    

    constructor(private route: ActivatedRoute, private invoiceService: InvoiceService,private clientService: ClientService) {

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

  submit():void{
    console.log(this.searchInvoice)
  }
}