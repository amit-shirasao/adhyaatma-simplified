import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay1PageRoutingModule } from './adhyaay-1-routing.module';

import { Adhyaay1Page } from './adhyaay-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay1PageRoutingModule
  ],
  declarations: [Adhyaay1Page]
})
export class Adhyaay1PageModule {}
