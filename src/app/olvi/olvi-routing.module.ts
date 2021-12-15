import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlviPage } from './olvi.page';

const routes: Routes = [
  {
    path: '',
    component: OlviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlviPageRoutingModule {}
