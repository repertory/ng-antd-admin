import { NgModule } from '@angular/core';

import { AboutModule } from './about/about.module';
import { ExceptionModule } from './exception/exception.module';
import { IndexModule } from './index/index.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    AboutModule,
    ExceptionModule,
    IndexModule,
    LoginModule
  ]
})
export class AppChildrenModule { }
