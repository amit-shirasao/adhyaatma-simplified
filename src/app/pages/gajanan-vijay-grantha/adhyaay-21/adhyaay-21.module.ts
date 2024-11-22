import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay21PageRoutingModule } from './adhyaay-21-routing.module';

import { Adhyaay21Page } from './adhyaay-21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay21PageRoutingModule
  ],
  declarations: [Adhyaay21Page]
})
export class Adhyaay21PageModule {}
