import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-m',
  templateUrl: './nav-m.component.html',
  styleUrls: ['./nav-m.component.css']
})
export class NavMComponent implements OnInit {

  typeUser:string;

  constructor() { }

  ngOnInit() {

    this.typeUser="admin";
    // typeUser="user";

  }
}
