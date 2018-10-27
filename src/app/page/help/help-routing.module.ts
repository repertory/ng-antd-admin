import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './help.component';

const routes: Routes = [
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: '',
    redirectTo: '/page/help'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
