import {Component} from '@angular/core';

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
      path: ['home'],
      title: 'home'
    },
    {
      path: ['stepper'],
      title: 'Stepper'
    }
  ]

}
