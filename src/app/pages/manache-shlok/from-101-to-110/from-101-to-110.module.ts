import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From101To110PageRoutingModule } from './from-101-to-110-routing.module';

import { From101To110Page } from './from-101-to-110.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From101To110PageRoutingModule
  ],
  declarations: [From101To110Page]
})
export class From101To110PageModule {}
