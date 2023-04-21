import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetsTableComponent} from './planets-table/planets-table.component';
import {StarshipTableComponent} from './starship-table/starship-table.component';
import {LayoutModule} from "../layout/layout.module";
import { MoviesListComponent } from './movies-list/movies-list.component';
import {StarWarsRoutingModule} from "./star-wars-routing.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { VehicleComponent } from './vehicle/vehicle.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';


@NgModule({
  declarations: [
    PlanetsTableComponent,
    StarshipTableComponent,
    MoviesListComponent,
    VehicleComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    LayoutModule,
    CommonModule,
    StarWarsRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ]
})
export class StarWarsModule {
}
