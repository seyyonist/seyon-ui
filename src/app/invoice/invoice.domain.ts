export class Particulars {
    id: number;
    invoiceId: number;
    index: string = "";
    item: string = "";
    itemTaxCategory: string = "";
    quantity: number;
    cgstPercent: number;
    sgstPercent: number;
    igstPercent: number;
    calculatedAmount: number;
    rate:number;
    companyId: number;
    createdBy: string;
    createdDate: Date;
}