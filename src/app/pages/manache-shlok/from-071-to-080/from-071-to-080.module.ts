import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From071To080PageRoutingModule } from './from-071-to-080-routing.module';

import { From071To080Page } from './from-071-to-080.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From071To080PageRoutingModule
  ],
  declarations: [From071To080Page]
})
export class From071To080PageModule {}
