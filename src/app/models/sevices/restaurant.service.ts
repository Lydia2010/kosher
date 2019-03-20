import { Injectable } from '@angular/core';
import {Restaurant} from '../restaurant';
import {Observable, of} from 'rxjs';
import {Address} from "../address";
//import {Review} from "../review";


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
        avgMealPrice: 20,
        location: new Address({
          streetNumber: 595 ,
          streetName: 'St Laurent Blvd',
          apartment: '2A',
          city: 'Montreal',
          postalCode: 'H2T2R2',
          province: 'QC',
          country: 'Canada'
        })
    }),
      new Restaurant({
        name: 'Cafe',
        phone: '(514)-222-3333',
        website: 'https://www.tav.com',
        rating: 2,
        avgMealPrice: 15,
        location: new Address({
          streetNumber: 6900 ,
          streetName: 'Decarie Blvd',
          apartment: '1',
          city: 'Montreal',
          postalCode: 'H5T5R2',
          province: 'QC',
          country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'Piza Piza',
        phone: '(514)-222-4444',
        website: 'https://www.tav.com',
        rating: 8,
        avgMealPrice: 10,
        location: new Address({
          streetNumber: 1 ,
          streetName: 'Bourret ave',
          city: 'Montreal',
          postalCode: 'H5N3L9',
          province: 'QC',
          country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'Subway',
        website: 'https://www.subway.ca',
        rating: 1,
        avgMealPrice: 5
      }),
      new Restaurant({
        name: 'Restaurant Su',
        phone: '(514)-222-6666',
        rating: 1,
        avgMealPrice: 15,
        /*reviews: [new Review( {author: 1, rating: 5, title: "My opinion", body: "Very nice", date: '2019-01-03'}),
                  new Review( {author: 2, rating: 4, title: "My opinion", body: "Cheep and tasty", date: '2019-02-04'})]*/
      }),

    ];
  }
  getRestaurants(): Observable<Restaurant[]> {

    return of(this.restaurants);


}
}
