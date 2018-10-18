import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '~/shared/shared.module';
import { ExceptionRoutingModule } from './exception-routing.module';
import { ExceptionComponent } from './exception.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SharedModule,
    ExceptionRoutingModule
  ],
  declarations: [ExceptionComponent],
  exports: [ExceptionComponent]
})
export class ExceptionModule { }
