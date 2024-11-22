import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay20PageRoutingModule } from './adhyaay-20-routing.module';

import { Adhyaay20Page } from './adhyaay-20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay20PageRoutingModule
  ],
  declarations: [Adhyaay20Page]
})
export class Adhyaay20PageModule {}
