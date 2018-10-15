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
  tempClient: Client = new Client();
  success: boolean = true;

  constructor(private clientService: ClientService) { }



  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.success = false;
    this.error = false;
    this.clientService.getForCompany()
      .subscribe(
      clients => {
        this.clients = clients;
        this.filterClients = clients;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  edit(client: Client): void {
    this.client = client;
    this.tempClient=client;
  }
  new(): void {
    this.success = false;
    this.error = false;
    this.client = new Client();
    this.tempClient=new Client();
  }
  submit(): void {
    this.success = false;
    this.error = false;
    this.clientService.save(this.client)
      .subscribe(
      client => {
        this.client = client
        this.getClients();
        this.success = true;
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
  onSearchChange(searchValue: string): void {
    this.filterClients = this.clients.filter(cl => cl.name.toLowerCase().includes(searchValue.toLowerCase()));
  }


  updateAddrs($event): void {
    console.debug("inside shippingIsSameAsBilling");

    if ($event.target.checked) {
      this.client.shipToAddrLine1 = this.client.addrLine1;
      this.client.shipToAddrLine2 = this.client.addrLine2;
      this.client.shipToAddrCity = this.client.city;
      this.client.shipToAddrState = this.client.state;
      this.client.shipToAddrPincode = this.client.pincode;
    }
    else {
      this.client.shipToAddrLine1 =  this.tempClient.shipToAddrLine1;
      this.client.shipToAddrLine2 =  this.tempClient.shipToAddrLine2;
      this.client.shipToAddrCity = this.tempClient.shipToAddrCity;
      this.client.shipToAddrState = this.tempClient.shipToAddrState;
      this.client.shipToAddrPincode = this.tempClient.shipToAddrPincode;
    }

  }
}
