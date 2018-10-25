import { NgModule } from '@angular/core';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [RoleModule, UserModule]
})
export class SystemChildrenModule { }
