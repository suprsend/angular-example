import { Component, Input } from '@angular/core';
import { ChannelLevelPreferenceOptions } from '@suprsend/web-sdk';
// import { ssClient } from '../app.component';
import { SuprsendService } from '../suprsend.service';

@Component({
  selector: 'app-channel-level-preferences',
  templateUrl: './channel-level-preferences.component.html',
  styleUrls: ['./channel-level-preferences.component.css'],
})
export class ChannelLevelPreferencesComponent {
  @Input() public preferencesData: any;

  constructor(private ssService: SuprsendService) {}

  async handleChange(channel: string, preference: string) {
    const preferenceStatus =
      preference === 'ALL'
        ? ChannelLevelPreferenceOptions.ALL
        : ChannelLevelPreferenceOptions.REQUIRED;
    const resp =
      await this.ssService.ssClient.user.preferences.updateOverallChannelPreference(
        channel,
        preferenceStatus
      );
    if (resp.status === 'error') {
      console.log(resp.error);
    } else {
      this.preferencesData = { ...resp.body };
    }
  }
}
