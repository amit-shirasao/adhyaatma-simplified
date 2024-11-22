import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay18Page } from './adhyaay-18.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay18PageRoutingModule {}
