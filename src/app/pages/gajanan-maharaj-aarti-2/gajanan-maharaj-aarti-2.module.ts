import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GajananMaharajAarti2PageRoutingModule } from './gajanan-maharaj-aarti-2-routing.module';

import { GajananMaharajAarti2Page } from './gajanan-maharaj-aarti-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GajananMaharajAarti2PageRoutingModule
  ],
  declarations: [GajananMaharajAarti2Page]
})
export class GajananMaharajAarti2PageModule {}
