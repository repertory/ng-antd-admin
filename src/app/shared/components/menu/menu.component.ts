import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';

import { LayoutComponent } from '../layout/layout.component';

interface MenuInterface {
  title?: string;
  icon?: string;
  routerLink?: string | object;
  children?: MenuInterface[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {

  private _mode = 'inline';

  @Input() data: MenuInterface[] = [];
  @Input() inlineCollapsed: boolean = false;

  @Input()
  set mode(value: string) {
    this._mode = value;
    this.cdr.detectChanges();
  }
  get mode(): string {
    return this._mode;
  }

  get setting() {
    return this.layout.setting;
  }

  constructor(private layout: LayoutComponent, private cdr: ChangeDetectorRef) { }

}
