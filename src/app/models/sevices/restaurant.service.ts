import { Injectable } from '@angular/core';
import {Restaurant} from '../restaurant';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Restaurant[];
  constructor() {
    // TODO: Replace with API call
    this.restaurants = [
      new Restaurant( {
        name: 'Kitchen',
        phone: '(514)-222-2222',
        website: 'https://www.teamviral.com',
        rating: 5,
        avgMealPrice: 20
    }),
      new Restaurant({
        name: 'Cafe',
        phone: '(514)-222-3333',
        website: 'https://www.tav.com',
        rating: 2,
        avgMealPrice: 15
      }),
      new Restaurant({
        name: 'Piza Piza',
        phone: '(514)-222-4444',
        website: 'https://www.tav.com',
        rating: 8,
        avgMealPrice: 10
      }),
    ];
  }
  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);

}
}
