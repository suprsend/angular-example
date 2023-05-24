import { Component, Input } from '@angular/core';
import suprsend, { PreferenceOptions } from '@suprsend/web-sdk';

@Component({
  selector: 'app-category-level-preferences',
  templateUrl: './category-level-preferences.component.html',
  styleUrls: ['./category-level-preferences.component.css'],
})
export class CategoryLevelPreferencesComponent {
  @Input() public preferencesData: any;

  handleCategoryPreferenceChange(e: boolean, subcategory: string) {
    const resp = suprsend.user.preferences.update_category_preference(
      subcategory,
      e ? PreferenceOptions.OPT_IN : PreferenceOptions.OPT_OUT
    );
    if (resp.error) {
      console.log(resp.message);
    } else {
      this.preferencesData = { ...resp };
    }
  }

  handleChannelPreferenceInCategoryChange(channel: any, category: string) {
    if (!channel.is_editable) return;

    const resp =
      suprsend.user.preferences.update_channel_preference_in_category(
        channel.channel,
        channel.preference === PreferenceOptions.OPT_IN
          ? PreferenceOptions.OPT_OUT
          : PreferenceOptions.OPT_IN,
        category
      );
    if (resp.error) {
      console.log(resp.message);
    } else {
      this.preferencesData = { ...resp };
    }
  }
}
