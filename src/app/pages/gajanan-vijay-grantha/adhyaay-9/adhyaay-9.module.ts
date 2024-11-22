import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay9PageRoutingModule } from './adhyaay-9-routing.module';

import { Adhyaay9Page } from './adhyaay-9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay9PageRoutingModule
  ],
  declarations: [Adhyaay9Page]
})
export class Adhyaay9PageModule {}
