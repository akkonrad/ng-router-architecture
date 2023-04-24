import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedStepOneComponent } from './nested-step-one.component';

describe('NestedStepOneComponent', () => {
  let component: NestedStepOneComponent;
  let fixture: ComponentFixture<NestedStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedStepOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
