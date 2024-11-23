import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From111To120PageRoutingModule } from './from-111-to-120-routing.module';

import { From111To120Page } from './from-111-to-120.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From111To120PageRoutingModule
  ],
  declarations: [From111To120Page]
})
export class From111To120PageModule {}
