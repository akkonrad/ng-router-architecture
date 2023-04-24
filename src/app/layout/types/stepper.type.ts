import {Route, Routes} from "@angular/router";
import {InNavigation} from "./app-nav.type";

export type StepView = {
  title: string,
  state?: string
}

export type WithSteps = {
  steps?: StepView[]
} & InNavigation;

export type StepRoute = Route & WithSteps;
export type StepRoutes = Routes & WithSteps;
