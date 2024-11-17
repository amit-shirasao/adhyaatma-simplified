import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VishnuAartiPageRoutingModule } from './vishnu-aarti-routing.module';

import { VishnuAartiPage } from './vishnu-aarti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VishnuAartiPageRoutingModule
  ],
  declarations: [VishnuAartiPage]
})
export class VishnuAartiPageModule {}
