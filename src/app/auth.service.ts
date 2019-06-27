import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  appUser$: any;
  private user;

  constructor(
    private afAuth: AngularFireAuth, private route: ActivatedRoute,
    private router: Router) {
    this.user$ = afAuth.authState;
    afAuth.authState.subscribe(user => {
      this.user = user.uid;
    });
   }
   login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';
    localStorage.setItem('returnUrl', returnUrl);
    localStorage.setItem('user', this.user);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
    });

    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
