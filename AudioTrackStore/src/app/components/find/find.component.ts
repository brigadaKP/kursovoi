import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  @Input() background: string;

  constructor() { }

  ngOnInit() {
  }

}
