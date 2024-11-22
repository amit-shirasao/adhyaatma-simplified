import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay15PageRoutingModule } from './adhyaay-15-routing.module';

import { Adhyaay15Page } from './adhyaay-15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay15PageRoutingModule
  ],
  declarations: [Adhyaay15Page]
})
export class Adhyaay15PageModule {}
