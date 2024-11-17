import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenukaAarti1Page } from './renuka-aarti-1.page';

const routes: Routes = [
  {
    path: '',
    component: RenukaAarti1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenukaAarti1PageRoutingModule {}
