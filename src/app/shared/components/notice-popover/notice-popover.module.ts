import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NoticePopoverComponent } from './notice-popover.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [NoticePopoverComponent],
  exports: [NoticePopoverComponent]
})
export class NoticePopoverModule { }
