import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From031To040PageRoutingModule } from './from-031-to-040-routing.module';

import { From031To040Page } from './from-031-to-040.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From031To040PageRoutingModule
  ],
  declarations: [From031To040Page]
})
export class From031To040PageModule {}
