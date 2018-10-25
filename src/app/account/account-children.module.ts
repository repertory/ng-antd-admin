import { NgModule } from '@angular/core';
import { CenterModule } from './center/center.module';
import { SettingModule } from './setting/setting.module';

@NgModule({
  imports: [CenterModule, SettingModule]
})
export class AccountChildrenModule { }
