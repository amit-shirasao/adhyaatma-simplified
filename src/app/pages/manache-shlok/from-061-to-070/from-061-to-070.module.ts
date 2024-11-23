import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From061To070PageRoutingModule } from './from-061-to-070-routing.module';

import { From061To070Page } from './from-061-to-070.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From061To070PageRoutingModule
  ],
  declarations: [From061To070Page]
})
export class From061To070PageModule {}
