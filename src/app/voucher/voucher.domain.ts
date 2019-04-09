export class Voucher {
    id: number;
    vendorName: string = "";
    voucherId: string = "";
    invoiceId: string = "";
    invoiceDate: Date;
    companyId: string = "";
    vendorId: string = "";
    headOfAccount: string = "";
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
    voucherDate: Date;
    createdBy: string = "";
    createdDate: Date;

}

export class Vendor {
    id: Number;
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