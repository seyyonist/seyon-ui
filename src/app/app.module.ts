import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client/client.service';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/users.service';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceSearchComponent } from './invoice/invoice.search.component';
import { InvoiceService } from './invoice/invoice.service';
import { CompanyComponent } from './company/company.component';
import { CompanyService } from './company/company.service';
import { VoucherComponent } from './voucher/voucher.component';
import { VoucherSearchComponent } from './voucher/voucher.search.component';
import { VoucherService } from './voucher/voucher.service';
import { GenInvoiceComponent } from './gen-invoice/gen-invoice.component';
import {GenInvoiceService} from './gen-invoice/gen-invoice.service';
import { CompanyGlobalVar } from './globals';
import {InvoiceManuComponent} from './manufacturing-invoice/invoice.manu.component';
import {InvoiceManuSuccessComponent} from './manufacturing-invoice/invoice.manu.success.component';
import { ManufacturingInvoiceComponent } from './manufacturing-invoice/manufacturing-invoice.component';
import { ManufacturingGenInvoiceComponent } from './manufacturing-invoice/manufacturing-gen-invoice.component';
import { HasRoleDirective } from './has-role.directive';

const appRoutes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'client', component: ClientComponent },
  { path: 'users', component: UsersComponent },
	{ path: 'performaView/:id', component: InvoiceComponent },
  { path: 'invoiceNew/:id', component: InvoiceComponent },
  { path: 'invoice-search', component: InvoiceSearchComponent},
  { path: 'generate-invoice/:id', component: GenInvoiceComponent},
  { path: 'company', component: CompanyComponent },
  { path: 'voucherNew/:id', component: VoucherComponent },
  { path: 'voucher-search', component: VoucherSearchComponent },
  { path: 'invoiceManu/:id',component:InvoiceManuComponent},
  { path: 'invoiceManuSuccess/:ids',component:InvoiceManuSuccessComponent},
  { path: 'manufacturingInvoice/:proformaId',component:ManufacturingInvoiceComponent},
  { path: 'generate-manu-invoice/:proformaId',component:ManufacturingGenInvoiceComponent}
  
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
    GenInvoiceComponent,
    CompanyComponent,
    VoucherComponent,
    VoucherSearchComponent,
    InvoiceManuComponent,
    InvoiceManuSuccessComponent,
    ManufacturingInvoiceComponent,
    ManufacturingGenInvoiceComponent,
    HasRoleDirective
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
  providers: [ClientService, UserService, InvoiceService, CompanyService, VoucherService,GenInvoiceService,CompanyGlobalVar],
  bootstrap: [AppComponent]
})
export class AppModule { }
