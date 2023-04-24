import {NgModule} from '@angular/core';
import {RouterModule,} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DefaultLayoutComponent} from "./layout/default-layout/default-layout.component";
import {ContentRoutes} from "./layout/types";
import {AboutComponent} from "./about/about.component";

const routes: ContentRoutes = [
  {
    path: 'home',
    component: DefaultLayoutComponent,
    data: {
      inNavigation: true,
      navTitle: "Welcome",
      title: "Welcome",
      content: [HomeComponent, AboutComponent]
    }
  },
  {
    path: 'stepper',
    loadChildren: () => import('./content/stepper/stepper-routing.module').then(m => m.StepperRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
