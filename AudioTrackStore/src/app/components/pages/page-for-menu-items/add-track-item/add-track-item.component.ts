import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-track-item',
  templateUrl: './add-track-item.component.html',
  styleUrls: ['./add-track-item.component.css']
})
export class AddTrackItemComponent implements OnInit {

  track:Track;
  genres:Genre[];

  constructor() { }

  ngOnInit() {

    this.track = {
      id: "",
      name: "",
      name_album: "",
      name_genre: "",
      year: 0,
      time: 0,            //Time
      file: null,            //ссылка
      name_authors: "",
      price: ""
    }; 

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

  addTrack(file:File){

    var fail: any;
    fail = false;

    var text_pattern = /[0-9A-Za-zА-Яа-я]/i;
    var number_pattern =  /[0-9]/i;

    if (this.track.name == " ")
      fail = "Вы не ввели название трека";
    else if (text_pattern.test(this.track.name) == false)
      fail = "Ошибка ввода названия трека";
    else if (this.track.name_album == " ")
    fail = "Вы не ввели название альбома";
    else if (text_pattern.test(this.track.name_album) == false)
    fail = "Ошибка ввода названия альбома";
    else if (this.track.name_genre == "")
    fail = "Выбирите жанр";
    else if (this.track.name_authors == " ")
    fail = "Вы не ввели автора";
    else if (text_pattern.test(this.track.name_authors) == false)
    fail = "Ошибка ввода автора";
    else if (this.track.year == 0)
    fail = "Вы не ввели год";
    else if (number_pattern.test(String(this.track.year)) == false
            || String(this.track.year).length != 4)
    fail = "Ошибка ввода года";
    else if (this.track.price == " ")
    fail = "Вы не ввели стоимость";
    else if (number_pattern.test(this.track.price) == false)
    fail = "Ошибка ввода стоимость";

    if (fail) {
      alert(fail);
    }
    else {
      alert("OK");
    console.log(file);
    return false;
    }
  }

}


interface Track {
  id: string,
  name: string,
  name_album: string,
  name_genre: string,
  year: number,
  time: number,            //Time
  file: File,            //ссылка
  name_authors: string,
  price: string
}

interface Genre {
  name_genre: string;
}