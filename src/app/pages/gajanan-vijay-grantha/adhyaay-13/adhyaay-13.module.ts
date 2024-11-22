import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay13PageRoutingModule } from './adhyaay-13-routing.module';

import { Adhyaay13Page } from './adhyaay-13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay13PageRoutingModule
  ],
  declarations: [Adhyaay13Page]
})
export class Adhyaay13PageModule {}
