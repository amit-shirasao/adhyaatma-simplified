import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay15Page } from './adhyaay-15.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay15PageRoutingModule {}
