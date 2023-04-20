import {NgModule} from '@angular/core';
import {RouterModule, Routes,} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DefaultLayoutComponent} from "./layout/default-layout/default-layout.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: "Welcome to Star Wars Page",
      content: [HomeComponent]
    }

  },
  {
    path: 'star-wars',
    loadChildren: () => import('./star-wars/star-wars.module').then(m => m.StarWarsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
