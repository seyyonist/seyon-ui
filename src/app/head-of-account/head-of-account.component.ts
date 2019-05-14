import { Component, OnInit } from '@angular/core';
import { HeadOfAccountService } from './head-of-account.service';
import { HeadOfAccount } from './head-of-account.domain';

@Component({
  selector: 'app-head-of-account',
  templateUrl: './head-of-account.component.html',
  styleUrls: ['./head-of-account.component.css']
})
export class HeadOfAccountComponent implements OnInit {
  success: boolean = true;
  error: boolean = false;
  errorMessage: string = "";
  headOfAccounts: HeadOfAccount[] = [];
  filterheadOfAccounts: HeadOfAccount[] = [];
  headOfAccount: HeadOfAccount = new HeadOfAccount();
  tempHeadOfAccount: HeadOfAccount = new HeadOfAccount();

  constructor(private headOfAccountService: HeadOfAccountService) { }

  ngOnInit() {
    this.getHeadOfAccounts()
  }

  getHeadOfAccounts(): void {
    this.success = false;
    this.error = false;
    this.headOfAccountService.getHeadofAccountForCompany()
      .subscribe(
      headOfAccounts => {
        this.headOfAccounts = headOfAccounts;
        this.filterheadOfAccounts = headOfAccounts;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  edit(headOfAccount: HeadOfAccount): void {
    this.headOfAccount = headOfAccount;
    this.tempHeadOfAccount = headOfAccount;
  }

  new(): void {
    this.success = false;
    this.error = false;
    this.headOfAccount = new HeadOfAccount();
    this.tempHeadOfAccount = new HeadOfAccount();
  }

  submit(): void {
    this.success = false;
    this.error = false;
    this.headOfAccountService.save(this.headOfAccount)
      .subscribe(
      headOfAccount => {
        this.headOfAccount = headOfAccount;
        this.getHeadOfAccounts();
        this.success = true;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  onSearchChange(searchValue: string): void {
    this.filterheadOfAccounts = this.headOfAccounts.filter(hoA => hoA.headOfAccountName.toLowerCase().includes(searchValue.toLowerCase()));
  }

}
