import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From061To070Page } from './from-061-to-070.page';

const routes: Routes = [
  {
    path: '',
    component: From061To070Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From061To070PageRoutingModule {}
