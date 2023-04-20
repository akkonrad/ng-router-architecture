import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {TabView, WithTabs} from "../types";

@Component({
  selector: 'app-tabs-layout',
  templateUrl: './tabs-layout.component.html',
  styleUrls: ['./tabs-layout.component.scss']
})
export class TabsLayoutComponent implements OnInit, WithTabs {
  tabs: any[] = [];
  selectedTabIndex = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tabs = this.route.snapshot.data['tabs'];
    const currentTabPath = this.route.snapshot.firstChild?.routeConfig?.path;
    if (currentTabPath) {
      const selectedTab = this.tabs.find((tab) => tab.path === currentTabPath);
      if (selectedTab) {
        this.selectedTabIndex = this.tabs.indexOf(selectedTab);
      }
    }
  }

  onTabSelected(index: number): void {
    this.selectedTabIndex = index;
  }

}
