import {ContentRoute} from "../../layout/types";
import {DefaultLayoutComponent} from "../../layout/default-layout/default-layout.component";
import {MoviesListComponent} from "../movies-list/movies-list.component";

export const MOVIES_ROUTE: ContentRoute = {
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
