import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {

  isCollapsed = true;

  @Output() collapsedChange = new EventEmitter();

  @Input() region: { [key: string]: boolean; } = { sider: true, header: true, content: true, footer: true };
  @Input() siderWidth: number = 256;
  @Input() siderMode: string = 'side';
  @Input() topMode: boolean = false;
  @Input() setting: any = {};

  @Input()
  get collapsed(): boolean {
    return this.isCollapsed;
  }
  set collapsed(val: boolean) {
    this.isCollapsed = val;
    this.collapsedChange.emit(this.isCollapsed);
  }

}
