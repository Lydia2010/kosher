import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../models/restaurant';

@Component({
  selector: 'app-rest-card',
  templateUrl: './rest-card.component.html',
  styleUrls: ['./rest-card.component.scss']
})
export class RestCardComponent implements OnInit  {
  @Input() restaurant: Restaurant;
  // now = new Date();
  constructor() {

    // this.restaurant = new Restaurant();

  }
    ngOnInit(): void {
    // this.restaurant.name = 'Tav Cafe';
    // this.restaurant.phone = '(514)-112-1112';
    // this.restaurant.rating = 3;
    // this.restaurant.priceRange = 3;
    // this.restaurant.website = 'http://www.google.ca';
  }



}
