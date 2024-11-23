import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From151To160Page } from './from-151-to-160.page';

const routes: Routes = [
  {
    path: '',
    component: From151To160Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From151To160PageRoutingModule {}
