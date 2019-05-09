 import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { User } from '../../classes/user';
 import { Observable } from 'rxjs/Observable';

@Injectable({providedIn: 'root'})
export class UserService {
 
   private usersUrl: string;
   private usersUrl2: string;

   constructor(private http: HttpClient) {
      this.usersUrl = 'http://localhost:8080/users-list';
      this.usersUrl2 = 'http://localhost:8080/users-settings';
   }
 
   getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/users-list');
  }

  editUser(user:User): Observable<User>{
    return this.http.post<User>(this.usersUrl, user);
  }

  public createUser(user:User) {
    return this.http.post<User>(this.usersUrl2, user);
  }

  findUserById(id:String): Observable<User> {
    console.log("findUserById");
    return this.http.post<User>("http://localhost:8080/users-settings", id);
  }

 }