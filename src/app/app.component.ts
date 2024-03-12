import { Component, OnInit, DoCheck } from '@angular/core';
import suprsend from '@suprsend/web-sdk';
import { env } from './env';
import { Router } from '@angular/router';

suprsend.init(env.workspace_key, env.workspace_secret, {
  vapid_key: env.vapid_key,
  api_url: env.api_url, // not needed
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'angular-example';
  loggedinUser: string | null;

  constructor(private router: Router) {
    this.loggedinUser = localStorage.getItem('loggedUser');
  }

  logout() {
    suprsend.reset();
    localStorage.removeItem('loggedUser');
    this.loggedinUser = null;
    this.router.navigate(['/login']);
  }

  ngDoCheck(): void {
    this.loggedinUser = localStorage.getItem('loggedUser');
  }

  ngOnInit() {
    // web push code
    suprsend.web_push.register_push();
  }
}
