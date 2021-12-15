import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[{
        path: 'pasajero',
        loadChildren: () => import('../pasajero/pasajero.module').then( m => m.PasajeroPageModule)
      },
      {
        path: 'conductor',
        loadChildren: () => import('../conductor/conductor.module').then( m => m.ConductorPageModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then( m => m.UsersPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
