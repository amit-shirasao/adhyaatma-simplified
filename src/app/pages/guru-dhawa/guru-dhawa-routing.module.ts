import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuruDhawaPage } from './guru-dhawa.page';

const routes: Routes = [
  {
    path: '',
    component: GuruDhawaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuruDhawaPageRoutingModule {}
