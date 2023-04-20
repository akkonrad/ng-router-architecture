import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import { TabsLayoutComponent } from './tabs-layout/tabs-layout.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [

    DefaultLayoutComponent,
    NavbarComponent,
    TabsLayoutComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    RouterOutlet,
  ]
})
export class LayoutModule { }
