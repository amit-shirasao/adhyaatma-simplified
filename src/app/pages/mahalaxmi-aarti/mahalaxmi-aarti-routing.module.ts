import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MahalaxmiAartiPage } from './mahalaxmi-aarti.page';

const routes: Routes = [
  {
    path: '',
    component: MahalaxmiAartiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MahalaxmiAartiPageRoutingModule {}
