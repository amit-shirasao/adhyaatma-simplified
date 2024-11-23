import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From021To030PageRoutingModule } from './from-021-to-030-routing.module';

import { From021To030Page } from './from-021-to-030.page';
import { AccordionComponent } from 'src/app/shared-components/accordion/accordion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From021To030PageRoutingModule,
  ],
  declarations: [
    From021To030Page,
    AccordionComponent
  ]
})
export class From021To030PageModule { }
