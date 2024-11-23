import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From151To160PageRoutingModule } from './from-151-to-160-routing.module';

import { From151To160Page } from './from-151-to-160.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From151To160PageRoutingModule
  ],
  declarations: [From151To160Page]
})
export class From151To160PageModule {}
