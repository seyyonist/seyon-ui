import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Urls } from '../app.constants';
import { OAuthService } from '../app.auth.service';


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
  constructor(private route: ActivatedRoute, private http: HttpClient, private oauthService: OAuthService, public router: Router) {
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
        this.router.navigate(['dashboard']);
        return false
      },
      err => console.log(err)
    )
  }

  process(code: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      var url = Urls.getDomain().concat("/jwt");
      let options = { responseType: 'text' as 'json' };
      this.http.get<string>(url, options)
        .subscribe(resp => {
          resolve(resp)
        }, err => {
          reject(err)
        });
    });
  }
}
