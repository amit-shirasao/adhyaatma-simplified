import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuttaAartiPage } from './dutta-aarti.page';

const routes: Routes = [
  {
    path: '',
    component: DuttaAartiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuttaAartiPageRoutingModule {}
