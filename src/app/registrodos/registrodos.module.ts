import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrodosPageRoutingModule } from './registrodos-routing.module';

import { RegistrodosPage } from './registrodos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrodosPageRoutingModule
  ],
  declarations: [RegistrodosPage]
})
export class RegistrodosPageModule {}
