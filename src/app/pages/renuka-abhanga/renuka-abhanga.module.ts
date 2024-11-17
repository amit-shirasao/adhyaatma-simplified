import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenukaAbhangaPageRoutingModule } from './renuka-abhanga-routing.module';

import { RenukaAbhangaPage } from './renuka-abhanga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenukaAbhangaPageRoutingModule
  ],
  declarations: [RenukaAbhangaPage]
})
export class RenukaAbhangaPageModule {}
