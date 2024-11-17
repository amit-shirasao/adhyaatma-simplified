import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GanapatiAtharvasheershaPage } from './ganapati-atharvasheersha.page';

const routes: Routes = [
  {
    path: '',
    component: GanapatiAtharvasheershaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GanapatiAtharvasheershaPageRoutingModule {}
