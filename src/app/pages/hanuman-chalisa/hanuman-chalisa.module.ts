import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HanumanChalisaPageRoutingModule } from './hanuman-chalisa-routing.module';

import { HanumanChalisaPage } from './hanuman-chalisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HanumanChalisaPageRoutingModule
  ],
  declarations: [HanumanChalisaPage]
})
export class HanumanChalisaPageModule {}
