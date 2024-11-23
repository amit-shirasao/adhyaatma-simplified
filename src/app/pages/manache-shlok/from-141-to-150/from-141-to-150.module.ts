import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From141To150PageRoutingModule } from './from-141-to-150-routing.module';

import { From141To150Page } from './from-141-to-150.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From141To150PageRoutingModule
  ],
  declarations: [From141To150Page]
})
export class From141To150PageModule {}
