import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From141To150Page } from './from-141-to-150.page';

const routes: Routes = [
  {
    path: '',
    component: From141To150Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From141To150PageRoutingModule {}
