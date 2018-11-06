import { Component, AfterContentInit, ElementRef, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as marked from 'marked';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-http';

@Component({
  selector: 'markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.less']
})
export class MarkdownComponent implements AfterContentInit {

  private data = {
    src: '',
    value: ''
  };

  markdown: string = '';

  @Input()
  get value(): string {
    return this.data.value;
  }
  set value(val: string) {
    this.data.value = val;
    this.markdown = marked(val.trim(), {
      gfm: true,
      tables: true,
      headerIds: false,
      sanitize: false
    });
    this.element.nativeElement.innerHTML = this.markdown;
    Prism.highlightAllUnder(this.element.nativeElement);
  }

  @Input()
  get src(): string {
    return this.data.src;
  }
  set src(val: string) {
    this.value = 'loading...';
    this.data.src = val;
    this.http.get(val, { responseType: 'text' }).toPromise()
      .then(data => this.value = data)
      .catch((err: HttpErrorResponse) => this.value = err.message);
  }

  constructor(private element: ElementRef, private http: HttpClient) { }

  ngAfterContentInit() {
    if (!this.markdown) {
      this.value = this.element.nativeElement.innerText;
    }
  }

}
