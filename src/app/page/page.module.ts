import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from '~/shared/shared.module';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SharedModule,
    PageRoutingModule
  ],
  declarations: [PageComponent]
})
export class PageModule { }
