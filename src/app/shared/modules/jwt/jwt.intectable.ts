import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtService } from './jwt.service';

@Injectable()
export class JwtIntectable implements HttpInterceptor {

  constructor(public jwt: JwtService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.jwt.isTokenExpired()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.jwt.token}`
        }
      });
    }

    return next.handle(request);
  }

}
