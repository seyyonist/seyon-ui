import { Component, OnInit } from '@angular/core';
import {Client} from './client.domain';

import {ClientService} from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients:Client[]=[];
  error:boolean=false;
  errorMessage:string="";
  client:Client=new Client();
  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients():void{
    this.clientService.getForCompany()
    .subscribe(
      clients=>{
        this.clients=clients
      },
      err=>{
       console.log(err);
       this.error=true;
       this.errorMessage=err;
      }
    )
  }

  edit(client:Client):void{
    this.client=client;
  }
  new():void{
    this.client=new Client();
  }
  submit():void{
    alert("Submitted");
  }
}
