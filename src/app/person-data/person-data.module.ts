import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonDataRoutingModule } from './person-data-routing.module';
import { PersonTableComponent } from './person-table/person-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { PersonInformationComponent } from '../person-form/person-information/person-information.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonFormModule } from '../person-form/person-form.module';
import { PersonDialogComponent } from '../dialog/person-dialog/person-dialog.component';

@NgModule({
  declarations: [PersonTableComponent, PersonDialogComponent],
  imports: [
    CommonModule,
    PersonDataRoutingModule,
    NgxDatatableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    PersonFormModule
  ],
  entryComponents:[
    PersonDialogComponent
  ]
})
export class PersonDataModule { }