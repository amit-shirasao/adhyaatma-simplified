import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MahalaxmiAartiPageRoutingModule } from './mahalaxmi-aarti-routing.module';

import { MahalaxmiAartiPage } from './mahalaxmi-aarti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MahalaxmiAartiPageRoutingModule
  ],
  declarations: [MahalaxmiAartiPage]
})
export class MahalaxmiAartiPageModule {}
