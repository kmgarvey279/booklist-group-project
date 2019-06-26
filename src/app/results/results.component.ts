import { Component, OnInit, Input } from '@angular/core';
import { GoodReadsService } from '../good-reads.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [ GoodReadsService ]
})
export class ResultsComponent implements OnInit {
  books: any[] = null;
  constructor(private googleBooks: GoodReadsService) { }

  ngOnInit() {
    this.getBooksByTitle("Pride");
  }

  getBooksByTitle(title){
    this.books = null;
    this.googleBooks.searchBookByTitle(title).subscribe(val => {
      if(val.items.length > 0){
        this.books = val.items;
        console.log(val.items);
      }
    });
  }
}
