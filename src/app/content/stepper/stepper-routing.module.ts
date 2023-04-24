import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StepRoutes} from "../../layout/types";
import {StepperLayoutComponent} from "../../layout/stepper-layout/stepper-layout.component";
import {Step1Component} from "./step1/step1.component";
import {Step2Component} from "./step2/step2.component";
import {Step3Component} from "./step3/step3.component";

const routes: StepRoutes = [
  {
    path: '',
    component: StepperLayoutComponent,
    children: [
      {
        path: 'step-1',
        component: Step1Component,
        data: {
          title: 'Step 1'
        }
      },
      {
        path: 'step-2',
        component: Step2Component,
        data: {
          title: 'Step 2'
        }
      },
      {
        path: 'step-3',
        component: Step3Component,
        data: {
          title: 'Step 3'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule {
}
