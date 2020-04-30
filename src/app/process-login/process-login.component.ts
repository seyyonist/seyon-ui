import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Urls } from '../app.constants';
import { OAuthService } from '../app.auth.service';
import { CompanyService } from '../company/company.service';
import { CompanyGlobalVar } from '../globals';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-process-login',
  templateUrl: './process-login.component.html',
  styleUrls: ['./process-login.component.css']
})
export class ProcessLoginComponent implements OnInit {

  code: string;
  state: string;
  constructor(private route: ActivatedRoute, private http: HttpClient, 
    private oauthService: OAuthService, public router: Router,
    private companyService: CompanyService,public companyGlobalVar: CompanyGlobalVar) {
    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
      this.code = params['code'];
      this.state = params['state'];
    });
  }
  ngOnInit(): void {
    this.process(this.code).then(
      jwt => {
        console.log("setting jwt")  
        this.oauthService.setJwt(jwt);
        let navTo=this.state.substring(
          this.state.lastIndexOf("[") + 1, 
          this.state.lastIndexOf("]")
      );
        this.companyService.getCompany()
        .subscribe(
        company => {
          this.companyGlobalVar.companyName=company.companyName;
          this.companyGlobalVar.ownerName=company.ownerName;
          this.companyGlobalVar.state=company.state;
          this.companyGlobalVar.pinCode=company.pinCode;
          this.companyGlobalVar.phonePrimary=company.phonePrimary;
          this.companyGlobalVar.tanNo=company.tanNo;
          this.companyGlobalVar.gstNo=company.gstNo;
          this.companyGlobalVar.panNo=company.panNo;
          this.companyGlobalVar.primaryEmail=company.primaryEmail;
          this.router.navigate(['']);
        },
        err => {
          console.error("Not able to set companyGlobalVar");
        }
        )
       
      },
      err => console.log(err)
    )

   
  }

  process(code: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      var url = Urls.getDomain().concat("/jwt");
      let options = { };
      this.http.post<string>(url, code, 
        { headers: httpOptions.headers,responseType: 'text' as 'json'  })
        .subscribe(resp => {
          resolve(resp)
        }, err => {
          reject(err)
        });
    });
  }
}
