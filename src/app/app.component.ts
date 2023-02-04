import { Component, OnInit } from '@angular/core';
import { SuprSendInboxService } from '@suprsend/ngx-inbox';
import { ToastrService } from 'ngx-toastr';

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
    this.ssinbox.identifyUser('your distinct id', 'your subscriber id');
  }
}
