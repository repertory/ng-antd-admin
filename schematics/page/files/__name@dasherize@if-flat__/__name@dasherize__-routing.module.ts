import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

const routes: Routes = [
  {
    path: '<%= name %>',
    component: <%= classify(name) %>Component<% if(children) { %>,
    loadChildren: '<%= children %>#<%= classify(name) %>ChildrenModule'<% } %>
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <%= classify(name) %>RoutingModule { }
