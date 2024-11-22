import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay17Page } from './adhyaay-17.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay17PageRoutingModule {}
