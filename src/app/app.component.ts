import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { GoodReadsService } from './good-reads.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoodReadsService]
})

export class AppComponent implements OnInit{
  title = 'app works!';

  ngOnInit(){
    this.googleBooks.searchBookByTitle('test').subscribe(val => console.log(val));
    this.googleBooks.searchBookByAuthor('Charles Dickens').subscribe(val => console.log(val));
    this.googleBooks.searchBookBySubject('Juvenile Fiction').subscribe(val => console.log(val));
    this.googleBooks.searchBookByGeneral('test').subscribe(val => console.log(val));
  }

  constructor(
    private googleBooks: GoodReadsService,
    private userService: UserService,
    private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      if (!user) return;
      userService.save(user);
      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}
