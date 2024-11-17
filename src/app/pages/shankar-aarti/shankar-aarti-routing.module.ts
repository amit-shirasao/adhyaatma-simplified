import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShankarAartiPage } from './shankar-aarti.page';

const routes: Routes = [
  {
    path: '',
    component: ShankarAartiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShankarAartiPageRoutingModule {}
