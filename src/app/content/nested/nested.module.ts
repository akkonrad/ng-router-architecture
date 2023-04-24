import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatTabComponent } from './flat-tab/flat-tab.component';
import { NestedTabComponent } from './nested-tab/nested-tab.component';
import { NestedStepOneComponent } from './nested-step-one/nested-step-one.component';
import { NestedStepTwoComponent } from './nested-step-two/nested-step-two.component';
import { NestedStepThreeComponent } from './nested-step-three/nested-step-three.component';
import { SubTabOneComponent } from './sub-tab-one/sub-tab-one.component';
import { SubTabTwoComponent } from './sub-tab-two/sub-tab-two.component';



@NgModule({
  declarations: [
    FlatTabComponent,
    NestedTabComponent,
    NestedStepOneComponent,
    NestedStepTwoComponent,
    NestedStepThreeComponent,
    SubTabOneComponent,
    SubTabTwoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NestedModule { }
