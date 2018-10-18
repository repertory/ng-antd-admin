import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    IndexRoutingModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
