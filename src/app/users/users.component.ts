import { Component, OnInit } from '@angular/core';
import { User } from './users.domain';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  error: boolean = false;
  errorMessage: string = "";
  user: User = new User();
  success:boolean=true;

  constructor() { }

  ngOnInit() {
  }

}
