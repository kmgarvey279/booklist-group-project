import { BookService } from './book.service';
import { Book } from './book.model'
import { googleBooks } from './api-keys';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class GoodReadsService {
  constructor(private http: Http, private bookService: BookService) {}

  searchBookByTitle(title){
    title = title.replace(' ', '+');
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=${googleBooks}`).map(res => res.json());
  }

  searchBookByAuthor(author){
    author = author.replace(' ', '+');
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=${googleBooks}`).map(res => res.json());
  }

  searchBookBySubject(subject){
    subject = subject.replace(' ', '+');
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&key=${googleBooks}`).map(res => res.json());
  }
  searchBookByGeneral(any){
    any = any.replace(' ', '+');
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${any}&key=${googleBooks}`).map(res => res.json());
  }


  saveBook(googleBooksId: string, shelf: string) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes/${googleBooksId}?key=${googleBooks}`)
      .subscribe(response => {
        let foundBook = new Book(googleBooksId,
                            response.json().volumeInfo.title,
                            this.getAuthors(response.json().volumeInfo.authors),
                            response.json().volumeInfo.pageCount,
                            response.json().valumeInfo.mainCategory,
                            this.getCategories(response.json().volumeInfo.categories),
                            response.json().volumeInfo.imageLinks.medium,
                            shelf);
        this.bookService.addBook(foundBook);
      })
  }

  getAuthors(authorsArr) {
    let authors = "";
    for (let i = 0; i < authorsArr.volumeInfo.authors.length; i++) {
      if(i > 0) {
        authors + ", " + authorsArr.volumeInfo.authors[i];
      } else {
        authors + authorsArr.volumeInfo.authors[i];
      }
    }
    return authors;
  }

  getCategories(categoriesArr) {
    let categories = "";
    for (let i = 0; i < categoriesArr.volumeInfo.categories.length; i++) {
      if(i > 0) {
        categories + ", " + categoriesArr.volumeInfo.categories[i];
      } else {
        categories + categoriesArr.volumeInfo.categories[i];
      }
    }
    return categories;
  }
}
