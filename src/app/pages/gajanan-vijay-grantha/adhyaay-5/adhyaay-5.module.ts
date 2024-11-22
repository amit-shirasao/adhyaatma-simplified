import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay5PageRoutingModule } from './adhyaay-5-routing.module';

import { Adhyaay5Page } from './adhyaay-5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay5PageRoutingModule
  ],
  declarations: [Adhyaay5Page]
})
export class Adhyaay5PageModule {}
