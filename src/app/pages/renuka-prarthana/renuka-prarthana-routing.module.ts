import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenukaPrarthanaPage } from './renuka-prarthana.page';

const routes: Routes = [
  {
    path: '',
    component: RenukaPrarthanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenukaPrarthanaPageRoutingModule {}
