import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShlokSelectionPage } from './shlok-selection.page';

const routes: Routes = [
  {
    path: '',
    component: ShlokSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShlokSelectionPageRoutingModule {}
