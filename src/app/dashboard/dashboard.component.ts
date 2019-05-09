import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chartOptions = {
    responsive: true
  };
  
  chartData = [
    { data: [330, 600, 260, 700], label: 'Invoice' },
    { data: [120, 455, 100, 340], label: 'Voucher' }
    
  ];

    chartLabels = ['January', 'February', 'March', 'April','May','June','July','August','September','October', 'November','December'];

  clientCount:Number=0;
  vendorCount:Number=0;
  voucherTotalCount:Number=0;
  voucherMonthCount:Number=0;
  constructor(private http: HttpClient) {
  }

  getClientCount(): void {
    var url = Urls.getDomain().concat(APIURLS.client).concat("/totalNumberOfClients");
    let options={ headers: httpOptions.headers,responseType:'text' as 'json' }
    this.http.get<Number>(url,options).subscribe(
      success=>{
        this.clientCount=success;
      },
      err=>{
        console.log(err);
        alert("error retrieving client ")
      }
    )
  }

  
  getVendorCount(): void {
    var url = Urls.getDomain().concat(APIURLS.vendor).concat("/totalNumberOfVendors");
    let options={ headers: httpOptions.headers,responseType:'text' as 'json' }
    this.http.get<Number>(url,options).subscribe(
      success=>{
        this.vendorCount=success;
      },
      err=>{
        console.log(err);
        alert("error retrieving Vendor ")
      }
    )
  }

  getVoucherCount(): void {
    var url = Urls.getDomain().concat(APIURLS.voucher).concat("/voucherCount");
    let options={ headers: httpOptions.headers}
    this.http.get<Map<string,number>>(url,options).subscribe(
      success=>{
        this.voucherTotalCount=success['Total'];
        this.voucherMonthCount=success['Month'];
      },
      err=>{
        console.log(err);
        alert("error retrieving Vendor ")
      }
    )
  }
  ngOnInit() {
   this.refresh();
  }

  refresh():void{
    
    this.getClientCount();
    this.getVendorCount();
    this.getVoucherCount();
  }
}
