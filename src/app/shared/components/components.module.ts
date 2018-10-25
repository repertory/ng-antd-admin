import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { LayoutModule } from './layout/layout.module';
import { MarkdownModule } from './markdown/markdown.module';
import { MenuModule } from './menu/menu.module';
import { NoticePopoverModule } from './notice-popover/notice-popover.module';
import { PageModule } from './page/page.module';
import { SettingDrawerModule } from './setting-drawer/setting-drawer.module';

@NgModule({
  exports: [
    HeaderModule,
    LayoutModule,
    MarkdownModule,
    MenuModule,
    NoticePopoverModule,
    PageModule,
    SettingDrawerModule
  ]
})
export class ComponentsModule { }
