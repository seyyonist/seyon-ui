import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ClientService } from '../client/client.service';
import { Client } from '../client/client.domain';
import { Particulars } from './invoice.domain';

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
  invoiceIdParam: number;
  selClientId: number;
  particular: Particulars;
  particulars: Particulars[] = [];

  constructor(private route: ActivatedRoute, private clientService: ClientService) {
    this.route.params.subscribe(params => {
      this.invoiceIdParam = params['id']
      console.log(this.invoiceIdParam);
    });
  }

  ngOnInit() {
    if (this.invoiceIdParam != 0) {
      this.selClientId = this.invoiceIdParam;
    }
    this.getClients();
    this.particular = new Particulars();
    console.log(this.particular);
    this.particulars.push(this.particular);
    console.log(this.particulars);
    
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
  loadSelectedClient(): void {
    this.selectedClient = this.clients.find(cli => cli.id === this.selClientId);
  }
}
