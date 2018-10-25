import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from '~/shared/shared.module';
import { CenterRoutingModule } from './center-routing.module';
import { CenterComponent } from './center.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SharedModule,
    CenterRoutingModule
  ],
  declarations: [CenterComponent]
})
export class CenterModule { }
