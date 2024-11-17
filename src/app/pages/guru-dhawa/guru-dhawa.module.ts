import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuruDhawaPageRoutingModule } from './guru-dhawa-routing.module';

import { GuruDhawaPage } from './guru-dhawa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuruDhawaPageRoutingModule
  ],
  declarations: [GuruDhawaPage]
})
export class GuruDhawaPageModule {}
