import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenukaPadaPage } from './renuka-pada.page';

const routes: Routes = [
  {
    path: '',
    component: RenukaPadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenukaPadaPageRoutingModule {}
