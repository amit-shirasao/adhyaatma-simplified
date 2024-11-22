import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay8PageRoutingModule } from './adhyaay-8-routing.module';

import { Adhyaay8Page } from './adhyaay-8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay8PageRoutingModule
  ],
  declarations: [Adhyaay8Page]
})
export class Adhyaay8PageModule {}
