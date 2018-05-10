export class Particulars {
    id: number;
    invoiceId: number;
    index: string = "";
    item: string = "";
    itemTaxCategory: string = "";
    quantity: number=1;
    cgstPercent: number=0;
    sgstPercent: number=0;
    igstPercent: number=0;
    calculatedAmount: number;
    rate:number=0;
    companyId: number;
    createdBy: string;
    createdDate: Date;
    cgst: number=0;
    sgst: number=0;
    igst: number=0;
}

export class Invoice{
     id:number;
	 companyId:number;
	 clientId:number;
	 invoiceDate:Date;
	 totalAmount:number=0;
	 createdBy:string="";
	 createdDate:Date;
}

export class InvoiceData{
    invoice:Invoice=new Invoice();
    particulars:Particulars[]=[];
}