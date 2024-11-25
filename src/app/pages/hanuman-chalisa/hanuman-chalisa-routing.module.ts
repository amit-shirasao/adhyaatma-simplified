import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HanumanChalisaPage } from './hanuman-chalisa.page';

const routes: Routes = [
  {
    path: '',
    component: HanumanChalisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HanumanChalisaPageRoutingModule {}
