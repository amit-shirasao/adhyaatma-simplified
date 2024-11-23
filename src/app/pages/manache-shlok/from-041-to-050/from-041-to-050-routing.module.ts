import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From041To050Page } from './from-041-to-050.page';

const routes: Routes = [
  {
    path: '',
    component: From041To050Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From041To050PageRoutingModule {}
