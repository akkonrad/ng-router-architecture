import {Component, Type} from "@angular/core";
import {Route, Routes} from "@angular/router";

export type WithContent = {
  content?: Type<Component>[];
  title?: string;
}

export type ContentRoute = Route & WithContent;
export type ContentRoutes = Routes & WithContent;
