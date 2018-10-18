import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.less']
})
export class ExceptionComponent implements OnInit {

  code = 404;
  data = {
    403: {
      image: 'url(/assets/images/403.svg)',
      desc: '抱歉，你无权访问该页面',
      backText: '返回首页',
      backLink: ['/']
    },
    404: {
      image: 'url(/assets/images/404.svg)',
      desc: '抱歉，你访问的页面不存在',
      backText: '返回首页',
      backLink: ['/']
    },
    500: {
      image: 'url(/assets/images/500.svg)',
      desc: '抱歉，服务器出错了',
      backText: '返回首页',
      backLink: ['/']
    }
  };

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.code = parseInt(params.code);
      if (!this.data[this.code]) {
        this.code = 404;
      }
    });
  }

  ngOnInit() {
  }

}
