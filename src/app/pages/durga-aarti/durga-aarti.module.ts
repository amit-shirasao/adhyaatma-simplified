import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DurgaAartiPageRoutingModule } from './durga-aarti-routing.module';

import { DurgaAartiPage } from './durga-aarti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DurgaAartiPageRoutingModule
  ],
  declarations: [DurgaAartiPage]
})
export class DurgaAartiPageModule {}
