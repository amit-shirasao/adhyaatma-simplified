import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From081To090Page } from './from-081-to-090.page';

const routes: Routes = [
  {
    path: '',
    component: From081To090Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From081To090PageRoutingModule {}
