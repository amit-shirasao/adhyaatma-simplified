import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay10PageRoutingModule } from './adhyaay-10-routing.module';

import { Adhyaay10Page } from './adhyaay-10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay10PageRoutingModule
  ],
  declarations: [Adhyaay10Page]
})
export class Adhyaay10PageModule {}
