import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From041To050PageRoutingModule } from './from-041-to-050-routing.module';

import { From041To050Page } from './from-041-to-050.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From041To050PageRoutingModule
  ],
  declarations: [From041To050Page]
})
export class From041To050PageModule {}
