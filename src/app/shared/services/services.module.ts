import { NgModule } from '@angular/core';

import { UserService } from './user.service';
export { UserService } from './user.service';

@NgModule({
  providers: [
  ]
})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [UserService]
    };
  }
}
