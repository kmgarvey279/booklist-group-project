import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [BookService]
})
export class SearchComponent implements OnInit {

  constructor(private gr: BookService) { }

  ngOnInit() {
    this.gr.getBooksByAuthor('175417', 1);
  }
  search(title, author) {
    
  }

}
