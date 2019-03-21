// region Imports
import {Address} from './address';
import {Review} from './review';
import construct = Reflect.construct;

// endregion


export class  Restaurant {
  // region Attributes
  name: string;
  website: string;
  phone: string;
  rating: number;
  avgMealPrice: number;
  reviews: Review[];
  location: Address;

  // endregion

// region Default Methods

  constructor(args?) {
    if(args) {
      if(args.name)
        this.name = args.name;
      if(args.website)
        this.website = args.website;
      if(args.phone)
        this.phone = args.phone;
      if(args.rating)
        this.rating = args.rating;
      if(args.avgMealPrice)
        this.avgMealPrice = args.avgMealPrice;
      if(args.location)
        this.location = args.location;
      if(args.reviews)
        this.reviews = args.reviews;
    }
  }
// endregion


}
