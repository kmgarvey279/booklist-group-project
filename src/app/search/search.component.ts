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
  books: any[] = null;;

  constructor(private googleBooks: GoodReadsService) { }

  ngOnInit() {
  }
  search(query:string, type:string) {
    this.books = null;
    this.results = true;

    switch (type) {
      case "author":
        this.googleBooks.searchBookByAuthor(query).subscribe(val => {
        if(val.items.length > 0){
          this.books = val.items;
          console.log(val.items);
        }
      });       break;
      case "title":
        this.googleBooks.searchBookByTitle(query).subscribe(val => {
          if(val.items.length > 0){
            this.books = val.items;
            console.log(val.items);
          }
        });
        break;
      case "subject":
        this.googleBooks.searchBookBySubject(query).subscribe(val => {
          if(val.items.length > 0){
            this.books = val.items;
            console.log(val.items);
          }
      });        break;
      default:
        this.googleBooks.searchBookByGeneral(query).subscribe(val => {
          if(val.items.length > 0){
            this.books = val.items;
            console.log(val.items);
          }
      });    
    }
  }
  saveBook(id: string) {
    this.googleBooks.saveBook(id, "");
  }
}
