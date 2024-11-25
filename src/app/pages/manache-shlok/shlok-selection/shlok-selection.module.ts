import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShlokSelectionPageRoutingModule } from './shlok-selection-routing.module';

import { ShlokSelectionPage } from './shlok-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShlokSelectionPageRoutingModule
  ],
  declarations: [ShlokSelectionPage]
})
export class ShlokSelectionPageModule {}
