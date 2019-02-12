import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.styl']
})
export class GameComponent implements OnInit {

  games: any;

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get('/games').subscribe(data => {
      this.games = data;
    });
  }

}
