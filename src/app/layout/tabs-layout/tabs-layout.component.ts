import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

interface Tab {
  label: string;
  path: any;
}

@Component({
  selector: 'app-tabs-layout',
  templateUrl: './tabs-layout.component.html',
  styleUrls: ['./tabs-layout.component.scss']
})
export class TabsLayoutComponent implements OnInit {
  tabs: Tab[] = [];

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {
  }

  ngOnInit(): void {

    if (!this.route || !this.route.snapshot.routeConfig?.children) {
      return;
    }

    this.tabs = this.route?.snapshot.routeConfig?.children?.filter(route => route.data)
      .map((route) => {
        return {
          label: route.data?.['title'],
          path: route.path,
        };
      });

  }

}
