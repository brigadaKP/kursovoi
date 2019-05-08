 import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { User } from '../../classes/user';
 import { Observable } from 'rxjs/Observable';

@Injectable({providedIn: 'root'})
export class UserService {
 
   private usersUrl: string;

   constructor(private http: HttpClient) {
      this.usersUrl = 'http://localhost:8080/users-list';
   }
 
   getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/users-list');
  }

  editUser(user:User): Observable<User>{
    return this.http.post<User>(this.usersUrl, user);
  }

  public createUser(user:User) {
    return this.http.post<User>(this.usersUrl, user);
  }

 }