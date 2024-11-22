import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay7Page } from './adhyaay-7.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay7PageRoutingModule {}
