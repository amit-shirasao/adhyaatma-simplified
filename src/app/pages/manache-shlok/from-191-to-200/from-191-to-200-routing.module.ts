import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From191To200Page } from './from-191-to-200.page';

const routes: Routes = [
  {
    path: '',
    component: From191To200Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From191To200PageRoutingModule {}
