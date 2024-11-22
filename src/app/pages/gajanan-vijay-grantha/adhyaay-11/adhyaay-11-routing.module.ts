import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay11Page } from './adhyaay-11.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay11PageRoutingModule {}
