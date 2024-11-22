import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay10Page } from './adhyaay-10.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay10PageRoutingModule {}
