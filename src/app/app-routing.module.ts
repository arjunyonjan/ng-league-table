import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './results/new/new.component';
import {ResultsComponent} from './results/results/results.component'


const routes: Routes = [
{path: '', component: ResultsComponent},
{path:'new', component:NewComponent},
{path:'results', component:ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
