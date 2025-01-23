import { Injectable } from '@angular/core';
import { SuprSend } from '@suprsend/web-sdk';
import { env } from './env';

@Injectable({
  providedIn: 'root',
})
export class SuprsendService {
  loggedInUser: string | null;
  userAuthenticated: boolean = false;
  ssClient: SuprSend;

  constructor() {
    this.loggedInUser = localStorage.getItem('loggedUser');
    this.ssClient = new SuprSend(env.public_api_key, {
      host: env.api_url,
      vapidKey: env.vapid_key,
    });
  }

  async getUserToken(data: string) {
    const tokenResp = await fetch(
      `${env.api_url}/authentication-token/` + data
    );
    const tokenData = await tokenResp.json();
    return tokenData.token;
  }

  async autheticateUser(value?: string) {
    if (this.ssClient.isIdentified(true)) {
      console.log('user already authenticated');
    }

    const user = (value || this.loggedInUser) as string;
    const token = await this.getUserToken(user);
    const resp = await this.ssClient.identify(user, token, {
      refreshUserToken: (old) => this.getUserToken(user),
    });
    console.log('authenticated response', resp);
    this.userAuthenticated = true;
  }

  async removeUser() {
    const resp = await this.ssClient.reset();
    console.log('removed user response', resp);
  }
}
