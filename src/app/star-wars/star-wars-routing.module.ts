import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DefaultLayoutComponent} from "../layout/default-layout/default-layout.component";
import {MoviesListComponent} from "./movies-list/movies-list.component";
import {ContentRoute, ContentRoutes, TabRoute, TabRoutes} from "../layout/types";
import {TabsLayoutComponent} from "../layout/tabs-layout/tabs-layout.component";
import {StarshipTableComponent} from "./starship-table/starship-table.component";
import {VehicleComponent} from "./vehicle/vehicle.component";

const MOVIES_ROUTE: ContentRoute = {
  path: 'movies',
  component: DefaultLayoutComponent,
  data: {
    inNavigation: true,
    navTitle: "Movies",
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
    inNavigation: false,
  },
  children: [
    {
      data: {
        inNavigation: true,
        title: 'Spaceships',
      },
      path: 'spaceships',
      component: StarshipTableComponent
    },
    {
      path: 'vehicles',
      component: VehicleComponent,
      data: {
        title: 'Vehicles'
      },
    }
  ]
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
