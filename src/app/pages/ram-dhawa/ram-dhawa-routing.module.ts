import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamDhawaPage } from './ram-dhawa.page';

const routes: Routes = [
  {
    path: '',
    component: RamDhawaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamDhawaPageRoutingModule {}
