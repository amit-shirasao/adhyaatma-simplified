import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenukaAarti1PageRoutingModule } from './renuka-aarti-1-routing.module';

import { RenukaAarti1Page } from './renuka-aarti-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenukaAarti1PageRoutingModule
  ],
  declarations: [RenukaAarti1Page]
})
export class RenukaAarti1PageModule {}
