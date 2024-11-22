import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay2Page } from './adhyaay-2.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay2PageRoutingModule {}
