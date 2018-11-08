import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  get token(): string | null {
    return localStorage.getItem('access_token');
  }
  set token(val: string | null) {
    localStorage.setItem('access_token', val);
  }

  decode() {
    if (!this.token) {
      return null;
    }

    let parts = this.token.split('.');

    if (parts.length !== 3) {
      throw new Error('The inspected token doesn\'t appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.');
    }

    let decoded = atob(parts[1]);
    if (!decoded) {
      throw new Error('Cannot decode the token.');
    }

    return JSON.parse(decoded);
  }

  isTokenExpired() {
    const decode = this.decode();
    if (decode === null || !decode.hasOwnProperty('exp')) {
      return true;
    }
    const date = new Date(0);
    date.setUTCSeconds(decode.exp);
    return !(date.valueOf() > new Date().valueOf());
  }

}
