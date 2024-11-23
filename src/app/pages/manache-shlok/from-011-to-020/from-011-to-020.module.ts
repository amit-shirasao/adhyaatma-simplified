import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From011To020PageRoutingModule } from './from-011-to-020-routing.module';

import { From011To020Page } from './from-011-to-020.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From011To020PageRoutingModule
  ],
  declarations: [From011To020Page]
})
export class From011To020PageModule {}
