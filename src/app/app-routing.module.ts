import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './app-children.module#AppChildrenModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/exception/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
