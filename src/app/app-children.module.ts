import { NgModule } from '@angular/core';
import { ExceptionModule } from './exception/exception.module';
import { IndexModule } from './index/index.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    ExceptionModule,
    IndexModule,
    LoginModule,
  ]
})
export class AppChildrenModule { }
