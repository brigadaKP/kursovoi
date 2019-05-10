import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Playlist } from '../../classes/playlist';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albumsUrl: string;
  private albumsUrl2: string;

  constructor(private http: HttpClient) {
    this.albumsUrl = 'http://localhost:8080/albums/albums-list';
    this.albumsUrl2 = 'http://localhost:8080/albums-list/id';
 }

 getAllAlbums(): Observable<any> {
  return this.http.get(this.albumsUrl);
}

editAlbums(playlist:Playlist): Observable<Playlist> {
  return this.http.post<Playlist>(this.albumsUrl, playlist);
}

public addAlbums(playlist:Playlist) {
  return this.http.post<Playlist>(this.albumsUrl, playlist);
}

public deleteAlbums(playlist:Playlist) {
  return this.http.post<Playlist>(this.albumsUrl, playlist);
}

public findAlbums(find:String): Observable<any> {
  return this.http.post<Playlist>("http://localhost:8080/albums/albums-find", find);
}

public findAlbumById(id:String) {
  return this.http.post<Playlist>("http://localhost:8080/albums/albums-list/"+id, id);
}

}
