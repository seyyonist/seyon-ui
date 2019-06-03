export class Voucher {
    id: number;
    vendorName: string = "";
    voucherId: string = "";
    invoiceId: string = "";
    invoiceDate: Date;
    companyId: string = "";
    vendorId: number;
    headOfAccountId: Number;
    particulars: string = "";
    cgstAmount: number = 0;
    sgstAmount: number = 0;
    igstAmount: number = 0;
    netAmount: number = 0;
    tdsPercent: number = 0;
    tdsAmount: number = 0;
    others: number = 0;
    reimbursement: number = 0;
    totalNetAmount: number = 0;
    totalAmount: number = 0;
    deductionRemark: string = "";
    voucherDate: Date;
    createdBy: string = "";
    createdDate: Date;
    status:string="";
    voucherImg: string = "";
    availGstInputCredit: boolean;
    deductTds: boolean;

}


export class Vendor {
    id: number=0;
    name: string = "";
}


export class SearchVoucher {
    pageNumber: number = 0;
    voucherId: string = "";
    vendorName: string = "";
    startDate: Date;
    endDate: Date;
}

export class SearchVoucherResult {
    content: Voucher[];
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
}