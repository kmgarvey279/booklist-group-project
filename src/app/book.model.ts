export class Book {
  constructor(public googleBooksId: string,
              public title: string,
              public authors: string,
              public pageCount: number,
              public image: string = "./assets/PlaceholderBook.png",
              public publisher: string = "No Publisher Information Available",
              public publishedDate: string = "No Publication Date Information Available",
              public categories: string = "No Categories Available",
              public averageRating: string = "No Ratings Available",
              public ratingsCount: string = "No Ratings Available",
              public shelf: string = "none") {}
}
