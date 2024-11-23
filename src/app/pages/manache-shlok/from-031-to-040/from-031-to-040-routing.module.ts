import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From031To040Page } from './from-031-to-040.page';

const routes: Routes = [
  {
    path: '',
    component: From031To040Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From031To040PageRoutingModule {}
