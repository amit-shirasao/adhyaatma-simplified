import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay14PageRoutingModule } from './adhyaay-14-routing.module';

import { Adhyaay14Page } from './adhyaay-14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay14PageRoutingModule
  ],
  declarations: [Adhyaay14Page]
})
export class Adhyaay14PageModule {}
