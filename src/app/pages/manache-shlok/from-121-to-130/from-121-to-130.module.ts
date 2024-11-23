import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From121To130PageRoutingModule } from './from-121-to-130-routing.module';

import { From121To130Page } from './from-121-to-130.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From121To130PageRoutingModule
  ],
  declarations: [From121To130Page]
})
export class From121To130PageModule {}
