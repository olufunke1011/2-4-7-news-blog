import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit(): void {
    this.title = 'PM Abiy meets AU envoys for talks on Ethiopia conflict';

  }


}
