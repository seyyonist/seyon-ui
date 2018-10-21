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
} 