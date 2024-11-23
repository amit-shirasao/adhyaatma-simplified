import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From051To060Page } from './from-051-to-060.page';

const routes: Routes = [
  {
    path: '',
    component: From051To060Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From051To060PageRoutingModule {}
