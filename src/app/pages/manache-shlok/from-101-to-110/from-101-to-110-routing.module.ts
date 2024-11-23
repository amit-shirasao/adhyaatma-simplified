import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From101To110Page } from './from-101-to-110.page';

const routes: Routes = [
  {
    path: '',
    component: From101To110Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From101To110PageRoutingModule {}
