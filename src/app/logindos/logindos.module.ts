import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogindosPageRoutingModule } from './logindos-routing.module';

import { LogindosPage } from './logindos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LogindosPageRoutingModule
  ],
  declarations: [LogindosPage]
})
export class LogindosPageModule {}
