import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { group } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [BookService]
})
export class HomepageComponent implements OnInit {

  constructor(private gr: BookService) { }

  ngOnInit() {
    this.gr.getBooksByAuthor('175417', 1);
  }

}
