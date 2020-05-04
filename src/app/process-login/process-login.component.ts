import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Urls } from '../app.constants';
import { OAuthService } from '../app.auth.service';
import { CompanyService } from '../company/company.service';
import { CompanyGlobalVar, OauthUserJwt } from '../globals';


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
      user => {
        console.log("setting jwt")  
        this.oauthService.setOauthUser(user);
        let navTo=this.state.substring(
          this.state.lastIndexOf("[") + 1, 
          this.state.lastIndexOf("]")
        );
        this.router.navigate(['']);
      },
      err => console.log(err)
    )

   
  }

  process(code: string): Promise<OauthUserJwt> {
    return new Promise<OauthUserJwt>((resolve, reject) => {
      var url = Urls.getDomain().concat("/jwt");
      let options = { };
      this.http.post<OauthUserJwt>(url, code, 
        { headers: httpOptions.headers})
        .subscribe(resp => {
          resolve(resp)
        }, err => {
          reject(err)
        });
    });
  }
}
