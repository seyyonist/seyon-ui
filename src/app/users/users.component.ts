import { Component, OnInit } from '@angular/core';
import { UserInfo } from './users.domain';
import { UserRole } from './users.domain';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserInfo[] = [];
  userRoles: UserRole[] = [];
  filterUsers: UserInfo[] = [];
  error: boolean = false;
  errorMessage: string = "";
  user: UserInfo = new UserInfo();
  userRole: UserRole = new UserRole();
  success:boolean=true;

  constructor(private userService: UserService) { }

  ngOnInit() {
     this.getUsers();
  }

   getUsers(): void {
    this.success=false;
    this.error = false;
    this.userService.getUsers()
      .subscribe(
      users => {
        this.users = users;
        this.filterUsers=users;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
      
  }

  edit(user: UserInfo): void {
    this.user = user;
    this.userService.getUserRole(user)
     .subscribe(
      userRoles => {
        this.userRoles = userRoles;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured while fetching roles contact administrator";
      }
     )
  }

}
