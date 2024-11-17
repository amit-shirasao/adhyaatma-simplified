import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GanapatiAartiPageRoutingModule } from './ganapati-aarti-routing.module';

import { GanapatiAartiPage } from './ganapati-aarti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GanapatiAartiPageRoutingModule
  ],
  declarations: [GanapatiAartiPage]
})
export class GanapatiAartiPageModule {}
