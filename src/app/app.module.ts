import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './results/new/new.component';
import { ResultsComponent } from './results/results/results.component';
import { EditComponent } from './results/edit/edit.component';
import { FormComponent } from './results/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ResultsComponent,
    EditComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
