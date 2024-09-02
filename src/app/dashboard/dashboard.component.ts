import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initSuprSendInbox } from '@suprsend/web-inbox';
import { env } from '../env';
import { SuprsendService } from '../suprsend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router, private ssService: SuprsendService) {
    const isLoggedIn = localStorage.getItem('loggedUser');
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    const suprSendConfig = {
      workspaceKey: env.inbox_ws_key,
      distinctId: env.inbox_distinct_id,
      subscriberId: env.inbox_subscriber_id,
    };
    initSuprSendInbox(
      document.getElementById('suprsend-inbox'),
      suprSendConfig
    );
  }

  trackUser() {
    this.ssService.ssClient.track('testing');
  }

  subscriberPush() {
    this.ssService.ssClient.webpush.registerPush();
  }
}
