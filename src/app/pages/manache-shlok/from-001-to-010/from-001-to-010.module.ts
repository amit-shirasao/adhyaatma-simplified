import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From001To010PageRoutingModule } from './from-001-to-010-routing.module';

import { From001To010Page } from './from-001-to-010.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From001To010PageRoutingModule
  ],
  declarations: [From001To010Page]
})
export class From001To010PageModule {}
