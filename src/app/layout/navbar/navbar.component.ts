import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AppRoute} from "../types";

interface MenuItem {
  path: string[],
  title: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuItems: MenuItem[];

  constructor(private readonly router: Router) {
    this.menuItems = router.config
      .filter((route: AppRoute) => {
        return route.data?.['inNavigation'] || route.children?.find(child => child.data?.['inNavigation']);
      })
      .map(route => {
        const routePath: MenuItem = {
          path: [route.path!],
          title: route.data?.['navTitle'] || '- no title -'
        };

        return routePath;
      });
  }

}
