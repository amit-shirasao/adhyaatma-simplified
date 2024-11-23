import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From181To190PageRoutingModule } from './from-181-to-190-routing.module';

import { From181To190Page } from './from-181-to-190.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From181To190PageRoutingModule
  ],
  declarations: [From181To190Page]
})
export class From181To190PageModule {}
