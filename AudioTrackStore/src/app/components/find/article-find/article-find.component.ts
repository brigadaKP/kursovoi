import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { TrackService } from '../../../services/track/track-service.service';
import { AlbumService } from '../../../services/album/album.service';
import { UserService } from '../../../services/user/user-service.service';
import { Track } from '../../../classes/track';
import { Playlist } from '../../../classes/playlist';

@Component({
  selector: 'app-article-find',
  templateUrl: './article-find.component.html',
  styleUrls: ['./article-find.component.css']
})
export class ArticleFindComponent implements OnInit {

  tracks: Track[];
  playlists: Playlist[];
  findGenre: String;
  sort: String;

  whoAmI(message) {
    console.log(message[0]);
    this.trackService.findTracksAndAlbumsByGenre(message[0])
      .subscribe((response) => {
         console.log(response);
         if(response) {
           if(message[1] == "increase"){
             this.tracks = response;
             this.tracks.sort(function (a, b) {
                                if (a.price > b.price) {
                                  return 1;
                                }                 
                                if (a.price < b.price) {
                                  return -1;
                                }
                                // a должно быть равным b
                                  return 0;
                                });
           } else {
            this.tracks = response.sort(function (a, b) {
                                          if (a.price < b.price) {
                                            return 1;
                                          }
                                          if (a.price > b.price) {
                                            return -1;
                                          }
                                          // a должно быть равным b
                                            return 0;
                                          });
           }
            
         } else {
           alert("По трекам ничего не найдено!");
         }
      }, (error) => {
        console.log(error);
        if(error.status == 404) {
          alert("По трекам ничего не найдено!");
        }
      });

      this.playlists.length = 0;
      for (let i = 0; i < this.tracks.length; i++) {
        for (let j = 0; j < this.tracks[i].albums.length; j++) {
          this.albumService.findAlbumById(this.tracks[i].albums[j].id)
          .subscribe((response) => {
       console.log(response);
       if(response) {
          this.playlists.push(response);
           }
    }, (error) => {
      console.log(error);
      
    });
    
        }
      }
      console.log(this.tracks.length);
      console.log(this.playlists.length);
  }

  constructor(private trackService: TrackService, private albumService: AlbumService, private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {

    this.trackService.getAllTracks().subscribe(data => {
      this.tracks = data;
    
      console.log("Tracks: " + this.tracks);
    });

    this.albumService.getAllAlbums().subscribe(data => {
      this.playlists = data;
    
      console.log("Albums: " + this.playlists[3].link_on_cover);

    }); 

  }

  find(find:String) {
    this.tracks = null;
    this.trackService.findTrack(find)
      .subscribe((response) => {
         console.log(response);
         if(response) {
            this.tracks = response;
         } else {
           alert("По трекам ничего не найдено!");
         }
      }, (error) => {
        console.log(error);
        if(error.status == 404) {
          alert("По трекам ничего не найдено!");
        }
      });

      this.playlists = null;
    this.albumService.findAlbums(find)
      .subscribe((response) => {
         console.log(response);
         if(response) {
            this.playlists = response;
         } else {
           alert("По альбомам ничего не найдено!");
         }
      }, (error) => {
        console.log(error);
        if(error.status == 404) {
          alert("По альбомам ничего не найдено!");
        }
      });
  }

  functoun(){
    this.route.queryParams.subscribe(params => { 
      
    this.findGenre = params.findGenre;
    this.sort = params.sort;
    
    console.log(this.findGenre + " " + this.sort);
  });
  }

  buyTrack(track:Track){
    console.log(track);
    this.userService.buyTrack("9", track).subscribe((response) => {
      console.log(response);
    }, (error) => { console.log(error) });
  }
  

}
