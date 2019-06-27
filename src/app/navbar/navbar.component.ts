import { Component } from '@angular/core';
import { AuthService } from 'app/auth.service';
// import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  public isCollapsed: boolean;

  constructor(public auth: AuthService) {
   }

  logout() {
    this.auth.logout();
  }

}
