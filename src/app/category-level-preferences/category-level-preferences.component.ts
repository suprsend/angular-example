import { Component, Input } from '@angular/core';
import { PreferenceOptions } from '@suprsend/web-sdk';
// import { ssClient } from '../app.component';
import { SuprsendService } from '../suprsend.service';

@Component({
  selector: 'app-category-level-preferences',
  templateUrl: './category-level-preferences.component.html',
  styleUrls: ['./category-level-preferences.component.css'],
})
export class CategoryLevelPreferencesComponent {
  @Input() public preferencesData: any;

  constructor(private ssService: SuprsendService) {}

  async handleCategoryPreferenceChange(e: boolean, subcategory: string) {
    const resp =
      await this.ssService.ssClient.user.preferences.updateCategoryPreference(
        subcategory,
        e ? PreferenceOptions.OPT_IN : PreferenceOptions.OPT_OUT
      );
    if (resp.error) {
      console.log(resp.error);
    } else {
      this.preferencesData = { ...resp.body };
    }
  }

  async handleChannelPreferenceInCategoryChange(
    channel: any,
    category: string
  ) {
    if (!channel.is_editable) return;

    const resp =
      await this.ssService.ssClient.user.preferences.updateChannelPreferenceInCategory(
        channel.channel,
        channel.preference === PreferenceOptions.OPT_IN
          ? PreferenceOptions.OPT_OUT
          : PreferenceOptions.OPT_IN,
        category
      );
    if (resp.status === 'error') {
      console.log(resp.error);
    } else {
      this.preferencesData = { ...resp.body };
    }
  }
}
