import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From171To180PageRoutingModule } from './from-171-to-180-routing.module';

import { From171To180Page } from './from-171-to-180.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From171To180PageRoutingModule
  ],
  declarations: [From171To180Page]
})
export class From171To180PageModule {}
