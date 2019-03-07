import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDataRoutingModule } from './car-data-routing.module';
import { CarTableComponent } from './car-table/car-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CarFormModule } from '../car-form/car-form.module';
import { CarDialogComponent } from '../dialog/car-dialog/car-dialog.component';

@NgModule({
  declarations: [CarTableComponent, CarDialogComponent],
  imports: [
    CommonModule,
    CarDataRoutingModule,
    NgxDatatableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    CarFormModule
  ],
  entryComponents: [
    CarDialogComponent
  ]
})
export class CarDataModule { }
