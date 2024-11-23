import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From091To100PageRoutingModule } from './from-091-to-100-routing.module';

import { From091To100Page } from './from-091-to-100.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From091To100PageRoutingModule
  ],
  declarations: [From091To100Page]
})
export class From091To100PageModule {}
