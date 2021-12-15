import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlviPageRoutingModule } from './olvi-routing.module';

import { OlviPage } from './olvi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlviPageRoutingModule
  ],
  declarations: [OlviPage]
})
export class OlviPageModule {}
