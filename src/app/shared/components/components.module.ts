import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { LayoutModule } from './layout/layout.module';
import { MenuModule } from './menu/menu.module';
import { NoticePopoverModule } from './notice-popover/notice-popover.module';
import { PageModule } from './page/page.module';
import { SettingDrawerModule } from './setting-drawer/setting-drawer.module';

@NgModule({
  exports: [
    HeaderModule,
    LayoutModule,
    MenuModule,
    NoticePopoverModule,
    PageModule,
    SettingDrawerModule
  ]
})
export class ComponentsModule { }
