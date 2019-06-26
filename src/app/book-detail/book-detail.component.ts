import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../book.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [BookService]
})
export class BookDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  bookId: string;
  bookToDisplay: Book;

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.bookId = urlParametersArray['id'];
    })
    this.bookService.getBookById(this.bookId).subscribe(dataLastEmittedFromObserver => {
      this.bookToDisplay = new Book(dataLastEmittedFromObserver.id,
                                    dataLastEmittedFromObserver.volumeInfo.title,
                                    this.getAuthors(dataLastEmittedFromObserver.volumeInfo.authors),
                                    dataLastEmittedFromObserver.volumeInfo.publisher,
                                    dataLastEmittedFromObserver.volumeInfo.publishedDate,
                                    dataLastEmittedFromObserver.volumeInfo.description,
                                    dataLastEmittedFromObserver.volumeInfo.pageCount,
                                    dataLastEmittedFromObserver.valumeInfo.mainCategory,
                                    this.getCategories(dataLastEmittedFromObserver.volumeInfo.categories),
                                    dataLastEmittedFromObserver.volumeInfo.imageLinks.thumbnail,
                                    dataLastEmittedFromObserver.volumeInfo.imageLinks.medium,
                                    dataLastEmittedFromObserver.saleInfo.retailPrice.amount,
                                    dataLastEmittedFromObserver.saleInfo.buyLink);
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
    this.bookService.deleteBook(bookToMove);
  }
}
