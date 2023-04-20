import {Route, Routes} from "@angular/router";
import {Component, Type} from "@angular/core";
import {InNavigation} from "./nav.type";

export type TabView = {
  label: string,
  component: Type<Component>
}

export type WithTabs = {
  tabs?: TabView[]
} & InNavigation;

export type TabRoute = Route & WithTabs;
export type TabRoutes = Routes & WithTabs;
