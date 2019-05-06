import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../adminHome/menu/menu-item.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [MenuItem]
})

export class UsersListComponent implements OnInit {

  item: string;
     
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => { 
      
      this.item = params.value; 
    });

    console.log(this.item);

  }

}