import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from '~/shared/shared.module';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SharedModule,
    IndexRoutingModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
