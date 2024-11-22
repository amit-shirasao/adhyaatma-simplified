import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adhyaay3PageRoutingModule } from './adhyaay-3-routing.module';

import { Adhyaay3Page } from './adhyaay-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adhyaay3PageRoutingModule
  ],
  declarations: [Adhyaay3Page]
})
export class Adhyaay3PageModule {}
