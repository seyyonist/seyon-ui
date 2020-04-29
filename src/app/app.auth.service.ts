import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class OAuthService {
    constructor(private _http: HttpClient){}

    private JWT:string="";

    public setJwt(jwt:string){
        this.JWT=jwt
    }

    public getJwt():string{
        return this.JWT;
    }

    public isAuthenticated():boolean{
        let jwt=this.JWT;
        if(jwt===""){
            return false;
        }
        return true;
    }
}