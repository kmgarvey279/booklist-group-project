import { Component, OnInit } from '@angular/core';
import { GoodReadsService } from './good-reads.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoodReadsService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  constructor(private googleBooks: GoodReadsService){}
  ngOnInit(){
    // this.googleBooks.searchBookByTitle('test').subscribe(val => console.log(val));
    // this.googleBooks.searchBookByAuthor('Charles Dickens').subscribe(val => console.log(val));
    // this.googleBooks.searchBookBySubject('Juvenile Fiction').subscribe(val => console.log(val));
    // this.googleBooks.searchBookByGeneral('test').subscribe(val => console.log(val));
  }
}
