import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppRoute} from "../layout/types";


const STAR_WAR_ROUTES: AppRoute[] = [
  MOVIES_ROUTE,
  MACHINES_ROUTE,
  CONFIGURATOR_ROUTE
]

@NgModule({
  imports: [
    RouterModule.forChild(STAR_WAR_ROUTES)
  ]
})
export class StarWarsRoutingModule {
}
