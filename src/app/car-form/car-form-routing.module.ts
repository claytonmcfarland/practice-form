import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarInformationComponent } from './car-information/car-information.component';

const routes: Routes = [
  {
    path:  '',
    component: CarInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarFormRoutingModule { }
