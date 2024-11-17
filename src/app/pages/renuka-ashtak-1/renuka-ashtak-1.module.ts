import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenukaAshtak1PageRoutingModule } from './renuka-ashtak-1-routing.module';

import { RenukaAshtak1Page } from './renuka-ashtak-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenukaAshtak1PageRoutingModule
  ],
  declarations: [RenukaAshtak1Page]
})
export class RenukaAshtak1PageModule {}
