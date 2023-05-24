import { Component, OnInit } from '@angular/core';
import { SuprSendInboxService } from '@suprsend/ngx-inbox';
import { ToastrService } from 'ngx-toastr';
import suprsend from '@suprsend/web-sdk';
import { Router } from '@angular/router';

suprsend.init('workspace_key', 'workspace_secret', {
  vapid_key: 'your vapid key',
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-example';
  toasterService;
  loggedinUser: string | null;
  home: boolean = false;

  constructor(
    private ssinbox: SuprSendInboxService,
    toastr: ToastrService,
    private router: Router
  ) {
    this.toasterService = toastr;
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
    // inbox code
    this.ssinbox.identifyUser('distintic_id', 'subscriber_id');
    // web push code
    suprsend.web_push.register_push();
  }
}
