import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonFormRoutingModule } from './person-form-routing.module';
import { PersonInformationComponent } from './person-information/person-information.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonInformationComponent],
  imports: [
    CommonModule,
    PersonFormRoutingModule,
    ReactiveFormsModule
  ],
  exports: [PersonInformationComponent]
})


export class PersonFormModule { }
