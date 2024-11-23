import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From081To090PageRoutingModule } from './from-081-to-090-routing.module';

import { From081To090Page } from './from-081-to-090.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From081To090PageRoutingModule
  ],
  declarations: [From081To090Page]
})
export class From081To090PageModule {}
