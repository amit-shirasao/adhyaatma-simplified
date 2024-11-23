import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From191To200PageRoutingModule } from './from-191-to-200-routing.module';

import { From191To200Page } from './from-191-to-200.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From191To200PageRoutingModule
  ],
  declarations: [From191To200Page]
})
export class From191To200PageModule {}
