import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay20Page } from './adhyaay-20.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay20PageRoutingModule {}
