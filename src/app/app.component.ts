import {Component, OnInit} from '@angular/core';
import {Restaurant} from './models/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  rests: Restaurant[];

  constructor() {
    this.rests = [];
    let temp = new Restaurant();
    temp.name = 'Tav Cafe';
    temp.phone = '(514)-112-1112';
    temp.rating = 3;
    temp.priceRange = 3;
    temp.website = 'http://www.google.ca';
    this.rests.push(temp);

    temp = new Restaurant();
    temp.name = 'Piza Piza';
    temp.phone = '(514)-333-3333';
    temp.rating = 4;
    temp.priceRange = 4;
    this.rests.push(temp);

    temp = new Restaurant();
    temp.name = 'Pasta';
    temp.rating = 2;
    temp.priceRange = 2;
    temp.website = 'http://www.google.ca';
    this.rests.push(temp);
  }
}

