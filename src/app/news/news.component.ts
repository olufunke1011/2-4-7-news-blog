import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title: string;
  post1: string;
  post2: string;
  post3: string;
  post4: string;
  post5: string;
  post6: string;
  constructor() { }

  ngOnInit(): void {
    this.title = 'PM Abiy meets AU envoys for talks on Ethiopia conflict';
    this.post1 = 'LASG raises alarm over serial manhole vandalisms';
    this.post2 = '3 in police net for allegedly stealing 3-day-old child in Kaduna';
    this.post3 = 'Erdogan’s son-in-law leaves sovereign wealth fund';
    this.post4 = 'Nigeria’s COVID- 19 death hits 1171, with 246 new cases - NCDC';
    this.post5 = 'Military air strikes knock out more terrorists’ hideout in Borno';
    this.post6 = 'Buhari to roll out autogas scheme Dec. 1 - NGEP Chairman';
    
  }


}
