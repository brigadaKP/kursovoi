import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        id: "1",
        userName: "1",
        password: "1",
        email: "1",

        isAdmin: true,
        isUser: true,
        isBlock: false
      },
      {
        id: "2",
        userName: "2",
        password: "2",
        email: "2",

        isAdmin: true,
        isUser: true,
        isBlock: false
      }
    ]

    this.allCount = this.users.length;

    this.users.forEach(user => {
      if (user.isAdmin) {
        this.adminCount++;
      }
      if (user.isBlock) {
        this.blockCount++;
      }
      if (user.isUser) {
        this.userCount++;
      }
    });

  }

  checkedAdmin() {

    this.adminCount = 0;

    this.users.forEach(user => {
      if (user.isAdmin) {
        this.adminCount++;
      }
    });

    return false;
  }

  checkedUser() {

    this.userCount = 0;

    this.users.forEach(user => {
      if (user.isUser) {
        this.userCount++;
      }
    });

    return false;
  }

  isCheckedBlock(isBlock: string, index: number) {

    if (isBlock == "block") {
      this.users[index].isBlock = true;
      this.blockCount++;
    } else if (isBlock == "unblock") {
      this.users[index].isBlock = false;
      this.blockCount--;
    }
    console.log(this.users[index].isAdmin);

    return false;
  }

}


interface User {
  id: string;
  userName: string;
  password: string;
  email: string;

  isAdmin: boolean;
  isUser: boolean;
  isBlock: boolean;

}
