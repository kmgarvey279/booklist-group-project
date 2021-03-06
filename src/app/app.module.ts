import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShelfPipe } from './shelf.pipe'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MyBookListComponent } from './my-book-list/my-book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { BookService } from './book.service';
import {SearchComponent} from './search/search.component';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { SplashPageComponent } from './splash-page/splash-page.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  projectId: masterFirebaseConfig.projectId,
  storageBucket:masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MyBookListComponent,
    LoginComponent,
    BookDetailComponent,
    ShelfPipe,
    SearchComponent,
    SplashPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: SplashPageComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
      { path: 'login', component: LoginComponent },
      { path: 'my-book-list', component: MyBookListComponent, canActivate: [AuthGuardService] },
      { path: 'myBooks/:id', component: BookDetailComponent, canActivate: [AuthGuardService] },
      { path: 'search', component: SearchComponent}

    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    BookService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
