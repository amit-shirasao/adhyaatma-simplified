import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay14Page } from './adhyaay-14.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay14PageRoutingModule {}
