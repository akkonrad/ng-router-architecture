import {Component, Type} from "@angular/core";
import {Route, Routes} from "@angular/router";
import {InNavigation} from "./app-nav.type";

export type WithContent = {
  content?: Type<Component>[];
  title?: string;
  navTitle?: string;
} & InNavigation;

export type ContentRoute = Route & WithContent;
export type ContentRoutes = Routes & WithContent;
