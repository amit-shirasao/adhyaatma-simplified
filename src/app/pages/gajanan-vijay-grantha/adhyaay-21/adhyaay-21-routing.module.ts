import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay21Page } from './adhyaay-21.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay21PageRoutingModule {}
