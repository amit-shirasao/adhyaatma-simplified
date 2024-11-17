import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaiBabaAartiPageRoutingModule } from './sai-baba-aarti-routing.module';

import { SaiBabaAartiPage } from './sai-baba-aarti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaiBabaAartiPageRoutingModule
  ],
  declarations: [SaiBabaAartiPage]
})
export class SaiBabaAartiPageModule {}
