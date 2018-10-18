import { Component, Input, Output, EventEmitter } from '@angular/core';

interface TabInterface {
  type: string;
  title: string;
  empty?: {
    image?: string;
    text?: string;
  };
  rows: any[];
  map?: Function;
}

@Component({
  selector: 'app-notice-popover',
  templateUrl: './notice-popover.component.html',
  styleUrls: ['./notice-popover.component.less']
})
export class NoticePopoverComponent {

  @Output() visibleChange = new EventEmitter();
  @Output() clear = new EventEmitter();

  @Input() visible: boolean = false;
  @Input() spinning: boolean = false;
  @Input() trigger: string = 'click';
  @Input() innerClass: object = {};

  @Input() tabs: TabInterface[] = [
    {
      type: 'notification',
      title: '通知',
      empty: {
        image: '/assets/images/notification.svg',
        text: '你已查看所有通知'
      },
      rows: []
    },
    {
      type: 'message',
      title: '消息',
      empty: {
        image: '/assets/images/message.svg',
        text: '你已读完所有消息'
      },
      rows: []
    },
    {
      type: 'event',
      title: '待办',
      empty: {
        image: '/assets/images/event.svg',
        text: '你已完成所有待办'
      },
      rows: [],
      map: function (row) {
        row['color'] = {
          todo: 'magenta',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[row.status];
        return row;
      }
    }
  ];
  @Input()
  get data(): any[] {
    return this.tabs.map(tab => tab.rows).reduce((x, y) => x.concat(y));
  }
  set data(rows: any[]) {
    this.tabs.forEach(tab =>
      tab.rows = rows
        .filter(row => row.type == tab.type)
        .map(row => tab.map ? tab.map(row) : row)
    );
  }

}
