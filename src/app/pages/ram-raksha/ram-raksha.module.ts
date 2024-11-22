import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamRakshaPageRoutingModule } from './ram-raksha-routing.module';

import { RamRakshaPage } from './ram-raksha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamRakshaPageRoutingModule
  ],
  declarations: [RamRakshaPage]
})
export class RamRakshaPageModule {}
