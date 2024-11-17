import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamDhawaPageRoutingModule } from './ram-dhawa-routing.module';

import { RamDhawaPage } from './ram-dhawa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamDhawaPageRoutingModule
  ],
  declarations: [RamDhawaPage]
})
export class RamDhawaPageModule {}
