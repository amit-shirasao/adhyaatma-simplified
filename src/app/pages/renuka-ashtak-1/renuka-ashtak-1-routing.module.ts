import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenukaAshtak1Page } from './renuka-ashtak-1.page';

const routes: Routes = [
  {
    path: '',
    component: RenukaAshtak1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenukaAshtak1PageRoutingModule {}
