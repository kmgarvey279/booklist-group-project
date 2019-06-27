import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { GoodReadsService } from '../good-reads.service';
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

  constructor(private route: ActivatedRoute, private bookService: BookService, private goodReadsService: GoodReadsService,  private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.bookId = urlParametersArray['id'];
    });
    this.bookService.getBookById(this.bookId).subscribe(dataLastEmittedFromObserver => {
      this.bookToDisplay = new Book(dataLastEmittedFromObserver.googleBooksId,
                                    dataLastEmittedFromObserver.title,
                                    dataLastEmittedFromObserver.authors,
                                    dataLastEmittedFromObserver.pageCount,
                                    dataLastEmittedFromObserver.image,
                                    dataLastEmittedFromObserver.shelf);
    })
  }

  moveBook(selectedBook: Book, newShelf: string) {
    this.bookService.updateShelf(this.bookId, newShelf);
    alert(selectedBook.shelf);
  }
  removeBook(selectedBook: Book) {
    this.bookService.deleteBook(selectedBook);
  }
}
