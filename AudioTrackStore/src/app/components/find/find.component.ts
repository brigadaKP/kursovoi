import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

import { ArticleFindComponent } from './article-find/article-find.component';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  @Input() background: string;

  @ViewChild(ArticleFindComponent) articleFindComponent: ArticleFindComponent;

  constructor() { }

  ngOnInit() {  }

  dataChangeHandler(message) {
    console.log(message);
    this.articleFindComponent.whoAmI(message); // 👶 I am a child!
  }

}
