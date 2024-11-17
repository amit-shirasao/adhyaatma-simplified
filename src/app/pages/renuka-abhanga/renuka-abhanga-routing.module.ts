import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenukaAbhangaPage } from './renuka-abhanga.page';

const routes: Routes = [
  {
    path: '',
    component: RenukaAbhangaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenukaAbhangaPageRoutingModule {}
