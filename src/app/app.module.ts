import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreferenceComponent } from './preference/preference.component';
import { ChannelLevelPreferencesComponent } from './channel-level-preferences/channel-level-preferences.component';
import { CategoryLevelPreferencesComponent } from './category-level-preferences/category-level-preferences.component';
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [
    AppComponent,
    PreferenceComponent,
    ChannelLevelPreferencesComponent,
    CategoryLevelPreferencesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UiSwitchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
