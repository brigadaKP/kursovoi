import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-m',
  templateUrl: './aside-m.component.html',
  styleUrls: ['./aside-m.component.css']
})
export class AsideMComponent implements OnInit {

  other_performers:Other_performer[];

  constructor() { }

  ngOnInit() {

    this.other_performers = [
      { name_other_performer:'Исполнитель 1', link:null},
      { name_other_performer:'Исполнитель 2', link:null},
      { name_other_performer:'Исполнитель 3', link:null},
      { name_other_performer:'Исполнитель 4', link:null},
      { name_other_performer:'Исполнитель 5', link:null},
      { name_other_performer:'Исполнитель 6', link:null},
      { name_other_performer:'Исполнитель 7', link:null},
      
    ]
    
  }

}


interface Other_performer{
  name_other_performer:string,
  link:LinkStyle;        //ссылка
}