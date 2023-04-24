import {Route, Routes} from "@angular/router";
import {InNavigation} from "./app-nav.type";

export type TabView = {
  title: string,
}

export type WithTabs = {
  tabs?: TabView[]
} & InNavigation;

export type TabRoute = Route & WithTabs;
export type TabRoutes = Routes & WithTabs;
