import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { ViewInputFieldComponent } from './view-input-field/view-input-field.component';


const routes: Routes = [

  { path: '', component: InputFormComponent, pathMatch: 'full' },
  { path: 'viewinputfield', component: ViewInputFieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
