import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamRakshaPage } from './ram-raksha.page';

const routes: Routes = [
  {
    path: '',
    component: RamRakshaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamRakshaPageRoutingModule {}
