export class Voucher {
    id: number;
    vendorName: string = "";
    voucherId: string = "";
    companyId: string ="";
    vendorAddressLine1: string ="";
    vendorAddressLine2: string ="";
    vendorAddressCity: string ="";
    vendorAddressState: string ="";
    vendorAddressPincode: string ="";
    vendorGst: string ="";
    vendorPanNo: string ="";
    vendorBankAcctNo: string ="";
    vendorBankName: string ="";
    vendorBankBranch: string ="";
    vendorBankBranchIfscCode: string ="";
    headOfAccount: string ="";
    particulars: string = "";
    totalAmount: number = 0;
    cgstPercent: number = 0;
    sgstPercent: number = 0;
    igstPercent: number = 0;
    netAmount: number = 0;
    tdsPercent: number = 0;
    netPayable: number = 0;
    voucherDate: Date;
    createdBy: string = "";
    createdDate: Date;
    
}


export class SearchVoucher{
    pageNumber:number=0;
    voucherId:string= "";
    vendorName:string= "";
    startDate:Date;
    endDate:Date;
}

export class SearchVoucherResult{
    content:Voucher[];
    first:boolean;
    last:boolean;
    number:number;
    numberOfElements:number;
    size:number;
    totalElements:number;
    totalPages:number;
}