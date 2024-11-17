import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShankarAartiPageRoutingModule } from './shankar-aarti-routing.module';

import { ShankarAartiPage } from './shankar-aarti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShankarAartiPageRoutingModule
  ],
  declarations: [ShankarAartiPage]
})
export class ShankarAartiPageModule {}
