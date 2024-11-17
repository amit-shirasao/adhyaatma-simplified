import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenukaJogavaPageRoutingModule } from './renuka-jogava-routing.module';

import { RenukaJogavaPage } from './renuka-jogava.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenukaJogavaPageRoutingModule
  ],
  declarations: [RenukaJogavaPage]
})
export class RenukaJogavaPageModule {}
