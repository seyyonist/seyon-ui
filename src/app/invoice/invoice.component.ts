import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ClientService } from '../client/client.service';
import { Client } from '../client/client.domain';
import { Particulars,InvoiceData,Invoice } from './invoice.domain';
import {InvoiceService} from './invoice.service'; 

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
  selClientId: number;
  particulars: Array<Particulars>=[];
  invoiceData:InvoiceData=new InvoiceData();
  invoice:Invoice=new Invoice();
  
  constructor(private route: ActivatedRoute, private clientService: ClientService
  ,private invoiceService:InvoiceService) {
    var invoiceIdParam
    this.route.params.subscribe(params => {
      invoiceIdParam = params['id']
      console.log(invoiceIdParam);
    });
    if (invoiceIdParam != 0) {
      console.log("fetching the invoice for the id :" +invoiceIdParam)
      this.invoiceService.getInvoice(invoiceIdParam).subscribe(
        invoiceData=>{
          console.log("invoice Data "+invoiceData);
          this.invoice=invoiceData.invoice;
          this.particulars=invoiceData.particulars;
          this.selClientId=invoiceData.invoice.clientId;
          this.getClients();
          this.loadSelectedClient();
          this.particulars.push(new Particulars());
        },
        err=>{
          console.log(err);
        }
      )
    }else{
        this.invoice=new Invoice();
        this.particulars=[];
        this.selClientId=null;
        this.getClients();
        this.loadSelectedClient();
        this.particulars.push(new Particulars());
    }
   
  }

  ngOnInit() {    
    
  }

  getInvoice():void{
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

  loadSelectedClient(): void {
    this.selectedClient = this.clients.find(cli => cli.id === this.selClientId);
    this.invoice.clientId=this.selClientId;
  }

  addRow():void{
    this.particulars.push(new Particulars());
    console.log(this.particulars);
  }
  

  calculateAmount(field:Particulars):void{
    if(field.item)
     if(field.rate>0){
      field.calculatedAmount=field.rate*field.quantity+(((field.rate*field.quantity)*(field.cgstPercent+field.sgstPercent+field.igstPercent))/100);
      field.cgst=(((field.rate*field.quantity)*(field.cgstPercent))/100);
      field.sgst=(((field.rate*field.quantity)*(field.sgstPercent))/100);
      field.igst=(((field.rate*field.quantity)*(field.igstPercent))/100);
     }else{
       field.calculatedAmount=0;
       field.cgst=0
       field.sgst=0
       field.igst=0
     }
  }

  calculateTotal():void{
    this.invoice.totalAmount=this.particulars.reduce((sum,part)=>sum+part.calculatedAmount,0);
  }  
  saveInvoice():void{
    this.invoiceData.invoice=this.invoice;
    this.invoiceData.particulars=this.particulars;
    this.invoiceService.save(this.invoiceData).subscribe(
      invoiceData=>{
        this.invoiceData=invoiceData;
        this.invoice=invoiceData.invoice;
        this.particulars=invoiceData.particulars
        this.success=true;
      },
      err=>{
        this.error=true;
        this.errorMessage = "Error occured While saving the Invoice";
      }
    )
  }
}
