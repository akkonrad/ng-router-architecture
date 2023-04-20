import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {TabsLayoutComponent} from './tabs-layout/tabs-layout.component';
import {MatIconModule} from "@angular/material/icon";
import { StepperLayoutComponent } from './stepper-layout/stepper-layout.component';
import {MatStepperModule} from "@angular/material/stepper";


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    NavbarComponent,
    TabsLayoutComponent,
    StepperLayoutComponent
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
    RouterModule,
    MatStepperModule
  ]
})
export class LayoutModule {
}
