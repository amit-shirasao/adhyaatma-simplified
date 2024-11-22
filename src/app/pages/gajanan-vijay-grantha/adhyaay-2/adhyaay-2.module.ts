import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay2PageRoutingModule } from './adhyaay-2-routing.module';

import { Adhyaay2Page } from './adhyaay-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay2PageRoutingModule
  ],
  declarations: [Adhyaay2Page]
})
export class Adhyaay2PageModule {}
