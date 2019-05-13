import { Component, OnInit } from '@angular/core';
import { HeadOfAccountService } from './head-of-account.service';

@Component({
  selector: 'app-head-of-account',
  templateUrl: './head-of-account.component.html',
  styleUrls: ['./head-of-account.component.css']
})
export class HeadOfAccountComponent implements OnInit {
  success: boolean = true;
  error: boolean = false;
  errorMessage: string = "";
  
  constructor(private headOfAccountService: HeadOfAccountService) { }

  ngOnInit() {
  }

}
