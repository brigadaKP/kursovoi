import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../adminHome/menu/menu-item.service';

import { UserService } from '../../../services/user/user-service.service'

@Component({
  selector: 'app-page-for-menu-items',
  templateUrl: './page-for-menu-items.component.html',
  styleUrls: ['./page-for-menu-items.component.css'], 
  providers: [MenuItem]
})
export class PageForMenuItemsComponent implements OnInit {

  @Input() item:string;

  constructor(public menuItem: MenuItem, private userService: UserService) { }

  ngOnInit() {
    console.log("q " + this.menuItem.getMenuItem() + " " + this.item);
  }

}
