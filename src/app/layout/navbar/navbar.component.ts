import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuItems: {link: string[], title: string}[] = [
    {
      link: ['star-wars', 'movies-list'],
      title: 'Movies'
    },
    {
      link: ['star-wars', 'planets-table'],
      title: 'Planets'
    }
  ]
}
