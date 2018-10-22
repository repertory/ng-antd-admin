import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NzIconService } from 'ng-zorro-antd';
import {
  UserOutline,
  SettingOutline,
  LogoutOutline,
  BellOutline,
  GithubOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  WarningOutline,
  QuestionCircleOutline,
  LockOutline,
} from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-root,[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  host: {
    '[class.colorweak]': 'layout.setting.colorweak',
    '[attr.theme]': 'layout.setting.theme',
    '[attr.color]': 'layout.setting.color',
    '[attr.mode]': 'layout.setting.mode'
  }
})
export class AppComponent {

  layout = {
    collapsed: true,
    siderMode: 'side',
    region: {
      sider: false,
      header: false,
      content: true,
      footer: false
    },
    setting: {
      theme: 'dark',
      color: 'daybreak',
      mode: 'side',
      fixedWidth: false,
      colorweak: false
    },
    topMode: function () {
      return this.siderMode != 'over' && this.setting.mode == 'top';
    }
  };

  menu = [
    {
      title: '我的面板',
      icon: 'user',
      children: [
        { title: '个人中心', routerLink: '/' },
        {
          title: '个人设置', routerLink: '/',
          // children: [
          //   { title: '系统设置', routerLink: '' },
          //   { title: '其他设置', routerLink: '' }
          // ]
        }
      ]
    },
    {
      title: '系统设置',
      icon: 'setting',
      children: [
        { title: '系统设置', routerLink: '/' },
        { title: '其他设置', routerLink: '/' }
      ]
    },
    {
      title: '异常页面',
      icon: 'warning',
      children: [
        { title: '403', routerLink: '/exception/403' },
        { title: '404', routerLink: '/exception/404' },
        { title: '500', routerLink: '/exception/500' }
      ]
    },
    {
      title: '关于系统',
      icon: 'question-circle',
      routerLink: '/'
    }
  ];

  notice = {
    spinning: false,
    data: [{ "id": "000000001", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png", "title": "你收到了 14 份新周报", "datetime": "2017-08-09", "type": "notification" }, { "id": "000000002", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png", "title": "你推荐的 曲妮妮 已通过第三轮面试", "datetime": "2017-08-08", "type": "notification" }, { "id": "000000003", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png", "title": "这种模板可以区分多种通知类型", "datetime": "2017-08-07", "read": true, "type": "notification" }, { "id": "000000004", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png", "title": "左侧图标用于区分不同的类型", "datetime": "2017-08-07", "type": "notification" }, { "id": "000000005", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png", "title": "内容不要超过两行字，超出时自动截断", "datetime": "2017-08-07", "type": "notification" }, { "id": "000000006", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg", "title": "曲丽丽 评论了你", "description": "描述信息描述信息描述信息", "datetime": "2017-08-07", "type": "message" }, { "id": "000000007", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg", "title": "朱偏右 回复了你", "description": "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像", "datetime": "2017-08-07", "type": "message" }, { "id": "000000008", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg", "title": "标题", "description": "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像", "datetime": "2017-08-07", "type": "message" }, { "id": "000000009", "title": "任务名称", "description": "任务需要在 2017-01-12 20:00 前启动", "extra": "未开始", "status": "todo", "type": "event" }, { "id": "000000010", "title": "第三方紧急代码变更", "description": "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务", "extra": "马上到期", "status": "urgent", "type": "event" }, { "id": "000000011", "title": "信息安全考试", "description": "指派竹尔于 2017-01-09 前完成更新并发布", "extra": "已耗时 8 天", "status": "doing", "type": "event" }, { "id": "000000012", "title": "ABCD 版本发布", "description": "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务", "extra": "进行中", "status": "processing", "type": "event" }],
    innerClass: { action: true, notice: true },
    clear: function (type) {
      this.data = this.data.filter(x => x.type != type);
    },
    visibleChange: function (status) {
      if (status) {
        this.spinning = true;
        setTimeout(() => this.spinning = false, 1000);
      }
    }
  };

  constructor(breakpointObserver: BreakpointObserver, router: Router, iconService: NzIconService) {
    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        this.layout.siderMode = result.matches ? 'over' : 'side';
        this.layout.collapsed = result.matches;
      });

    router.events.pipe(filter(event => event instanceof ActivationEnd))
      .subscribe((data: ActivationEnd) => {
        const layout = data.snapshot.data.layout || {};
        this.layout.region = layout.region || { sider: true, header: true, content: true, footer: true };

        if (this.layout.siderMode == 'over') {
          this.layout.collapsed = true;
        }
      });

    iconService.addIcon(...[
      UserOutline,
      SettingOutline,
      LogoutOutline,
      BellOutline,
      GithubOutline,
      MenuFoldOutline,
      MenuUnfoldOutline,
      WarningOutline,
      QuestionCircleOutline,
      LockOutline,
    ]);
  }

}
