import { Component, OnInit } from '@angular/core';

import { TrackService } from '../../services/track/track-service.service';
import { AlbumService } from '../../services/album/album.service';
import { Track } from '../../classes/track';
import { User } from '../../classes/user';
import { Playlist } from '../../classes/playlist';
import { UserTracks } from '../../classes/user';

import { UserService } from '../../services/user/user-service.service';



@Component({
  selector: 'app-arcticle-profile',
  templateUrl: './arcticle-profile.component.html',
  styleUrls: ['./arcticle-profile.component.css']
})
export class ArcticleProfileComponent implements OnInit {

  userName:string;
  statistics:Statistics[];
  tracks:Track[];
  playlists:Playlist[];

  userTrack:UserTracks = new UserTracks();

  user:User = new User();

  constructor(private userService: UserService, private albumService: AlbumService) {

    this.user.id = "10";

   }

  ngOnInit() {

    this.userService.getAllTracks(this.user.id).subscribe(data => {
      this.userTrack = data;
    
      console.log(this.userTrack);
      console.log(this.tracks);

      this.userTrack.tracks.forEach(element => {
        this.tracks.push(element);
      });
    });


    this.albumService.getAllAlbums().subscribe(data => {
      this.tracks = data;
    
      console.log(this.playlists);

      this.playlists = [
        {
          id_album: "1",
          name: "Help",
          yera: "1965",
          number_of_tracks: 3,
          time: 9.6,               
          price: '11',
          link_on_cover: "Help!",
          
          tracks:null
        }
      ]

    }); 

    let sum = 0;
    this.userTrack.tracks.forEach(track => {
      console.log(this.userTrack);
      sum += Number(track.price);
      sum = 11.3;
    });
    this.tracks.forEach(playlist => {
      sum += Number(playlist.price);
      sum = 0;
    });

    this.userName = 'userName';
    this.statistics = [
      { indicator: "Количество треков: " + 3 },
      { indicator: "Количество плейлестов: " + 0 },
      { indicator: "Общая сумма: " + 11.3 + " $" }
    ]

  }
  
}


interface Statistics {
  indicator:any
}
