import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarFormRoutingModule } from './car-form-routing.module';
import { CarInformationComponent } from './car-information/car-information.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarInformationComponent],
  imports: [
    CommonModule,
    CarFormRoutingModule,
    ReactiveFormsModule
  ],
  exports: [CarInformationComponent]
})
export class CarFormModule { }
