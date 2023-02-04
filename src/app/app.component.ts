import { Component, OnInit } from '@angular/core';
import { SuprSendInboxService } from '@suprsend/ngx-inbox';
import { ToastrService } from 'ngx-toastr';
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
  toasterService;

  constructor(private ssinbox: SuprSendInboxService, toastr: ToastrService) {
    this.toasterService = toastr;
  }

  ngOnInit() {
    // inbox code
    this.ssinbox.identifyUser('your distinct id', 'your subscriber id');

    // web push code
    suprsend.identify('dist_id');
    suprsend.web_push.register_push();
  }
}
