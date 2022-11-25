import { Component, OnInit } from '@angular/core';
import suprsend from '@suprsend/web-sdk';

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
  ngOnInit() {
    suprsend.identify('dist_id');
    suprsend.web_push.register_push();
  }
}
