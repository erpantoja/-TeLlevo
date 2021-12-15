import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrodosPage } from './registrodos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrodosPageRoutingModule {}
