import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay11PageRoutingModule } from './adhyaay-11-routing.module';

import { Adhyaay11Page } from './adhyaay-11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay11PageRoutingModule
  ],
  declarations: [Adhyaay11Page]
})
export class Adhyaay11PageModule {}
