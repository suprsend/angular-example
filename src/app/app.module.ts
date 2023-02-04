import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuprSendInboxModule } from '@suprsend/ngx-inbox';
import { ToastNoAnimationModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastNoAnimationModule.forRoot(),
    SuprSendInboxModule.forRoot({
      workspaceKey: 'your workspace key',
      workspaceSecret: 'your workspace secret',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
