import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From071To080Page } from './from-071-to-080.page';

const routes: Routes = [
  {
    path: '',
    component: From071To080Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From071To080PageRoutingModule {}
