import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adhyaay16Page } from './adhyaay-16.page';

const routes: Routes = [
  {
    path: '',
    component: Adhyaay16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adhyaay16PageRoutingModule {}
