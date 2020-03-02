import { Component, OnInit } from '@angular/core';
import {BankStatementService} from './bank-stmt.service';
import { Stmt } from './bank-stmt.domain'; 
import { HeadOfAccount } from '../head-of-account/head-of-account.domain'; 
import { HeadOfAccountService } from '../head-of-account/head-of-account.service';

@Component({
  selector: 'app-bank-stmt',
  templateUrl: './bank-stmt.component.html',
  styleUrls: ['./bank-stmt.component.css']
})
export class BankStmtComponent implements OnInit {

  selectedFiles: FileList;
  fileToUpload: File;
  stmts: Stmt[] = [];
  isTabVisible:boolean=false;
  headofAccts: HeadOfAccount[] = [];
  error: boolean = false;
  errorMessage: string = "";

  constructor(private bankStatementService: BankStatementService, private headOfAccountService:HeadOfAccountService  ) { }

  ngOnInit() {
    this.headOfAccountService.getHeadofAccountForCompany()
      .subscribe(
      headOfAccounts => {
        this.headofAccts = headOfAccounts;
        
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }
  

  fileChange(event){
    this.selectedFiles=event.target.files;
    this.fileToUpload=this.selectedFiles.item(0);
    const reader: FileReader = new FileReader();
    reader.readAsText(this.fileToUpload);
    let self = this;
    reader.onloadend = function(e) {
      console.log("fileReader.onload");
        var rows = reader.result.split("\r\n");
         for (var i = 0; i < rows.length; i++) {
              var cells = rows[i].split(",");
              console.log("reading rows");
              if (cells.length > 1) {
                  var stmt = new Stmt();
                  console.log("reading sno",cells[0]);
                  stmt.sno = cells[0];
                  stmt.valueDate = cells[1];
                  stmt.transactionDate = cells[2];
                  stmt.chequeNo = cells[3];
                  stmt.txnRemarks = cells[4];
                  stmt.debitAmt = cells[5];
                  stmt.creditAmt = cells[6];
                  stmt.balance = cells[7];
                  self.stmts.push(stmt);
                    
              }
              console.log("self.stmts--",self.stmts);    
        }

        self.isTabVisible=true;
       
        
    }

    console.log("this.stmts--",this.stmts);    

  }

  generateXml(){
    console.log("generate xml");
  }

}
