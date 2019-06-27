import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';

@Injectable()
export class BookService {
  books: FirebaseListObservable<any[]>;
  ref = null;
  uid = null;
  scopeFire = firebase;
  constructor(private af: AngularFireDatabase, public fAuth: AngularFireAuth, public auth: AuthService) {
    this.uid = localStorage.getItem('user');
    this.books = af.list(`users/${this.uid}/books`);
  }

  addBook(newBook: Book) {
    this.books.push(newBook);
  }

  getBooks() {
    return this.books;
  }

  updateShelf(bookToMove, newShelf) {
    let bookEntryInFirebase = this.getBookById(bookToMove.$key);
    bookEntryInFirebase.update({shelf: newShelf});
  }

  deleteBook(selectedBook) {
    let foundBook = this.getBookById(selectedBook.$key);
    foundBook.remove();
  }

  getBookById(bookId: string) {
    return this.af.object(`users/${this.uid}/books/${bookId}`);
  }
}
