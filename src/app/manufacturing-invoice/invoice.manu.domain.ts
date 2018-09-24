export class Particulars {
    id: number;
    invoiceTableId: number;
    index: string = "";
    itemDescription: string = "";
    quantity: number = 1;
    performaRate: number = 0;
    invoiceRate: number = 0;
    calculatedPerformaAmount: number;
    calculatedInvoiceAmount: number;
    companyId: number;
    createdBy: string="";
    createdDate: Date;
    
}

export class Invoice {
    id: number;
    companyId: number;
    clientId: number;
    invoiceId: string = "";
    performaId: string = "";
    sacCode: string = "";
    invoiceType: string = ""; // Right now it is hardcoded; need to change it when manufacturing invoice logic is added
    category:string="";
    performaDate: Date;
    invoiceDate: Date;
    cgstPerfomaPercent: number = 0;
    sgstPerfomaPercent: number = 0;
    igstPerfomaPercent: number = 0;
    cgstInvoicePercent: number = 0;
    sgstInvoicePercent: number = 0;
    igstInvoicePercent: number = 0;
    totalPerfomaAmount: number = 0;
    totalInvoiceAmount: number = 0;
    totalPerfomaBeforeTax: number = 0;
    totalInvoiceBeforeTax: number = 0;
    cgstPerfoma: number = 0;
    sgstPerfoma: number = 0;
    igstPerfoma: number = 0;
    cgstInvoice: number = 0;
    sgstInvoice: number = 0;
    igstInvoice: number = 0;
    createdBy: string = "";
    createdDate: Date;
    clientName: String = "";
    type:string="";
    status:string="NEW";
    url:string="/api/invoice/IhtmlReport?performaId=";
    purl:string="/api/invoice/PhtmlReport?performaId=";
}


export class ManufacturingInvoice{

	id:number;
    invoiceId:string="";
	proFormaId:string="";
	companyId:number;
	clientId:number;
    sacCode:string="";
    sacCodeId:number;
	invoiceType:string="";
	invoiceDate:Date=new Date();
	performaDate:Date = new Date();
	cgstPerfomaPercent:number;
	sgstPerfomaPercent:number;
	igstPerfomaPercent:number;
	cgstInvoicePercent:number;
	sgstInvoicePercent:number;
	igstInvoicePercent:number;
    totalPerfomaBeforeTax:number;
	totalInvoiceBeforeTax:number;
	totalPerfomaAmount:number;
	totalInvoiceAmount:number;
	cgstPerfoma:number;
	sgstPerfoma:number;
	igstPerfoma:number;
	cgstInvoice:number;
	sgstInvoice:number;
	igstInvoice:number;
	index:string="";
	itemDescription:string="";
	quantity:number=1;
	performaRate:number=0;
	invoiceRate:number=0;
	calculatedInvoiceAmount:number;
	calculatedPerformaAmount:number;
	status:string = 'NEW';
	createdBy:string="";
	createdDate:Date = new Date();
    type:string = "PERFORMA";// or INVOICE
    url:string="/api/manuFacturingInvoice/IhtmlReport?performaId=";
    purl:string="/api/manuFacturingInvoice/PhtmlReport?performaId=";
}

export class InvoiceData {
    invoice: Invoice = new Invoice();
    particulars: Particulars[] = [];
}

export class SearchInvoice {
    category: string="";
    pageNumber: number = 0;
    id: number;
    clientId: number;
    invoiceStDate: Date;
    invoiceEdDate: Date;
    status: string='NEW';
    type:string="";
    invoiceId:string="";
    performaId:string="";
    proFormaId:string="";
}

export class SearchResult {
    content: Invoice[];
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
}

export class SACCode{
	id:number;
	sacCode:string="";
	cgstPercent:number;
	sgstPercent:number;
	igstPercent:number;
	startDate:Date;
	endDate:Date;
}