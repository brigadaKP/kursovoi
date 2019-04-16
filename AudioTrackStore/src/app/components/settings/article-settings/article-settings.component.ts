import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-settings',
  templateUrl: './article-settings.component.html',
  styleUrls: ['./article-settings.component.css']
})
export class ArticleSettingsComponent implements OnInit {

  @Input() background: string;
  
  userName: string;
  password: string;
  email: string;

  constructor() { }

  ngOnInit() {

    this.userName = "userName";
    this.password = "qwerty";
    this.email = "a@mail.ru";
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
      this.password = password;
      this.userName = userName;
      this.email = email;
    };

    return false;
  }

  saveChangeBackfround(background){
    this.background = background;
    alert(background);
    return false;
  }
}
