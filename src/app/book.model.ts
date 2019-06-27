export class Book {
  constructor(public googleBooksId: string,
              public title: string,
              public authors: string,
              public pageCount: number,
              public image: string,
              public publisher: string,
              public publishedDate: string,
              public categories: string,
              public averageRating: number,
              public ratingsCount: number,
              public shelf: string = "none") {}
}
