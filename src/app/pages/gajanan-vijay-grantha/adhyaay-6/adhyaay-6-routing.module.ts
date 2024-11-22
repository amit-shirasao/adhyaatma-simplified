import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay6Page } from './adhyaay-6.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay6PageRoutingModule {}
