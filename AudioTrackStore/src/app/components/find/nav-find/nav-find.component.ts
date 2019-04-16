import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-find',
  templateUrl: './nav-find.component.html',
  styleUrls: ['./nav-find.component.css']
})
export class NavFindComponent implements OnInit {

  genres:Genres[];

  constructor() { }

  ngOnInit() {

    this.genres = [
      { value:'Рок'},
      { value:'Рэп и хип-хоп'},
      { value:'Поп'},
      { value:'Инди'},
      { value:'R&B'},
      { value:'Электроника'},
      { value:'Метал'},
      { value:'Регги'},
      { value:'Панк'},
      { value:'Классика'},
      { value:'Кантри'}
    ]
  }

}


interface Genres{
  value:string;
}