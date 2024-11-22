import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay12PageRoutingModule } from './adhyaay-12-routing.module';

import { Adhyaay12Page } from './adhyaay-12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay12PageRoutingModule
  ],
  declarations: [Adhyaay12Page]
})
export class Adhyaay12PageModule {}
