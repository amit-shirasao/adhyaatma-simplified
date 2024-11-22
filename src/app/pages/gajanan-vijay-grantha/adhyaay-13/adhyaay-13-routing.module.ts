import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay13Page } from './adhyaay-13.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay13PageRoutingModule {}
