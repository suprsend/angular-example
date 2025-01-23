import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { SuprsendService } from './suprsend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'angular-example';
  loggedinUser: string | null;

  constructor(private router: Router, private ssService: SuprsendService) {
    this.loggedinUser = localStorage.getItem('loggedUser');
  }

  logout() {
    this.ssService.removeUser();
    localStorage.removeItem('loggedUser');
    this.loggedinUser = null;
    this.router.navigate(['/login']);
  }

  ngDoCheck(): void {
    this.loggedinUser = localStorage.getItem('loggedUser');
  }

  async ngOnInit() {
    if (this.loggedinUser) {
      this.ssService.autheticateUser(this.loggedinUser);
    }
  }
}
