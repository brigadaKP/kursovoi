import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Genre } from '../../classes/genre';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private genresUrl: string;

  constructor(private http: HttpClient) {
     this.genresUrl = 'http://localhost:8080/genres-list';
  }

  getAllGenres(): Observable<any> {
   return this.http.get(this.genresUrl);
 }

 public addGenre(genre:Genre) {
   return this.http.post<Genre>(this.genresUrl, genre);
 }

 public findTracksAndAlbumsByGenre(find:String): Observable<any> {
   return this.http.post<Genre>(this.genresUrl, find);
 }

}