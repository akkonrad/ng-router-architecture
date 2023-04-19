import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetsTableComponent} from './planets-table/planets-table.component';
import {StarshipTableComponent} from './starship-table/starship-table.component';
import {LayoutModule} from "../layout/layout.module";
import { MoviesListComponent } from './movies-list/movies-list.component';
import {StarWarsRoutingModule} from "./star-wars-routing.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { VehicleComponent } from './vehicle/vehicle.component';


@NgModule({
  declarations: [
    PlanetsTableComponent,
    StarshipTableComponent,
    MoviesListComponent,
    VehicleComponent
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
