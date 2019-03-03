import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDataRoutingModule } from './car-data-routing.module';
import { CarTableComponent } from './car-table/car-table.component';

@NgModule({
  declarations: [CarTableComponent],
  imports: [
    CommonModule,
    CarDataRoutingModule
  ]
})
export class CarDataModule { }
