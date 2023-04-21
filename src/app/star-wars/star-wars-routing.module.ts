import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppRoute} from "../layout/types";
import {MACHINES_ROUTE} from "./routes/machines";
import {MOVIES_ROUTE} from "./routes/movies";
import {CONFIGURATOR_ROUTE} from "./routes/configurator";


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
