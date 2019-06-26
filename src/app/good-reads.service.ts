import { Injectable } from '@angular/core';
import { googleBooks } from './api-keys';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GoodReadsService {
  constructor(private http: Http) {}

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
}
