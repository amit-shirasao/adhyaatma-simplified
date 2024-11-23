import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From111To120Page } from './from-111-to-120.page';

const routes: Routes = [
  {
    path: '',
    component: From111To120Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From111To120PageRoutingModule {}
