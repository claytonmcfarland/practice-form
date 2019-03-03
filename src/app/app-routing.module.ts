import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'person-form',
    loadChildren: './person-form/person-form.module#PersonFormModule'
  },
  {
    path: 'person-data',
    loadChildren: './person-data/person-data.module#PersonDataModule'
  },
  {
    path: 'car-data',
    loadChildren: './car-data/car-data.module#CarDataModule'
  },
  {
    path: 'car-form',
    loadChildren: './car-form/car-form.module#CarFormModule'
  },
  {
    path: 'dialog',
    loadChildren: './dialog/dialog.module#DialogModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
