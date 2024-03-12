import { Component, OnInit } from '@angular/core';
import suprsend from '@suprsend/web-sdk';
import { Router } from '@angular/router';
import { env } from './env';

suprsend.init(env.workspace_key, env.workspace_secret, {
  vapid_key: env.vapid_key,
  api_url: env.api_url, // not needed
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-example';
  loggedinUser: string | null;
  home: boolean = false;

  constructor(private router: Router) {
    this.loggedinUser = localStorage.getItem('loggedUser');
    setTimeout(() => {
      this.home = this.router.url === '/';
    });
  }

  login(val: string) {
    suprsend.identify(val);
    localStorage.setItem('loggedUser', val);
    this.loggedinUser = val;
  }

  logout() {
    suprsend.reset();
    localStorage.removeItem('loggedUser');
    this.loggedinUser = null;
  }

  ngOnInit() {
    // web push code
    suprsend.web_push.register_push();
  }
}
