import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay4Page } from './adhyaay-4.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay4PageRoutingModule {}
