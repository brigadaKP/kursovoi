import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent implements OnInit {
  tracks: Track[];
  playlist: Playlist;

  constructor() { }

  ngOnInit() {

    this.tracks = [
      {
        id: 'id_трека1',
        name: 'Help!',
        name_album: 'Help!',
        name_genres: 'Рок',
        year: 1965,
        time: 2.19,
        link: '../../../../assets/music/Help.mp3',
        name_authors: 'The Beatles',
        price: '3'
      },
      {
        id: 'id_трека2',
        name: 'We are the champions',
        name_album: 'News of the World',
        name_genres: 'Рок',
        year: 1977,
        time: 2.59,
        link: '../../../../assets/music/queen_-_we_are_the_champions_(zaycev.net).mp3',
        name_authors: 'Queen',
        price: '4'
      },
      {
        id: 'id_трека3',
        name: '(I Can’t Get No) Satisfaction',
        name_album: 'single',
        name_genres: 'Рок',
        year: 1965,
        time: 3.44,
        link: '../../../../assets/music/Rolling_Stones_-_Satisfaction_(iPleer.fm).mp3',
        name_authors: ' The Rolling Stones',
        price: '4'
      }
    ]

    this.playlist = {
      id_album:'id_альбома 1',
      name: 'Help!',
      year: 1965,
      number_of_tracks: 3,
      link: 'Help!',
      time: 9.6,
      price:'11'
    }
    
  }

}



interface Track {
  id: string,
  name: string,
  name_album: string,
  name_genres: string,
  year: number,
  time: number,            //Time
  link: string,            //ссылка
  name_authors: string,
  price: string
}

interface Playlist {
  id_album: string,
  name: string,
  year: number,
  number_of_tracks: number,
  link: string;
  time: number,            //Time
  price: string
}