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
import { UsersComponent } from './users/users.component';
import {UserService} from './users/users.service';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceSearchComponent } from './invoice/invoice.search.component';
import {InvoiceService} from './invoice/invoice.service';
import { CompanyComponent } from './company/company.component'; 
import { CompanyService } from './company/company.service'; 

const appRoutes: Routes = [
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'client', component: ClientComponent },
   { path: 'users', component: UsersComponent },
  { path: 'invoice/:id', component: InvoiceComponent },
   { path: 'invoiceNew/:id', component: InvoiceComponent },
  { path: 'invoice-search', component: InvoiceSearchComponent},
  { path: 'company', component: CompanyComponent}
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
    UsersComponent,
    InvoiceComponent,
    InvoiceSearchComponent,
    CompanyComponent
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
  providers: [ClientService,UserService,InvoiceService,CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
