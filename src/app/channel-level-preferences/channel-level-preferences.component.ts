import { Component, Input } from '@angular/core';
import suprsend, { ChannelLevelPreferenceOptions } from '@suprsend/web-sdk';

@Component({
  selector: 'app-channel-level-preferences',
  templateUrl: './channel-level-preferences.component.html',
  styleUrls: ['./channel-level-preferences.component.css'],
})
export class ChannelLevelPreferencesComponent {
  @Input() public preferencesData: any;

  handleChange(channel: string, preference: string) {
    const preferenceStatus =
      preference === 'ALL'
        ? ChannelLevelPreferenceOptions.ALL
        : ChannelLevelPreferenceOptions.REQUIRED;
    const resp = suprsend.user.preferences.update_overall_channel_preference(
      channel,
      preferenceStatus
    );
    if (resp.error) {
      console.log(resp.message);
    } else {
      this.preferencesData = { ...resp };
    }
  }
}
