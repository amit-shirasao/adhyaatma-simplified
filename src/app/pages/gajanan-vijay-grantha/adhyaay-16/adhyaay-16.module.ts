import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay16PageRoutingModule } from './adhyaay-16-routing.module';

import { Adhyaay16Page } from './adhyaay-16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay16PageRoutingModule
  ],
  declarations: [Adhyaay16Page]
})
export class Adhyaay16PageModule {}
