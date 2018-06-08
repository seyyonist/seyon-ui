export class Voucher {
    id: number;
    vendorName: string = "";
    voucherId: string = "";
    particulars: string = "";
    totalAmount: string = "";
    createdBy: string = "";
    createdDate: Date;
    voucherDate: Date;
    
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