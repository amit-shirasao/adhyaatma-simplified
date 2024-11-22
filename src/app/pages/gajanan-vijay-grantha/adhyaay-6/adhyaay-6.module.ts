import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay6PageRoutingModule } from './adhyaay-6-routing.module';

import { Adhyaay6Page } from './adhyaay-6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay6PageRoutingModule
  ],
  declarations: [Adhyaay6Page]
})
export class Adhyaay6PageModule {}
