import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaiBabaAartiPage } from './sai-baba-aarti.page';

const routes: Routes = [
  {
    path: '',
    component: SaiBabaAartiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaiBabaAartiPageRoutingModule {}
