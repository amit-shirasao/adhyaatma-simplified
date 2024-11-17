import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenukaAarti2PageRoutingModule } from './renuka-aarti-2-routing.module';

import { RenukaAarti2Page } from './renuka-aarti-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenukaAarti2PageRoutingModule
  ],
  declarations: [RenukaAarti2Page]
})
export class RenukaAarti2PageModule {}
