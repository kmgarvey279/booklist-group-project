import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: firebase.User;
  public isCollapsed: boolean;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => this.user = user);
   }

  logout() {
    this.afAuth.auth.signOut();
  }

}
