import { OauthUserJwt } from '../globals';

export class Company {
    companyId:number;
    companyName: string = "";
    ownerName: string = "";
    addressLine1: string = "";
    addressLine2: string = "";
    city: String = "";
    state: string = "";
    stateCode: string = "";
    pinCode: string = "";
    phonePrimary: string = "";
    phoneSecondary: string = "";
    faxNo: string = "";
    tanNo: string = "";
    gstNo: string = "";
    panNo: string = "";
    serviceTaxRegNo: string = "";
    accountingType: string = "";
    logoImg: string = "";
    signatureImg: string = "";
    primaryEmail: string = "";
    secondaryEmail: string = "";
    bankName: string = "";
    branch: string = "";
    branchIFSCCode: string = "";
    accountNo: string = "";
    accountName: string = "";
    accountType: string = "";
    swiftCode: string = "";
    termsAndCondns: string = "";
    status:string="";
}

export class States {
    state: State[] = [];
    
}

//state Code logic - begin
export class State {
    state: string = "";
    code: string = "";
    districts: String[] = [];
    selectedDistrict: string = "";
}
//state Code logic - end

export class CompanyRole{
    companyId:string=""
    companyName:string=""
    roleCode:string[]=[]
    active:boolean=false;
}

export class CompanyModel{
    userInfo:OauthUserJwt=new OauthUserJwt()
    company:Company=new Company()
}

export class SeyonResponse{
    code:number=0
    message:string=""
}