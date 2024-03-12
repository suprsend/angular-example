import { Component } from '@angular/core';
import suprsend from '@suprsend/web-sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {
    const isLoggedIn = localStorage.getItem('loggedUser');
    if (isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  login(val: string) {
    suprsend.identify(val);
    localStorage.setItem('loggedUser', val);
    this.router.navigate(['/dashboard']);
  }
}
