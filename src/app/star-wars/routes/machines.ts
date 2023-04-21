import {TabRoute} from "../../layout/types";
import {TabsLayoutComponent} from "../../layout/tabs-layout/tabs-layout.component";
import {StarshipTableComponent} from "../starship-table/starship-table.component";
import {VehicleComponent} from "../vehicle/vehicle.component";

export const MACHINES_ROUTE: TabRoute = {
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
};
