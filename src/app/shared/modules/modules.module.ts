import { NgModule } from '@angular/core';

import { JwtModule } from './jwt/jwt.module';
export * from './jwt/jwt.module';

@NgModule({
  exports: [
    JwtModule
  ]
})
export class ModulesModule { }
