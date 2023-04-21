import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

interface Step {
  label: string;
  path: any;
  state: string;
}

@Component({
  selector: 'app-stepper-layout',
  templateUrl: './stepper-layout.component.html',
  styleUrls: ['./stepper-layout.component.scss']
})
export class StepperLayoutComponent implements OnInit {
  public steps!: any;
  public selectedStep: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.steps = this.route?.snapshot?.routeConfig?.children?.map(child => {
      return child.path
    });
    let step = this.steps[0];
    this.router.navigate([step], {relativeTo: this.route});
  }

  selectionChanged(event: any) {
    this.selectedStep = event.selectedIndex;
    this.router.navigate([this.steps[this.selectedStep]], {relativeTo: this.route});
  }
}
