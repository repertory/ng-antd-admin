import { Component, Input } from '@angular/core';
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

  @Input() data: MenuInterface[] = [];
  @Input() mode: string = 'inline';
  @Input() inlineCollapsed: boolean = false;

  get setting() {
    return this.layout.setting;
  }

  constructor(private layout: LayoutComponent) { }

}
