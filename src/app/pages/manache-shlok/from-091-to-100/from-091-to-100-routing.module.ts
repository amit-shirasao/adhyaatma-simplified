import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From091To100Page } from './from-091-to-100.page';

const routes: Routes = [
  {
    path: '',
    component: From091To100Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From091To100PageRoutingModule {}
