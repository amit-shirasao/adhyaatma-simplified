import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenukaPadaPageRoutingModule } from './renuka-pada-routing.module';

import { RenukaPadaPage } from './renuka-pada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenukaPadaPageRoutingModule
  ],
  declarations: [RenukaPadaPage]
})
export class RenukaPadaPageModule {}
