import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay18PageRoutingModule } from './adhyaay-18-routing.module';

import { Adhyaay18Page } from './adhyaay-18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay18PageRoutingModule
  ],
  declarations: [Adhyaay18Page]
})
export class Adhyaay18PageModule {}
