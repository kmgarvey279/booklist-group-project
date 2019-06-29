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
    return this.http.get(`https://www.googleapis.com/books/v1/volumes/${googleBooksId}?key=${googleBooks}`).subscribe(response => {
    let progress = 0;
    if(shelf == "finishedReading") {
      progress = response.json().volumeInfo.pageCount;
    }
      let foundBook = new Book(googleBooksId,
                          response.json().volumeInfo.title,
                          response.json().volumeInfo.authors,
                          response.json().volumeInfo.pageCount,
                          response.json().volumeInfo.imageLinks.thumbnail,
                          response.json().volumeInfo.publisher,
                          response.json().volumeInfo.publishedDate,
                          response.json().volumeInfo.categories,
                          response.json().volumeInfo.averageRating,
                          response.json().volumeInfo.ratingsCount,
                          shelf,
                          progress);
      this.bookService.addBook(foundBook);
    })
  }
}
