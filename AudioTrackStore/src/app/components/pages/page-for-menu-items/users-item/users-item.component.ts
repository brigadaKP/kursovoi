import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../../services/user/user-service.service'
import { User } from '../../../../classes/user'

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.css']
})
export class UsersItemComponent implements OnInit {

  users: User[];

  allCount: number = 0;
  adminCount: number = 0;
  blockCount: number = 0;
  userCount: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
      this.users.forEach(user => {
        user.admin = true;
        user.user = true;
      });
      console.log(this.users);
      this.allCount = this.users.length;

      this.users.forEach(user => {
        if (user.admin) {
          this.adminCount++;
        }
        if (user.active) {
          this.blockCount++;
        }
        if (user.user) {
          this.userCount++;
        }
      });
    });

  }

  checkedAdmin() {

    this.adminCount = 0;

    this.users.forEach(user => {
      if (user.admin) {
        this.adminCount++;
      }
    });

    return false;
  }

  checkedUser() {

    this.userCount = 0;

    this.users.forEach(user => {
      if (user.user) {
        this.userCount++;
      }
    });

    return false;
  }

  isCheckedBlock(isBlock: string, index: number) {

    if (isBlock == "unblock") {
      this.users[index].active = true;
      this.blockCount++;

      this.userService.editUser(this.users[index])
      .subscribe((response) => {
         console.log(response);
      }, (error) => {
        console.log(error);
      });

    } else if (isBlock == "block") {
      this.users[index].active = false;
      this.blockCount--;

      this.userService.editUser(this.users[index])
      .subscribe((response) => {
         console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
    console.log(this.users[index].admin);

    return false;
  }

  editUsers() {
    console.log(this.users);
    this.users.forEach(user => {
      this.userService.editUser(user)
         .subscribe((response) => {
            console.log(response);
            alert("OK");
         }, (error) => {
           console.log(error);
         });
    });
    alert("OK");
  }

}