import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GanapatiStotraPage } from './ganapati-stotra.page';

const routes: Routes = [
  {
    path: '',
    component: GanapatiStotraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GanapatiStotraPageRoutingModule {}
