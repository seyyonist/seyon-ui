import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen-invoice',
  templateUrl: './gen-invoice.component.html',
  styleUrls: ['./gen-invoice.component.css']
})
export class GenInvoiceComponent implements OnInit {

  performaIds:string[]=[];
  errorMessage:string="";
  success:boolean=false;
  error:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  loadSelectedPerformAInvoice():void{

  }

}
