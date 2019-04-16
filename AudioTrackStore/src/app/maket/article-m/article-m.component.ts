import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-m',
  templateUrl: './article-m.component.html',
  styleUrls: ['./article-m.component.css']
})
export class ArticleMComponent implements OnInit {

  userName:string;
  statistics:Statistics[];
  tracks:Track[];
  playlists:Playlist[];

  constructor() { }

  ngOnInit() {

    this.userName = 'userName';
    this.statistics = [
      { indicator: 'Данные статистики 1' },
      { indicator: 'Данные статистики 2' },
      { indicator: 'Данные статистики 3' }
    ]

    this.tracks = [
      {
      id: 'id_трека1',
      name: 'Название трека1',
      name_album: 'Название альбома1',
      name_genres: 'Жанр1',
      year: 2019,
      time: 3.20,
      link: 'Ссылка1',
      name_authors: 'Имя автора1',
      price: '3'
      }, 
      {
      id: 'id_трека2',
      name: 'Название трека2',
      name_album: 'Название альбома2',
      name_genres: 'Жанр2',
      year: 2019,
      time: 3.21,
      link: 'Ссылка2',
      name_authors: 'Имя автора2',
      price: '4'
      }
    ]

    this.playlists = [
      {
      id_album:'id_альбома 1',
      name: 'Название альбома 1',
      yera: 2019,
      number_of_tracks: 10,
      time: 35.25,
      price:'25'
      },
      {
        id_album:'id_альбома 2',
        name: 'Название альбома 2',
        yera: 2019,
        number_of_tracks: 10,
        time: 35.25,
        price:'25'
        },
        {
          id_album:'id_плейлиста 3',
          name: 'Название плейлиста 3',
          yera: 2019,
          number_of_tracks: 10,
          time: 35.25,
          price:'25'
          },
          {
      id_album:'id_альбома 4',
      name: 'Название альбома 4',
      yera: 2019,
      number_of_tracks: 10,
      time: 35.25,
      price:'25'
      },
      {
        id_album:'id_плейлиста 5',
        name: 'Название плейлиста 5',
        yera: 2019,
        number_of_tracks: 12,
        time: 40.00,
        price:'30'
        }
    ]

  }
  
}


interface Statistics {
  indicator:string
}

interface Track{
  id:string,
  name:string,
  name_album:string,
  name_genres:string,
  year:number,
  time:number,            //Time
  link:string,            //ссылка
  name_authors:string,
  price:string
}

interface Playlist{
  id_album:string,
  name:string,
  yera:number,
  number_of_tracks:number,
  time:number,            //Time
  price:string
}
