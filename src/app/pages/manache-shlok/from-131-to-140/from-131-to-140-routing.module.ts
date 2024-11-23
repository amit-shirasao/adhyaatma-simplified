import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From131To140Page } from './from-131-to-140.page';

const routes: Routes = [
  {
    path: '',
    component: From131To140Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From131To140PageRoutingModule {}
