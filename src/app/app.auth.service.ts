import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { OauthUserJwt, CompanyGlobalVar } from './globals';

@Injectable()
export class OAuthService {
    private selectedCompany: string="";
    constructor(private _http: HttpClient,private globalVar:CompanyGlobalVar){}

    private oauthUser:OauthUserJwt=new OauthUserJwt();

    public setOauthUser(authUser:OauthUserJwt){
        console.log(authUser)
        this.oauthUser=authUser
    }

    public getJwt():string{
        console.log(this.oauthUser.jwt)
        return this.oauthUser.jwt;
    }
    
    public getLoggedInUser():OauthUserJwt{
        return this.oauthUser;
    }

    public isAuthenticated():boolean{
        let jwt=this.oauthUser;
        if(jwt.jwt===""){
            return false;
        }
        return true;
    }

    public setSelectedCompany(selectedCompany:string=""){
        this.selectedCompany=selectedCompany;
    }

    public getAuthHeaders(skipCompCheck:string='N'):HttpHeaders{
        let headers = new HttpHeaders({
            "Authorization":"bearer "+this.oauthUser.jwt,
            "selectedcompany":""+this.selectedCompany,
            "Content-Type":"application/json",
            "skipCompCheck":skipCompCheck
          });
        return headers;
    }
}