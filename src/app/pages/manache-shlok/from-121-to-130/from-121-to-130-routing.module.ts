import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From121To130Page } from './from-121-to-130.page';

const routes: Routes = [
  {
    path: '',
    component: From121To130Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From121To130PageRoutingModule {}
