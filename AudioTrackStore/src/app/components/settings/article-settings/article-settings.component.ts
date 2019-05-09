import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../../services/user/user-service.service'
import { User } from '../../../classes/user'

@Component({
  selector: 'app-article-settings',
  templateUrl: './article-settings.component.html',
  styleUrls: ['./article-settings.component.css']
})
export class ArticleSettingsComponent implements OnInit {

  @Input() background: string;
  
  user: User;

  constructor(private userService: UserService) { 
    
  }

  ngOnInit() {

    this.userService.findUserById("1").subscribe(data => {  /////////////////////////////**********************/ */ ID
      this.user = data;
      console.log(this.user);
      });

  }

  saveChange(userName, password, email, passwordConfirm) {

    var fail: any;
    fail = false;

    var login_pattern = /[0-9A-Za-z_-]/i;
    var password_pattern = /[0-9A-Za-z]/i;

    if (userName == " ")
      fail = "Вы не ввели свой логин";
    else if (login_pattern.test(userName) == false)
      fail = "Ошибка ввода логина";
    else if (password == " ")
      fail = "Вы не ввели свой пароль";
    else if (password_pattern.test(password) == false)
      fail = "Ошибка ввода пароля";
    else if (password != passwordConfirm) {
      fail = "Пароли не совпадают";
    }

    if (fail) {
      alert(fail);
    }
    else {
      alert("OK");
      this.user.password = password;
      this.user.login = userName;
      this.user.email = email;
      console.log(this.user);

      this.userService.editUser(this.user)                  /////////////////////////////**********************/ */ ID
        .subscribe((response) => {
          console.log(response);
       }, (error) => {
         console.log(error);
       });
  
    };

    return false;
  }

  saveChangeBackfround(background){
    this.background = background;
    alert(background);
    return false;
  }
}
