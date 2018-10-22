import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  current = null;

  login(): Promise<object> {
    return Promise.resolve(this.current);
  }

  logout(): Promise<any> {
    return Promise.resolve();
  }

}
