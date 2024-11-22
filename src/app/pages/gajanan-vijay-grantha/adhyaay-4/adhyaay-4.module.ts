import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay4PageRoutingModule } from './adhyaay-4-routing.module';

import { Adhyaay4Page } from './adhyaay-4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay4PageRoutingModule
  ],
  declarations: [Adhyaay4Page]
})
export class Adhyaay4PageModule {}
