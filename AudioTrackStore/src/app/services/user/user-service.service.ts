 import { Injectable } from '@angular/core';
 import { AuthToken, User, UserLogin, UserTracks} from "../../classes/user";
 import {HttpClient} from "@angular/common/http";
 import {NavigationExtras, Router} from "@angular/router";
 import { Observable } from 'rxjs/Observable';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class UserService {
 
  constructor(private http: HttpClient) { }

 getAllTracks(id): Observable<any> {
  return this.http.post<UserTracks>("http://localhost:8080/user/"+id, id);
}

editTrack(id): Observable<User> {
  return this.http.post<User>("http://localhost:8080/user/tracks-list", id);
}

public buyTrack(id_track, id_user) {
  return this.http.post<User>("http://localhost:8080/user/buyTrack", id_track, id_track);
}

public buyAlbum(id_album, id_user) {
  return this.http.post<User>("http://localhost:8080/user/"+id_user+"/byAlbum", id_album);
}

}