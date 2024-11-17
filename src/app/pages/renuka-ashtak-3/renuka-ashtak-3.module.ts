import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenukaAshtak3PageRoutingModule } from './renuka-ashtak-3-routing.module';

import { RenukaAshtak3Page } from './renuka-ashtak-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenukaAshtak3PageRoutingModule
  ],
  declarations: [RenukaAshtak3Page]
})
export class RenukaAshtak3PageModule {}
