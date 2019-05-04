import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-album-item',
  templateUrl: './add-album-item.component.html',
  styleUrls: ['./add-album-item.component.css']
})
export class AddAlbumItemComponent implements OnInit {

  playlist:Playlist;
  genres:Genre[];
 
  constructor() { }

  ngOnInit() {

    this.playlist = {
      id_album: "",
      name: "",
      year: 0,
      number_of_tracks: 0,
      link: "",
      time: 0,            //Time
      price: "",

      name_genre:"",
      name_authors:"",
      tracks: [],
    }

    this.genres = [
      { name_genre:'Рок'},
      { name_genre:'Рэп и хип-хоп'},
      { name_genre:'Поп'},
      { name_genre:'Инди'},
      { name_genre:'R&B'},
      { name_genre:'Электроника'},
      { name_genre:'Метал'},
      { name_genre:'Регги'},
      { name_genre:'Панк'},
      { name_genre:'Классика'},
      { name_genre:'Кантри'}
    ]

  }

  addAlbum(){

    var input = document.getElementById('filesToUpload');
    var list = document.getElementById('fileList');

    var fail: any;
    fail = false;

    var text_pattern = /[0-9A-Za-zА-Яа-я]/i;
    var number_pattern =  /[0-9]/i;

    if (this.playlist.name == " " || this.playlist.name == undefined)
      fail = "Вы не ввели название альбома";
    else if (text_pattern.test(this.playlist.name) == false)
      fail = "Ошибка ввода названия альбома";
    else if (this.playlist.year == 0 || this.playlist.year == undefined)
    fail = "Вы не ввели год";
    else if (number_pattern.test(String(this.playlist.year)) == false
            || String(this.playlist.year).length != 4)
    fail = "Ошибка ввода года";
    else if (this.playlist.price == " " || this.playlist.price == undefined)
    fail = "Вы не ввели стоимость";
    else if (number_pattern.test(this.playlist.price) == false)
    fail = "Ошибка ввода стоимость";


    else if (this.playlist.name_genre == ""  || this.playlist.name_genre == undefined)
    fail = "Выбирите жанр";
    else if (this.playlist.name_authors == " " || this.playlist.name_authors == undefined)
    fail = "Вы не ввели автора";
    else if (text_pattern.test(this.playlist.name_authors) == false)
    fail = "Ошибка ввода автора";
    else if (input.files.length == 0){
      fail = "Альбом пуст";
    }

    if (fail) {
      alert(fail);
    }
    else {
    alert("OK");
    for (var x = 0; x < input.files.length; x++) {
      //add to list
      this.playlist.tracks[x] = input.files[x].name;
    }
    this.playlist.number_of_tracks = this.playlist.tracks.length;
    console.log(this.playlist);
    return false;
    }
  }

}

interface Track {
  file: AudioTrack,            //ссылка
}

interface Genre {
  name_genre: string;
}

interface Playlist {
  id_album: string,
  name: string,
  year: number,
  number_of_tracks: number,
  link: string;
  time: number,            //Time
  price: string,

  name_genre:string,
  name_authors:string,
  tracks: AudioTrack[]
}
