import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From181To190Page } from './from-181-to-190.page';

const routes: Routes = [
  {
    path: '',
    component: From181To190Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From181To190PageRoutingModule {}
