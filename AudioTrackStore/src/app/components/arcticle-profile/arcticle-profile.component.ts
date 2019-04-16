import { Component, OnInit } from '@angular/core';

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
        link: '../../../assets/music/Help.mp3',
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
        link: '../../../assets/music/queen_-_we_are_the_champions_(zaycev.net).mp3',
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
        link: '../../../assets/music/Rolling_Stones_-_Satisfaction_(iPleer.fm).mp3',
        name_authors: ' The Rolling Stones',
        price: '4'
      }
    ]

    this.playlists = [
      {
      id_album:'id_альбома 1',
      name: 'Help!',
      yera: 1965,
      number_of_tracks: 10,
      link: 'Help!',
      time: 35.25,
      price:'25'
      },
      {
        id_album:'id_альбома 2',
        name: 'News of the World',
        yera: 1965,
        number_of_tracks: 10,
        link: '',
        time: 35.25,
        price:'25'
        },
        {
          id_album:'id_альбома 3',
          name: 'Waking Up',
          yera: 1965,
          number_of_tracks: 10,
          link: '',
          time: 35.25,
          price:'25'
          }
    ]

    let sum = 0;
    this.tracks.forEach(track => {
      sum += Number(track.price);
    });
    this.playlists.forEach(playlist => {
      sum += Number(playlist.price);
    });

    this.userName = 'userName';
    this.statistics = [
      { indicator: "Количество треков: " + this.tracks.length },
      { indicator: "Количество плейлестов: " + this.playlists.length },
      { indicator: "Общая сумма: " + sum + " $" }
    ]

  }
  
}


interface Statistics {
  indicator:any
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
  yera: number,
  number_of_tracks: number,
  link: string;
  time: number,            //Time
  price: string
}