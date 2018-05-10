import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import {ClientService} from './client/client.service';
import { InvoiceComponent } from './invoice/invoice.component';
import {InvoiceService} from './invoice/invoice.service'; 

const appRoutes: Routes = [
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'client', component: ClientComponent },
  { path: 'invoice/:id', component: InvoiceComponent },
  /*{ path: 'maintenance', component: MaintenanceComponent },
  { path: 'expence', component: ExpenceComponent },
  { path: 'monthlyReport', component: MonthlyReportComponent },
  { path: 'flatsReport', component: FlatsReportComponent }
  */
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    DashboardComponent,
    ClientComponent,
    InvoiceComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ClientService,InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
