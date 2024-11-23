import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From051To060PageRoutingModule } from './from-051-to-060-routing.module';

import { From051To060Page } from './from-051-to-060.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From051To060PageRoutingModule
  ],
  declarations: [From051To060Page]
})
export class From051To060PageModule {}
