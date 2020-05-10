import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';

import { Chart } from 'chart.js';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';
import { CompanyGlobalVar } from '../globals';
import { OAuthService } from '../app.auth.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  chart:Chart[];

  clientCount: Number = 0;
  vendorCount: Number = 0;
  voucherTotalCount: Number = 0;
  voucherMonthCount: Number = 0;
  constructor(private http: HttpClient,public companyGlobalVar:CompanyGlobalVar,private oauthService:OAuthService) {
  }
  
 ngOnInit() {
    this.refresh();
  }
  getClientCount(): void {
    var url = Urls.getDomain().concat(APIURLS.client).concat("/totalNumberOfClients");
    let headers=this.oauthService.getAuthHeaders()
    let options = { headers:headers, responseType: 'text' as 'json' }
    this.http.get<Number>(url, options).subscribe(
      success => {
        this.clientCount = success;
      },
      err => {
        console.log(err);
        alert("error retrieving client ")
      }
    )
  }


  getChartData(): void {
    console.log('chartData');
    var url = Urls.getDomain().concat(APIURLS.invoice).concat("/getInvoiceAndProfomaCountForCurrentYear");
    let headers=this.oauthService.getAuthHeaders()
    let options = { headers: headers };
    this.http.get<any>(url, options).subscribe(
      result => {

        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
              label: result[1].label,
              data: result[1].data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'

              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
            },
            {
              label: result[0].label,
              data: result[0].data,
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      },
      err => {
        console.log(err);
        alert("error retrieving chart data ")
      }
    );
  }

  onChartClick(Evt): void {
    this.getChartData()
  }


  getVendorCount(): void {
    var url = Urls.getDomain().concat(APIURLS.vendor).concat("/totalNumberOfVendors");
    let headers=this.oauthService.getAuthHeaders()
    let options = { headers: headers, responseType: 'text' as 'json' }
    this.http.get<Number>(url, options).subscribe(
      success => {
        this.vendorCount = success;
      },
      err => {
        console.log(err);
        alert("error retrieving Vendor ")
      }
    )
  }

  getVoucherCount(): void {
    var url = Urls.getDomain().concat(APIURLS.voucher).concat("/voucherCount");
    let headers=this.oauthService.getAuthHeaders()
    let options = { headers: headers }
    this.http.get<Map<string, number>>(url, options).subscribe(
      success => {
        this.voucherTotalCount = success['Total'];
        this.voucherMonthCount = success['Month'];
      },
      err => {
        console.log(err);
        alert("error retrieving Vendor ")
      }
    )
  }
  

  refresh(): void {
    this.getClientCount();
    this.getVendorCount();
    this.getVoucherCount();
    this.chart=[];
    this.getChartData();
  }
}
