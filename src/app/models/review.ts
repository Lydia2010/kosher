export class Review {
  // region Attribute
  author: number;
  rating: number;
  title: string;
  body: string;
  date: Date;
  // endregion

  constructor(args?) {
    if(args) {
      if(args.author)
        this.author = args.author;
      if(args.rating)
        this.rating = args.rating;
      if(args.title)
        this.title = args.title;
      if(args.body)
        this.body = args.body;
      if(args.date)
        this.date = args.date;
    }
  }

}
