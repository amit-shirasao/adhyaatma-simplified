import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From001To010Page } from './from-001-to-010.page';

const routes: Routes = [
  {
    path: '',
    component: From001To010Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From001To010PageRoutingModule {}
