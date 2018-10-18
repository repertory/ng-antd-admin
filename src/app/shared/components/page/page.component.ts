import { Component, Input, TemplateRef } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-page,[app-page]',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less'],
  host: {
    '[class.wide]': 'isWide'
  }
})
export class PageComponent {

  @Input() header: TemplateRef<void> | null = null;

  get isWide(): boolean {
    return this.layout.setting.mode == 'top' && this.layout.setting.fixedWidth;
  }

  constructor(private layout: LayoutComponent) { }

}
