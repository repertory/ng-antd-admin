import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { MarkdownModule } from './markdown/markdown.module';
import { NavbarModule } from './navbar/navbar.module';
import { NoticePopoverModule } from './notice-popover/notice-popover.module';
import { PageModule } from './page/page.module';
import { SettingDrawerModule } from './setting-drawer/setting-drawer.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  exports: [
    LayoutModule,
    MarkdownModule,
    NavbarModule,
    NoticePopoverModule,
    PageModule,
    SettingDrawerModule,
    ToolbarModule
  ]
})
export class ComponentsModule { }
