import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Track } from '../../classes/track';
import { Observable } from 'rxjs/Observable';
import { Genre } from '../../classes/genre';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private tracksUrl: string;
  private tracksUrl2: string;

   constructor(private http: HttpClient) {
      this.tracksUrl = 'http://localhost:8080/tracks/tracks-list';
      this.tracksUrl2 = 'http://localhost:8080/tracks-list/find';
   }
 
   getAllTracks(): Observable<any> {
    return this.http.get(this.tracksUrl);
  }

  editTrack(track:Track): Observable<Track> {
    return this.http.post<Track>(this.tracksUrl, track);
  }

  public addTrack(track:Track) {
    return this.http.post<Track>(this.tracksUrl, track);
  }

  public deleteTrack(track:Track) {
    return this.http.post<Track>(this.tracksUrl, track);
  }

  public findTrack(find:String): Observable<any> {
    return this.http.post<Track>("http://localhost:8080/tracks/tracks-find", find);
  }

  public findTracksAndAlbumsByGenre(id_genre:String): Observable<any> {
    return this.http.post<Track>("http://localhost:8080/tracks/tracks-findByGenre", id_genre);
  }

 }