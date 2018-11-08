import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtIntectable } from './jwt.intectable';
import { JwtService } from './jwt.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtIntectable,
      multi: true
    },
    JwtService
  ]
})
export class JwtModule { }
