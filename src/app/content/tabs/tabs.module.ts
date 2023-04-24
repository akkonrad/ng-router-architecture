import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabOneComponent} from './tab-one/tab-one.component';
import {TabTwoComponent} from './tab-two/tab-two.component';
import {TabsRoutingModule} from "./tabs-routing.module";


@NgModule({
  declarations: [
    TabOneComponent,
    TabTwoComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule
  ]
})
export class TabsModule {
}
