import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../adminHome/menu/menu-item.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'], 
  providers: [MenuItem]
})
export class UsersListComponent implements OnInit {

  item:string;

  constructor(public menuItem: MenuItem) { }

  ngOnInit() {
    console.log("qwe " + this.menuItem.getMenuItem());
    this.item = "usrs";
  }


}
