import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './results/new/new.component';
import { ResultsComponent } from './results/results/results.component';
import { EditComponent } from './results/edit/edit.component';
import { FormComponent } from './results/form/form.component';
import { TableComponent } from './results/table/table.component';
import { TeamNamePipe } from './team-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ResultsComponent,
    EditComponent,
    FormComponent,
    TableComponent,
    TeamNamePipe
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
