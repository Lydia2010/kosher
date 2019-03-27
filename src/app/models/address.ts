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
    if (args) {
        this.streetNumber = args.name;
        this.streetName = args.streetName;
        this.apartment = args.apartment;
        this.city = args.city;
        this.province = args.province;
        this.postalCode = args.postalCode;
        this.country = args.country;
    }
  }
}
