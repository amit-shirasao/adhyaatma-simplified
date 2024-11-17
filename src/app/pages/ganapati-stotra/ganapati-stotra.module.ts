import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GanapatiStotraPageRoutingModule } from './ganapati-stotra-routing.module';

import { GanapatiStotraPage } from './ganapati-stotra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GanapatiStotraPageRoutingModule
  ],
  declarations: [GanapatiStotraPage]
})
export class GanapatiStotraPageModule {}
