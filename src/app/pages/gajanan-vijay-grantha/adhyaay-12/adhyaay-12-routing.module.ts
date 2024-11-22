import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay12Page } from './adhyaay-12.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay12PageRoutingModule {}
