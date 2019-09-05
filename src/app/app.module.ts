import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewInputFieldComponent } from './view-input-field/view-input-field.component'

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ViewInputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
