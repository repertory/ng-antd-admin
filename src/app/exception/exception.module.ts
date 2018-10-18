import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ExceptionRoutingModule } from './exception-routing.module';
import { ExceptionComponent } from './exception.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ExceptionRoutingModule
  ],
  declarations: [ExceptionComponent],
  exports: [ExceptionComponent]
})
export class ExceptionModule { }
