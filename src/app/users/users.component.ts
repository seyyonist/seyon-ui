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
  success: boolean = true;
  showRoles: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.success = false;
    this.error = false;
    this.userService.getUsers()
      .subscribe(
      users => {
        this.users = users;
        this.filterUsers = users;
        this.showRoles=true;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )

  }

  edit(user: UserInfo): void {
    this.user = user;
    this.user.password="";
    this.getuserRole(user);
  }

  getuserRole(user: UserInfo): void {
    this.userService.getUserRole(user)
      .subscribe(
      userRoles => {
        this.userRoles = userRoles;
        this.showRoles=true;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured while fetching roles contact administrator";
      }
      )
  }

  adduserRole(roleCode: string): void {
    //this.userRole = new UserRole();
    this.userRole.email = this.user.email;
    this.userRole.roleCode = roleCode;
    console.log("userRole --" + this.userRole.roleCode);
    this.userService.addUserRole(this.userRole)
      .subscribe(
      resp => {
        console.log("adduserRole resp" + resp);
        this.success = true;
        this.getuserRole(this.user);
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

   deleteUserRole(id: number): void {
    
    console.log("id --" + id);
    this.userService.deleteUserRole(id)
      .subscribe(
      resp => {
        console.log("deleteUserRole resp" + resp);
        this.success = true;
        this.getuserRole(this.user);
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  submit(): void {
    this.success = false;
    this.error = false;
    this.userService.save(this.user)
      .subscribe(
      user => {
        this.user = user
        this.getUsers();
        this.success = true;
      },
      err => {
        this.error = true;
        this.errorMessage = "Error occured please contact administrator";
      }
      )
  }

  new(): void {
     this.success=false;
    this.error = false;
    this.user = new UserInfo();
    this.userRole=new UserRole();
    this.userRoles =[];
    this.showRoles=false;
  }

}
