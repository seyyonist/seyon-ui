import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

import {ExcelGeneratorService} from '../../excel/excel-generator.service';
import { InvoiceService } from '../../invoice/invoice.service';
import { SearchInvoice, Invoice, SearchResult } from '../../invoice/invoice.domain';
import { Client } from '../../client/client.domain';
import { ClientService } from '../../client/client.service';
import { APIURLS } from '../../app.constants';
import { CompanyGlobalVar } from '../../globals';

@Component({
  selector: 'app-invoice-report',
  templateUrl: './invoice-report.component.html',
  styleUrls: ['./invoice-report.component.css'],
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
export class InvoiceReportComponent implements OnInit {

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
  constructor(private excelGenerator:ExcelGeneratorService, private invoiceService: InvoiceService, 
    private clientService: ClientService,public companyGlobalVar:CompanyGlobalVar) {}

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
  generateExcel():void{
     this.excelGenerator.exportAsExcelFile(this.invoices,'InvoiceReport');
  }
  
}
