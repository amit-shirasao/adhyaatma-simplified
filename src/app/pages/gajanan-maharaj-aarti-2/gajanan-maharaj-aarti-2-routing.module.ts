import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GajananMaharajAarti2Page } from './gajanan-maharaj-aarti-2.page';

const routes: Routes = [
  {
    path: '',
    component: GajananMaharajAarti2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GajananMaharajAarti2PageRoutingModule {}
