import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url:string="https://accounts.google.com/o/oauth2/v2/auth"
  clientId:string="165388735281-2tg16ked6s5nblgjehbntb2a40rup4qf.apps.googleusercontent.com"
  redirectUrl:string= "http://"+window.location.host+"/processLogin"
  scope:string="profile email"
  navTo:string="";

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.navTo = params['navTo'];
    });
   }

  ngOnInit(): void {
    //check we have JWT cookie in if yess then auth is already done redirect to dashboard.
    this.oauthSignIn()
  }

  randomStr(len:number=20, arr:string[]=['1','2','3','4','5','6','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p']) { 
    var ans = ''; 
    for (var i = len; i > 0; i--) { 
        ans +=  
          arr[Math.floor(Math.random() * arr.length)]; 
    } 
    return ans; 
  } 

  oauthSignIn() {
    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', this.url);
  
    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': this.clientId,
                  'redirect_uri': this.redirectUrl,
                  'response_type': 'code',
                  'scope': this.scope,
                  'state': this.randomStr(20)+"navTo["+this.navTo+"]"};
  
    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
  
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }
}
