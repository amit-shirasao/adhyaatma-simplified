import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay17PageRoutingModule } from './adhyaay-17-routing.module';

import { Adhyaay17Page } from './adhyaay-17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay17PageRoutingModule
  ],
  declarations: [Adhyaay17Page]
})
export class Adhyaay17PageModule {}
