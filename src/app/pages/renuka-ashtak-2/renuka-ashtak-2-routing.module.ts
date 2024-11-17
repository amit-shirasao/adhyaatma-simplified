import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenukaAshtak2Page } from './renuka-ashtak-2.page';

const routes: Routes = [
  {
    path: '',
    component: RenukaAshtak2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenukaAshtak2PageRoutingModule {}
