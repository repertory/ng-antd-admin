import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { SharedModule } from '~/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
