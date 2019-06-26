import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {GoodReadsService} from '../good-reads.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [BookService, GoodReadsService]
})
export class SearchComponent implements OnInit {

  constructor(private googleBooks: GoodReadsService) { }

  ngOnInit() {
  }
  search(query:string, type:string) {
    console.log(`Searching for ${query} & ${type}`);
    switch (type) {
      case "author":
        this.googleBooks.searchBookByAuthor(query);
        break;
      case "title":
        this.googleBooks.searchBookByTitle(query);
        break;
      case "subject":
        this.googleBooks.searchBookBySubject(query);
        break;
      default:
        this.googleBooks.searchBookByGeneral(query);
    }
  }

}
