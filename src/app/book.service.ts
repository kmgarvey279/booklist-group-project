import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  books: FirebaseListObservable<any[]>;
  Id
  googleIds: FirebaseListObservable<any[]>;
  ref = null;
  uid = null;
  scopeFire = firebase;
  constructor(private af: AngularFireDatabase, public fAuth: AngularFireAuth, public auth: AuthService) {
    this.uid = localStorage.getItem('user');
    this.books = af.list(`users/${this.uid}/books`);
    this.googleIds = af.list(`users/${this.uid}/books/volumeInfo/googleBooksId`)
  }

  addBook(newBook: Book) {
    this.books.push(newBook);
  }

  getBooks() {
    return this.books;
  }

  getGoogleBooksIds() {
    let ids = [];
    this.books.subscribe(books => {
      books.forEach(book => {
        ids.push(book.googleBooksId);
      })
    })
    return ids;
  }

  updateShelf(bookToMoveKey, newShelf, pageCount) {
    let bookEntryInFirebase = this.getBookById(bookToMoveKey);
    bookEntryInFirebase.update({shelf: newShelf});
    if(newShelf == "wantToRead" || newShelf == "currentlyReading") {
      bookEntryInFirebase.update({progress: 0});
    } else if(newShelf == "finishedReading"){
      bookEntryInFirebase.update({progress: pageCount});
    }
  }

  updateBookProgress(bookToUpdateKey, newProgress) {
    let bookEntryInFirebase = this.getBookById(bookToUpdateKey);
    bookEntryInFirebase.update({progress: newProgress});
  }

  updateBookRating(bookToUpdateKey, newRating) {
    let bookEntryInFirebase = this.getBookById(bookToUpdateKey);
    bookEntryInFirebase.update({rating: newRating});
  }

  deleteBook(selectedBookKey) {
    let foundBook = this.getBookById(selectedBookKey);
    foundBook.remove();
  }

  getBookById(bookId: string) {
    return this.af.object(`users/${this.uid}/books/${bookId}`);
  }
}
