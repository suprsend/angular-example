import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuprsendService } from '../suprsend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private ssService: SuprsendService) {
    const isLoggedIn = localStorage.getItem('loggedUser');
    if (isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  async login(val: string) {
    const resp = await this.ssService.autheticateUser(val);

    console.log('auth response', resp);
    localStorage.setItem('loggedUser', val);
    this.router.navigate(['/dashboard']);
  }
}
