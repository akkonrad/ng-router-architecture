import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import { TabsLayoutComponent } from './tabs-layout/tabs-layout.component';



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
    MatTabsModule,
    CommonModule,
    MatToolbarModule,
    RouterLink,
    MatButtonModule,
    RouterOutlet
  ]
})
export class LayoutModule { }
