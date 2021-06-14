import { Injectable } from '@angular/core';

@Injectable()
export class UserStoreService {

  private _token: string = null;
  constructor() { }

  set token(token: string) {
    this._token = token;
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    const sessionToken = sessionStorage.getItem('wine-token');
    return (sessionToken != null) || (this.token != null);
  }

}
