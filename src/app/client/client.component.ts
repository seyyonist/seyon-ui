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
        this.clients = clients
      },
      err => {
        console.log(err);
        this.error = true;
        this.errorMessage = err.error.message;
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
        console.log(err);
        this.error = true;
        this.errorMessage = err.error.message;
      }
      )
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    if (inputValue.files.length === 0) {
      return;
    }
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.client.logoImg = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
