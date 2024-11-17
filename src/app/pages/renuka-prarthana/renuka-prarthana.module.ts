import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenukaPrarthanaPageRoutingModule } from './renuka-prarthana-routing.module';

import { RenukaPrarthanaPage } from './renuka-prarthana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenukaPrarthanaPageRoutingModule
  ],
  declarations: [RenukaPrarthanaPage]
})
export class RenukaPrarthanaPageModule {}
