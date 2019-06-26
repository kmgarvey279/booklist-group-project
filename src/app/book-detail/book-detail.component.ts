import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../book.model';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [BookService]
})
export class BookDetailComponent implements OnInit {
  bookId: string;
  bookToDisplay: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.bookId = urlParametersArray['id'];
    });
    this.bookService.getBookById(this.bookId).subscribe(dataLastEmittedFromObserver => {
      this.bookToDisplay = new Book(dataLastEmittedFromObserver.googleBooksId,
                                    dataLastEmittedFromObserver.title,
                                    dataLastEmittedFromObserver.authors,
                                    dataLastEmittedFromObserver.pageCount,
                                    dataLastEmittedFromObserver.mainCategory,
                                    dataLastEmittedFromObserver.categories,
                                    dataLastEmittedFromObserver.image,
                                    dataLastEmittedFromObserver.shelf);
    })
  }

  // getAuthors(observerData) {
  //   let authors = "";
  //   for (let i = 0; i < observerData.authors.length; i++) {
  //     if(i > 0) {
  //       authors + ", " + observerData.authors[i];
  //     } else {
  //       authors + observerData.authors[i];
  //     }
  //   }
  //   return authors;
  // }
  //
  // getCategories(observerData) {
  //   let categories = "";
  //   for (let i = 0; i < observerData.categories.length; i++) {
  //     if(i > 0) {
  //       categories + ", " + observerData.categories[i];
  //     } else {
  //       categories + observerData.categories[i];
  //     }
  //   }
  //   return categories;
  // }

  moveBook(selectedBook: Book, newShelf: string) {
    this.bookService.updateShelf(selectedBook, newShelf);
  }


  deleteBook(bookToMove: Book) {
    this.bookService.deleteBook(bookToMove);
  }
}
