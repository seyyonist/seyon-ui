import { Component, OnInit } from '@angular/core';
import { Client } from './client.domain';

import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[] = [];
  filterClients: Client[] = [];
  error: boolean = false;
  errorMessage: string = "";
  client: Client = new Client();
  success:boolean=true;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.success=false;
    this.error = false;
    this.clientService.getForCompany()
      .subscribe(
      clients => {
        this.clients = clients;
        this.filterClients=clients;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  edit(client: Client): void {
    this.client = client;
  }
  new(): void {
     this.success=false;
    this.error = false;
    this.client = new Client();
  }
  submit(): void {
    this.success=false;
    this.error = false;
    this.clientService.save(this.client)
      .subscribe(
      client => {
        this.client = client
        this.getClients();
        this.success=true;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  changeListener($event): void {
    //this.readThis($event.target);
  }

  /*readThis(inputValue: any): void {
    if (inputValue.files.length === 0) {
      return;
    }
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.client.logoImg = myReader.result;
    }
    myReader.readAsDataURL(file);
  }*/
  onSearchChange(searchValue : string ):void {  
    this.filterClients=this.clients.filter(cl=>cl.name.toLowerCase().includes(searchValue.toLowerCase()));
  }
}
