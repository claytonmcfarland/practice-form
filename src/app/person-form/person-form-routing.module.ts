import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonInformationComponent } from './person-information/person-information.component';

const routes: Routes = [
  {
    path:  '',
    component: PersonInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonFormRoutingModule { }
