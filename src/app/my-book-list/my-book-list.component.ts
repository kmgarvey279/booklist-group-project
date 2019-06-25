import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-my-book-list',
  templateUrl: './my-book-list.component.html',
  styleUrls: ['./my-book-list.component.css'],
  providers: [ BookService ]
})

export class MyBookListComponent implements OnInit {
  myBooks: FirebaseListObservable <any[]> = null;
  filterByWantToRead: string = "wantToRead";
  filterByReading: string = "currentlyReading";
  filterByFinished: string = "finishedReading";

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.myBooks = this.bookService.getBooks();
  }

  removeBook(selectedBook: Book) {
    this.bookService.deleteBook(selectedBook);
  }

  goToDetailPage(clickedBook) {
    this.router.navigate(['books', clickedBook.$key]);
  }
}
