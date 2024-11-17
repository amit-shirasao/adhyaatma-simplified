import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VitthalAartiPageRoutingModule } from './vitthal-aarti-routing.module';

import { VitthalAartiPage } from './vitthal-aarti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VitthalAartiPageRoutingModule
  ],
  declarations: [VitthalAartiPage]
})
export class VitthalAartiPageModule {}
