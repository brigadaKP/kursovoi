import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  userName: string;
  password: string;

  constructor() { }

  ngOnInit() {

    this.userName = "userName";
    this.password = "qwerty";
    
  }

  logIn(userName, password) {

    var fail: any;
    fail = false;

    var login_pattern = /[0-9A-Za-z_-]/i;
    var password_pattern = /[0-9A-Za-z]/i;
    var mail_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

    if (userName == " ")
      fail = "Вы не ввели свой логин";
    else if (login_pattern.test(userName) == false && mail_pattern.test(userName) == false)
      fail = "Ошибка ввода логина";
    else if (password == " ")
      fail = "Вы не ввели свой пароль";
    else if (password_pattern.test(password) == false)
      fail = "Ошибка ввода пароля";

    if (fail) {
      alert(fail);
      return false;
    }
    else {
      alert("OK");
      window.open("/","_self");
      return false;
    };
  }

}
