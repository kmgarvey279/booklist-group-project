import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';


@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css']
})
export class SplashPageComponent {
  constructor(private auth: AuthService) {
   }

   login() {
     this.auth.login();
   }
  }
