import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From161To170PageRoutingModule } from './from-161-to-170-routing.module';

import { From161To170Page } from './from-161-to-170.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From161To170PageRoutingModule
  ],
  declarations: [From161To170Page]
})
export class From161To170PageModule {}
