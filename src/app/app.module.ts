import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { AuthGuard } from './auth.guard';
import {ExcelGeneratorService} from './excel/excel-generator.service';
import { InvoiceReportComponent } from './reports/invoice-report/invoice-report.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorService } from './vendor/vendor.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HeadOfAccountComponent } from './head-of-account/head-of-account.component';
import { HeadOfAccountService } from './head-of-account/head-of-account.service';
import { VoucherFyaComponent } from './voucher/voucher-fya/voucher-fya.component';
import { BulkUploadComponent } from './bulk-upload/bulk-upload.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']} },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']} },
  { path: 'client', component: ClientComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN']}  },
  { path: 'vendor', component: VendorComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN']}  },
  { path: 'users', component: UsersComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN']} },
  { path: 'headofaccount', component: HeadOfAccountComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_AUDITOR']}  },
	{ path: 'performaView/:id', component: InvoiceComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']} },
  { path: 'invoiceNew/:id', component: InvoiceComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']} },
  { path: 'invoice-search', component: InvoiceSearchComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']}},
  { path: 'generate-invoice/:id', component: GenInvoiceComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']}},
  { path: 'company', component: CompanyComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']} },
  { path: 'voucherNew/:id', component: VoucherComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']} },
  { path: 'voucher-search', component: VoucherSearchComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']} },
  { path: 'voucher-fya', component: VoucherFyaComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','VOUCHER_ADMIN']} },
  { path: 'invoiceManu/:id',component:InvoiceManuComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']}},
  { path: 'invoiceManuSuccess/:ids',component:InvoiceManuSuccessComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']}},
  { path: 'manufacturingInvoice/:proformaId',component:ManufacturingInvoiceComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']}},
  { path: 'generate-manu-invoice/:proformaId',component:ManufacturingGenInvoiceComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']}},
  { path: 'invoiceReport',component:InvoiceReportComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN']}},
  { path: 'bulkUpload',component:BulkUploadComponent,canActivate: [AuthGuard], data: {role: ['COMPANY_ADMIN','COMPANY_USER']}}
  
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
    HasRoleDirective,
    InvoiceReportComponent,
    VendorComponent,
    HeadOfAccountComponent,
    VoucherFyaComponent,
    BulkUploadComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [ClientService, UserService, InvoiceService, CompanyService, VoucherService,GenInvoiceService,CompanyGlobalVar,AuthGuard,ExcelGeneratorService,VendorService,HeadOfAccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
