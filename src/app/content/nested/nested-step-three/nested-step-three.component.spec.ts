import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedStepThreeComponent } from './nested-step-three.component';

describe('NestedStepThreeComponent', () => {
  let component: NestedStepThreeComponent;
  let fixture: ComponentFixture<NestedStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedStepThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
