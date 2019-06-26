import { Component, Input, Output, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {GoodReadsService} from '../good-reads.service';
import { Book } from 'app/book.model';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [BookService, GoodReadsService]
})
export class SearchComponent implements OnInit {
  @Input() results:boolean;
  books;

  constructor(private googleBooks: GoodReadsService) { }

  ngOnInit() {
  }
  search(query:string, type:string) {
    
    this.results = true;

    switch (type) {
      case "author":
        this.books = this.googleBooks.searchBookByAuthor(query).subscribe(val => console.log(val));;
        break;
      case "title":
        this.books = this.googleBooks.searchBookByTitle(query).subscribe(val => console.log(val));;
        break;
      case "subject":
        this.books = this.googleBooks.searchBookBySubject(query).subscribe(val => console.log(val));;
        break;
      default:
        this.books = this.googleBooks.searchBookByGeneral(query).subscribe(val => console.log(val));;
    }
    // console.log(this.books);
  }

  displayResults(books){
    console.log(books.items[0]);
  }


}
