import { Component, Input, Output, EventEmitter } from '@angular/core';

interface SettingInterface {
  theme: string;
  color: string;
  mode: string;
  fixedWidth: boolean;
  colorweak: boolean;
}

@Component({
  selector: 'app-setting-drawer',
  templateUrl: './setting-drawer.component.html',
  styleUrls: ['./setting-drawer.component.less']
})
export class SettingDrawerComponent {

  @Output() settingChange = new EventEmitter();

  @Input() innerClass: object = {};
  @Input()
  get setting(): SettingInterface {
    return this.options;
  }
  set setting(val: SettingInterface) {
    this.options = val;
    this.settingChange.emit(this.options);
  }

  isCollapsed = true;
  options = {
    theme: 'dark',
    color: 'daybreak',
    mode: 'side',
    fixedWidth: false,
    colorweak: false
  };

  themes = [
    {
      key: 'dark',
      image: '/assets/images/theme-dark.svg',
      title: '暗色菜单风格'
    },
    {
      key: 'light',
      image: '/assets/images/theme-light.svg',
      title: '亮色菜单风格'
    }
  ];

  colors = [
    {
      key: 'dust',
      color: '#F5222D',
      title: '薄暮'
    },
    {
      key: 'volcano',
      color: '#FA541C',
      title: '火山'
    },
    {
      key: 'sunset',
      color: '#FAAD14',
      title: '日暮'
    },
    {
      key: 'cyan',
      color: '#13C2C2',
      title: '明青'
    },
    {
      key: 'green',
      color: '#52C41A',
      title: '极光绿'
    },
    {
      key: 'daybreak',
      color: '#1890FF',
      title: '拂晓蓝（默认）'
    },
    {
      key: 'geekblue',
      color: '#2F54EB',
      title: '极客蓝'
    },
    {
      key: 'purple',
      color: '#722ED1',
      title: '酱紫'
    },
  ];

  modes = [
    {
      key: 'side',
      image: '/assets/images/menu-side.svg',
      title: '侧边菜单布局'
    },
    {
      key: 'top',
      image: '/assets/images/menu-top.svg',
      title: '顶部菜单布局'
    }
  ];

  layouts = [
    {
      key: 'fixedWidth',
      title: '固定宽度',
      disabled: function (setting) {
        return setting.mode == 'side';
      }
    }
  ];

  others = [
    {
      key: 'colorweak',
      title: '色弱模式'
    }
  ];

}
