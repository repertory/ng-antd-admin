import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  current = null;

  hasLogin(): Promise<boolean> {
    return this.current ? Promise.resolve(true) : Promise.reject(false);
  }

  login(): Promise<object> {
    return Promise.resolve(this.current);
  }

  logout(): Promise<any> {
    return Promise.resolve();
  }

}
