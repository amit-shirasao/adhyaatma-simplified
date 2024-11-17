import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VishnuAartiPage } from './vishnu-aarti.page';

const routes: Routes = [
  {
    path: '',
    component: VishnuAartiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VishnuAartiPageRoutingModule {}
