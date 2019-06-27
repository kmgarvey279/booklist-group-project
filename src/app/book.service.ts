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

  updateShelf(bookToMoveKey, newShelf) {
    let bookEntryInFirebase = this.getBookById(bookToMoveKey);
    bookEntryInFirebase.update({shelf: newShelf});
  }

  deleteBook(selectedBookKey) {
    let foundBook = this.getBookById(selectedBookKey);
    foundBook.remove();
  }

  getBookById(bookId: string) {
    return this.af.object('books/' + bookId);
  }
}
