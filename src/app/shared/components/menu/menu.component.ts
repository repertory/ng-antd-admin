import { Component, Input } from '@angular/core';

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
  @Input() setting: any = {};
  @Input() mode: string = 'inline';
  @Input() inlineCollapsed: boolean = false;

}
