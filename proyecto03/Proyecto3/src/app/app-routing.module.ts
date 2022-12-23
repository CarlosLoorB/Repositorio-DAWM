import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Top7Component } from './components/top7/top7.component'

const routes: Routes = [
  {path: 'Top7', component: Top7Component}, 
  { path: '**', redirectTo: 'Top7' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
