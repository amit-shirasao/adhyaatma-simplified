import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenukaAarti3Page } from './renuka-aarti-3.page';

const routes: Routes = [
  {
    path: '',
    component: RenukaAarti3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenukaAarti3PageRoutingModule {}
