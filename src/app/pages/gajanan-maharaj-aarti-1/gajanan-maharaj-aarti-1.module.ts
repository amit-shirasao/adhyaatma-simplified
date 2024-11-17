import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GajananMaharajAarti1PageRoutingModule } from './gajanan-maharaj-aarti-1-routing.module';

import { GajananMaharajAarti1Page } from './gajanan-maharaj-aarti-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GajananMaharajAarti1PageRoutingModule
  ],
  declarations: [GajananMaharajAarti1Page]
})
export class GajananMaharajAarti1PageModule {}
