import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userName:string;
  password:string;
  passwordConfirm:string; 
  email:string;

  constructor() { }

  ngOnInit() {
  }

  signUp(userName, password, passwordConfirm, email) {
    var fail:any = false;

    console.log(email);
        
    var mail_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    var login_pattern = /[0-9A-Za-z_-]/i;
    var password_pattern = /[0-9A-Za-z]/i;
        
    if(userName == " ")
      fail = "Вы не ввели свой логина";
    else if(login_pattern.test(userName) == false)
      fail = "Ошибка ввода логина";
    else if(password == " ")
      fail = "Вы не ввели свой пароль";
    else if(password_pattern.test(password) == false)
      fail = "Ошибка ввода пароля";
    else if(passwordConfirm != password)
      fail = "Пароли не совпадают";
    else if(mail_pattern.test(email) == false)
      fail = "Вы ввели email неправильно";
      
    if(fail){
      alert(fail);
      return false;
    }
    else {
  //		newUser.login = login;
  //		newUser.email = email;
  //		newUser.password = password;
      alert("OK");
      window.open("/login","_self");
      return false;
      /*localStorage.setItem(obj.surname, JSON.stringify(obj));*/
      };
    }

}
