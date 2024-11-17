import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenukaAarti2Page } from './renuka-aarti-2.page';

const routes: Routes = [
  {
    path: '',
    component: RenukaAarti2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenukaAarti2PageRoutingModule {}
