import { Component, OnInit, Input } from '@angular/core';
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
  @Input() selectedBook;
  myBooks: FirebaseListObservable <any[]> = null;
  filterByWantToRead: string = "wantToRead";
  filterByReading: string = "currentlyReading";
  filterByFinished: string = "finishedReading";

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.myBooks = this.bookService.getBooks();
  }

  moveBook(selectedBook, newShelf, pageCount) {
    console.log(selectedBook.$key);
    this.bookService.updateShelf(selectedBook.$key, newShelf, pageCount);
  }
  removeBook(selectedBook) {
    this.bookService.deleteBook(selectedBook.$key);
  }

  goToDetailPage(clickedBook) {
    this.router.navigate(['myBooks', clickedBook.$key]);
  }
}
