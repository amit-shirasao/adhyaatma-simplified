import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay3Page } from './adhyaay-3.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay3PageRoutingModule {}
