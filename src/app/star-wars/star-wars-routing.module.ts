import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DefaultLayoutComponent} from "../layout/default-layout/default-layout.component";
import {MoviesListComponent} from "./movies-list/movies-list.component";
import {ContentRoute, ContentRoutes, TabRoute, TabRoutes} from "../layout/types";
import {TabsLayoutComponent} from "../layout/tabs-layout/tabs-layout.component";
import {HomeComponent} from "../home/home.component";
import {StarshipTableComponent} from "./starship-table/starship-table.component";
import {VehicleComponent} from "./vehicle/vehicle.component";

const MOVIES_ROUTE: ContentRoute = {
  path: 'movies',
  component: DefaultLayoutComponent,
  data: {
    title: "Star Wars All Movies",
    content: [
      MoviesListComponent
    ],
  }
};

const MACHINES_ROUTE: TabRoute = {
  path: 'machines',
  component: TabsLayoutComponent,
  data: {
    tabs: [
      {
        label: 'Spaceships',
        path: 'spaceships',
        component: StarshipTableComponent
      },
      {
        label: 'Vehicles',
        path: 'vehicles',
        component: VehicleComponent
      }
    ]
  }
}

const STAR_WAR_ROUTES: ContentRoutes | TabRoutes = [
  MOVIES_ROUTE,
  MACHINES_ROUTE,
]

@NgModule({
  imports: [
    RouterModule.forChild(STAR_WAR_ROUTES)
  ]
})
export class StarWarsRoutingModule {
}
