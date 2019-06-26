export class Book {
  constructor(public googleBooksId: string,
              public title: string,
              public authors: string,
              public publisher: string,
              public publishedDate: string,
              public description: string,
              public pageCount: number,
              public mainCategory: string,
              public categories: string,
              public thumbnailImage: string,
              public image: string,
              public retailPrice: number,
              public buyLink: string,
              public shelf: string = "none") {}
}
