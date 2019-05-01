import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-playlist-page',
  templateUrl: './creat-playlist-page.component.html',
  styleUrls: ['./creat-playlist-page.component.css']
})
export class CreatPlaylistPageComponent implements OnInit {

  playlist: Playlist;
  tracks: Track[];
  checkboxs: boolean[];

  tracksIdInPlaylist: string[];

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
    ];

    this.playlist = {
      id_album: null,
      name: "Новый плейлист",
      yera: Number(Date().substring(11, 15)),
      number_of_tracks: 0,
      link: null,
      price: "0",
      time: 0
    };

    this.checkboxs = new Array(this.tracks.length);

    for (let i = 0; i < this.tracks.length; i++) {
      this.checkboxs[i] = false;
    };

  }

  createPlaylist(cover) {

    for (let i = 0; i < this.checkboxs.length; i++) {
      console.log(this.checkboxs[i]);
    }
    console.log(this.playlist.name);

    let count = 0;
    this.playlist.price = "0";

    for (let i = 0; i < this.tracks.length; i++) {
      if (this.checkboxs[i]) {
        count++;
        this.playlist.price = String(Number(this.playlist.price) + Number(this.tracks[i].price));
      }
    }

    if (count != 0) {
      this.tracksIdInPlaylist = new Array(count);
      console.log("count " + count);
      for (let i = 0; i < this.tracks.length; i++) {
        if (this.checkboxs[i]) {
          this.tracksIdInPlaylist[i] = this.tracks[i].id;
        }
      }

      this.playlist.number_of_tracks = count;
      alert("Плейлист создан");
      return false;
    } else {
      alert("Плейлист пуст");
      return false;
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
};

interface Playlist {
  id_album: string,
  name: string,
  yera: number,
  number_of_tracks: number,
  link: string;
  time: number,            //Time
  price: string
};