import {Route, Routes} from "@angular/router";
import {Component, Type} from "@angular/core";

export interface TabView {
  path: string,
  label: string,
  component: Type<Component>
}

export type WithTabs = {
  tabs?: TabView[]
}

export type TabRoute = Route & WithTabs;
export type TabRoutes = Routes & WithTabs;
