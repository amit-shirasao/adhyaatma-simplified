import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From161To170Page } from './from-161-to-170.page';

const routes: Routes = [
  {
    path: '',
    component: From161To170Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From161To170PageRoutingModule {}
