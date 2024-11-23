import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From201To205PageRoutingModule } from './from-201-to-205-routing.module';

import { From201To205Page } from './from-201-to-205.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From201To205PageRoutingModule
  ],
  declarations: [From201To205Page]
})
export class From201To205PageModule {}
