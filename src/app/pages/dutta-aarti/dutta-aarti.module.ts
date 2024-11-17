import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuttaAartiPageRoutingModule } from './dutta-aarti-routing.module';

import { DuttaAartiPage } from './dutta-aarti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuttaAartiPageRoutingModule
  ],
  declarations: [DuttaAartiPage]
})
export class DuttaAartiPageModule {}
