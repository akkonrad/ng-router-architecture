import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StepRoutes} from "../../layout/types";
import {TabsLayoutComponent} from "../../layout/tabs-layout/tabs-layout.component";
import {TabOneComponent} from "./tab-one/tab-one.component";
import {TabTwoComponent} from "./tab-two/tab-two.component";

const routes: StepRoutes = [
  {
    path: '',
    component: TabsLayoutComponent,
    children: [
      {
        path: 'tab-1',
        component: TabOneComponent,
        data: {
          title: 'Tab 1'
        }
      },
      {
        path: 'tab-2',
        component: TabTwoComponent,
        data: {
          title: 'Tab 2'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {
}
