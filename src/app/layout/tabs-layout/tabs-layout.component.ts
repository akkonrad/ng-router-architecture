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
  activeLink = '';

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {
  }

  ngOnInit(): void {
    if (!this.route || !this.route.snapshot.routeConfig?.children) {
      return;
    }

    this.checkIfNeedsRedirect();


    this.tabs = this.route?.snapshot.routeConfig?.children?.filter(route => route.data)
      .map((route, index: number) => {
        if (index === 0) {
          this.activeLink = route?.path + '';
        }
        return {
          label: route.data?.['title'],
          path: route.path,
        };
      });

  }

  private checkIfNeedsRedirect() {
    const paths: string[] = this.route.routeConfig!.children!.map(child => child.path || '');

    const segments = this.router.url.split('/');
    const lastSegment = segments[segments.length - 1];

    if (!paths!.includes(lastSegment)) {
      this.router.navigate([this.router.url, paths[0]]);
    }

  }
}
