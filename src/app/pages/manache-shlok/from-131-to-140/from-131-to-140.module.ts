import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From131To140PageRoutingModule } from './from-131-to-140-routing.module';

import { From131To140Page } from './from-131-to-140.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From131To140PageRoutingModule
  ],
  declarations: [From131To140Page]
})
export class From131To140PageModule {}
