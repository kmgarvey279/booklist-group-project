export class Book {
  constructor(public googleBooksId: string,
              public title: string,
              public authors: string,
              public pageCount: number,
              public mainCategory: string,
              public categories: string,
              public image: string,
              public shelf: string = "none") {}
}
