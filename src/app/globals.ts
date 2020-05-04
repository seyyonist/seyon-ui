import { Injectable } from '@angular/core';

@Injectable()
export class CompanyGlobalVar {

    companyName: string = "";
    ownerName: string = "";
    state: string = "";
    pinCode: string = "";
    phonePrimary: string = "";
    tanNo: string = "";
    gstNo: string = "";
    panNo: string = "";
    primaryEmail: string = "";
    userRoles:string[];
    
    selectedCompany:string="";

} 

export class OauthUserJwt{
     jwt:string="";
	 picture:string="";
     name:string="";
     email:string="";
}