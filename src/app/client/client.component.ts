import { Component, OnInit } from '@angular/core';
import { Client } from './client.domain';
import { ClientService } from './client.service';
import { State } from '../company/company.domain';
import { CompanyService } from '../company/company.service';
import { CompanyGlobalVar } from '../globals';

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

    //state Code logic - begin
  states: State[] = [];
  selectedStateDistricts: String[] = [];
  selectedStateCode: string = "";
  selectedStateName: string = "";
  selectedState: State = new State();
  selectedCity: String = "";
  //state Code logic - end

  constructor(private clientService: ClientService,private companyService: CompanyService,public companyGlobalVar:CompanyGlobalVar) { }



  ngOnInit() {
      //state Code logic - begin
    this.getStates();
    //state Code logic - end
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
            //State Code logic - begin
        if (client) {
          this.selectedStateName = client.state;
          if (client.state) {
            this.selectedState = this.states.find(states => states.state === client.state);
            this.selectedStateDistricts = this.selectedState.districts;
            this.selectedStateCode = this.selectedState.code;
            this.selectedCity = client.city;
          }
        }
        //state Code logic - end
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
    //state Code logic - begin
    this.client.state = this.selectedStateName;
    this.client.stateCode = this.selectedStateCode;
    this.client.city = this.selectedCity;
    //state Code logic - end

    //PAN and GST Match logic and Validation
    let pan = this.client.pan;
    let gstin=this.client.gstin;

    if(pan!=null && gstin != null){
      if(gstin.substring(2,12)!=pan){
        this.error = true;
        this.errorMessage = "GSTN - PAN not matching";
        return;
      }
      if(this.client.stateCode!=gstin.substring(0,2)){
        this.error = true;
        this.errorMessage = "GSTN - State code not matching";
        return;
      }
      console.log("gstn - state and pan validation success");
    }

    this.clientService.save(this.client)
      .subscribe(
      client => {
        this.client = client
        this.getClients();
        this.success = true;
      },
      err => {
        console.log(err);
        this.error = true;
        this.errorMessage = err.error.message;
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


 /* updateAddrs($event): void {
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

  }*/

    //state Code logic
  getStates(): void {
    this.success = false;
    this.error = false;
    this.companyService.getStateCodes()
      .subscribe(
      resp => {
        this.states = resp.states;
        //console.log(this.states);
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

   //state Code logic
  loadSelectedStates(): void {
    let selectedState;
    //console.log(this.selectedStateName);
    selectedState = this.states.find(states => states.state === this.selectedStateName);
    //console.log(selectedState);
    if (selectedState) {
      this.selectedState = selectedState;
      this.selectedStateCode = selectedState.code;
      this.selectedStateDistricts = selectedState.districts;
    }

  }
}
