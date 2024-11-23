import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From201To205Page } from './from-201-to-205.page';

const routes: Routes = [
  {
    path: '',
    component: From201To205Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From201To205PageRoutingModule {}
