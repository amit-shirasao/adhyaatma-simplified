import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay19PageRoutingModule } from './adhyaay-19-routing.module';

import { Adhyaay19Page } from './adhyaay-19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay19PageRoutingModule
  ],
  declarations: [Adhyaay19Page]
})
export class Adhyaay19PageModule {}
