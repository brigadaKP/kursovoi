import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/user/auth.service';
import { User } from '../../../classes/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userName:String;
  password:String;
  passwordConfirm:String; 
  email:String;

  user:User = new User();

  constructor(private userService:AuthService) { }
  

  ngOnInit() {

  }

  signUp(userName,email,password,passwordConfirm) {
    var fail:any = false;
        
    var mail_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    var login_pattern = /[0-9A-Za-z_-]/i;
    var password_pattern = /[0-9A-Za-z]/i;
        
    if( userName== " ")
      fail = "Вы не ввели свой логина";
    else if(login_pattern.test(userName) == false)
      fail = "Ошибка ввода логина";
    else if( password == " ")
      fail = "Вы не ввели свой пароль";
    else if(password_pattern.test(password) == false)
      fail = "Ошибка ввода пароля";
    else if( passwordConfirm !=  password)
      fail = "Пароли не совпадают";
    else if(mail_pattern.test(email) == false)
      fail = "Вы ввели email неправильно";
      
    if(fail){
      alert(fail);
      return false;
    }
    else {
  		this.user.login = userName;
  		this.user.email = email;
      this.user.password = password;

      alert("Регистрация прошла успешна");
      
      this.userService.signUp(this.user);
      };
    }

}
