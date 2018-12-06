import { Component, OnInit } from '@angular/core';
import {ExcelGeneratorService} from '../../excel/excel-generator.service';
import { InvoiceService } from '../../invoice/invoice.service';
import { SearchInvoice, Invoice, SearchResult } from '../../invoice/invoice.domain';
import { Client } from '../../client/client.domain';
import { ClientService } from '../../client/client.service';
import { APIURLS } from '../../app.constants';

@Component({
  selector: 'app-invoice-report',
  templateUrl: './invoice-report.component.html',
  styleUrls: ['./invoice-report.component.css']
})
export class InvoiceReportComponent implements OnInit {

  success: boolean = true;
  error: boolean = false;
  errorMessage: string = "";
  searchInvoice: SearchInvoice = new SearchInvoice();
  clients: Client[] = [];
  invoices: Invoice[] = [];
  searchResult: SearchResult = new SearchResult();
  numbers: number[] = [];

  constructor(private excelGenerator:ExcelGeneratorService, private invoiceService: InvoiceService, private clientService: ClientService) {}

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
      this.invoiceService.searchInvoiceReport(this.searchInvoice,this.searchInvoice.category)
        .subscribe(
        searchResult => {
          this.invoices = searchResult
          this.invoices.forEach(
            invoice => {
              try{
              invoice.clientName = this.clients.find(client => client.id == invoice.clientId).name;
              }catch(e){
                console.error(e)
              }
            }
          );
        },
        err => {
          this.error = true;
          this.errorMessage = "Error occured While searching the Invoice";
        }
        )
    } else {
      alert("Please select the category");
      return;
    }
  }
  generateExcel():void{
     this.excelGenerator.exportAsExcelFile(this.invoices,'InvoiceReport');
  }
  
}
