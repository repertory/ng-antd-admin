import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { ComponentsModule, ServicesModule } from '~/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ComponentsModule,
    ServicesModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
