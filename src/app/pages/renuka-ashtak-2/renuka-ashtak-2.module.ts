import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenukaAshtak2PageRoutingModule } from './renuka-ashtak-2-routing.module';

import { RenukaAshtak2Page } from './renuka-ashtak-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenukaAshtak2PageRoutingModule
  ],
  declarations: [RenukaAshtak2Page]
})
export class RenukaAshtak2PageModule {}
