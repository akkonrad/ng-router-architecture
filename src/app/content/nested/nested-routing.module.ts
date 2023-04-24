import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsLayoutComponent} from "../../layout/tabs-layout/tabs-layout.component";
import {FlatTabComponent} from "./flat-tab/flat-tab.component";
import {StepperLayoutComponent} from "../../layout/stepper-layout/stepper-layout.component";
import {NestedStepOneComponent} from "./nested-step-one/nested-step-one.component";
import {NestedStepTwoComponent} from "./nested-step-two/nested-step-two.component";
import {RouterModule} from "@angular/router";
import {SubTabOneComponent} from "./sub-tab-one/sub-tab-one.component";
import {SubTabTwoComponent} from "./sub-tab-two/sub-tab-two.component";


const routes = [
  {
    path: '',
    component: TabsLayoutComponent,
    children: [
      {
        path: 'flat-tab',
        component: FlatTabComponent,
        data: {
          title: 'Flat Tab'
        }
      },
      {
        path: 'nested-tab',
        component: StepperLayoutComponent,
        data: {
          title: 'Nested Tab'
        },
        children: [
          {
            path: 'nested-step-one',
            component: NestedStepOneComponent,
          },
          {
            path: 'nested-step-two',
            component: NestedStepTwoComponent,
          },
          {
            path: 'nested-step-three',
            component: TabsLayoutComponent,
            children: [
              {
                path: 'sub-tab-one',
                component: SubTabOneComponent,
                data: {
                  title: 'one'
                }
              },
              {
                path: 'sub-tab-two',
                component: SubTabTwoComponent,
                data: {
                  title: 'two'
                }
              }
            ]
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NestedRoutingModule {
}
