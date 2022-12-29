import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Top7Component } from './components/top7/top7.component';
import { IndividualComponent } from './components/individual/individual.component';
import { PanelesComponent } from './components/paneles/paneles.component';
import { DatosComponent } from './components/datos/datos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EsperaComponent } from './espera/espera.component';
import { PiechartComponent } from './components/piechart/piechart.component';


@NgModule({
  declarations: [
    AppComponent,
    Top7Component,
    IndividualComponent,
    EsperaComponent,
    PanelesComponent,
    DatosComponent,
    PiechartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
