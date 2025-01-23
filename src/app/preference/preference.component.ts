import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuprsendService } from '../suprsend.service';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css'],
})
export class PreferenceComponent implements OnInit {
  preferencesData: any = null;

  constructor(private router: Router, private ssService: SuprsendService) {
    const isLoggedIn = localStorage.getItem('loggedUser');
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  async ngOnInit() {
    const resp = await this.ssService.autheticateUser();
    console.log('authenticated in preference', resp);
    this.ssService.ssClient.user.preferences.getPreferences().then((resp) => {
      if (resp.status === 'error') {
        console.log(resp.error);
      } else {
        this.preferencesData = resp.body;
      }
    });

    // listen for update in preferences data
    this.ssService.ssClient.emitter.on(
      'preferences_updated',
      (preferenceData) => {
        this.preferencesData = { ...preferenceData.body };
      }
    );

    // listen for errors
    this.ssService.ssClient.emitter.on('preferences_error', (error) => {
      console.log('ERROR:', error);
    });
  }
}
