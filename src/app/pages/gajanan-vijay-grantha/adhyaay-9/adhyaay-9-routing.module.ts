import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay9Page } from './adhyaay-9.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay9PageRoutingModule {}
