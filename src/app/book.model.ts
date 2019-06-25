export class Book {
  public shelf: string = "none";
  constructor(public title: string,
              public authors: string,
              public publisher: string,
              public publishedDate: string,
              public description: string,
              public isbn_10: number,
              public isbn_13: number
              public pageCount: number,
              public mainCategory: string,
              public categories: string,
              public thumbnailImage: string,
              public image: string,
              public retailPrice: number,
              public buyLink: string) {}
}
