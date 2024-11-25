import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdhyaaySelectionPageRoutingModule } from './adhyaay-selection-routing.module';

import { AdhyaaySelectionPage } from './adhyaay-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdhyaaySelectionPageRoutingModule
  ],
  declarations: [AdhyaaySelectionPage]
})
export class AdhyaaySelectionPageModule {}
