export class Address {
  // region Attributes
  streetNumber: number;
  streetName: string;
  apartment: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  // endregion


  constructor(args?) {
    console.log(234)
    if(args) {

      if(args.streetNumber)
        this.streetNumber = args.name;
      if(args.streetName)
        this.streetName = args.streetName;
      if(args.apartment)
        this.apartment = args.apartment;
      if(args.city)
        this.city = args.city;
      if(args.province)
        this.province = args.province;
      if(args.postalCode)
        this.postalCode = args.postalCode;
      if(args.country)
        this.country = args.country;
      console.log(args.streetName)
    }
  }
}
