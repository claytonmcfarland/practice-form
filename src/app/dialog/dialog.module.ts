import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';
import { CarDialogComponent } from './car-dialog/car-dialog.component';
import { PersonFormModule } from '../person-form/person-form.module';
import { CarFormModule } from '../car-form/car-form.module';

@NgModule({
  declarations: [
    PersonDialogComponent, 
    CarDialogComponent],
  imports: [
    CommonModule,
    DialogRoutingModule,
    PersonFormModule,
    CarFormModule
  ]
})
export class DialogModule { }
