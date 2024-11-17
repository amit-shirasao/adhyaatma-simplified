import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GajananMaharajAarti1Page } from './gajanan-maharaj-aarti-1.page';

const routes: Routes = [
  {
    path: '',
    component: GajananMaharajAarti1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GajananMaharajAarti1PageRoutingModule {}
