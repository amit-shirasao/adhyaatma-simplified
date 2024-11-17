import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenukaAarti3PageRoutingModule } from './renuka-aarti-3-routing.module';

import { RenukaAarti3Page } from './renuka-aarti-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenukaAarti3PageRoutingModule
  ],
  declarations: [RenukaAarti3Page]
})
export class RenukaAarti3PageModule {}
