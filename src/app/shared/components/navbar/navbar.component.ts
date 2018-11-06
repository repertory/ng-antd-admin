import { Component, Input } from '@angular/core';

import { LayoutComponent } from '../layout/layout.component';

interface MenuInterface {
  title?: string;
  icon?: string;
  routerLink?: string | object;
  children?: MenuInterface[];
}

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {

  @Input() data: MenuInterface[] = [];
  @Input() inlineCollapsed: boolean = false;
  @Input() mode = 'inline';

  get setting() {
    return this.layout.setting;
  }

  constructor(private layout: LayoutComponent) { }

}
