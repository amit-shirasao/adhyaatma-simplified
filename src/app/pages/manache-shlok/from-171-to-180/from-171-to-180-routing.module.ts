import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From171To180Page } from './from-171-to-180.page';

const routes: Routes = [
  {
    path: '',
    component: From171To180Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From171To180PageRoutingModule {}
