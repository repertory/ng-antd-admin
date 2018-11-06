import { Component } from '@angular/core';

import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent {

  get setting() {
    return this.layout.setting;
  }

  get topMode() {
    return this.layout.topMode;
  }

  constructor(private layout: LayoutComponent) { }

}
