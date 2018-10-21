import { Component, AfterViewInit, Input, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-page,[app-page]',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less'],
  host: {
    '[class.wide]': 'isWide',
    '[attr.mode]': 'mode'
  }
})
export class PageComponent implements AfterViewInit {

  private data = {
    title: ''
  };

  @Input() header: TemplateRef<void> | null = null;
  @Input() mode: string = 'layout';
  @Input()
  get title(): string {
    return this.data.title;
  }
  set title(val: string) {
    this.data.title = val;
    this.pageTitle.setTitle(val);
  }

  get isWide(): boolean {
    return this.layout.setting.mode == 'top' && this.layout.setting.fixedWidth;
  }

  constructor(private layout: LayoutComponent, private pageTitle: Title) { }

  ngAfterViewInit() {
    if (!this.title) {
      this.title = '';
    }
  }

}
