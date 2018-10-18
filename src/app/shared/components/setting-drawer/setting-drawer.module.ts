import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SettingDrawerComponent } from './setting-drawer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  declarations: [SettingDrawerComponent],
  exports: [SettingDrawerComponent]
})
export class SettingDrawerModule { }
