import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [BookService]
})
export class BookDetailComponent implements OnInit {
  bookId: string;
  bookToDisplay: Book;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.bookId = urlParametersArray['id'];
    })
    this.bookService.getBookById(this.bookId).subscribe(dataLastEmittedFromObserver => {
      this.bookToDisplay = new Book(dataLastEmittedFromObserver.title,
                                    this.getAuthors(dataLastEmittedFromObserver),
                                    dataLastEmittedFromObserver.publisher,
                                    dataLastEmittedFromObserver.publishedDate,
                                    dataLastEmittedFromObserver.discription,
                                    dataLastEmittedFromObserver.industryIdentifiers[0],
                                    dataLastEmittedFromObserver.industryIdentifiers[1],
                                    dataLastEmittedFromObserver.pageCount,
                                    dataLastEmittedFromObserver.mainCategory,
                                    this.getCategories(dataLastEmittedFromObserver),
                                    dataLastEmittedFromObserver.imageLinks.thumbnail,
                                    dataLastEmittedFromObserver.imageLinks.medium,
                                    dataLastEmittedFromObserver.saleInfo.retailPrice.amount,
                                    dataLastEmittedFromObserver.saleInfo.buylink)
    })
  }

  getAuthors(observerData) {
    let authors = "";
    for (let i = 0; i < observerData.authors.length; i++) {
      if(i > 0) {
        authors + ", " + observerData.authors[i];
      } else {
        authors + observerData.authors[i];
      }
    }
    return authors;
  }

  getCategories(observerData) {
    let categories = "";
    for (let i = 0; i < observerData.categories.length; i++) {
      if(i > 0) {
        categories + ", " + observerData.categories[i];
      } else {
        categories + observerData.categories[i];
      }
    }
    return categories;
  }

  moveToWantToRead(bookToMove) {
    bookToMove.shelf = "wantToRead";
  }

  moveToReading(bookToMove) {
    bookToMove.shelf = "currentlyReading";
  }

  moveToFinished(bookToMove) {
    bookToMove.shelf = "finishedReading";
  }

  deleteBook(bookToMove) {
    this.bookService.deleteBook(selectedBook);
  }
}
