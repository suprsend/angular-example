import { Component, OnInit } from '@angular/core';
import suprsend from '@suprsend/web-sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css'],
})
export class PreferenceComponent implements OnInit {
  preferencesData: any = null;

  constructor(private router: Router) {
    const isLoggedIn = localStorage.getItem('loggedUser');
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    suprsend.user.preferences.get_preferences().then((resp) => {
      if (resp.error) {
        console.log(resp.message);
      } else {
        this.preferencesData = resp;
      }
    });

    suprsend.emitter.on('preferences_updated', (preferenceData) => {
      this.preferencesData = { ...preferenceData };
    });

    // listen for errors
    suprsend.emitter.on('preferences_error', (error) => {
      console.log('ERROR:', error);
    });
  }
}
