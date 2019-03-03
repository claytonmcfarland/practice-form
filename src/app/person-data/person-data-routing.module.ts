import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonTableComponent } from './person-table/person-table.component';

const routes: Routes = [
  {
    path:  '',
    component: PersonTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonDataRoutingModule { }
