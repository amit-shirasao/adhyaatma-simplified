import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay5Page } from './adhyaay-5.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay5PageRoutingModule {}
