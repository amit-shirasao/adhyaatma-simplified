import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay7PageRoutingModule } from './adhyaay-7-routing.module';

import { Adhyaay7Page } from './adhyaay-7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay7PageRoutingModule
  ],
  declarations: [Adhyaay7Page]
})
export class Adhyaay7PageModule {}
