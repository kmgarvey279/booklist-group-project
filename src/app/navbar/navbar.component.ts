import { Component } from '@angular/core';
import { AuthService } from 'app/auth.service';


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
