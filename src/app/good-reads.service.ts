import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book.model'
import { googleBooks } from './api-keys';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

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
                            response.json().volumeInfo.publisher,
                            response.json().volumeInfo.publishedDate,
                            response.json().volumeInfo.description,
                            response.json().volumeInfo.pageCount,
                            "string",
                            this.getCategories(response.json().volumeInfo.categories),
                            response.json().volumeInfo.imageLinks.thumbnail,
                            response.json().volumeInfo.imageLinks.medium,
                            0,
                            response.json().saleInfo.buyLink,
                            shelf);
        this.bookService.addBook(foundBook);
      })
  }

  getAuthors(authorsArr) {
    let authors = "";
    for (let i = 0; i < authorsArr.length; i++) {
      if(i > 0) {
        authors + ", " + authorsArr[i];
      } else {
        authors + authorsArr[i];
      }
    }
    return authors;
  }

  getCategories(categoriesArr) {
    let categories = "";
    for (let i = 0; i < categoriesArr.length; i++) {
      if(i > 0) {
        categories + ", " + categoriesArr[i];
      } else {
        categories + categoriesArr[i];
      }
    }
    return categories;
  }
}
