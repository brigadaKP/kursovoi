import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import { GenreService } from '../../../services/genre/genre.service';
import { TrackService } from '../../../services/track/track-service.service';
import { Genre } from '../../../classes/genre';

@Component({
  selector: 'app-nav-find',
  templateUrl: './nav-find.component.html',
  styleUrls: ['./nav-find.component.css']
})
export class NavFindComponent implements OnInit {

  genres:Genre[];

  genreFind:String;
  Sort:String;

  @Output() dataChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _router:Router, private genreService: GenreService, private trackService: TrackService) {  }

  ngOnInit() {

    this.genreService.getAllGenres().subscribe(data => {
      this.genres = data;
      this.genres.sort(function (a, b) {
        if (a.id_genre > b.id_genre) {
          return 1;
        }
        if (a.id_genre < b.id_genre) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      console.log("Genres: " + this.genres);
    });


    this.genreFind = "All";
    this.Sort = "increase";
  }

  submit(form: NgForm){
    console.log(form);

    let id_genre:String;

    this.genres.forEach(element => {
      if(element.name == this.genreFind){
        id_genre = element.id_genre;
      } else if(this.genreFind == "All"){
        id_genre = "0";
      }
    });
    
    let message:String[] = [
      id_genre,
      this.Sort
    ] ;
    
    console.log(message);
    
    this.dataChanged.emit(message)
  }  

}