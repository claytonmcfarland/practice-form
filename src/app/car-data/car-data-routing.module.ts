import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarTableComponent } from './car-table/car-table.component';

const routes: Routes = [
  {
    path:  '',
    component: CarTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarDataRoutingModule { }
