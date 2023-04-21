import {StepperLayoutComponent} from "../../layout/stepper-layout/stepper-layout.component";
import {Step1Component} from "../step1/step1.component";
import {Step3Component} from "../step3/step3.component";
import {Step2Component} from "../step2/step2.component";
import {StepRoute} from "../../layout/types";

export const CONFIGURATOR_ROUTE: StepRoute = {
  path: 'config',
  component: StepperLayoutComponent,
  data: {
    inNavigation: true,
  },
  children: [
    {
      path: '1',
      component: Step1Component,
      data: {
        title: 'Step 1'
      }
    },
    {
      path: '2',
      component: Step2Component,
      data: {
        title: 'Step 2'
      }
    },
    {
      path: '3',
      component: Step3Component,
      data: {
        title: 'Step 3'
      }
    }
  ]
};
