import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BookService {
  books: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.books = af.list('books');
  }

  addBook(newBook: Book) {
    this.books.push(newBook);
  }

  getBooks() {
    return this.books;
  }

  deleteBook(selectedBook) {
    let foundBook = this.getBookById(selectedBook.$key);
    foundBook.remove();
  }

  getBookById(bookId: string) {
    return this.af.object('books/' + bookId);
  }
}
