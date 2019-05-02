import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../adminHome/menu/menu-item.service'

@Component({
  selector: 'app-page-for-menu-items',
  templateUrl: './page-for-menu-items.component.html',
  styleUrls: ['./page-for-menu-items.component.css'], 
  providers: [MenuItem]
})
export class PageForMenuItemsComponent implements OnInit {

  @Input() item:string;

  constructor(public menuItem: MenuItem) { }

  ngOnInit() {
    console.log("q " + this.menuItem.getMenuItem() + " " + this.item);
  }

}
