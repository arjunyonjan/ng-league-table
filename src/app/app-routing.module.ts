import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './results/new/new.component';
import {ResultsComponent} from './results/results/results.component'
import {TableComponent} from './results/table/table.component'
import {EditComponent} from './results/edit/edit.component'


const routes: Routes = [
	{ path: '', component: ResultsComponent },
	{ path: 'new', component: NewComponent },
	{ path: 'table', component: TableComponent },
	{ path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
