import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From021To030Page } from './from-021-to-030.page';

const routes: Routes = [
  {
    path: '',
    component: From021To030Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From021To030PageRoutingModule {}
