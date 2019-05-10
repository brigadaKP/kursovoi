import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user/user-service.service';
import { AuthService } from '../../../services/user/auth.service';
import { User } from 'src/app/classes/user';

class LoginUser{
  userName: string;
  password: string;
}

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  loginUser:LoginUser = new LoginUser();
  user:User = new User();

  constructor(private userService:AuthService) { }

  ngOnInit() {

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
      
      console.log(userName);
      console.log(this.user.password);

      //alert("Неверный логин или пароль");

      this.userService.signIn(this.user)

      // .subscribe((response) => {
      //   console.log(response);
      //   alert("OK");
      // }, (error) => {
      //   console.log(error);
      //   }
      // );
      ;
    }
  }
}
