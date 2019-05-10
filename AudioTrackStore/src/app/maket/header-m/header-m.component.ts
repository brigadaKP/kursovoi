import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/user/auth.service';

@Component({
  selector: 'app-header-m',
  templateUrl: './header-m.component.html',
  styleUrls: ['./header-m.component.css']
})
export class HeaderMComponent implements OnInit {

  constructor(private userService:AuthService) { }

  ngOnInit() {
  }

  logOut(){
    this.userService.logOut();
  }

}
