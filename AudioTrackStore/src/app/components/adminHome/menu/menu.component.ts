import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuItem } from './menu-item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'], 
  providers: [MenuItem]
})
export class MenuComponent implements OnInit {

 
  constructor(private _router:Router, public menuItem: MenuItem) {  }

  ngOnInit() {
  }

  music(value){
    this.menuItem.setMenuItem(value);
    console.log(this.menuItem.getMenuItem());

  }

  users(){
    this.menuItem.setMenuItem("users");
    console.log(this.menuItem.getMenuItem());
    this._router.navigate(['users-list']);
  }

}
