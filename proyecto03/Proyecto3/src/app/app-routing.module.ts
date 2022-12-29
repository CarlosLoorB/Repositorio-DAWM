import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Top7Component } from './components/top7/top7.component'
import { EsperaComponent } from './espera/espera.component'
import { PanelesComponent } from './components/paneles/paneles.component'
import { IndividualComponent } from './components/individual/individual.component'
import { DatosComponent } from './components/datos/datos.component'


const routes: Routes = [
  {path: 'Top7', component: Top7Component},
  {path: 'Espera', component: EsperaComponent},
  {path: 'Paneles', component: PanelesComponent},
  {path: 'Individual', component: IndividualComponent},
  {path: 'Datos', component: DatosComponent},
  {path: '**', redirectTo: 'Espera' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
