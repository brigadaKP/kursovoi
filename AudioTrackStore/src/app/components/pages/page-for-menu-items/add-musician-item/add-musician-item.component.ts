import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-musician-item',
  templateUrl: './add-musician-item.component.html',
  styleUrls: ['./add-musician-item.component.css']
})
export class AddMusicianItemComponent implements OnInit {

  genres: Genre[];
  newMusician: string;
  generNewMusician: string;

  constructor() { }

  ngOnInit() {

    this.genres = [
      { name_genre: 'Рок' },
      { name_genre: 'Рэп и хип-хоп' },
      { name_genre: 'Поп' },
      { name_genre: 'Инди' },
      { name_genre: 'R&B' },
      { name_genre: 'Электроника' },
      { name_genre: 'Метал' },
      { name_genre: 'Регги' },
      { name_genre: 'Панк' },
      { name_genre: 'Классика' },
      { name_genre: 'Кантри' }
    ]

  }

  addMusician() {

    var fail: any;
    fail = false;

    var text_pattern = /[0-9A-Za-zА-Яа-я]/i;

    if (this.newMusician == " " || this.newMusician == undefined)
      fail = "Вы не ввели исполнителя";
    else if (text_pattern.test(this.newMusician) == false)
      fail = "Ошибка ввода исполнителя";
    else if (this.generNewMusician == "" || this.generNewMusician == undefined)
      fail = "Выбирите жанр";

    if (fail) {
      alert(fail);
    }
    else {
      alert("OK");
      console.log(this.newMusician);
      return false;
    }
  }

}

interface Genre {
  name_genre: string;
}