import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './results/new/new.component';
import {ResultsComponent} from './results/results/results.component'
import {TableComponent} from './results/table/table.component'


const routes: Routes = [
{path: '', component: ResultsComponent},
{path:'new', component:NewComponent},
{path:'table', component:TableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
