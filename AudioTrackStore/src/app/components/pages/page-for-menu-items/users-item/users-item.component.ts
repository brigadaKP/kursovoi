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
  //constructor() { }


  ngOnInit() {

    // this.userService.findAll().subscribe(data => {
    //   this.users = data;
    // });

    //  this.users = [
    //    {
    //      id: "1",
    //      login: "1",
    //      password: "1",
    //      email: "1",

    //      number_of_albums:0,
    //      number_of_tracks:0,
    //      time_tracks: "0",
    //      price_tracks:"0",

    //      admin: true,
    //      user: true,
    //      active: false
    //    },
    //    {
    //      id: "2",
    //      login: "2",
    //      password: "2",
    //      email: "2",

    //      number_of_albums:0,
    //      number_of_tracks:0,
    //      time_tracks: "0",
    //      price_tracks:"0",

    //      isAdmin: true,
    //      isUser: true,
    //      isActive: false
    //    }
    //  ]

    this.userService.getAllUsers().subscribe(data => {
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

    if (isBlock == "block") {
      this.users[index].active = true;
      this.blockCount++;
    } else if (isBlock == "unblock") {
      this.users[index].active = false;
      this.blockCount--;
    }
    console.log(this.users[index].admin);

    return false;
  }

  save(){
    console.log(this.users);
  }

}


// interface User {
//   id: string;
//   userName: string;
//   password: string;
//   email: string;

//   isAdmin: boolean;
//   isUser: boolean;
//   isBlock: boolean;

// }
