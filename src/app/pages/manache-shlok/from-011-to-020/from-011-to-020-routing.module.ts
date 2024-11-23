import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From011To020Page } from './from-011-to-020.page';

const routes: Routes = [
  {
    path: '',
    component: From011To020Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From011To020PageRoutingModule {}
