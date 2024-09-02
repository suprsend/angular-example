import { Component, OnInit, DoCheck } from '@angular/core';
// import { SuprSend } from '@suprsend/web-sdk';
// import { env } from './env';
import { Router } from '@angular/router';
import { SuprsendService } from './suprsend.service';

// suprsend.init(env.workspace_key, env.workspace_secret, {
//   vapid_key: env.vapid_key,
//   api_url: env.api_url, // not needed
// });

// export const ssClient = new SuprSend(
//   'SS.PK.scvU_4iq4Aec7pUejVh-9sxvqmJZ1el3Xye6c1f-m68',
//   { host: env.api_url }
// );

// export async function getUserToken(email: string) {
//   const tokenResp = await fetch(
//     'https://collector-staging.suprsend.workers.dev/authentication-token/' +
//       email
//   );
//   const tokenData = await tokenResp.json();
//   return tokenData.token;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'angular-example';
  loggedinUser: string | null;

  constructor(private router: Router, private ssService: SuprsendService) {
    this.loggedinUser = localStorage.getItem('loggedUser');
  }

  logout() {
    this.ssService.removeUser();
    localStorage.removeItem('loggedUser');
    this.loggedinUser = null;
    this.router.navigate(['/login']);
  }

  ngDoCheck(): void {
    this.loggedinUser = localStorage.getItem('loggedUser');
  }

  async ngOnInit() {
    if (this.loggedinUser) {
      this.ssService.autheticateUser(this.loggedinUser);
      // const token = await getUserToken(this.loggedinUser);
      // const resp = await ssClient.identify(this.loggedinUser, token, {
      //   refreshUserToken: (old) => getUserToken(this.loggedinUser as string),
      // });
      // console.log('auth response', resp);
      // this.userAuthenticated = true;
    }
  }
}
