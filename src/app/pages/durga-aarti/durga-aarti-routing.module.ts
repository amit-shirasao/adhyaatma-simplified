import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DurgaAartiPage } from './durga-aarti.page';

const routes: Routes = [
  {
    path: '',
    component: DurgaAartiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DurgaAartiPageRoutingModule {}
