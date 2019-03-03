import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarFormRoutingModule } from './car-form-routing.module';
import { CarInformationComponent } from './car-information/car-information.component';

@NgModule({
  declarations: [CarInformationComponent],
  imports: [
    CommonModule,
    CarFormRoutingModule
  ]
})
export class CarFormModule { }
