import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenukaJogavaPage } from './renuka-jogava.page';

const routes: Routes = [
  {
    path: '',
    component: RenukaJogavaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenukaJogavaPageRoutingModule {}
