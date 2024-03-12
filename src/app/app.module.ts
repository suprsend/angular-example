import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreferenceComponent } from './preference/preference.component';
import { ChannelLevelPreferencesComponent } from './channel-level-preferences/channel-level-preferences.component';
import { CategoryLevelPreferencesComponent } from './category-level-preferences/category-level-preferences.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PreferenceComponent,
    ChannelLevelPreferencesComponent,
    CategoryLevelPreferencesComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UiSwitchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
