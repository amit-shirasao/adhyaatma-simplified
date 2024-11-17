import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GanapatiAtharvasheershaPageRoutingModule } from './ganapati-atharvasheersha-routing.module';

import { GanapatiAtharvasheershaPage } from './ganapati-atharvasheersha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GanapatiAtharvasheershaPageRoutingModule
  ],
  declarations: [GanapatiAtharvasheershaPage]
})
export class GanapatiAtharvasheershaPageModule {}
