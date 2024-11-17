import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenukaAshtak3Page } from './renuka-ashtak-3.page';

const routes: Routes = [
  {
    path: '',
    component: RenukaAshtak3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenukaAshtak3PageRoutingModule {}
