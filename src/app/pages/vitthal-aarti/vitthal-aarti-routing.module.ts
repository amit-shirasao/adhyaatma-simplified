import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VitthalAartiPage } from './vitthal-aarti.page';

const routes: Routes = [
  {
    path: '',
    component: VitthalAartiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VitthalAartiPageRoutingModule {}
