import { NgModule } from '@angular/core';<% if (commonModule) { %>
import { CommonModule } from '@angular/common';<% } %>
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from '~/shared/shared.module';<% if (routing) { %>
import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';<% } %>
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

@NgModule({
  imports: [<% if (commonModule) { %>
    CommonModule,
    NgZorroAntdModule,
    SharedModule<%= routing ? ',' : '' %><% } %><% if (routing) { %>
    <%= classify(name) %>RoutingModule<% } %>
  ],
  declarations: [<%= classify(name) %>Component]
})
export class <%= classify(name) %>Module { }
