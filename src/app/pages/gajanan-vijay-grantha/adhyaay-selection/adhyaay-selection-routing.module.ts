import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdhyaaySelectionPage } from './adhyaay-selection.page';

const routes: Routes = [
  {
    path: '',
    component: AdhyaaySelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdhyaaySelectionPageRoutingModule {}
