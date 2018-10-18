import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExceptionComponent } from './exception.component';

const routes: Routes = [
  {
    path: 'exception/:code',
    component: ExceptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionRoutingModule { }
