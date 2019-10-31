import { Component, OnInit } from '@angular/core';
import { Client } from '../client/client.domain';
import { ClientService } from '../client/client.service';
import { Invoice, Particulars } from '../invoice/invoice.domain';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.css']
})
export class BulkUploadComponent implements OnInit {

  clients: Client[] = [];
  selectedClient: Client = new Client();
  selClientId: number;

  error: boolean = false;
  errorMessage: string = "";
  success: boolean = true;
  csvText:string=""
  invoices:Invoice[]=[]
  invoice: Invoice = new Invoice();
  particulars: Array<Particulars> = [];

  constructor( private clientService: ClientService ) { }

  ngOnInit() {
    this.getClients()
  }

  getClients(): void {
    this.success = false;
    this.error = false;
    this.clientService.getForCompany()
      .subscribe(
      clients => {
        this.clients = clients;
        this.loadSelectedClient();
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  loadSelectedClient(): void {
    this.selectedClient = this.clients.find(cli => cli.id === this.selClientId);
    if (this.selectedClient != null) {
      console.debug('selectedClient.state' + this.selectedClient.state);
    } else {
      this.selectedClient = new Client();
    }
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    var fileContents: string = "";
    let self = this;
    myReader.readAsText(file);
    myReader.onloadend = function (e) {
      self.csvText = myReader.result;
      console.log(self.csvText);
    }
  }

  onFileChange($event): void {
    this.readThis($event.target);
  }

  loadData() {
    let csvText=this.csvText
    var lines = csvText.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    console.log(headers);
    for (var i = 1; i < lines.length-1; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
 }
}
