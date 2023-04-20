import {Component} from '@angular/core';
import {Router} from "@angular/router";

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
  menuItems: MenuItem[] = [
    {
      path: ['movies'],
      title: 'Movies'
    },
    {
      path: ['machines'],
      title: 'Machines'
    },
    {
      path: ['vehicles'],
      title: 'Vehicles'
    },
  ]


  constructor(private readonly router: Router) {
    // TODO: use dynamic routing based menu

    //   this.menuItems = router.config
    //     .filter((route: AppRoute) => {
    //       return route.data?.['inNavigation'] || route.children?.find(child => child.data?.['inNavigation']);
    //     })
    //     .map(route => {
    //       const routePath = {
    //         path: [route.path!],
    //         title: route.data?.['title'] + ''
    //       };
    //
    //       const potentialRoutes = route.children?.filter(child => child.data?.['inNavigation']) || [];
    //
    //       console.log('potentialRoutes', potentialRoutes);
    //
    //       const childPaths = potentialRoutes.map(r => ({path: [route.path, r.path], title: r.data!['title']}));
    //
    //       console.log('childPaths', childPaths);
    //       // return [routePath, ...childPaths];
    //       return routePath;
    //     });
    // }

  }
}
